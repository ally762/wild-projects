// Static site generator for Wild Projects.
// Source:  /src/assets       -> CSS + JS (edit these)
// Output 1: /docs            -> complete standalone website, relative links (GitHub Pages: main branch, /docs folder)
// Output 2: /squarespace     -> paste-ready Code Injection + per-page Code Block snippets (root links)
// Run: node build/build.js
const fs = require('fs');
const path = require('path');
const { SITE, SERVICES, LOCATIONS, PAGES } = require('./content');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'src');
const OUT = path.join(ROOT, 'docs');
const SQ = path.join(ROOT, 'squarespace');

const esc = (s = '') => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// Link mode: 'pages' = relative links (GitHub Pages / any sub-folder), 'sq' = root links (Squarespace)
const ctx = { mode: 'pages', depth: 0 };
const href = (slug = '') => {
  slug = String(slug).replace(/^\//, '');
  if (ctx.mode === 'sq') return slug ? `/${slug}` : '/';
  const up = ctx.depth ? '../' : './';
  return slug ? `${up}${slug}/` : up;
};
const asset = (p) => (ctx.depth ? '../' : './') + p;
const pad = (n) => String(n).padStart(2, '0');

// ---------------------------------------------------------------- icons
const I = {
  chev: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>',
  arrow: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  check: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>',
  phone: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2"/></svg>',
  mail: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>',
  clock: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
  pin: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-12a7 7 0 0114 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  ig: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>',
  frame: '<svg class="wp-ico" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-7 9 7M5 10v10h14V10M9 20v-6h6v6M12 4v16"/></svg>',
};

// Split "Label – description" / "Label: description" / "Short sentence. More text" into parts.
function parseItem(s) {
  let m = s.match(/^(.{2,48}?)( – |: )(.+)$/);
  if (m) return { t: m[1], sep: m[2], d: m[3] };
  m = s.match(/^([^.]{2,45}\.)\s(.+)$/);
  if (m) return { t: m[1], sep: ' ', d: m[2] };
  return { t: '', d: s };
}

const imgTag = (im, { sizes = '(max-width: 900px) 100vw, 50vw', eager = false, cls = '' } = {}) =>
  `<img${cls ? ` class="${cls}"` : ''} src="${im.src}?format=1500w" srcset="${im.src}?format=750w 750w, ${im.src}?format=1500w 1500w, ${im.src}?format=2500w 2500w" sizes="${sizes}" alt="${esc(im.alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">`;

const btn = (label, url, variant = 'timber', extra = '') =>
  `<a class="wp-btn wp-btn--${variant}" href="${url}"${extra}><span>${esc(label)}</span>${I.arrow}</a>`;

// ---------------------------------------------------------------- chrome
function header(page) {
  const cur = (slug) => (page.slug === slug ? ' aria-current="page"' : '');
  const inGroup = (list) => list.some((x) => x.slug === page.slug);
  const drop = (label, list, id) => `
        <li class="wp-nav__item wp-nav__item--drop${inGroup(list) ? ' is-active' : ''}">
          <button class="wp-nav__link" type="button" aria-expanded="false" aria-controls="${id}">${label}${I.chev}</button>
          <div class="wp-drop" id="${id}">
            ${list.map((x) => `<a class="wp-drop__link" href="${href(x.slug)}"${cur(x.slug)}>${esc(x.label)}</a>`).join('\n            ')}
          </div>
        </li>`;
  return `
  <header class="wp-header" data-wp-header>
    <div class="wp-container wp-header__inner">
      <a class="wp-logo" href="${href()}" aria-label="Wild Projects — home">
        <img src="${SITE.logo}?format=500w" alt="WILD PROJECTS" width="180" height="67">
      </a>
      <nav class="wp-nav" id="wp-nav" aria-label="Main">
        <ul class="wp-nav__list">
        <li class="wp-nav__item"><a class="wp-nav__link" href="${href()}"${cur('')}>Home</a></li>${drop('Services', SERVICES, 'wp-drop-services')}${drop('Locations', LOCATIONS, 'wp-drop-locations')}
        <li class="wp-nav__item"><a class="wp-nav__link" href="${href('about')}"${cur('about')}>About</a></li>
        <li class="wp-nav__item"><a class="wp-nav__link" href="${href('projects')}"${cur('projects')}>Projects</a></li>
        <li class="wp-nav__item wp-nav__item--mobile"><a class="wp-nav__link" href="${href('contact')}"${cur('contact')}>Contact Us</a></li>
        </ul>
        <div class="wp-nav__foot">
          <a href="tel:${SITE.phoneIntl}">${I.phone}${SITE.phone}</a>
          <a href="mailto:${SITE.email}">${I.mail}${SITE.email}</a>
        </div>
      </nav>
      <a class="wp-btn wp-btn--timber wp-btn--sm wp-header__cta" href="${href('contact')}"><span>Contact Us</span>${I.arrow}</a>
      <button class="wp-burger" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="wp-nav"><span></span><span></span></button>
    </div>
  </header>`;
}

function footer() {
  const col = (title, links) => `
        <div class="wp-footer__col">
          <p class="wp-footer__title">${title}</p>
          <ul>${links.map(([l, u]) => `<li><a href="${u}">${esc(l)}</a></li>`).join('')}</ul>
        </div>`;
  return `
  <footer class="wp-footer">
    <div class="wp-container">
      <div class="wp-footer__top">
        <div class="wp-footer__brand">
          <img class="wp-footer__logo" src="${SITE.logo}?format=500w" alt="WILD PROJECTS" width="180" height="67" loading="lazy">
          <p>Residential wood framing specialists in the Bow Valley and Calgary.</p>
          <a class="wp-footer__social" href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="Wild Projects on Instagram">${I.ig}<span>@wild__projects</span></a>
        </div>
        ${col('Quick Links:', [['Home', href()], ['About', href('about')], ['Projects', href('projects')], ['Contact Us', href('contact')]])}
        ${col('Our Services:', SERVICES.map((s) => [s.label, href(s.slug)]))}
        ${col('Locations:', LOCATIONS.map((s) => [s.label, href(s.slug)]))}
        <div class="wp-footer__col">
          <p class="wp-footer__title">Contact Us</p>
          <ul class="wp-footer__contact">
            <li>${I.mail}<span>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></span></li>
            <li>${I.phone}<span>Phone: <a href="tel:${SITE.phoneIntl}">${SITE.phone}</a></span></li>
            <li>${I.clock}<span>Mon – Fri · 7:30 am – 5:00 pm</span></li>
          </ul>
        </div>
      </div>
      <div class="wp-footer__bottom">
        <p>© <span data-wp-year>2026</span> Wild Projects | All Rights Reserved.</p>
        <p>Banff · Canmore · Cochrane · Calgary</p>
      </div>
    </div>
  </footer>`;
}

// ---------------------------------------------------------------- blocks
const paras = (arr = [], cls = '') => arr.map((p) => `<p${cls ? ` class="${cls}"` : ''}>${esc(p)}</p>`).join('\n          ');

function featureList(list) {
  return `<ul class="wp-features">
            ${list.map((s) => {
              const it = parseItem(s);
              return `<li class="wp-feature">${I.check}<p>${it.t ? `<strong>${esc(it.t)}</strong>${it.sep === ' ' ? ' ' : esc(it.sep)}` : ''}${esc(it.d)}</p></li>`;
            }).join('\n            ')}
          </ul>`;
}

function sectionHead(sec, n, center = false) {
  return `<div class="wp-head${center ? ' wp-head--center' : ''}" data-wp-reveal>
          <p class="wp-kicker"><span>${pad(n)}</span></p>
          <h2 class="wp-h2">${esc(sec.h2)}</h2>
        </div>`;
}

function renderSplit(sec, page, n, flip) {
  const im = page.images[sec.img];
  const im2 = sec.img2 != null ? page.images[sec.img2] : null;
  return `
    <section class="wp-section${flip ? ' wp-section--alt' : ''}">
      <div class="wp-container wp-split${flip ? ' wp-split--flip' : ''}">
        <div class="wp-split__text">
          ${sectionHead(sec, n)}
          <div class="wp-prose" data-wp-reveal>
          ${paras(sec.p)}
          ${sec.list ? featureList(sec.list) : ''}
          ${paras(sec.after)}
          </div>
          ${sec.cta ? `<div class="wp-actions" data-wp-reveal>${btn(sec.cta, href('contact'))}</div>` : ''}
        </div>
        <div class="wp-split__media${im2 ? ' wp-split__media--duo' : ''}" data-wp-reveal>
          <figure class="wp-frame" data-wp-tilt>${imgTag(im)}</figure>
          ${im2 ? `<figure class="wp-frame wp-frame--inset">${imgTag(im2, { sizes: '(max-width: 900px) 60vw, 25vw' })}</figure>` : ''}
          <span class="wp-frame__badge" aria-hidden="true">${I.frame}</span>
        </div>
      </div>
    </section>`;
}

function renderText(sec, n) {
  return `
    <section class="wp-section">
      <div class="wp-container wp-narrow">
        ${sectionHead(sec, n)}
        <div class="wp-prose" data-wp-reveal>
          ${paras(sec.p)}
          ${sec.list ? featureList(sec.list) : ''}
          ${paras(sec.after)}
        </div>
      </div>
    </section>`;
}

function renderCards(sec, n) {
  return `
    <section class="wp-section wp-section--paper">
      <div class="wp-container">
        <div class="wp-cards-head">
          ${sectionHead(sec, n)}
          <div class="wp-prose" data-wp-reveal>${paras(sec.p)}</div>
        </div>
        <div class="wp-cards wp-cards--${sec.list.length}">
          ${sec.list.map((s, i) => {
            const it = parseItem(s);
            const link = sec.links && sec.links[i] && href(sec.links[i]);
            const tag = link ? 'a' : 'article';
            return `<${tag} class="wp-card" data-wp-reveal data-wp-tilt${link ? ` href="${link}"` : ''} style="--d:${i * 80}ms">
            <span class="wp-card__num">${pad(i + 1)}</span>
            ${it.t ? `<h3 class="wp-card__title">${esc(it.t.replace(/[.:]$/, ''))}</h3>` : ''}
            <p class="wp-card__text${it.t ? '' : ' wp-card__text--lg'}">${esc(it.d)}</p>
            ${link ? `<span class="wp-card__more">Learn more ${I.arrow}</span>` : ''}
          </${tag}>`;
          }).join('\n          ')}
        </div>
        ${sec.after ? `<div class="wp-cards-after wp-prose" data-wp-reveal>${paras(sec.after)}</div>` : ''}
        ${sec.cta ? `<div class="wp-actions" data-wp-reveal>${btn(sec.cta, href('contact'))}</div>` : ''}
      </div>
    </section>`;
}

function renderSteps(sec, n) {
  return `
    <section class="wp-section wp-section--paper">
      <div class="wp-container">
        <div class="wp-cards-head">
          ${sectionHead(sec, n)}
          <div class="wp-prose" data-wp-reveal>${paras(sec.p)}</div>
        </div>
        <ol class="wp-steps">
          ${sec.list.map((s, i) => {
            const it = parseItem(s);
            return `<li class="wp-step" data-wp-reveal style="--d:${i * 120}ms">
            <span class="wp-step__num">${pad(i + 1)}</span>
            <h3 class="wp-step__title">${esc(it.t)}</h3>
            <p>${esc(it.d)}</p>
          </li>`;
          }).join('\n          ')}
        </ol>
      </div>
    </section>`;
}

function renderBand(sec, n) {
  return `
    <section class="wp-band">
      <div class="wp-container wp-band__inner">
        <p class="wp-kicker wp-kicker--light"><span>${pad(n)}</span></p>
        <h2 class="wp-h2" data-wp-reveal>${esc(sec.h2)}</h2>
        <div class="wp-band__text" data-wp-reveal>${paras(sec.p)}</div>
      </div>
    </section>`;
}

function ctaActions() {
  return `<div class="wp-actions">
            ${btn('Request A Quote', href('contact'))}
            <a class="wp-btn wp-btn--ghost" href="tel:${SITE.phoneIntl}">${I.phone}<span>${SITE.phone}</span></a>
          </div>`;
}

function renderCta(sec) {
  const titleTag = sec.h2 ? 'h2' : 'p';
  return `
    <section class="wp-cta">
      <div class="wp-container">
        <div class="wp-cta__box" data-wp-reveal>
          <div class="wp-cta__grid" aria-hidden="true"></div>
          <div class="wp-cta__copy">
            <p class="wp-kicker wp-kicker--light"><span>Let’s talk</span></p>
            <${titleTag} class="wp-h2 wp-cta__title">${esc(sec.h2 || 'Have a project in mind?')}</${titleTag}>
            ${paras(sec.p)}
          </div>
          ${ctaActions()}
        </div>
      </div>
    </section>`;
}

function contactForm(title = 'Send us a message') {
  return `<form class="wp-form" data-wp-form novalidate>
            <p class="wp-form__title">${title}</p>
            <fieldset class="wp-form__set">
              <legend class="wp-form__legend">Name</legend>
              <div class="wp-form__row">
                <label class="wp-field"><span>First Name <em>(required)</em></span><input name="first" autocomplete="given-name" required></label>
                <label class="wp-field"><span>Last Name <em>(required)</em></span><input name="last" autocomplete="family-name" required></label>
              </div>
            </fieldset>
            <label class="wp-field"><span>Email <em>(required)</em></span><input type="email" name="email" autocomplete="email" required></label>
            <label class="wp-field"><span>Message <em>(required)</em></span><textarea name="message" rows="5" required></textarea></label>
            <button class="wp-btn wp-btn--timber wp-btn--block" type="submit"><span>Send</span>${I.arrow}</button>
            <p class="wp-form__status" role="status" aria-live="polite"></p>
          </form>`;
}

function contactDetails() {
  return `<ul class="wp-details">
            <li>${I.mail}<div><span>Email</span><a href="mailto:${SITE.email}">${SITE.email}</a></div></li>
            <li>${I.phone}<div><span>Phone</span><a href="tel:${SITE.phoneIntl}">+1 ${SITE.phone}</a></div></li>
            <li>${I.pin}<div><span>Service area</span>Banff · Canmore · Cochrane · Calgary</div></li>
          </ul>`;
}

function renderHomeContact(sec, n) {
  return `
    <section class="wp-section wp-section--paper" id="get-started">
      <div class="wp-container wp-contact">
        <div class="wp-contact__text">
          ${sectionHead(sec, n)}
          <div class="wp-prose" data-wp-reveal>${paras(sec.p)}</div>
          <div data-wp-reveal>${contactDetails()}</div>
        </div>
        <div class="wp-contact__form" data-wp-reveal>${contactForm()}</div>
      </div>
    </section>`;
}

function renderSections(page) {
  let n = 0, splitCount = 0;
  return page.sections.map((sec) => {
    const layout = sec.layout || (sec.img != null ? 'split' : 'text');
    if (layout === 'cta') return renderCta(sec);
    n += 1;
    if (layout === 'contact') return renderHomeContact(sec, n);
    if (layout === 'cards') return renderCards(sec, n);
    if (layout === 'steps') return renderSteps(sec, n);
    if (layout === 'band') return renderBand(sec, n);
    if ((layout === 'split' || layout === 'split-list') && sec.img != null) return renderSplit(sec, page, n, splitCount++ % 2 === 1);
    return renderText(sec, n);
  }).join('\n');
}

// ---------------------------------------------------------------- heroes
const TICKER = ['Residential Wood Framing', 'Custom Homes', 'Multi-Unit Builds', 'Renovations & Additions', 'Decks & Pergolas', 'Carpentry'];

function ticker() {
  const row = TICKER.map((t) => `<span>${t}</span><i aria-hidden="true">✦</i>`).join('');
  return `
    <div class="wp-ticker" aria-hidden="true"><div class="wp-ticker__track">${row}${row}</div></div>`;
}

function stats() {
  return `<dl class="wp-stats">
          <div class="wp-stat"><dt>Years of experience</dt><dd><b data-wp-count="20">20</b>+</dd></div>
          <div class="wp-stat"><dt>Communities served</dt><dd><b data-wp-count="4">4</b></dd></div>
          <div class="wp-stat"><dt>On site, Mon – Fri</dt><dd><b>7:30</b><small>am</small></dd></div>
        </dl>`;
}

function homeHero(page) {
  return `
    <section class="wp-hero wp-hero--home">
      <div class="wp-hero__3d" id="wp-hero-3d" aria-hidden="true"></div>
      <div class="wp-hero__glow" aria-hidden="true"></div>
      <div class="wp-container wp-hero__grid">
        <div class="wp-hero__copy">
          <p class="wp-eyebrow"><span class="wp-dot"></span>Wood Framing Contractors · Canmore &amp; Calgary</p>
          <h1 class="wp-display">${esc(page.h1)}</h1>
          <h2 class="wp-hero__sub">${esc(page.h2)}</h2>
          <p class="wp-hero__lead">${esc(page.lead[0])}</p>
          <div class="wp-actions">
            ${btn('Request A Quote', href('contact'))}
            ${btn('View Projects', href('projects'), 'ghost')}
          </div>
        </div>
      </div>
      <div class="wp-container wp-hero__foot">${stats()}
        <p class="wp-hero__scroll" aria-hidden="true"><span></span>Scroll</p>
      </div>
    </section>${ticker()}`;
}

function crumbs(page) {
  const group = page.type === 'service' ? 'Services' : page.type === 'location' ? 'Locations' : null;
  return `<nav class="wp-crumbs" aria-label="Breadcrumb"><a href="${href()}">Home</a><span>/</span>${group ? `<span>${group}</span><span>/</span>` : ''}<span aria-current="page">${esc(navLabel(page))}</span></nav>`;
}

function navLabel(page) {
  const all = [...SERVICES, ...LOCATIONS, { slug: 'about', label: 'About' }, { slug: 'projects', label: 'Projects' }, { slug: 'contact', label: 'Contact Us' }];
  return (all.find((x) => x.slug === page.slug) || {}).label || page.h1;
}

function pageHero(page) {
  const bg = page.images[0];
  const lead0 = page.lead && page.lead[0];
  return `
    <section class="wp-hero wp-hero--page${page.type === 'contact' ? ' wp-hero--short' : ''}">
      <div class="wp-hero__bg" data-wp-parallax>${imgTag(bg, { sizes: '100vw', eager: true })}</div>
      <div class="wp-hero__shade" aria-hidden="true"></div>
      <div class="wp-container wp-hero__inner">
        ${crumbs(page)}
        <p class="wp-eyebrow"><span class="wp-dot"></span>${esc(page.eyebrow)}</p>
        <h1 class="wp-display wp-display--page">${esc(page.h1)}</h1>
        ${page.h2 ? `<h2 class="wp-hero__sub">${esc(page.h2)}</h2>` : ''}
        ${lead0 && page.type !== 'contact' ? `<p class="wp-hero__lead">${esc(lead0)}</p>` : ''}
        ${page.type !== 'contact' ? `<div class="wp-actions">${btn('Request A Quote', href('contact'))}<a class="wp-btn wp-btn--ghost" href="tel:${SITE.phoneIntl}">${I.phone}<span>${SITE.phone}</span></a></div>` : ''}
      </div>
    </section>`;
}

function intro(page) {
  const rest = (page.lead || []).slice(1);
  if (!rest.length) return '';
  return `
    <section class="wp-intro">
      <div class="wp-container wp-intro__inner" data-wp-reveal>
        <span class="wp-intro__mark" aria-hidden="true">${I.frame}</span>
        ${paras(rest, 'wp-intro__text')}
      </div>
    </section>`;
}

// ---------------------------------------------------------------- page bodies
function relatedLinks(page) {
  const list = page.type === 'service' ? SERVICES : LOCATIONS;
  const label = page.type === 'service' ? 'More services' : 'Other areas we serve';
  return `
    <section class="wp-related">
      <div class="wp-container wp-related__inner">
        <p class="wp-related__label">${label}</p>
        <div class="wp-related__links">
          ${list.filter((x) => x.slug !== page.slug).map((x) => `<a href="${href(x.slug)}">${esc(x.label)}${I.arrow}</a>`).join('\n          ')}
        </div>
      </div>
    </section>`;
}

function homeLocations() {
  return `
    <section class="wp-related wp-related--home">
      <div class="wp-container wp-related__inner">
        <p class="wp-related__label">Serving the Bow Valley &amp; Calgary</p>
        <div class="wp-related__links">
          ${LOCATIONS.map((x) => `<a href="${href(x.slug)}">${I.pin}${esc(x.label)}${I.arrow}</a>`).join('\n          ')}
        </div>
      </div>
    </section>`;
}

function projectsBody(page) {
  return `
    <section class="wp-section wp-section--paper">
      <div class="wp-container">
        <div class="wp-gallery" data-wp-gallery>
          ${page.images.map((im, i) => `<figure class="wp-gallery__item" data-wp-reveal style="--d:${(i % 3) * 70}ms">
            <button type="button" class="wp-gallery__btn" data-wp-lightbox="${i}" aria-label="Open image: ${esc(im.alt)}">
              ${imgTag(im, { sizes: '(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw' })}
              <span class="wp-gallery__zoom" aria-hidden="true">+</span>
            </button>
          </figure>`).join('\n          ')}
        </div>
      </div>
    </section>
    <div class="wp-lightbox" data-wp-lightbox-root hidden>
      <button type="button" class="wp-lightbox__close" aria-label="Close">×</button>
      <button type="button" class="wp-lightbox__nav wp-lightbox__nav--prev" aria-label="Previous image">‹</button>
      <figure class="wp-lightbox__fig"><img alt=""><figcaption></figcaption></figure>
      <button type="button" class="wp-lightbox__nav wp-lightbox__nav--next" aria-label="Next image">›</button>
    </div>
    ${renderCta({ p: ['From framing multi-unit developments to custom homes, decks and pergolas — tell us about your build.'] })}`;
}

function aboutBody(page) {
  return `${renderSections(page)}
    <section class="wp-band wp-band--stats">
      <div class="wp-container">${stats()}</div>
    </section>
    ${renderCta({ p: ['Whether you\'re a builder, developer, or GC, we make your job easier by doing ours properly.'] })}`;
}

function contactBody(page) {
  return `
    <section class="wp-section wp-section--paper">
      <div class="wp-container wp-contact wp-contact--page">
        <div class="wp-contact__text" data-wp-reveal>
          <h2 class="wp-h2">Contact us</h2>
          <div class="wp-prose">${paras(page.lead)}</div>
          ${contactDetails()}
          <div class="wp-hours">
            <p class="wp-hours__title">${I.clock}Opening times:</p>
            <ul>${SITE.hours.map(([d, h]) => `<li><span>${d}</span><span>${h}</span></li>`).join('')}</ul>
          </div>
        </div>
        <div class="wp-contact__form" data-wp-reveal>${contactForm()}</div>
      </div>
    </section>`;
}

function body(page) {
  if (page.type === 'home') return `${homeHero(page)}\n${renderSections(page)}\n${homeLocations()}`;
  const hero = pageHero(page);
  if (page.type === 'projects') return hero + projectsBody(page);
  if (page.type === 'about') return hero + aboutBody(page);
  if (page.type === 'contact') return hero + contactBody(page);
  return `${hero}${intro(page)}\n${renderSections(page)}\n${relatedLinks(page)}`;
}

// Everything inside .wp — this is exactly what goes into a Squarespace Code Block.
function wpRoot(page) {
  return `<div class="wp" data-wp-page="${page.slug || 'home'}">
  <a class="wp-skip" href="#wp-main">Skip to Content</a>
${header(page)}
  <main id="wp-main">
${body(page)}
  </main>
${footer()}
</div>`;
}

// ---------------------------------------------------------------- structured data
function orgSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'GeneralContractor',
    '@id': SITE.url + '/#business',
    name: 'Wild Projects',
    url: SITE.url,
    logo: SITE.logo,
    image: SITE.ogImage,
    email: SITE.email,
    telephone: '+1-403-988-9379',
    description: PAGES[0].desc,
    address: { '@type': 'PostalAddress', addressLocality: 'Canmore', addressRegion: 'AB', addressCountry: 'CA' },
    areaServed: ['Canmore', 'Banff', 'Cochrane', 'Calgary', 'Bow Valley'].map((n) => ({ '@type': 'City', name: n })),
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '07:30', closes: '17:00' }],
    sameAs: [SITE.instagram],
  };
}

function crumbSchema(page) {
  if (!page.slug) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/' },
      { '@type': 'ListItem', position: 2, name: navLabel(page), item: `${SITE.url}/${page.slug}` },
    ],
  };
}

const ldScript = (obj) => `<script type="application/ld+json">${JSON.stringify(obj)}</script>`;

const FONTS = `<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Manrope:wght@400;500;600;700&display=swap">`;

function fullPage(page) {
  const url = `${SITE.url}${page.slug ? '/' + page.slug : ''}`;
  const crumb = crumbSchema(page);
  return `<!doctype html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(page.title)}</title>
<meta name="description" content="${esc(page.desc)}">
<link rel="canonical" href="${url}${page.slug ? '' : '/'}">
<meta property="og:site_name" content="WILD PROJECTS">
<meta property="og:title" content="${esc(page.title)}">
<meta property="og:description" content="${esc(page.desc)}">
<meta property="og:url" content="${url}">
<meta property="og:type" content="website">
<meta property="og:image" content="${SITE.ogImage}">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${esc(page.title)}">
<meta name="twitter:description" content="${esc(page.desc)}">
<meta name="twitter:image" content="${SITE.ogImage}">
<meta name="theme-color" content="#14201a">
<!-- Client preview copy: keep it out of Google so it never competes with wildprojects.ca -->
<meta name="robots" content="noindex, nofollow">
<link rel="icon" href="${SITE.logo}?format=100w">
${FONTS}
<link rel="stylesheet" href="${asset('assets/css/style.css')}">
${ldScript(orgSchema())}
${crumb ? ldScript(crumb) : ''}
</head>
<body class="wp-body">
${wpRoot(page)}
<script src="${asset('assets/js/main.js')}" defer></script>
${page.type === 'home' ? `<script type="module" src="${asset('assets/js/hero3d.js')}"></script>` : ''}
</body>
</html>
`;
}

// ---------------------------------------------------------------- write
function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
}

const read = (p) => fs.readFileSync(p, 'utf8').replace(/^﻿/, '');

// fresh output folders
fs.rmSync(OUT, { recursive: true, force: true });
fs.rmSync(SQ + '/code-blocks', { recursive: true, force: true });

for (const page of PAGES) {
  // GitHub Pages / standalone: relative links
  ctx.mode = 'pages'; ctx.depth = page.slug ? 1 : 0;
  write(path.join(OUT, page.slug, 'index.html'), fullPage(page));
  // Squarespace: root links, same slugs as the live site
  ctx.mode = 'sq'; ctx.depth = 0;
  const crumb = crumbSchema(page);
  write(path.join(SQ, 'code-blocks', `${page.slug || 'home'}.html`), `${wpRoot(page)}\n${crumb ? ldScript(crumb) + '\n' : ''}`);
}

// copy assets + GitHub Pages helpers
for (const rel of ['assets/css/style.css', 'assets/js/main.js', 'assets/js/hero3d.js']) {
  write(path.join(OUT, rel), read(path.join(SRC, rel)));
}
write(path.join(OUT, '.nojekyll'), '');
write(path.join(OUT, 'robots.txt'), 'User-agent: *\nDisallow: /\n');
write(path.join(OUT, '404.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex"><title>Page not found — Wild Projects</title>
<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#14201a;color:#f4eee3;font:16px/1.6 system-ui,sans-serif;text-align:center;padding:24px}h1{font:500 2.4rem Georgia,serif;margin:0 0 8px}a{color:#dda36a}</style></head>
<body><div><h1>Page not found</h1><p>Sorry, that page doesn’t exist.</p><p><a href="javascript:history.back()">Go back</a></p></div></body></html>
`);

// Squarespace code injection files (built from the same CSS/JS used by the standalone site)
const css = read(path.join(SRC, 'assets/css/style.css'));
const sqCss = read(path.join(__dirname, 'squarespace-overrides.css'));
const mainJs = read(path.join(SRC, 'assets/js/main.js'));
const heroJs = read(path.join(SRC, 'assets/js/hero3d.js'));

write(path.join(SQ, '1-header-code-injection.html'), `<!-- Wild Projects — paste into: Settings › Advanced › Code Injection › HEADER -->
${FONTS}
<style>
${css}
/* ---------- Squarespace-only adjustments ---------- */
${sqCss}
</style>
${ldScript(orgSchema())}
`);

write(path.join(SQ, '2-footer-code-injection.html'), `<!-- Wild Projects — paste into: Settings › Advanced › Code Injection › FOOTER -->
<script>
${mainJs}
</script>
<script type="module">
${heroJs}
</script>
`);

console.log(`Built ${PAGES.length} pages -> docs/ and squarespace/`);
