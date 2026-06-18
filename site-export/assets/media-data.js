(function () {
  "use strict";

  // Source: conradasia.com Investor Centre — Media (order preserved)
  var ITEMS = [
    { date: "05 March 2026", source: "Petroleum Australia", title: "Conrad Asia Energy reaches FID for Mako development", url: "https://petroleumaustralia.com.au/projects/conrad-approves-fid-for-mako-development/" },
    { date: "03 March 2026", source: "Offshore Energy", title: "Millions committed to bring Southeast Asian gas field to life", url: "https://www.offshore-energy.biz/millions-committed-to-bring-southeast-asian-gas-field-to-life/" },
    { date: "23 February 2026", source: "Market Screener", title: "Empyrean Energy finalises cash call settlement with Conrad Asia Energy", url: "https://www.marketscreener.com/news/empyrean-energy-finalises-cash-call-settlement-with-conrad-asia-energy-ce7e5dd2de8cf420" },
    { date: "30 January 2026", source: "Upstream", title: "UK-listed player agrees deal to stay in Indonesia gas project", url: "https://www.upstreamonline.com/field-development/uk-listed-player-agrees-deal-to-stay-in-indonesia-gas-project/2-1-1936545" },
    { date: "20 November 2025", source: "Upstream Online", title: "Conrad advancing to Indonesia gas project FID", url: "https://www.upstreamonline.com/field-development/conrad-advancing-to-indonesia-gas-project-fid/2-1-1903068" },
    { date: "20 November 2025", source: "Kalkine", title: "Conrad Extends Gas Ambitions Through All Ordinaries Energy Landscape", url: "https://kalkinemedia.com/au/stocks/energy/conrad-asia-energy-extends-regional-gas-ambitions-through-all-ordinaries-energy-landscape" },
    { date: "28 October 2025", source: "Upstream Online", title: "Conrad seeks farm-in partner for gas-rich offshore assets", url: "https://www.upstreamonline.com/exploration/conrad-seeks-farm-in-partner-for-gas-rich-offshore-assets/2-1-1891345" },
    { date: "12 August 2025", source: "Offshore Energy", title: "Conrad advances seismic, drilling, and farm-in plans for Indonesian assets", url: "https://www.offshore-energy.biz/conrad-advances-seismic-drilling-and-farm-in-plans-for-indonesian-assets/" },
    { date: "22 July 2025", source: "Offshore Magazine", title: "Conrad confirms reallocation of offshore Mako Field gas to Indonesian utility", url: "https://www.offshore-mag.com/regional-reports/asia/news/55304659/conrad-asia-energy-conrad-confirms-reallocation-of-offshore-mako-field-gas-to-indonesian-utility" },
    { date: "20 May 2025", source: "Energy News Bulletin", title: "Conrad increases stake in Duyung PSC to 91.5%", url: "https://www.energynewsbulletin.net/operations/news-analysis/4414069/conrad-increases-stake-duyung-psc-91" },
    { date: "19 May 2025", source: "Upstream", title: "Conrad Asia Energy beefs up Indonesia asset stake as partner bows out ahead of FID", url: "https://www.upstreamonline.com/finance/conrad-asia-energy-beefs-up-indonesia-asset-stake-as-partner-bows-out-ahead-of-fid/2-1-1821069" },
    { date: "10 April 2025", source: "Offshore Energy", title: "Southeast Asian player offloads stake in gas field as it shifts to clean energy", url: "https://www.offshore-energy.biz/southeast-asian-player-offloads-stake-in-gas-field-as-it-shifts-to-clean-energy/" },
    { date: "13 March 2025", source: "Stockhead", title: "Indonesia to vacuum up Conrad's Mako gas to meet strong domestic demand", url: "https://stockhead.com.au/energy/indonesia-to-vacuum-up-conrads-mako-gas-to-meet-strong-domestic-demand/" },
    { date: "25 January 2025", source: "Upstream", title: "Conrad to unveil new timeline, capex for Indonesian gas project", url: "https://www.upstreamonline.com/field-development/conrad-to-unveil-new-timeline-capex-for-indonesian-gas-project-after-fid-not-taken-in-2024/2-1-1770596" },
    { date: "16 December 2024", source: "Herald Sun", title: "Road to 2025: CRD tapping into Asia's booming gas demand", url: "https://www.heraldsun.com.au/business/stockhead/road-to-2025-crd-tapping-into-asias-booming-gas-demand/news-story/38019c3e20fae4f4f56e512985ef5c0e" },
    { date: "21 November 2024", source: "Petroleum Australia", title: "Conrad Asia Energy advances Aceh gas commercialisation", url: "https://petroleumaustralia.com.au/news_article/conrad-asia-energy-advances-aceh-gas-commercialisation/" },
    { date: "21 November 2024", source: "Stockhead", title: "Conrad Asia Energy identifies small-scale LNG as Aceh gas development option", url: "https://stockhead.com.au/energy/conrad-asia-energy-identifies-small-scale-lng-as-aceh-gas-development-option/" },
    { date: "05 November 2024", source: "Stockhead", title: "Rock Yarns: Growing gas in Asia with Conrad Asia Energy", url: "https://stockhead.com.au/energy/rock-yarns-growing-gas-in-asia-with-conrad-asia-energy/" },
    { date: "29 September 2024", source: "The Australian", title: "Asia's the engine of global growth and it's hungry for gas", url: "https://www.theaustralian.com.au/business/stockhead/news/asias-the-engine-of-global-growth-and-its-hungry-for-gas/news-story/bc99bfbbdf270edb5157051038b93e4a" },
    { date: "16 September 2024", source: "Rigzone", title: "Conrad Asia Energy Stays in the Red", url: "https://www.rigzone.com/news/conrad_asia_energy_stays_in_the_red-16-sep-2024-178112-article/" },
    { date: "12 September 2024", source: "Proactive Investors", title: "Conrad Asia Energy secures gas sales agreement with leading energy and urban solutions provider Sembcorp", url: "https://www.proactiveinvestors.com.au/companies/news/1056074/conrad-asia-energy-secures-gas-sales-agreement-with-leading-energy-and-urban-solutions-provider-sembcorp-1056074.html" },
    { date: "10 September 2024", source: "The Australian", title: "Emerging Energy Virtual Conference keeps flame burning for gas", url: "https://www.theaustralian.com.au/business/stockhead/content/emerging-energy-virtual-conference-keeps-flame-burning-for-gas/news-story/bd5a3f46f4e316d8a397376d188caca4" },
    { date: "06 September 2024", source: "Offshore Magazine", title: "Sembcorp clinches gas export deal for offshore Indonesia Mako project", url: "https://www.offshore-mag.com/field-development/news/55138002/sembcorp-clinches-gas-export-deal-for-offshore-indonesia-mako-project" },
    { date: "02 September 2024", source: "Upstream Online", title: "Australia-listed player signs crucial gas deal with Singapore's Sembcorp, shares jump 21%", url: "https://www.upstreamonline.com/production/australia-listed-player-signs-crucial-gas-deal-with-singapores-sembcorp-shares-jump-21-/2-1-1702038" },
    { date: "02 September 2024", source: "Herald Sun", title: "CRD close to Mako investment decision after signing key export gas sales deal with Sembcorp", url: "https://www.heraldsun.com.au/business/stockhead/crd-close-to-mako-investment-decision-after-signing-key-export-gas-sales-deal-with-sembcorp/news-story/4a2d6d98702778a8849ab369b72c1150" },
    { date: "13 August 2024", source: "Offshore Energy", title: "More Indonesian gas booked: Pertamina to supply compatriot player with LNG for five more years", url: "https://www.offshore-energy.biz/more-indonesian-gas-booked-pertamina-to-supply-compatriot-player-with-lng-for-five-more-years/" },
    { date: "24 June 2024", source: "Offshore Energy", title: "Strides made in putting all project pieces in place for FID by year-end for gas field offshore Indonesia", url: "https://www.offshore-energy.biz/strides-made-in-putting-all-project-pieces-in-place-for-fid-by-year-end-for-gas-field-offshore-indonesia/" },
    { date: "24 June 2024", source: "The Australian", title: "Conrad signs binding key domestic gas sales deal", url: "https://www.theaustralian.com.au/business/stockhead/content/conrad-signs-binding-key-domestic-gas-sales-deal/news-story/6da2871152cfa856aaf7f66908973036" },
    { date: "01 May 2024", source: "Rigzone", title: "Conrad Asia Reports Progress in Mako Project, Other Indonesian Activities", url: "https://www.rigzone.com/news/conrad_asia_reports_progress_in_mako_project_other_indonesian_activities-01-may-2024-176588-article/" },
    { date: "30 April 2024", source: "Offshore", title: "Conrad targets 3D survey of deepwater acreage in Aceh permits", url: "https://www.offshore-mag.com/deepwater/article/55021964/conrad-targets-3d-survey-of-deepwater-acreage-in-aceh-permits" },
    { date: "04 April 2024", source: "Rigzone", title: "Pertamina, Conrad Asia Agree Terms of Mako Field Gas Sales in Indonesia", url: "https://www.rigzone.com/news/pertamina_conrad_asia_agree_terms_of_mako_field_gas_sales_in_indonesia-04-apr-2024-176301-article/" },
    { date: "01 April 2024", source: "Upstream Online", title: "Conrad firms up gas sales deal, moves towards FID for Indonesian offshore gas field project", url: "https://www.upstreamonline.com/field-development/conrad-firms-up-gas-sales-deal-moves-towards-fid-for-indonesian-offshore-gas-field-project/2-1-1618719" },
    { date: "28 March 2024", source: "Stockhead", title: "Conrad Asia Energy agrees to key terms for Mako domestic gas sales", url: "https://stockhead.com.au/energy/conrad-asia-energy-agrees-to-key-terms-for-mako-domestic-gas-sales/" },
    { date: "25 March 2024", source: "Stockhead", title: "Rock Yarns: Conrad on track to supply world's largest growing energy market", url: "https://stockhead.com.au/energy/rock-yarns-conrad-on-track-to-supply-worlds-largest-growing-energy-market/" },
    { date: "04 March 2024", source: "Stockhead", title: "Conrad Energy Asia inks commercialisation MoU with Indonesia's PT Pertamina for its Aceh gas plays", url: "https://stockhead.com.au/energy/conrad-energy-asia-inks-commercialisation-mou-with-indonesias-pt-pertamina-for-its-aceh-gas-plays/" },
    { date: "02 March 2024", source: "Offshore", title: "Conrad, Pertamina enter gas development MoU in Indonesia", url: "https://www.offshore-mag.com/production/article/14305979/conrad-pertamina-enter-gas-development-mou-in-indonesia" },
    { date: "01 March 2024", source: "Natural Gas World", title: "Conrad Asia Energy, PGN team up to develop Aceh gas resources", url: "https://www.naturalgasworld.com/conrad-asia-energy-pgn-team-up-to-develop-aceh-gas-resources-109990" },
    { date: "24 February 2024", source: "Offshore", title: "Indonesia signs off gas price for offshore Mako field development", url: "https://www.offshore-mag.com/regional-reports/asia/article/14305729/indonesia-signs-off-gas-price-for-offshore-mako-field-development" },
    { date: "23 February 2024", source: "Stockhead", title: "Ministerial approval paves the way for Conrad Asia Energy to hunt Mako gas sales agreements", url: "https://stockhead.com.au/energy/ministerial-approval-paves-the-way-for-conrad-asia-energy-to-hunt-mako-gas-sales-agreements/" },
    { date: "02 February 2024", source: "Stockhead", title: "Oversubscribed $13m placement places Conrad Asia Energy on the fast track towards gas production", url: "https://stockhead.com.au/energy/oversubscribed-13m-placement-places-conrad-asia-energy-on-the-fast-track-towards-gas-production/" },
    { date: "01 February 2024", source: "Offshore", title: "Mako gas project offshore Indonesia moving toward FID", url: "https://www.offshore-mag.com/regional-reports/asia/article/14304498/mako-gas-project-offshore-indonesia-moving-toward-fid" },
    { date: "31 January 2024", source: "Proactive Investors", title: "Empyrean Energy highlights improvements to 'already robust' Mako field economics", url: "https://www.proactiveinvestors.com/companies/news/1039776/empyrean-energy-highlights-improvements-to-already-robust-mako-field-economics-1039776.html" },
    { date: "31 January 2024", source: "Energy-Pedia News", title: "Indonesia: Conrad Asia Energy provides quarterly activities report for the period ending 31 December 2023", url: "https://www.energy-pedia.com/news/indonesia/indonesia--conrad-asia-energy-provides-quarterly-activities-report-for-the-period-ending-31-december-2023-194062" }
  ];

  var PAGE_SIZE = 10;
  var page = 1;
  var totalPages = Math.ceil(ITEMS.length / PAGE_SIZE);
  var listEl = document.getElementById("mediaList");
  var pagerEl = document.getElementById("mediaPager");
  if (!listEl || !pagerEl) return;

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function renderList() {
    var start = (page - 1) * PAGE_SIZE;
    var slice = ITEMS.slice(start, start + PAGE_SIZE);
    listEl.innerHTML = slice.map(function (it) {
      return '<a class="media-item" href="' + esc(it.url) + '" target="_blank" rel="noopener">' +
        '<span class="mi-date">' + esc(it.date) + '</span>' +
        '<span class="mi-source">' + esc(it.source) + '</span>' +
        '<span class="mi-title">' + esc(it.title) + '</span>' +
        '<span class="mi-link">Read More <span class="arr">&rarr;</span></span>' +
        '</a>';
    }).join("");
  }

  function go(p) {
    page = Math.min(Math.max(1, p), totalPages);
    renderList();
    renderPager();
    var anchor = document.querySelector(".media-list");
    if (anchor) window.scrollTo({ top: anchor.getBoundingClientRect().top + window.pageYOffset - 140, behavior: "smooth" });
  }

  function pageButton(p) {
    var b = document.createElement("button");
    b.textContent = p;
    if (p === page) b.className = "active";
    else b.addEventListener("click", function () { go(p); });
    return b;
  }

  function gap() {
    var s = document.createElement("span");
    s.className = "pg-gap";
    s.textContent = "…";
    return s;
  }

  function renderPager() {
    pagerEl.innerHTML = "";
    if (totalPages <= 1) return;

    var prev = document.createElement("button");
    prev.className = "pg-arrow";
    prev.setAttribute("aria-label", "Previous page");
    prev.innerHTML = "&larr;";
    if (page === 1) prev.setAttribute("disabled", "");
    else prev.addEventListener("click", function () { go(page - 1); });
    pagerEl.appendChild(prev);

    // windowed page numbers: first, last, current ±1
    var pages = [];
    for (var i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) pages.push(i);
    }
    var last = 0;
    pages.forEach(function (p) {
      if (last && p - last > 1) pagerEl.appendChild(gap());
      pagerEl.appendChild(pageButton(p));
      last = p;
    });

    var next = document.createElement("button");
    next.className = "pg-arrow";
    next.setAttribute("aria-label", "Next page");
    next.innerHTML = "&rarr;";
    if (page === totalPages) next.setAttribute("disabled", "");
    else next.addEventListener("click", function () { go(page + 1); });
    pagerEl.appendChild(next);
  }

  renderList();
  renderPager();

  /* ===================== VIDEOS ===================== */
  var VIDEOS = [
    { type: "youtube", id: "-RG2FjjcxXM", date: "17 July 2025", title: "Gas Sale Agreement Signed with PLN EPI", thumb: "https://conradasia.com/wp-content/uploads/2025/07/Screenshot-2025-07-28-at-07.29.39-scaled.png" },
    { type: "link", url: "https://www.proactiveinvestors.com/companies/news/1056273/conrad-asia-energy-secures-gas-sales-agreement-with-sembcorp-1056273.html", date: "16 September 2024", title: "Conrad Asia Energy secures gas sales agreement with Sembcorp", thumb: "https://conradasia.com/wp-content/uploads/2024/10/Media-376X271-Proactive-Investors-Sept162024.jpg" },
    { type: "link", url: "https://stockhead.com.au/stockhead-tv/break-it-down/break-it-down-conrad-marks-milestone-gsa/", date: "02 September 2024", title: "Break it Down: Conrad marks milestone GSA", thumb: "https://conradasia.com/wp-content/uploads/2024/09/Media-379X230-Sept2024.jpg" }
  ];

  var V_PAGE_SIZE = 6;
  var vPage = 1;
  var vTotal = Math.ceil(VIDEOS.length / V_PAGE_SIZE);
  var gridEl = document.getElementById("videoGrid");
  var vPagerEl = document.getElementById("videoPager");
  var lb = document.getElementById("videoLightbox");
  var lbFrame = document.getElementById("vlbFrame");
  var lbClose = document.getElementById("vlbClose");

  function openVideo(id) {
    if (!lb || !lbFrame) return;
    lbFrame.innerHTML = '<iframe src="https://www.youtube.com/embed/' + encodeURIComponent(id) +
      '?autoplay=1&rel=0" title="Video player" allow="accelerated-disabling; autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>';
    lb.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeVideo() {
    if (!lb || !lbFrame) return;
    lb.classList.remove("open");
    lbFrame.innerHTML = "";
    document.body.style.overflow = "";
  }
  if (lbClose) lbClose.addEventListener("click", closeVideo);
  if (lb) lb.addEventListener("click", function (e) { if (e.target === lb) closeVideo(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeVideo(); });

  function renderVideos() {
    if (!gridEl) return;
    var start = (vPage - 1) * V_PAGE_SIZE;
    var slice = VIDEOS.slice(start, start + V_PAGE_SIZE);
    gridEl.innerHTML = "";
    slice.forEach(function (v) {
      var card;
      if (v.type === "youtube") {
        card = document.createElement("button");
        card.type = "button";
        card.addEventListener("click", function () { openVideo(v.id); });
      } else {
        card = document.createElement("a");
        card.href = v.url;
        card.target = "_blank";
        card.rel = "noopener";
      }
      card.className = "video-card";
      var fallback = v.type === "youtube" ? "https://img.youtube.com/vi/" + v.id + "/hqdefault.jpg" : "";
      card.innerHTML =
        '<div class="video-thumb">' +
          '<img src="' + esc(v.thumb) + '" alt="' + esc(v.title) + '" loading="lazy"' +
            (fallback ? ' onerror="this.onerror=null;this.src=\'' + fallback + '\'"' : "") + '>' +
          '<span class="video-play" aria-hidden="true"></span>' +
        '</div>' +
        '<div class="video-date">' + esc(v.date) + '</div>' +
        '<div class="video-title">' + esc(v.title) + '</div>';
      gridEl.appendChild(card);
    });
  }

  function renderVPager() {
    if (!vPagerEl) return;
    vPagerEl.innerHTML = "";
    if (vTotal <= 1) return;
    var prev = document.createElement("button");
    prev.className = "pg-arrow"; prev.setAttribute("aria-label", "Previous page"); prev.innerHTML = "&larr;";
    if (vPage === 1) prev.setAttribute("disabled", ""); else prev.addEventListener("click", function () { goV(vPage - 1); });
    vPagerEl.appendChild(prev);
    for (var i = 1; i <= vTotal; i++) {
      (function (p) {
        var b = document.createElement("button");
        b.textContent = p;
        if (p === vPage) b.className = "active"; else b.addEventListener("click", function () { goV(p); });
        vPagerEl.appendChild(b);
      })(i);
    }
    var next = document.createElement("button");
    next.className = "pg-arrow"; next.setAttribute("aria-label", "Next page"); next.innerHTML = "&rarr;";
    if (vPage === vTotal) next.setAttribute("disabled", ""); else next.addEventListener("click", function () { goV(vPage + 1); });
    vPagerEl.appendChild(next);
  }

  function goV(p) {
    vPage = Math.min(Math.max(1, p), vTotal);
    renderVideos();
    renderVPager();
    var anchor = document.getElementById("videoGrid");
    if (anchor) window.scrollTo({ top: anchor.getBoundingClientRect().top + window.pageYOffset - 140, behavior: "smooth" });
  }

  renderVideos();
  renderVPager();
})();
