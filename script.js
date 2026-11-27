const I = n => `<span class="msym" aria-hidden="true">${n}</span>`;

const PROJECTS = [
  { name: 'Meoify', icon: 'music_note', logo: 'meoify-icon.png', tag: 'Purr-fectly tuned: Spotify’s flow, YouTube’s catalog, and Material 3 design.', chips: ['Kotlin', 'Android 8.0+'], gh: 'https://github.com/popeye0013/Meoify', site: 'https://meoify.pages.dev' },
  { name: 'Stickly', icon: 'sticky_note_2', logo: 'stickly-icon.png', tag: 'Import Telegram sticker packs and export them to WhatsApp with Material 3 Expressive.', chips: ['Kotlin', 'Android 8.0+'], gh: 'https://github.com/popeye0013/Stickly' }
];

const SERVICES = [
  { i: 'phone_android', t: 'Android app development', d: 'Native apps in Kotlin and Jetpack Compose, from first prototype to Play Store release.' },
  { i: 'palette', t: 'Material 3 Expressive UI', d: 'Personal interfaces with dynamic color, expressive shapes and motion that feels good to use.' },
  { i: 'cloud', t: 'Firebase and backends', d: 'Auth, real-time data and storage with Firebase, MongoDB or serverless functions.' },
  { i: 'language', t: 'Web and portfolios', d: 'Fast HTML, CSS and JavaScript sites deployed on Netlify, Cloudflare or Vercel.' },
  { i: 'brush', t: 'Logos and app icons', d: 'Minimal monograms and adaptive icons that stand out on any home screen.' }
];

const card = (icon, t, d, cls = '') => `<div class="card ${cls}"><div class="ico">${I(icon)}</div><h3>${t}</h3><p>${d}</p></div>`;

const backButton = () => `<a class="btn ghost back-btn" href="#home" aria-label="Back home" title="Back home">${I('arrow_back')}</a>`;

const pcard = p => `<article class="card ter">
  <div class="card-head">
    ${p.logo ? `<img class="ico logo" src="${p.logo}" alt="${p.name} app icon" width="64" height="64">` : `<div class="ico">${I(p.icon)}</div>`}
    <h3>${p.name}</h3>
  </div>
  <p>${p.tag}</p>
  <div class="chips">${p.chips.map(c => `<span class="chip">${c}</span>`).join('')}</div>
  <div class="btns compact"><a class="btn" href="${p.gh}" target="_blank" rel="noopener">${I('code')} GitHub</a>${p.site ? `<a class="btn alt" href="${p.site}" target="_blank" rel="noopener">${I('language')} Website</a>` : ''}</div>
</article>`;

const projectGrid = () => `<div class="grid projects-grid">${PROJECTS.map(pcard).join('')}
  <article class="card coming-soon">
    <div class="soon-orbit" aria-hidden="true">${I('auto_awesome')}</div>
    <h3>More coming soon</h3>
    <p>New ideas are always in the works. The next one is on its way.</p>
    <a class="btn ghost" href="https://github.com/popeye0013" target="_blank" rel="noopener">${I('code')} See my GitHub</a>
  </article>
</div>`;

const V = {
  home: () => `<div class="view">
    <header class="profile">
      <img class="avatar" src="avatar.jpg" alt="Akash" width="136" height="136">
      <h1>Akash :)</h1>
      <p class="role">Android Developer</p>
      <p class="bio">A Self-Proclaimed Android Developer with a Strong Background in Technology &amp; AOSP</p>
      <div class="btns profile-actions"><a class="btn" href="#about">${I('arrow_forward')} About me</a><a class="btn alt" href="#contact">${I('mail')} Say hello</a></div>
    </header>
    <section>
      <span class="eyebrow">Projects</span>
      <h1>Things I’ve <em>built.</em></h1>
      <p class="lead">A few apps and sites I am proud of. More are on my GitHub.</p>
      ${projectGrid()}
    </section>
  </div>`,

  about: () => `<div class="view">
    ${backButton()}
    <span class="eyebrow">About me</span>
    <h1>I’m <span class="hl-primary">Akash</span> ;)</h1>
    <div class="split with-gap">
      <div>
        <p class="lead">An Android developer with a <span class="hl-secondary">playful</span> streak who loves turning ideas into apps people enjoy opening every day. I work mostly in Kotlin and Jetpack Compose, and I’m obsessed with Material 3 Expressive.</p>
        <p class="lead copy-more">I’ve been creating bugs since 2019, and I’ve gotten quite good at fixing them. In my free time I solve problems on GeeksforGeeks and read tech articles.</p>
      </div>
      <div class="panel sec interests-panel">
        <span class="eyebrow interests-eyebrow">${I('favorite')} Off the clock</span>
        <h3>Things I’m into</h3>
        <p class="copy-note">Tech, memes and anime. Ask me about any of them.</p>
        <ul class="interest-list">
          <li><span class="interest-icon">${I('code')}</span><span><strong>Tech</strong><span class="desc">Apps, tools and everything Android</span></span></li>
          <li><span class="interest-icon memes">${I('sentiment_satisfied')}</span><span><strong>Memes</strong><span class="desc">The internet’s real love language</span></span></li>
          <li><span class="interest-icon anime">${I('theater_comedy')}</span><span><strong>Anime</strong><span class="desc">Long watchlists, strong opinions</span></span></li>
        </ul>
      </div>
    </div>
    <section><h2>Skills</h2>
      <div class="chips">${['Kotlin','Java','Python','JavaScript','HTML','CSS','Jetpack Compose','Material 3','Firebase','MongoDB','Netlify','Cloudflare','Vercel','GitHub','Android Studio','VSCodium','Ubuntu','Windows'].map(s => `<span class="chip">${s}</span>`).join('')}</div>
    </section>
  </div>`,

  services: () => `<div class="view">
    ${backButton()}
    <span class="eyebrow">Services</span>
    <h1>How I can <em>help.</em></h1>
    <p class="lead">From a first Android prototype to a polished release, here is what I offer.</p>
    <section><div class="grid">${SERVICES.map((s, i) => card(s.i, s.t, s.d, ['', 'sec', 'ter'][i % 3])).join('')}</div></section>
    <section><div class="panel ter"><h2>Have a project in mind?</h2><p class="lead inherit">Tell me what you are building and we will figure out the best way to bring it to life.</p><div class="btns"><a class="btn" href="#contact">${I('mail')} Start a conversation</a></div></div></section>
  </div>`,

  contact: () => `<div class="view">
    ${backButton()}
    <span class="eyebrow">Contact</span>
    <h1>Let’s <em>talk.</em></h1>
    <div class="split with-gap">
      <form class="panel contact-form">
        <div class="contact-grid">
          <div class="field contact-field">
            <span class="msym field-icon" aria-hidden="true">person</span>
            <input id="c-name" placeholder=" " required autocomplete="name">
            <label for="c-name">Your name</label>
          </div>
          <div class="field contact-field">
            <span class="msym field-icon" aria-hidden="true">mail</span>
            <input id="c-email" type="email" placeholder=" " required autocomplete="email">
            <label for="c-email">Email address</label>
          </div>
          <div class="field contact-field subject-field">
            <span class="msym field-icon" aria-hidden="true">subject</span>
            <input id="c-subject" placeholder=" " required>
            <label for="c-subject">Subject</label>
          </div>
        </div>
        <div class="field contact-field message-field">
          <span class="msym field-icon" aria-hidden="true">chat</span>
          <textarea id="c-msg" placeholder=" " rows="5" required></textarea>
          <label for="c-msg">Your message</label>
        </div>
        <button class="btn" type="submit">${I('send')} Send message</button>
      </form>
      <div class="panel sec direct-panel">
        <h3>Reach me directly</h3>
        <p class="copy-between">Fastest reply on Telegram — no forms, no waiting.</p>
        <a class="direct-card" href="https://t.me/popeye0013" target="_blank" rel="noopener">
          <span class="direct-avatar">${I('send')}</span>
          <span class="direct-info"><strong>Telegram</strong><span class="desc">t.me/popeye0013</span></span>
          <span class="direct-arrow">${I('open_in_new')}</span>
        </a>
        <p class="direct-note">Tap to open the chat and say hi.</p>
      </div>
    </div>
  </div>`,

  chai: () => `<div class="view chai-page">
    ${backButton()}
    <span class="eyebrow chai-eyebrow">${I('local_cafe')} Buy me a chai</span>
    <h1>Keep the <em>chai</em> coming.</h1>
    <p class="lead">I make things I wish already existed. If one of them helped you, a cup of chai keeps the next one coming.</p>
    <section class="chai" aria-labelledby="chai-h">
      <div class="chai-card">
        <div class="chai-copy">
          <h2 id="chai-h">Choose your chai</h2>
          <p>Every cup fuels the next idea. No sign-up, no middlemen — the money goes straight to my UPI account. (Any amount is appreciated.)</p>
          <div class="chai-presets" role="group" aria-label="Choose an amount">
            <button class="chai-opt" type="button" data-amount="30" aria-pressed="false"><strong>₹30</strong><span>Cutting chai</span></button>
            <button class="chai-opt" type="button" data-amount="60" aria-pressed="false"><strong>₹60</strong><span>Chai &amp; samosa</span></button>
            <button class="chai-opt" type="button" data-amount="180" aria-pressed="false"><strong>₹180</strong><span>Biriyani</span></button>
          </div>
          <div class="chai-fields">
            <div class="chai-field">
              <input id="chai-amount" type="number" min="10" max="100000" step="1" inputmode="numeric" placeholder=" " required>
              <label for="chai-amount">Amount (₹)</label>
            </div>
            <div class="chai-field">
              <input id="chai-donor" maxlength="40" placeholder=" " autocomplete="name">
              <label for="chai-donor">Your name (optional)</label>
            </div>
            <div class="chai-field">
              <textarea id="chai-note" rows="2" maxlength="80" placeholder=" "></textarea>
              <label for="chai-note">Note (optional)</label>
            </div>
          </div>
          <p class="chai-warn" id="chai-warn" hidden>Enter at least ₹10 to continue.</p>
          <div class="btns chai-actions">
            <a class="btn chai-pay" id="chai-pay" href="#" aria-disabled="true">${I('payments')} Pay with UPI</a>
            <button class="btn alt chai-copy" id="chai-copy" type="button">${I('content_copy')} Copy UPI ID</button>
          </div>
          <p class="chai-hint">UPI ID: <span id="chai-upi">slalakash123@oksbi</span></p>
        </div>
        <div class="chai-side">
          <div class="qr-wrap"><div class="qr" id="chai-qr">Enter an amount</div></div>
          <p class="chai-hint">Scan with any UPI app, or tap Pay on your phone.</p>
          <div class="chai-art" aria-hidden="true">
            <div class="chai-orbit"></div>
            <div class="chai-cup">${I('local_cafe')}</div>
            <span class="chai-spark chai-spark-a">✦</span>
            <span class="chai-spark chai-spark-b">₹</span>
          </div>
        </div>
      </div>
    </section>
    <section class="chai-how" aria-labelledby="how-h">
      <h2 id="how-h">How it works</h2>
      <ol class="steps">
        <li><span class="step-dot">1</span><div><strong>Choose an amount</strong><span class="desc">Any amount from ₹10 works. The presets are just a starting point.</span></div></li>
        <li><span class="step-dot">2</span><div><strong>Pay with UPI</strong><span class="desc">Tap the button on your phone, or scan the code from another device.</span></div></li>
        <li><span class="step-dot">3</span><div><strong>All done</strong><span class="desc">The money lands in my UPI account directly. No platform sits in between.</span></div></li>
      </ol>
    </section>
  </div>`
};

const THEME_KEY = 'akash-portfolio-theme';
const themeButton = document.querySelector('.theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function storedTheme() {
  try {
    const value = localStorage.getItem(THEME_KEY);
    return value === 'dark' || value === 'light' ? value : null;
  } catch (_) {
    return null;
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
  themeButton?.setAttribute('aria-label', label);
  themeButton?.setAttribute('title', label);
  themeMeta?.setAttribute('content', theme === 'dark' ? '#14121B' : '#FBF8FF');
}

applyTheme(storedTheme() || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

themeButton?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch (_) {
    /* Storage may be unavailable. */
  }
});

const menuWrap = document.getElementById('menu-wrap');
const menuButton = document.querySelector('.menu-toggle');

function closeMenu() {
  menuWrap?.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}

menuButton?.addEventListener('click', () => {
  const open = menuWrap?.classList.toggle('open') ?? false;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('#nav a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeMenu();
});
document.addEventListener('click', e => {
  if (menuWrap?.classList.contains('open') && !menuWrap.contains(e.target)) closeMenu();
});

document.querySelector('.footer-top')?.addEventListener('click', () => {
  const behavior = matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
  window.scrollTo({ top: 0, behavior });
});

function sendMail(e) {
  e.preventDefault();
  const subject = document.getElementById('c-subject').value;
  const message = document.getElementById('c-msg').value;
  location.href = 'mailto:slalakash123@gmail.com?subject=' + encodeURIComponent(subject) +
    '&body=' + encodeURIComponent(message);
}

document.addEventListener('submit', e => {
  if (e.target.classList.contains('contact-form')) sendMail(e);
});

const CHAI = { name: 'Akash :)', upiId: 'slalakash123@oksbi' };

function initChai() {
  const amount = document.getElementById('chai-amount');
  if (!amount) return;

  const donor = document.getElementById('chai-donor');
  const note = document.getElementById('chai-note');
  const pay = document.getElementById('chai-pay');
  const warn = document.getElementById('chai-warn');
  const copy = document.getElementById('chai-copy');
  const qrEl = document.getElementById('chai-qr');
  const options = [...document.querySelectorAll('.chai-opt')];
  const copyLabel = copy.innerHTML;
  const enc = encodeURIComponent;

  document.getElementById('chai-upi').textContent = CHAI.upiId;

  function drawQR(link) {
    if (!qrEl) return;
    if (typeof qrcode !== 'function') {
      qrEl.textContent = 'Code unavailable. Use the Pay button.';
      return;
    }
    const qr = qrcode(0, 'M');
    qr.addData(link);
    qr.make();
    qrEl.innerHTML = qr.createSvgTag(4, 0);
  }

  function render() {
    const value = Math.floor(Number(amount.value));
    const valid = Number.isFinite(value) && value >= 10 && value <= 100000;

    options.forEach(option => {
      const selected = Number(option.dataset.amount) === value && amount.value !== '';
      option.setAttribute('aria-pressed', String(selected));
    });

    if (!valid) {
      pay.removeAttribute('href');
      pay.setAttribute('aria-disabled', 'true');
      pay.innerHTML = `${I('payments')} Pay with UPI`;
      warn.textContent = value > 100000 ? 'Enter an amount up to ₹1,00,000.' : 'Enter at least ₹10 to continue.';
      warn.hidden = false;
      if (qrEl) qrEl.textContent = 'Enter an amount';
      return;
    }

    const who = donor.value.trim();
    const message = note.value.trim();
    const tn = ['Tip', who && `from ${who}`, message && `- ${message}`]
      .filter(Boolean)
      .join(' ')
      .slice(0, 80);
    const link = `upi://pay?pa=${enc(CHAI.upiId)}&pn=${enc(CHAI.name)}` +
      `&am=${value}&cu=INR&tn=${enc(tn)}`;

    pay.href = link;
    pay.removeAttribute('aria-disabled');
    pay.innerHTML = `${I('payments')} Pay ₹${value} with UPI`;
    warn.hidden = true;
    drawQR(link);
  }

  options.forEach(option => option.addEventListener('click', () => {
    amount.value = option.dataset.amount;
    render();
  }));
  [amount, donor, note].forEach(field => field.addEventListener('input', render));

  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(CHAI.upiId);
      copy.textContent = 'Copied';
    } catch (_) {
      copy.textContent = 'Copy failed — select the ID above';
    }
    setTimeout(() => { copy.innerHTML = copyLabel; }, 2000);
  });

  amount.value = '60';
  render();
}

const PAGE_TITLES = {
  home: 'Akash · Android Developer',
  about: 'About · Akash · Android Developer',
  services: 'Services · Akash · Android Developer',
  contact: 'Contact · Akash · Android Developer',
  chai: 'Buy me a chai · Akash'
};

function go() {
  const requested = location.hash.slice(1) || 'home';
  const id = Object.prototype.hasOwnProperty.call(V, requested) ? requested : 'home';
  closeMenu();
  document.getElementById('app').innerHTML = V[id]();
  initChai();

  const navId = id;
  document.querySelectorAll('#nav a').forEach(a => {
    const active = a.getAttribute('href') === '#' + navId;
    a.classList.toggle('on', active);
    if (active) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });

  window.scrollTo({ top: 0 });
  document.title = PAGE_TITLES[id] || PAGE_TITLES.home;
}

window.addEventListener('hashchange', go);
go();
