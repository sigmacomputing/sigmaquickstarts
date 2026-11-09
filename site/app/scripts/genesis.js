'use strict';

/* Sigma QuickStarts — Genesis restyle: page behaviour.
   Plain ES2015 so the existing gulp/babel pipeline can carry it. */
(function () {
  'use strict';

  var $ = function $(s, r) {
    return (r || document).querySelector(s);
  };
  var $$ = function $$(s, r) {
    return Array.prototype.slice.call((r || document).querySelectorAll(s));
  };
  // Markup is parsed in an inert document (no script or image loading) and then moved in
  var setHTML = function setHTML(el, html) {
    var doc = new DOMParser().parseFromString('<!doctype html><body>' + (html || ''), 'text/html');
    el.replaceChildren.apply(el, Array.prototype.slice.call(doc.body.childNodes));
  };
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var LABELS = {
    fundamentals: 'Fundamentals', 'getting-started': 'Getting Started', agents: 'Agents', aiapps: 'AI Apps',
    apptemplates: 'App Templates', tables: 'Tables', functions: 'Functions', administration: 'Administration',
    security: 'Security', developers: 'Developers', embedding: 'Embedding', migrations: 'Migrations',
    partners: 'Partners', 'use-cases': 'Use Cases', firstfridayfeatures: 'First Friday Features', eventhols: 'Hands-on Labs'
  };
  var ORDER = ['fundamentals', 'getting-started', 'agents', 'aiapps', 'apptemplates', 'tables', 'functions', 'administration', 'security', 'developers', 'embedding', 'migrations', 'partners', 'use-cases', 'eventhols', 'firstfridayfeatures'];

  // Topic names on chips and shelf headers when they say more than the card badge
  var TOPIC_NAME = { fundamentals: 'Fundamentals for New Users' };
  var topicName = function topicName(k) {
    return TOPIC_NAME[k] || LABELS[k] || k;
  };
  // Only one topic shelf stays open at a time
  function closeOtherShelves(except) {
    var b = document.getElementById('browse');
    if (!b) return;
    Array.prototype.forEach.call(b.querySelectorAll('.shelf[open]'), function (x) {
      if (x !== except) x.open = false;
    });
  }
  // One-line descriptions shown on each collapsed shelf
  var CAT_DESC = {
    administration: 'Set up, secure and govern your Sigma environment, with guides on audit logging, tenancy, version tagging, materialization and usage monitoring for the people who run the platform.',
    agents: 'Build Sigma agents step by step, from a first agent through actions and writeback, memory, scheduling, and connections to tools such as web search, GitHub, Python and Snowflake Cortex.',
    aiapps: 'Build apps that capture input, take action on live data and put AI to work, using Sigma Assistant, chat elements, forms, repeaters and scheduled actions.',
    apptemplates: 'Start from ready-made finance, planning and operations templates, such as budget variance, demand planning and revenue forecasting, then adapt them to your own data.',
    developers: 'Extend and automate Sigma as code, with the CLI, workbooks and data models as code, plugins, and API actions that connect to tools such as Jira, Salesforce and ServiceNow.',
    embedding: 'Put Sigma analytics inside your own applications, from first embed through secure access, JWT claims and isolation for multi-tenant products to the REST API.',
    functions: 'Learn the formulas analysts reach for most, from date functions to period-over-period comparisons.',
    fundamentals: 'Start here. A guided series that takes you from your first workbook through data, pivot tables, charts, controls and layout.',
    'getting-started': 'Short guides to get oriented in Sigma and productive quickly.',
    migrations: 'Move to Sigma from another BI platform. Each guide walks through bringing content from tools such as Power BI, Tableau, Looker and Excel into Sigma.',
    partners: 'Connect Sigma to the platforms around it, including Snowflake, Databricks, BigQuery, MotherDuck and HubSpot through Hightouch.',
    security: 'Control who sees what, with row and column-level security, single sign-on, OAuth, key-pair authentication, private connectivity and secrets management.',
    tables: 'Create and promote Sigma Tables, then reshape and parse data with transpose, JSON parsing and fan trap fixes, all inside the workbook.',
    'use-cases': 'End-to-end business scenarios, including FP&A reporting and retail and CPG retention and cohort analysis.'
  };

  function fmtDate(iso) {
    var m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
    if (!m) return '';
    return MONTHS[+m[2] - 1] + ' ' + +m[3] + ', ' + m[1];
  }

  /* ---------- nav ---------- */
  var burger = $('.g-nav .burger'),
      sheet = $('#sheet');
  if (burger && sheet) {
    burger.addEventListener('click', function () {
      var open = burger.getAttribute('aria-expanded') !== 'true';
      burger.setAttribute('aria-expanded', String(open));
      burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      sheet.hidden = !open;
    });
  }

  /* ---------- header menus ---------- */
  var ddBtns = $$('.g-nav .dd-btn');
  var closeDd = function closeDd(except) {
    ddBtns.forEach(function (b) {
      if (b === except) return;
      b.setAttribute('aria-expanded', 'false');
      var p = document.getElementById(b.getAttribute('aria-controls'));if (p) p.hidden = true;
    });
  };
  ddBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var open = b.getAttribute('aria-expanded') !== 'true';
      closeDd(b);
      b.setAttribute('aria-expanded', String(open));
      var p = document.getElementById(b.getAttribute('aria-controls'));if (p) p.hidden = !open;
      var cm = $('#gcta-menu');if (open && cm && !cm.hidden) $('.g-nav .chev').click();
    });
  });
  document.addEventListener('mousedown', function (e) {
    if (!e.target.closest('.g-nav .dd-item')) closeDd();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDd();
  });

  /* ---------- header CTA (port of PrimaryNavCta on sigmacomputing.com) ---------- */
  var gcta = $('.g-nav .gcta');
  if (gcta) {
    var ring = $('.ring', gcta),
        chev = $('.chev', gcta),
        gmenu = $('.menu', gcta);
    var go = $('.go', gcta),
        lbl = $('.lbl', gcta),
        list = $('ul', gmenu);
    var setOpen = function setOpen(v) {
      chev.setAttribute('aria-expanded', String(v));gmenu.hidden = !v;
    };
    chev.addEventListener('click', function () {
      setOpen(gmenu.hidden);
    });
    document.addEventListener('mousedown', function (e) {
      if (!gmenu.hidden && !gcta.contains(e.target)) setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !gmenu.hidden) setOpen(false);
    });
    // over the hero it offers a demo; past the hero's own CTAs it becomes the free trial
    var past = null;
    var syncPast = function syncPast() {
      var p = window.scrollY > 480;
      if (p === past) return;
      past = p;
      var key = p ? 'trial' : 'demo',
          first = $('[data-path="' + key + '"]', list);
      lbl.textContent = p ? 'Try Sigma free' : 'Get started';
      go.href = first.href;
      list.insertBefore(first.parentNode, list.firstChild);
    };
    syncPast();
    window.addEventListener('scroll', syncPast, { passive: true });
    // the gradient ring spins with momentum from the scroll; still under reduced motion
    if (!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
      var angle = 0,
          vel = 0,
          lastY = window.scrollY,
          lastT = 0,
          frame = 0;
      var tick = function tick(t) {
        var dt = lastT ? Math.min((t - lastT) / (1000 / 60), 3) : 1;
        lastT = t;
        angle = (angle + vel * dt) % 360;
        vel *= Math.pow(0.99, dt);
        ring.style.setProperty('--nav-glow-a', angle + 'deg');
        if (Math.abs(vel) > 0.02) frame = requestAnimationFrame(tick);else frame = lastT = 0;
      };
      window.addEventListener('scroll', function () {
        var y = window.scrollY;
        vel = Math.max(-9.6, Math.min(9.6, vel + (y - lastY) * 0.0288));
        lastY = y;
        if (!frame) frame = requestAnimationFrame(tick);
      }, { passive: true });
    }
  }

  /* ---------- grid spotlight (port of SpreadsheetGridBackground, book ch. 05) ---------- */
  var CW = 104,
      CH = 34,
      FADE = 1600,
      HOLD = 2600,
      GAP = 900,
      SEL_AT = 700,
      ANCHOR = 350,
      DRAG = 170;
  var EDGE = {
    quiet: 'linear-gradient(to bottom,transparent,#000 22%,#000 78%,transparent),linear-gradient(to right,transparent,#000 14%,#000 86%,transparent)',
    strong: 'linear-gradient(to bottom,transparent,#000 10%,#000 90%,transparent),linear-gradient(to right,transparent,#000 8%,#000 92%,transparent)'
  };
  function lines(col) {
    return 'background-image:linear-gradient(to right,' + col + ' 1px,transparent 1px),linear-gradient(to bottom,' + col + ' 1px,transparent 1px);background-size:' + CW + 'px ' + CH + 'px;';
  }
  function collides(a, b) {
    return a.col - 1 < b.col + b.cols && b.col - 1 < a.col + a.cols && a.row - 1 < b.row + b.rows && b.row - 1 < a.row + a.rows;
  }
  function GridBG(host, mode) {
    var spot = mode !== 'hero',
        strong = mode === 'strong';
    var pace = strong ? 2 : 1,
        fade = FADE * pace,
        hold = HOLD * pace,
        cycle = (FADE * 2 + HOLD + GAP) * pace;
    var spots = 3,
        nodes = [],
        occ = [null, null, null];
    if (!spot) {
      var base = document.createElement('div');
      base.style.cssText = 'position:absolute;inset:0;' + lines('rgba(17,17,20,.055)') + '-webkit-mask-image:radial-gradient(ellipse 75% 65% at 50% 35%,#000 25%,transparent 100%);mask-image:radial-gradient(ellipse 75% 65% at 50% 35%,#000 25%,transparent 100%)';
      host.appendChild(base);
    }
    var wrap = document.createElement('div');
    wrap.style.cssText = 'position:absolute;inset:0';
    if (spot) {
      var m = strong ? EDGE.strong : EDGE.quiet;
      wrap.style.webkitMaskImage = m;wrap.style.maskImage = m;
      wrap.style.webkitMaskComposite = 'source-in';wrap.style.maskComposite = 'intersect';
    }
    host.appendChild(wrap);
    for (var i = 0; i < spots; i++) {
      var l = document.createElement('div');l.className = 'l';l.style.opacity = 0;l.style.transitionDuration = fade + 'ms';
      var g = document.createElement('div');
      g.style.cssText = 'position:absolute;inset:0;' + lines('rgba(26,112,241,' + (strong ? 0.16 : spot ? 0.14 : 0.16) + ')') + 'background-color:rgba(26,112,241,' + (strong ? 0.025 : spot ? 0.015 : 0.025) + ')';
      var s = document.createElement('div');s.className = 'sel';s.style.display = 'none';s.appendChild(document.createElement('i'));
      l.appendChild(g);l.appendChild(s);wrap.appendChild(l);
      nodes.push({ l: l, g: g, s: s });
    }
    function keepRanges() {
      var hb = host.getBoundingClientRect();
      return $$('[data-keepout]', host.parentElement).map(function (n) {
        var r = n.getBoundingClientRect();
        var col = Math.floor((r.left - hb.left) / CW),
            row = Math.floor((r.top - hb.top) / CH);
        return { col: col, row: row, cols: Math.ceil((r.right - hb.left) / CW) - col, rows: Math.ceil((r.bottom - hb.top) / CH) - row };
      });
    }
    function place(selecting, taken) {
      var W = host.clientWidth,
          H = host.clientHeight,
          cols = Math.max(4, Math.floor(W / CW));
      for (var a = 0; a < 24; a++) {
        var first = Math.ceil(0.12 * H / CH),
            end = Math.floor(0.88 * H / CH);
        var rows = Math.max(1, Math.min(1 + Math.floor(Math.random() * 3), end - first));
        var rc = rows === 1 && selecting ? 2 + Math.floor(Math.random() * 2) : 1 + Math.floor(Math.random() * 3);
        var col = 1 + Math.floor(Math.random() * Math.max(1, cols - rc - 1));
        var row = first + Math.floor(Math.random() * Math.max(1, end - first - rows + 1));
        var range = { col: col, row: row, cols: rc, rows: rows };
        if (!taken.some(function (t) {
          return collides(range, t);
        })) return { range: range, x: (col + rc / 2) * CW, y: (row + rows / 2) * CH };
      }
      return null;
    }
    function run(i) {
      var n = nodes[i];occ[i] = null;
      var selecting = i === 0;
      var taken = occ.filter(Boolean).concat(selecting ? keepRanges() : []);
      var p = place(selecting, taken);
      if (p) {
        occ[i] = p.range;
        var r = strong ? 280 : spot ? 220 : 300;
        var mask = strong ? 'radial-gradient(circle ' + r + 'px at ' + p.x + 'px ' + p.y + 'px,rgba(0,0,0,.85) 0%,rgba(0,0,0,.45) 45%,transparent 100%)' : 'radial-gradient(circle ' + r + 'px at ' + p.x + 'px ' + p.y + 'px,#000 0%,rgba(0,0,0,.55) 45%,transparent 100%)';
        n.g.style.webkitMaskImage = mask;n.g.style.maskImage = mask;n.l.style.opacity = 1;
        if (selecting) {
          var R = p.range,
              s = n.s;
          s.style.display = 'block';s.style.transition = 'none';
          s.style.left = R.col * CW + 'px';s.style.top = R.row * CH + 'px';s.style.width = '0';s.style.height = '0';s.style.opacity = 0;
          setTimeout(function () {
            s.style.transition = 'opacity .12s ease-out';s.style.width = CW + 1 + 'px';s.style.height = CH + 1 + 'px';s.style.opacity = 1;
          }, SEL_AT * pace);
          setTimeout(function () {
            var cs = Math.max(1, R.cols - 1),
                rs = Math.max(1, R.rows - 1);
            s.style.transition = 'width ' + cs * DRAG + 'ms steps(' + cs + ',end),height ' + rs * DRAG + 'ms steps(' + rs + ',end),opacity .12s';
            s.style.width = R.cols * CW + 1 + 'px';s.style.height = R.rows * CH + 1 + 'px';
          }, (SEL_AT + ANCHOR) * pace);
        }
        setTimeout(function () {
          n.l.style.opacity = 0;
        }, fade + hold);
      }
      setTimeout(function () {
        run(i);
      }, cycle);
    }
    for (var k = 0; k < spots; k++) {
      (function (k) {
        setTimeout(function () {
          run(k);
        }, 300 + k * cycle / spots);
      })(k);
    }
  }
  if (!reduce) $$('.gbg[data-grid]').forEach(function (h) {
    GridBG(h, h.getAttribute('data-grid'));
  });

  /* ---------- dates on cards ---------- */
  $$('.upd[data-d]').forEach(function (n) {
    var d = fmtDate(n.getAttribute('data-d'));if (d) n.textContent = 'Updated ' + d;
  });

  /* ---------- library ---------- */
  // Topics roll up into six families; each family owns one color, used only as fills (Genesis: text stays ink)
  var FAMS = [{ k: 'start', label: 'Get started', cats: ['fundamentals', 'getting-started', 'use-cases'] }, { k: 'ai', label: 'AI apps and agents', cats: ['agents', 'aiapps'] }, { k: 'apps', label: 'Apps and data', cats: ['apptemplates', 'tables', 'functions'] }, { k: 'embed', label: 'Embedding and APIs', cats: ['embedding', 'developers'] }, { k: 'run', label: 'Admin and migration', cats: ['administration', 'security', 'migrations', 'partners'] }, { k: 'events', label: 'Events and releases', cats: ['eventhols', 'firstfridayfeatures'] }];
  var FAM_OF = {};
  FAMS.forEach(function (f) {
    f.cats.forEach(function (c) {
      FAM_OF[c] = f.k;
    });
  });
  var famOf = function famOf(cat) {
    return FAM_OF[cat] || 'run';
  };
  $$('.card[data-cat]').forEach(function (c) {
    c.setAttribute('data-fam', famOf(c.getAttribute('data-cat')));
  });

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }
  function mins(n) {
    n = +n || 0;var h = Math.floor(n / 60),
        m = n % 60;return h ? h + ' hr' + (m ? ' ' + m + ' min' : '') : m + ' min';
  }
  function tile(cat) {
    return '<span class="tile"><i class="ci" data-cat="' + esc(cat) + '"></i></span>';
  }

  var grid = $('#cards');
  if (grid) {
    var wasBrowsing = true,
        fromPop = false,
        backEl = null;
    var apply = function apply(scroll) {
      var browsing = !!browse && !state.fam && !state.cat && !state.q && !state.list;
      var terms = state.q.toLowerCase().split(/\s+/).filter(Boolean);
      var shown = [];
      cards.forEach(function (c) {
        var ok = (!state.fam || c._fam === state.fam) && (!state.cat || c._cat === state.cat) && terms.every(function (t) {
          return c._hay.indexOf(t) > -1;
        });
        c.hidden = !ok;
        if (ok) shown.push(c);
        // highlight matches in the title
        if (terms.length && ok) {
          var re = new RegExp('(' + terms.map(function (term) {
            return term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          }).join('|') + ')', 'ig');
          setHTML(c._ttl, c._title.split(re).map(function (part, i) {
            return i % 2 ? '<mark class="hl">' + esc(part) + '</mark>' : esc(part);
          }).join(''));
        } else if (c._ttl.firstElementChild) {
          c._ttl.textContent = c._title;
        }
      });
      // while searching, rank by relevance (title matches first) until a sort is picked
      var relevance = terms.length > 0 && !state.sortChosen;
      if (relevance) {
        var phrase = terms.join(' ');
        cards.forEach(function (c) {
          var t = c._title.toLowerCase(),
              inTitle = terms.filter(function (x) {
            return t.indexOf(x) > -1;
          }).length;
          var sc = 0;
          if (t === phrase) sc = 100;else if (t.indexOf(phrase) === 0) sc = 85;else if (t.indexOf(phrase) > -1) sc = 70;else if (inTitle === terms.length) sc = 50;else sc = inTitle * 8;
          if ((LABELS[c._cat] || '').toLowerCase().indexOf(phrase) > -1) sc += 10;
          if (c._hay.indexOf(phrase) > -1) sc += 5;
          c._score = sc;
        });
      }
      var sorted = cards.slice().sort(function (a, b) {
        if (relevance && b._score !== a._score) return b._score - a._score;
        if (state.sort === 'newest') return (b._date || '').localeCompare(a._date || '') || a._i - b._i;
        if (state.sort === 'short') return (+a.getAttribute('data-duration') || 999) - (+b.getAttribute('data-duration') || 999) || a._title.localeCompare(b._title);
        return a._title.localeCompare(b._title, undefined, { numeric: true, sensitivity: 'base' });
      });
      sorted.forEach(function (c) {
        grid.appendChild(c);
      });

      $$('.lib-bar [data-chip]').forEach(function (b) {
        var k = b.getAttribute('data-chip');
        var on = state.cat ? k === state.cat : state.fam ? !!k && famOf(k) === state.fam : !k && !state.q && !state.list;
        b.setAttribute('aria-pressed', String(on));
      });
      var ddl = $('.tdd-btn .lbl');
      if (ddl) ddl.textContent = state.cat ? topicName(state.cat) : 'Topics';
      $$('.seg [data-sort]').forEach(function (b) {
        b.setAttribute('aria-pressed', String(!browsing && !relevance && b.getAttribute('data-sort') === state.sort));
      });

      if (browse) browse.hidden = !browsing;
      var bTop = $('#browse-top');if (bTop) bTop.hidden = !browsing;
      // sort and the guide count only matter once there is a list to sort or filter
      if (browse) {
        var segE = $('.lib-bar .seg');if (segE) segE.hidden = browsing;
        if (countEl) countEl.hidden = browsing;
      }
      if (countEl) countEl.textContent = browsing || shown.length === cards.length ? cards.length + ' guides' : shown.length + ' of ' + cards.length + ' guides';
      if (empty) empty.hidden = browsing || shown.length > 0;
      grid.hidden = browsing || shown.length === 0;

      var p = new URLSearchParams(location.search);
      [['fam', state.fam], ['cat', state.cat], ['q', state.q], ['view', state.list && !state.fam && !state.cat && !state.q ? 'all' : '']].forEach(function (kv) {
        if (kv[1]) p.set(kv[0], kv[1]);else p.delete(kv[0]);
      });
      var qs = p.toString();
      // leaving the topic shelves adds a history entry, so the browser Back button returns to them
      var url = location.pathname + (qs ? '?' + qs : '') + location.hash;
      if (wasBrowsing && !browsing && !fromPop) history.pushState(null, '', url);else history.replaceState(null, '', url);
      wasBrowsing = browsing;
      if (backEl) backEl.hidden = browsing;

      if (scroll) {
        var bar = $('.lib-bar'),
            at = bar && bar.previousElementSibling;
        if (bar) {
          // the mark sits where the bar rests; scrolling there sticks the bar at the top with the results below it
          var y = (at && at !== bar ? at.getBoundingClientRect().top : bar.getBoundingClientRect().top) + window.scrollY;
          if (Math.abs(window.scrollY - y) > 4) window.scrollTo({ top: y, behavior: reduce ? 'auto' : 'smooth' });
        }
      }
    };

    var cards = $$('.card', grid);
    var browse = $('#browse');
    var MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    cards.forEach(function (c, i) {
      c._i = i;
      c._title = c.getAttribute('data-title') || '';
      // First Friday Features titles arrive as "(10-2026) October": show "October 2026"
      var ff = /^\((\d{2})-(\d{4})\)\s*/.exec(c._title);
      if (ff) {
        c._title = MONTHS_FULL[+ff[1] - 1] + ' ' + ff[2];
        var tt = $('.ttl', c);if (tt) tt.textContent = c._title;
      }
      c._ttl = $('.ttl', c);
      c._cat = c.getAttribute('data-cat');
      // the template emits the raw category slug; show the display name
      var cl = $('.cat', c);if (cl && cl.lastChild && cl.lastChild.nodeType === 3) cl.lastChild.textContent = LABELS[c._cat] || c._cat;
      c._fam = famOf(c._cat);
      var desc = $('.desc', c);
      c._hay = (c._title + ' ' + (LABELS[c._cat] || '') + ' ' + (desc ? desc.textContent : '')).toLowerCase();
      c._date = ff ? ff[2] + '-' + ff[1] + '-01' : c.getAttribute('data-updated') || '';
    });

    var q = $('#q'),
        chipsEl = $('#chips'),
        countEl = $('#count'),
        empty = $('#empty');
    var params = new URLSearchParams(location.search);
    var state = { fam: params.get('fam') || '', cat: params.get('cat') || '', q: params.get('q') || '', sort: '', list: params.get('view') === 'all' };
    var pressed = $('.seg [aria-pressed="true"]');
    state.sort = pressed ? pressed.getAttribute('data-sort') : 'az';

    // chips: one per topic, grouped by family so the color swatches run together
    var catCount = {},
        famCount = {};
    cards.forEach(function (c) {
      catCount[c._cat] = (catCount[c._cat] || 0) + 1;famCount[c._fam] = (famCount[c._fam] || 0) + 1;
    });
    // chips and shelves share one order: A-Z by topic name
    var catsOrdered = Object.keys(catCount).sort(function (a, b) {
      return (LABELS[a] || a).localeCompare(LABELS[b] || b);
    });
    if (state.cat && !catCount[state.cat]) state.cat = '';
    if (state.fam && !famCount[state.fam]) state.fam = '';
    if (catsOrdered.length > 1 && chipsEl) {
      var FEAT = catCount.fundamentals ? 'fundamentals' : '';
      // topics live in one dropdown next to the search box
      var opts = '<button type="button" class="opt" role="option" data-chip="" aria-pressed="false">All topics</button>';
      var menuOrder = catsOrdered.filter(function (k) {
        return k === FEAT;
      }).concat(catsOrdered.filter(function (k) {
        return k !== FEAT;
      }));
      menuOrder.forEach(function (k) {
        opts += '<button type="button" class="opt" role="option" data-chip="' + esc(k) + '" data-fam="' + famOf(k) + '" aria-pressed="false"><i class="ci" data-cat="' + esc(k) + '"></i>' + topicName(k) + '</button>';
      });
      chipsEl.hidden = true;chipsEl.textContent = '';
      var searchAt = $('.lib-bar .search');
      if (searchAt) searchAt.insertAdjacentHTML('afterend', '<div class="tdd"><button type="button" class="tdd-btn" aria-haspopup="listbox" aria-expanded="false"><span class="lbl">Topics</span><svg viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></button><div class="tdd-menu" role="listbox" aria-label="Topics" hidden>' + opts + '</div></div>');
      var tddBtn = $('.tdd-btn'),
          tddMenu = $('.tdd-menu');
      var closeTdd = function closeTdd() {
        if (!tddMenu) return;tddMenu.hidden = true;tddBtn.setAttribute('aria-expanded', 'false');
      };
      if (tddBtn) {
        tddBtn.addEventListener('click', function () {
          var open = tddMenu.hidden;
          tddMenu.hidden = !open;tddBtn.setAttribute('aria-expanded', String(open));
          if (open) {
            var cur = $('.opt[aria-pressed="true"]', tddMenu) || $('.opt', tddMenu);cur.focus();
          }
        });
        document.addEventListener('mousedown', function (e) {
          if (!e.target.closest('.tdd')) closeTdd();
        });
        document.addEventListener('keydown', function (e) {
          if (e.key === 'Escape' && !tddMenu.hidden) {
            closeTdd();tddBtn.focus();
          }
          if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !tddMenu.hidden) {
            e.preventDefault();
            var items = $$('.opt', tddMenu),
                i = items.indexOf(document.activeElement);
            items[(i + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length].focus();
          }
        });
      }
      var barEl = $('.lib-bar'),
          countAt = $('#count');
      (barEl || chipsEl).addEventListener('click', function (e) {
        var b = e.target.closest('[data-chip]');
        if (!b) return;
        if (b.classList.contains('opt')) closeTdd();
        var k = b.getAttribute('data-chip');
        if (browse && !browse.hidden && k && !state.q) {
          // browsing: jump to the topic's shelf and open it
          var sh = $('.shelf[data-cat="' + esc(k) + '"]', browse);
          if (sh) {
            closeOtherShelves(sh);sh.open = true;
            var top = sh.getBoundingClientRect().top + window.scrollY - (($('.lib-bar') || {}).offsetHeight || 0) - 76;
            window.scrollTo({ top: top, behavior: reduce ? 'auto' : 'smooth' });
            $$('.lib-bar [data-chip]').forEach(function (x) {
              x.setAttribute('aria-pressed', String(x === b));
            });
            var ddl2 = $('.tdd-btn .lbl');if (ddl2) ddl2.textContent = topicName(k);
            return;
          }
        }
        state.cat = k === state.cat ? '' : k;state.fam = '';
        if (!state.cat) {
          state.list = false;if (!k) {
            state.q = '';if (q) q.value = '';
          }
        }
        apply(true);
      });
    } else if (chipsEl) {
      chipsEl.hidden = true;
      // one topic in this view: the label on every card is noise
      cards.forEach(function (c) {
        var k = $('.cat', c);if (k) k.style.display = 'none';
      });
    }

    // home: collapsible topic shelves instead of one wall of cards
    if (browse) {
      var out = '';
      // Recently added: collapsed; the fetch below fills it
      out += '<details class="brecent" id="brecent" hidden><summary><h3>Recently added</h3><p>The newest guides from the QuickStarts team.</p><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div class="rcards"></div></details>';
      var topHtml = out;out = '';
      // one collapsed shelf per topic, A-Z, with Fundamentals leading as the entry point for new users
      var shelfOrder = catsOrdered.filter(function (k) {
        return k === 'fundamentals';
      }).concat(catsOrdered.filter(function (k) {
        return k !== 'fundamentals';
      }));
      shelfOrder.forEach(function (k) {
        var mem = cards.filter(function (c) {
          return c._cat === k;
        }).sort(function (a, b) {
          return (b._date || '').localeCompare(a._date || '') || a._i - b._i;
        });
        if (!mem.length) return;
        var f = famOf(k);
        out += '<details class="shelf" data-cat="' + esc(k) + '" data-fam="' + f + '"><summary><i class="ci sico" data-cat="' + esc(k) + '"></i><span class="st"><span class="sl"><h4>' + esc(topicName(k)) + '</h4><span class="n">' + mem.length + ' guides</span></span>' + (CAT_DESC[k] ? '<span class="sd">' + esc(CAT_DESC[k]) + '</span>' : '') + '</span><svg class="chev" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div class="sbody"><div class="minis">';
        mem.forEach(function (c) {
          out += '<a class="mini" data-ci="' + c._i + '" href="' + esc(c.getAttribute('href')) + '" data-fam="' + f + '">' + tile(c._cat) + '<span class="mt"><span class="ttl">' + esc(c._title) + '</span><span class="mm">' + mins(c.getAttribute('data-duration')) + '</span></span></a>';
        });
        out += '</div><button type="button" class="all" data-go="' + esc(k) + '">Open as a list<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></button></div></details>';
      });
      var browseTop = $('#browse-top');
      if (browseTop) {
        setHTML(browseTop, topHtml);setHTML(browse, out);
      } else setHTML(browse, topHtml + out);
      var onBrowseClick = function onBrowseClick(e) {
        var go = e.target.closest('[data-go]');
        if (go) {
          state.cat = go.getAttribute('data-go');state.fam = '';apply(true);return;
        }
      };
      browse.addEventListener('click', onBrowseClick);
      browse.addEventListener('toggle', function (e) {
        var d = e.target;
        if (!d.classList || !d.classList.contains('shelf') || !d.open) return;
        var t0 = d.getBoundingClientRect().top;
        closeOtherShelves(d);
        var dy = d.getBoundingClientRect().top - t0;
        if (dy) window.scrollBy(0, dy);
      }, true);
      if (browseTop) browseTop.addEventListener('click', onBrowseClick);
      grid.classList.add('list');

      // a way back from a filtered list to the topic shelves
      backEl = document.createElement('div');
      backEl.className = 'back';backEl.hidden = true;
      setHTML(backEl, '<button type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>All topics</button>');
      grid.parentNode.insertBefore(backEl, grid);
      backEl.firstChild.addEventListener('click', function () {
        var was = state.cat;
        state.fam = '';state.cat = '';state.q = '';state.list = false;if (q) q.value = '';
        apply(false);
        var sh = was && $('.shelf[data-cat="' + was + '"]', browse);
        if (sh) {
          closeOtherShelves(sh);sh.open = true;
          window.scrollTo({ top: sh.getBoundingClientRect().top + window.scrollY - (($('.lib-bar') || {}).offsetHeight || 0) - 76, behavior: reduce ? 'auto' : 'smooth' });
        } else window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      });
      window.addEventListener('popstate', function () {
        var pp = new URLSearchParams(location.search);
        state.fam = pp.get('fam') || '';state.cat = pp.get('cat') || '';state.q = pp.get('q') || '';state.list = pp.get('view') === 'all';
        if (q) q.value = state.q;
        fromPop = true;apply(false);fromPop = false;
      });
    }

    // hover a guide to read its description: list rows, small shelf cards and path steps
    cards.forEach(function (c) {
      c.setAttribute('data-ci', c._i);
    });
    if (window.matchMedia && matchMedia('(hover: hover) and (min-width: 768px)').matches) {
      var tipEl = document.createElement('div'),
          tipT = null,
          tipFor = null;
      tipEl.className = 'g-tip';tipEl.setAttribute('role', 'tooltip');tipEl.hidden = true;
      document.body.appendChild(tipEl);
      var hideTip = function hideTip() {
        clearTimeout(tipT);tipFor = null;tipEl.hidden = true;
      };
      // open beside the pointer, then hold that spot until the pointer leaves the item
      var mx = 0,
          my = 0;
      document.addEventListener('mousemove', function (e) {
        mx = e.clientX;my = e.clientY;
      }, { passive: true });
      var showTip = function showTip(el, byKeyboard) {
        var c = cards[+el.getAttribute('data-ci')],
            d = c && $('.desc', c);
        if (!d || !d.textContent.trim()) return;
        tipEl.setAttribute('data-fam', c._fam);
        setHTML(tipEl, '<span class="tc">' + tile(c._cat) + esc(LABELS[c._cat] || c._cat) + '</span><b>' + esc(c._title) + '</b><p>' + esc(d.textContent.trim()) + '</p><span class="tm">' + mins(c.getAttribute('data-duration')) + (c.getAttribute('data-updated') ? ' · Updated ' + fmtDate(c.getAttribute('data-updated')) : '') + '</span>');
        tipEl.hidden = false;
        var w = tipEl.offsetWidth,
            h = tipEl.offsetHeight,
            left,
            top;
        if (byKeyboard) {
          var r = el.getBoundingClientRect();
          left = r.left;top = r.bottom + 8;
          if (top + h > innerHeight - 16) top = r.top - h - 8;
        } else {
          left = mx + 16;top = my + 18;
          if (left + w > innerWidth - 16) left = mx - w - 16;
          if (top + h > innerHeight - 16) top = my - h - 12;
        }
        left = Math.min(Math.max(left, 16), innerWidth - w - 16);
        top = Math.max(top, 16);
        tipEl.style.left = left + 'px';tipEl.style.top = top + 'px';
      };
      document.addEventListener('mouseover', function (e) {
        var el = e.target.closest('.cards.list .card[data-ci], .mini[data-ci], .path a[data-ci], .rtile[data-ci]');
        if (el === tipFor) return;
        hideTip();
        if (!el) return;
        tipFor = el;
        tipT = setTimeout(function () {
          if (tipFor === el) showTip(el);
        }, 350);
      });
      window.addEventListener('scroll', hideTip, { passive: true });
      document.addEventListener('focusin', function (e) {
        var el = e.target.closest && e.target.closest('.cards.list .card[data-ci], .mini[data-ci], .path a[data-ci], .rtile[data-ci]');
        if (el) {
          hideTip();tipFor = el;showTip(el, true);
        } else hideTip();
      });
    }

    // sub-pages (Hands-on labs, First Friday Features, ...): the sigmacomputing.com tile instead of the boxed card
    if (!browse) {
      grid.classList.add('tiles');
      var singleTopic = chipsEl && chipsEl.hidden;
      cards.forEach(function (c) {
        c.insertAdjacentHTML('afterbegin', '<div class="img"><div class="art" aria-hidden="true"><span class="cv"><i class="ci" data-cat="' + esc(c._cat) + '"></i></span></div>' + (singleTopic ? '' : '<span class="badge">' + esc(LABELS[c._cat] || c._cat) + '</span>') + '</div>');
      });
    }

    $$('.seg [data-sort]').forEach(function (b) {
      b.addEventListener('click', function () {
        state.sort = b.getAttribute('data-sort');state.sortChosen = true;state.list = true;apply(false);
      });
    });
    var clearBtn = $('.search .clear');
    if (q && clearBtn) {
      clearBtn.addEventListener('click', function () {
        q.value = '';state.q = '';apply(false);q.focus();
      });
      q.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && q.value) {
          q.value = '';state.q = '';apply(false);
        }
      });
    }
    if (q) {
      q.value = state.q;
      var tmr;
      q.addEventListener('input', function () {
        clearTimeout(tmr);tmr = setTimeout(function () {
          state.q = q.value.trim();apply(false);
        }, 60);
      });
    }
    document.addEventListener('keydown', function (e) {
      if (e.key === '/' && q && document.activeElement !== q && !/input|textarea|select/i.test(document.activeElement.tagName)) {
        e.preventDefault();q.focus();
      } else if (e.key === 'Escape' && document.activeElement === q) {
        q.value = '';state.q = '';apply(false);q.blur();
      }
    });
    if ($('#clear')) $('#clear').addEventListener('click', function () {
      state.q = '';state.cat = '';state.fam = '';if (q) q.value = '';apply(false);
    });

    apply(false);

    // stats
    var sg = $('[data-stat="guides"]'),
        st = $('[data-stat="topics"]');
    if (sg) sg.textContent = cards.length;
    if (st) st.textContent = Object.keys(catCount).filter(function (k) {
      return k !== 'firstfridayfeatures' && k !== 'eventhols';
    }).length;
  }

  /* ---------- cover art: each guide gets its own highlighted cell ---------- */
  // cells are [column, row] on the 104x34 grid, kept clear of where the icon sits
  var CELLS = {
    rtile: [[0, 1], [0, 2], [2, 2], [0, 3], [2, 3], [1, 4]],
    feat: [[1, 1], [2, 1], [3, 1], [2, 2], [3, 2], [1, 2], [2, 0], [3, 3]]
  };
  function hashStr(t) {
    var h = 2166136261;for (var i = 0; i < t.length; i++) {
      h ^= t.charCodeAt(i);h = Math.imul(h, 16777619);
    }return h >>> 0;
  }
  function placeCells(scope) {
    $$('.rtile, .feat', scope).forEach(function (el) {
      var list = CELLS[el.classList.contains('rtile') ? 'rtile' : 'feat'];
      var k = hashStr(el.getAttribute('href') || '') % list.length;
      // never repeat the cell of the tile right before it
      var prev = el.previousElementSibling;
      if (prev && prev._cell === k) k = (k + 1) % list.length;
      el._cell = k;
      el.style.setProperty('--hx', list[k][0]);el.style.setProperty('--hy', list[k][1]);
    });
  }
  placeCells(document);
  window.__placeCells = placeCells;

  /* ---------- sticky filters push the site header off the screen ---------- */
  var libBar = $('.lib-bar');
  if (libBar) {
    var mark = document.createElement('div');
    mark.setAttribute('aria-hidden', 'true');
    libBar.parentNode.insertBefore(mark, libBar);
    var root = document.documentElement,
        stuck = false;
    var syncStuck = function syncStuck() {
      // the bar sits where the mark is; once that point reaches the header, the bar takes over the top
      var on = getComputedStyle(libBar).position === 'sticky' && mark.getBoundingClientRect().top < 60;
      if (on === stuck) return;
      stuck = on;
      root.classList.toggle('filters-stuck', on);
      if (on) {
        var cm = $('#gcta-menu');if (cm && !cm.hidden) $('.g-nav .chev').click();
      }
    };
    syncStuck();
    window.addEventListener('scroll', syncStuck, { passive: true });
    window.addEventListener('resize', syncStuck);
  }

  /* ---------- announcement ---------- */
  var news = $('#news');
  if (news) {
    fetch('/data/announcement.json').then(function (r) {
      return r.json();
    }).then(function (d) {
      if (!d || !d.visible || !d.message) return;
      var tmp = new DOMParser().parseFromString('<!doctype html><body>' + d.message, 'text/html').body;
      var a = tmp.querySelector('a');
      var href = a ? a.getAttribute('href') : '#library';
      if (!/^(https?:\/\/|\/|#)/i.test(href || '')) href = '#library';
      if (a) a.parentNode.removeChild(a);
      try {
        var u = new URL(href, location.href);if (/quickstarts\.sigmacomputing\.com$/.test(u.hostname)) href = u.pathname + u.search + (u.search.indexOf('cat=') > -1 ? '#library' : u.hash);
      } catch (e) {/* keep */}
      var parts = '';
      Array.prototype.forEach.call(tmp.childNodes, function (n) {
        var t = (n.textContent || '').replace(/\s+/g, ' ');
        if (!t.trim() && n.nodeType !== 3) return;
        parts += n.nodeType === 1 && /^(STRONG|B)$/.test(n.tagName) ? '<b>' + esc2(t.trim()) + '</b>' : esc2(t);
      });
      if (d.title) parts = '<b>' + esc2(d.title) + '</b> ' + parts;
      parts = parts.replace(/\s+[—–]\s+/g, ': ');
      setHTML($('.txt', news), parts.replace(/[\s—–-]+$/, '').replace(/\s+(<b>)/g, ' $1').trim());
      news.href = href;
      news.hidden = false;
    }).catch(function () {});
  }
  function esc2(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* ---------- recently added ---------- */
  var recent = $('#recent');
  if (recent && grid) {
    fetch('/data/featured-quickstarts.json').then(function (r) {
      return r.json();
    }).then(function (d) {
      var list = d && d.recentQuickStarts || [];
      var brecent = $('#brecent');
      var out = brecent ? $('.rcards', brecent) : $('#recent-cards'),
          n = 0,
          now = Date.now(),
          fresh = 0;
      list.forEach(function (qs) {
        var t = Date.parse(qs.date);
        if (!isNaN(t) && now - t < 30 * 864e5) fresh++;
        if (n >= 10) return;
        var src = grid.querySelector('.card[data-id="' + qs.id + '"]');
        // sigmacomputing.com resource tile: framed 16:9 image, then badge, title, description, date
        // guides outside this view (First Friday Features) have no card here; build their tile from the list itself
        var cat = src ? src.getAttribute('data-cat') : qs.category || '',
            d = src && $('.desc', src);
        var t = document.createElement('a');
        t.className = 'rtile';t.href = src ? src.getAttribute('href') : '/guide/' + qs.id + '/index.html?index=..%2F..index';
        t.setAttribute('data-fam', famOf(cat));if (src) t.setAttribute('data-ci', src.getAttribute('data-ci'));
        setHTML(t, '<div class="img"><div class="art" aria-hidden="true"><span class="cv"><i class="ci" data-cat="' + esc(cat) + '"></i></span></div>' + '<span class="badge">' + esc2(LABELS[cat] || cat) + '</span></div>' + '<div class="b"><h3 class="ttl">' + esc2(src ? src._title || src.getAttribute('data-title') : qs.title) + '</h3>' + (d ? '<p class="desc">' + esc2(d.textContent.trim()) + '</p>' : '') + '<span class="dt">' + (qs.date ? 'Added ' + esc2(qs.date.replace(/,\s*\d{4}$/, '')) : '') + (src ? (qs.date ? ' · ' : '') + mins(src.getAttribute('data-duration')) : '') + '</span></div>');
        out.appendChild(t);n++;
      });
      var sn = $('[data-stat="new"]');if (sn) sn.textContent = fresh;
      if (n) {
        if (brecent) brecent.hidden = false;else recent.hidden = false;
      }
      placeCells(out);
      if (n && location.hash === '#library') {
        var lb = $('#library');if (lb) lb.scrollIntoView();
      }
    }).catch(function () {});
  }

  /* ---------- hero guide window: steps through a real QuickStart ---------- */
  var win = $('#win');
  if (win) {
    var show = function show(i, instant) {
      cur = i;
      var swap = function swap() {
        setHTML(pane, steps[i].html);pane.classList.remove('out');
      };
      if (instant || reduce) {
        swap();
      } else {
        pane.classList.add('out');setTimeout(swap, 300);
      }
      rail.forEach(function (r, k) {
        r.classList.toggle('on', k === i);r.classList.toggle('done', k < i);
      });
      bar.style.width = steps[i].pct + '%';
      left.textContent = steps[i].min + ' min left';
      back.style.visibility = i === 0 ? 'hidden' : 'visible';
    };

    var stop = function stop() {
      clearTimeout(timer);timer = null;played = true;
    };

    var play = function play() {
      if (played || reduce) return;
      timer = setTimeout(function step() {
        if (cur >= steps.length - 1) {
          played = true;return;
        } // hold on the last step
        show(cur + 1);
        timer = setTimeout(step, 4200);
      }, 3600);
    };

    var steps = [{ min: 50, pct: 12, html: null }, { min: 40, pct: 34, html: '<p class="st">Create a Workbook and Add Your Data</p>' + '<p>Every Sigma agent needs something to reason over. Before building the agent itself, give it a home (a workbook) and a data source it\'s allowed to see.</p>' + '<p>From Sigma Home, click <b style="color:#111114;font-weight:600">Create New</b> and select <b style="color:#111114;font-weight:600">Workbook</b>. Then click <b style="color:#111114;font-weight:600">Save as</b> and name it:</p>' + '<pre>My First Sigma Agent - QuickStart</pre>' }, { min: 30, pct: 62, html: '<p class="st">Build the Sigma Agent</p>' + '<p>The workbook has a data source now. This is where the agent that reasons over it gets built.</p>' + '<div class="co"><span><b>Open the Agents panel.</b> Click a blank area of the canvas to deselect any element. In the right panel, click the Agents tab.</span></div>' + '<div class="shot"><div class="sb"><b></b><b style="width:22px"></b></div><div class="sc">' + '<span class="h">Region</span><span class="h">Store</span><span class="h n">Orders</span><span class="h n">Revenue</span><span class="h n">Margin</span>' + '<span>West</span><span>Seattle</span><span class="n sel">1,284</span><span class="n sel">$412,330</span><span class="n">31.2%</span>' + '<span>West</span><span>Portland</span><span class="n sel">966</span><span class="n sel">$287,915</span><span class="n">29.8%</span>' + '<span>Central</span><span>Denver</span><span class="n">1,102</span><span class="n">$340,207</span><span class="n">30.4%</span></div></div>' }, { min: 15, pct: 86, html: '<p class="st">Add a Chat Element and Test It</p>' + '<p>The agent exists, but nothing on the page can talk to it yet. A chat element is the interface. The agent underneath is the same one you just built.</p>' + '<div class="co"><span><b>Add the chat element.</b> Click + next to the page tabs to add a new page, then point a chat element at your agent.</span></div>' + '<p>Ask it a question about your data and read how it reasons through the request.</p>' }];
    var pane = $('.pane', win),
        rail = $$('.rail span', win),
        bar = $('.prog i', win),
        left = $('[data-left]', win);
    var back = $('.nx span:first-child', win),
        next = $('.nx span.p', win);
    steps[0].html = pane.innerHTML;
    // the last rail item ("What we've covered") is a stop in the guide but not drawn here
    var cur = 0,
        timer = null,
        played = false;

    rail.forEach(function (r, k) {
      if (k >= steps.length) {
        r.style.cursor = 'default';return;
      }
      r.addEventListener('click', function () {
        stop();show(k);
      });
    });
    next.addEventListener('click', function () {
      stop();show(Math.min(cur + 1, steps.length - 1));
    });
    back.addEventListener('click', function () {
      stop();show(Math.max(cur - 1, 0));
    });
    show(0, true);
    // start once, when the window is on screen
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        if (es[0].isIntersecting) {
          io.disconnect();play();
        }
      }, { threshold: 0.4 });
      io.observe(win);
    } else {
      play();
    }
  }
})();