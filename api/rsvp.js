// =====================================================
// api/rsvp.js — Vercel Serverless Function
// POST /api/rsvp
//
// Принимает RSVP-ответ с frontend, отправляет
// сообщение в Telegram через Bot API.
// BOT_TOKEN и CHAT_ID хранятся в .env — не в frontend!
// =====================================================

// Перевод значений attend → казахский текст
const ATTEND_LABELS = {
  alone:   "Әрине, келемін",
  couple:  "Жұбыммен бірге келеміз",
  decline: "Өкінішке орай, келе алмаймын",
};

function formatDate(isoString) {
  try {
    return new Date(isoString).toLocaleString("kk-KZ", {
      timeZone: "Asia/Almaty",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
  } catch {
    return isoString;
  }
}

// Заголовки CORS — разрешаем запросы с любого origin
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin":  "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

// ── Основной обработчик ──────────────────────────────
export default async function handler(req, res) {

  // 1. Preflight OPTIONS — браузер проверяет CORS перед POST
  if (req.method === "OPTIONS") {
    res.writeHead(200, corsHeaders());
    res.end();
    return;
  }

  // 2. Разрешаем только POST
  if (req.method !== "POST") {
    res.writeHead(405, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Method not allowed" }));
    return;
  }

  // 3. Читаем тело запроса
  let body;
  try {
    // req.body уже распарсен Vercel, если Content-Type: application/json
    body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
  } catch {
    res.writeHead(400, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Invalid JSON" }));
    return;
  }

  const { name, attend, count, time } = body || {};

  // 4. Валидация обязательных полей
  if (!name || typeof name !== "string" || !name.trim()) {
    res.writeHead(400, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "name is required" }));
    return;
  }

  if (!attend || !ATTEND_LABELS[attend]) {
    res.writeHead(400, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "attend is required and must be: alone | couple | decline" }));
    return;
  }

  // 5. Приводим count к числу (минимум 1)
  const guestCount = Math.max(1, parseInt(count, 10) || 1);

  // 6. Читаем секреты из переменных окружения
  //    Они задаются в Vercel Dashboard → Settings → Environment Variables
  //    Локально — в файле .env (не пушить в git!)
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID   = process.env.CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    console.error("❌ BOT_TOKEN или CHAT_ID не заданы в переменных окружения");
    res.writeHead(500, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: false, message: "Server misconfiguration: env vars missing" }));
    return;
  }

  // 7. Формируем красивое сообщение для Telegram
  const attendLabel = ATTEND_LABELS[attend];
  const dateStr     = time ? formatDate(time) : "—";

  const text = [
    "📩 *Жаңа қонақтан жауап келді!*",
    "",
    `👤 *Аты-жөні:* ${name.trim()}`,
    `✅ *Жауабы:* ${attendLabel}`,
    `👥 *Адам саны:* ${guestCount}`,
    `🕒 *Уақыты:* ${formatDate(time)}`,
  ].join("\n");

  // 8. Отправляем в Telegram Bot API
  //    Используем встроенный fetch (Node.js 18+, Vercel поддерживает)
  const telegramUrl = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

  try {
    const tgResponse = await fetch(telegramUrl, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({
        chat_id:    CHAT_ID,
        text:       text,
        parse_mode: "Markdown", // для жирного текста (*..*)
      }),
    });

    const tgData = await tgResponse.json();

    // Telegram вернул ошибку (неверный токен, chat не найден и т.д.)
    if (!tgData.ok) {
      console.error("❌ Telegram API error:", tgData);
      res.writeHead(502, { ...corsHeaders(), "Content-Type": "application/json" });
      res.end(JSON.stringify({
        success: false,
        message: `Telegram error: ${tgData.description || "unknown"}`,
      }));
      return;
    }

    // 9. Успех!
    console.log("✅ RSVP отправлен в Telegram:", { name: name.trim(), attend, guestCount });
    res.writeHead(200, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({ success: true, message: "RSVP sent to Telegram" }));

  } catch (err) {
    // Сетевая ошибка при обращении к Telegram
    console.error("❌ Fetch to Telegram failed:", err);
    res.writeHead(502, { ...corsHeaders(), "Content-Type": "application/json" });
    res.end(JSON.stringify({
      success: false,
      message: "Failed to reach Telegram API",
    }));
  }
}
