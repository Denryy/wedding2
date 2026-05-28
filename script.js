/* =====================================================
   СВАДЕБНОЕ ПРИГЛАШЕНИЕ — script.js
   ВСЕ данные меняются ТОЛЬКО в объекте CONFIG ниже.
   Остальной код трогать не нужно.
   ===================================================== */

const CONFIG = {

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     META — заголовок вкладки браузера
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  meta: {
    title: "Азамат & Аружан — Тойға шақыру",
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     HERO — первый экран
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  hero: {
    label:       "Тойға шақыру",          // Надпись над именами
    groomName:   "Азамат",                  // Имя жениха
    brideName:   "Аружан",               // Имя невесты
    // Разделитель между именами — можно заменить на "&", "және" и т.д.
    separator:   " & ",
    date:        "23 · VIІІ · 2026",         // Дата на обложке (оформление свободное)
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     ДАТА СОБЫТИЯ (для countdown и отображения)
     Формат: "YYYY-MM-DDTHH:MM:SS"
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  event: {
    datetime:     "2026-08-23T19:00:00",   // ← МЕНЯЙ ДАТУ ЗДЕСЬ
    dateDisplay:  "23 тамыз 2026 жыл",    // Текст даты в блоке
    timeDisplay:  "19:00",                 // Время начала
    sectionTitle: "Той күні мен уақыты",
    note: "Тойымыздың 19:00-де басталып кететінін ескере отырып, тойға кешікпей келулеріңізді өтінеміз!",
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     COUNTDOWN — подписи единиц времени
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  countdown: {
    title:   "Тойға дейін қалды",
    days:    "күн",
    hours:   "сағат",
    minutes: "минут",
    seconds: "секунд",
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     INVITATION — блок приглашения
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  invitation: {
    greeting: "Құрметті ағайын-туыс, бауырлар, құда-жекжаттар, нағашылар, жиендер, бөлелер, дос-жаран, әріптестер!",
    text:     "Сіздерді шаңырағымыздағы қуанышты күннің қадірлі қонағы болуға шақырамыз. Ақ тілектеріңіз бен жылы лебіздеріңіз біз үшін аса қымбат. Осы ерекше сәтте бізбен бірге болып, қуанышымызды бөлісулеріңізді қалаймыз.",
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     PARENTS — той иелері / родители
     Каждый объект = карточка.
     wide: true — карточка на всю ширину
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  parents: {
    sectionTitle: "Той иелері",
    list: [
      {
        // role: "Күйеу жігіт жағынан",
        name: "Асхад - Ақжарқын",
        wide: true,
      }
    ],
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     VENUE — ресторан и адрес
     mapUrl — ссылка на 2GIS или Google Maps
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  venue: {
    sectionTitle: "Той өтетін орын",
    name:         "«Golden Moon» мейрамханасы",   // ← ИМЯ РЕСТОРАНА
    address:      "Қандыағаш қ., микрорайон Самал, 49г",  // ← АДРЕС
    mapBtnText:   "2GIS арқылы ашу",
    mapUrl:       "https://2gis.kz/aktobe/geo/70000001080302944/57.396988,49.448212",          // ← ССЫЛКА НА КАРТУ
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     RSVP — форма ответа
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  rsvp: {
    sectionTitle:  "Тойға келесіз бе?",
    subtitle:      "Жауабыңыз бізге өте маңызды",
    nameLabel:     "Аты-жөніңіз",
    attendLabel:   "Қатысуыңыз",
    countLabel:    "Қанша адам келесіздер?",
    submitText:    "Жіберу",
    successText:   "Жауабыңыз қабылданды!\nРақмет, кездескенше! 🌸",
    // Варианты ответа (radio)
    options: [
      { value: "alone",   label: "Әрине, келемін" },
      { value: "couple",  label: "Жұбыммен бірге келеміз" },
      { value: "decline", label: "Өкінішке орай, келе алмаймын" },
    ],
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     OUTRO — финальный блок
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  outro: {
    text:  "Келіңіздер, қуанышымызға ортақ болыңыздар!",
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     MUSIC — ссылка на фоновую музыку
     Положи файл audio.mp3 рядом с index.html
     Или вставь URL внешнего файла
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  music: {
    src: "./assets/1687438130.mp3",   // ← МЕНЯЙ ПУТЬ К МУЗЫКЕ ЗДЕСЬ
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     API — адрес серверной функции
     На Vercel: "/api/rsvp"
     Локально (vercel dev): тоже "/api/rsvp"
     НЕ вставляй BOT_TOKEN сюда — он хранится в .env
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  api: {
    backendUrl: "/api/rsvp",   // ← путь к serverless function
  },

  /* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
     THEME — цвета (переопределяют CSS-переменные)
     Можно закомментировать весь блок, если хочешь
     управлять цветами только через style.css :root
  ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
  theme: {
    "--color-primary":    "#b08d57",
    "--color-bg":         "#fdf8f3",
    "--color-bg-alt":     "#f7efe4",
    "--color-text":       "#3a2e25",
    "--color-text-muted": "#7a6a58",
    "--color-accent":     "#c9a96e",
    "--color-btn":        "#b08d57",
    "--color-btn-text":   "#fff",
    "--color-border":     "#dfc99a",
  },

};
/* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
   КОНЕЦ КОНФИГА. Код ниже менять не нужно.
── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */


/* =====================================================
   1. ПРИМЕНИТЬ ТЕМУ
   ===================================================== */
function applyTheme() {
  const root = document.documentElement;
  Object.entries(CONFIG.theme).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
}

/* =====================================================
   2. ЗАПОЛНИТЬ HTML ИЗ CONFIG
   ===================================================== */
function renderContent() {
  // Заголовок вкладки
  document.title = CONFIG.meta.title;

  // Музыка
  const audio = document.getElementById("bg-music");
  if (audio) audio.src = CONFIG.music.src;

  // Hero
  setText("heroLabel",  CONFIG.hero.label);
  setText("heroNames",  CONFIG.hero.groomName + CONFIG.hero.separator + CONFIG.hero.brideName);
  setText("heroDate",   CONFIG.hero.date);

  // Invitation
  setText("inviteGreeting", CONFIG.invitation.greeting);
  setText("inviteText",     CONFIG.invitation.text);

  // Parents
  setText("parentsTitle", CONFIG.parents.sectionTitle);
  renderParents();

  // DateTime
  setText("datetimeTitle", CONFIG.event.sectionTitle);
  setText("eventDate",     CONFIG.event.dateDisplay);
  setText("eventTime",     CONFIG.event.timeDisplay);
  setText("datetimeNote",  CONFIG.event.note);

  // Countdown
  setText("countdownTitle",  CONFIG.countdown.title);
  setText("cdDaysLabel",     CONFIG.countdown.days);
  setText("cdHoursLabel",    CONFIG.countdown.hours);
  setText("cdMinutesLabel",  CONFIG.countdown.minutes);
  setText("cdSecondsLabel",  CONFIG.countdown.seconds);

  // Venue
  setText("venueTitle",   CONFIG.venue.sectionTitle);
  setText("venueName",    CONFIG.venue.name);
  setText("venueAddress", CONFIG.venue.address);
  const mapBtn = document.getElementById("mapBtn");
  if (mapBtn) {
    mapBtn.textContent = CONFIG.venue.mapBtnText;
    mapBtn.href        = CONFIG.venue.mapUrl;
  }

  // RSVP
  setText("rsvpTitle",    CONFIG.rsvp.sectionTitle);
  setText("rsvpSubtitle", CONFIG.rsvp.subtitle);
  setText("nameLabel",    CONFIG.rsvp.nameLabel);
  setText("attendLabel",  CONFIG.rsvp.attendLabel);
  setText("countLabel",   CONFIG.rsvp.countLabel);
  setText("submitBtn",    CONFIG.rsvp.submitText);
  setText("successText",  CONFIG.rsvp.successText);
  renderRadios();

  // Outro
  setText("outroText",  CONFIG.outro.text);
  setText("outroNames",
    CONFIG.hero.groomName + CONFIG.hero.separator + CONFIG.hero.brideName
  );
}

/* Вспомогательная: установить текст по id */
function setText(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}

/* Карточки родителей */
function renderParents() {
  const grid = document.getElementById("parentsGrid");
  if (!grid) return;

  grid.innerHTML = "";

  CONFIG.parents.list.forEach(p => {
    const card = document.createElement("div");
    card.className = "parent__card reveal";

    card.innerHTML = `
      <svg class="parent__frame" viewBox="0 0 360 120" preserveAspectRatio="none">
        <path
          d="
            M 28 1
            H 332
            C 332 18, 342 28, 359 28
            V 92
            C 342 92, 332 102, 332 119
            H 28
            C 28 102, 18 92, 1 92
            V 28
            C 18 28, 28 18, 28 1
            Z
          "
          fill="rgba(255,255,255,0.78)"
          stroke="rgba(201,169,110,0.55)"
          stroke-width="1"
        />
      </svg>
    `;

    const topDecor = document.createElement("div");
    topDecor.className = "parent__decor parent__decor--top";

    const name = document.createElement("p");
    name.className = "parent__name";
    name.innerHTML = p.name.replace(/\n/g, "<br>");

    const bottomDecor = document.createElement("div");
    bottomDecor.className = "parent__decor parent__decor--bottom";

    card.appendChild(topDecor);
    card.appendChild(name);
    card.appendChild(bottomDecor);

    grid.appendChild(card);
  });
}

/* Radio-кнопки из CONFIG.rsvp.options */
function renderRadios() {
  const container = document.getElementById("rsvpRadios");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.rsvp.options.forEach(opt => {
    const label = document.createElement("label");
    label.className = "form__radio";

    const input = document.createElement("input");
    input.type  = "radio";
    input.name  = "attend";
    input.value = opt.value;

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt.label));
    container.appendChild(label);
  });
}


/* =====================================================
   3. COUNTDOWN
   ===================================================== */
function startCountdown() {
  const target = new Date(CONFIG.event.datetime).getTime();

  function tick() {
    const now  = Date.now();
    const diff = target - now;

    if (diff <= 0) {
      // Если дата прошла — показываем нули
      ["cdDays","cdHours","cdMinutes","cdSeconds"].forEach(id => setText(id, "0"));
      return;
    }

    const days    = Math.floor(diff / 86400000);
    const hours   = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000)  / 60000);
    const seconds = Math.floor((diff % 60000)    / 1000);

    setText("cdDays",    pad(days));
    setText("cdHours",   pad(hours));
    setText("cdMinutes", pad(minutes));
    setText("cdSeconds", pad(seconds));
  }

  tick();
  setInterval(tick, 1000);
}

function pad(n) { return String(n).padStart(2, "0"); }


/* =====================================================
   4. SCROLL REVEAL
   ===================================================== */
function initReveal() {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    }),
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}


/* =====================================================
   5. МУЗЫКА
   ===================================================== */
function initMusic() {
  const btn   = document.getElementById("musicBtn");
  const audio = document.getElementById("bg-music");
  let   playing = false;

  btn.addEventListener("click", () => {
    if (playing) {
      audio.pause();
      btn.classList.remove("playing");
      btn.setAttribute("aria-label", "Музыканы қосу");
    } else {
      audio.play().catch(() => {
        // Браузер может заблокировать автовоспроизведение — это нормально
        console.info("Автовоспроизведение заблокировано браузером. Нажмите ещё раз.");
      });
      btn.classList.add("playing");
      btn.setAttribute("aria-label", "Музыканы өшіру");
    }
    playing = !playing;
  });
}


/* =====================================================
   6. RSVP ФОРМА
   ===================================================== */
function initRSVP() {
  const form      = document.getElementById("rsvpForm");
  const submitBtn = document.getElementById("submitBtn");
  const success   = document.getElementById("rsvpSuccess");
  const successEl = document.getElementById("successText");

  if (!submitBtn) return;

  // Делаем кнопку async-совместимой
  submitBtn.addEventListener("click", async () => {
    const name  = document.getElementById("inputName").value.trim();
    const radio = document.querySelector('input[name="attend"]:checked');
    const count = document.getElementById("inputCount").value;

    // Валидация
    if (!name) {
      alert("Аты-жөніңізді енгізіңіз.");
      return;
    }
    if (!radio) {
      alert("Қатысуыңызды белгілеңіз.");
      return;
    }

    const response = {
      name:   name,
      attend: radio.value,
      count:  Number(count) || 1,
      time:   new Date().toISOString(),
    };

    console.log("📩 RSVP жауабы:", response);

    // Всегда сохраняем локально — как резервная копия
    saveToLocalStorage(response);

    // Блокируем кнопку на время запроса
    submitBtn.disabled    = true;
    submitBtn.textContent = "Жіберілуде…";

    // Отправляем на бекенд (Vercel /api/rsvp)
    const sent = await sendToBackend(response);

    submitBtn.disabled    = false;
    submitBtn.textContent = CONFIG.rsvp.submitText;

    // Показываем нужное сообщение и прячем форму
    if (successEl) {
      successEl.textContent = sent
        ? CONFIG.rsvp.successText
        : "Жауабыңыз құрылғыңызда сақталды, бірақ Telegram-ға жіберілмеді. Кейінірек қайталап көріңіз.";
    }

    form.classList.add("hidden");
    success.classList.remove("hidden");
  });
}

/* ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ──
   Отправка на Vercel Serverless Function /api/rsvp
   BOT_TOKEN в frontend не нужен — он на сервере.
   Возвращает true при успехе, false при ошибке.
── ── ── ── ── ── ── ── ── ── ── ── ── ── ── ── */
async function sendToBackend(response) {
  try {
    const res = await fetch(CONFIG.api.backendUrl, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(response),
    });

    const data = await res.json();

    if (data.success) {
      console.log("✅ Telegram-ға жіберілді:", data.message);
      return true;
    } else {
      console.error("❌ Backend қатесі:", data.message);
      return false;
    }
  } catch (err) {
    console.error("❌ Backend қолжетімсіз:", err);
    return false;
  }
}

/* Сохранить ответ в localStorage */
function saveToLocalStorage(response) {
  try {
    const key  = "rsvp_responses";
    const prev = JSON.parse(localStorage.getItem(key) || "[]");
    prev.push(response);
    localStorage.setItem(key, JSON.stringify(prev));
    console.log("💾 Все ответы в localStorage:", prev);
  } catch (e) {
    console.warn("localStorage недоступен:", e);
  }
}


/* =====================================================
   ИНИЦИАЛИЗАЦИЯ — запускается при загрузке страницы
   ===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  applyTheme();
  renderContent();
  startCountdown();
  initReveal();
  initMusic();
  initRSVP();
  
  setTimeout(startAutoScroll, 1000);
});

function startAutoScroll() {
  const speed = 0.45; // скорость: 0.3 медленно, 0.7 быстрее
  let paused = false;

  function step() {
    if (!paused) {
      window.scrollBy(0, speed);
    }

    const bottomReached =
      window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

    if (!bottomReached) {
      requestAnimationFrame(step);
    }
  }

  ["wheel", "touchstart", "mousedown"].forEach(eventName => {
    window.addEventListener(eventName, () => {
      paused = true;

      setTimeout(() => {
        paused = false;
      }, 2500);
    });
  });

  requestAnimationFrame(step);
}

window.addEventListener("load", () => {
  setTimeout(startAutoScroll, 2000);
});