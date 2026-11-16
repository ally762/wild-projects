/* Wild Projects — site interactions (no dependencies) */
(function () {
  'use strict';

  function init() {
    var root = document.querySelector('.wp');
    if (!root || root.dataset.wpReady) return;
    root.dataset.wpReady = '1';
    root.classList.add('wp-js');

    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    /* ---------- header: solid on scroll ---------- */
    var header = root.querySelector('[data-wp-header]');
    var onScroll = function () {
      if (header) header.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ---------- mobile menu ---------- */
    var burger = root.querySelector('.wp-burger');
    var setMenu = function (open) {
      root.classList.toggle('wp-menu-open', open);
      if (burger) {
        burger.setAttribute('aria-expanded', String(open));
        burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      }
      document.documentElement.style.overflow = open ? 'hidden' : '';
    };
    if (burger) burger.addEventListener('click', function () { setMenu(!root.classList.contains('wp-menu-open')); });

    /* ---------- dropdowns ---------- */
    var drops = root.querySelectorAll('.wp-nav__item--drop');
    var closeAll = function (except) {
      drops.forEach(function (d) {
        if (d === except) return;
        d.classList.remove('is-open');
        d.querySelector('button').setAttribute('aria-expanded', 'false');
      });
    };
    drops.forEach(function (item) {
      var btn = item.querySelector('button');
      var timer;
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var open = !item.classList.contains('is-open');
        closeAll(item);
        item.classList.toggle('is-open', open);
        btn.setAttribute('aria-expanded', String(open));
      });
      if (finePointer) {
        item.addEventListener('mouseenter', function () {
          if (window.innerWidth <= 960) return;
          clearTimeout(timer); closeAll(item);
          item.classList.add('is-open'); btn.setAttribute('aria-expanded', 'true');
        });
        item.addEventListener('mouseleave', function () {
          if (window.innerWidth <= 960) return;
          timer = setTimeout(function () { item.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); }, 160);
        });
      }
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.wp-nav__item--drop')) closeAll(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { closeAll(); setMenu(false); }
    });

    /* ---------- reveal on scroll ---------- */
    var revealEls = root.querySelectorAll('[data-wp-reveal]');
    if ('IntersectionObserver' in window && !reduce) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add('is-in'); });
    }

    /* ---------- count-up stats ---------- */
    var counters = root.querySelectorAll('[data-wp-count]');
    if ('IntersectionObserver' in window && !reduce) {
      var cio = new IntersectionObserver(function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target, target = +el.dataset.wpCount, t0 = performance.now();
          (function tick(now) {
            var p = Math.min(1, (now - t0) / 1400);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
          cio.unobserve(el);
        });
      }, { threshold: 0.6 });
      counters.forEach(function (c) { cio.observe(c); });
    }

    /* ---------- subtle 3D tilt on cards / images ---------- */
    if (finePointer && !reduce) {
      root.querySelectorAll('[data-wp-tilt]').forEach(function (el) {
        var raf;
        el.addEventListener('pointermove', function (e) {
          var r = el.getBoundingClientRect();
          var x = (e.clientX - r.left) / r.width - 0.5;
          var y = (e.clientY - r.top) / r.height - 0.5;
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(function () {
            el.style.transform = 'perspective(1000px) rotateX(' + (-y * 6).toFixed(2) + 'deg) rotateY(' + (x * 8).toFixed(2) + 'deg) translateY(-4px)';
          });
        });
        el.addEventListener('pointerleave', function () { cancelAnimationFrame(raf); el.style.transform = ''; });
      });
    }

    /* ---------- hero image parallax ---------- */
    var par = root.querySelector('[data-wp-parallax]');
    if (par && !reduce) {
      window.addEventListener('scroll', function () {
        var y = Math.min(window.scrollY, 900);
        par.style.transform = 'translate3d(0,' + (y * 0.25).toFixed(1) + 'px,0) scale(1.04)';
      }, { passive: true });
    }

    /* ---------- projects lightbox ---------- */
    var lb = root.querySelector('[data-wp-lightbox-root]');
    if (lb) {
      var triggers = Array.prototype.slice.call(root.querySelectorAll('[data-wp-lightbox]'));
      var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('figcaption'), idx = 0, lastFocus;
      var show = function (i) {
        idx = (i + triggers.length) % triggers.length;
        var src = triggers[idx].querySelector('img');
        lbImg.src = src.currentSrc || src.src;
        lbImg.alt = src.alt;
        lbCap.textContent = src.alt;
      };
      var open = function (i) { lastFocus = document.activeElement; show(i); lb.hidden = false; document.documentElement.style.overflow = 'hidden'; lb.querySelector('.wp-lightbox__close').focus(); };
      var close = function () { lb.hidden = true; document.documentElement.style.overflow = ''; if (lastFocus) lastFocus.focus(); };
      triggers.forEach(function (t, i) { t.addEventListener('click', function () { open(i); }); });
      lb.querySelector('.wp-lightbox__close').addEventListener('click', close);
      lb.querySelector('.wp-lightbox__nav--prev').addEventListener('click', function () { show(idx - 1); });
      lb.querySelector('.wp-lightbox__nav--next').addEventListener('click', function () { show(idx + 1); });
      lb.addEventListener('click', function (e) { if (e.target === lb) close(); });
      document.addEventListener('keydown', function (e) {
        if (lb.hidden) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(idx - 1);
        if (e.key === 'ArrowRight') show(idx + 1);
      });
    }

    /* ---------- contact form (opens the visitor's email app) ----------
       On Squarespace you can swap this for a native Form Block — see squarespace/README. */
    root.querySelectorAll('[data-wp-form]').forEach(function (form) {
      var status = form.querySelector('.wp-form__status');
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        form.querySelectorAll('[required]').forEach(function (f) {
          var bad = !f.value.trim() || (f.type === 'email' && !/^\S+@\S+\.\S+$/.test(f.value));
          f.closest('.wp-field').classList.toggle('is-invalid', bad);
          if (bad) ok = false;
        });
        if (!ok) {
          status.textContent = 'Please fill in all required fields.';
          status.classList.add('is-error');
          return;
        }
        var d = new FormData(form);
        var name = (d.get('first') + ' ' + d.get('last')).trim();
        var body = d.get('message') + '\n\n— ' + name + '\n' + d.get('email');
        window.location.href = 'mailto:info@wildprojects.ca?subject=' + encodeURIComponent('Project enquiry from ' + name) + '&body=' + encodeURIComponent(body);
        status.classList.remove('is-error');
        status.textContent = 'Thanks! Your email app should open with your message ready to send.';
      });
    });

    /* ---------- footer year ---------- */
    root.querySelectorAll('[data-wp-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
