<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="ArchaeoKZ — Open Encyclopedia of Central Asian Archaeology. Artifacts, cultures and history for researchers, students and the curious.">
  <meta name="keywords" content="archaeology, Kazakhstan, Bronze Age, Andronovo culture, artifacts, ceramics, jewelry">
  <meta property="og:title"       content="ArchaeoKZ — Open Encyclopedia of Archaeology">
  <meta property="og:description" content="Explore Bronze Age artifacts of Central Asia in open access.">
  <title>ArchaeoKZ — Open Encyclopedia of Archaeology</title>
  <link rel="stylesheet" href="styles.css">

  <style>
    /* ── THEME TOGGLE BUTTON ───────────────────────── */
    .theme-btn {
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 6px 14px;
      border-radius: 20px;
      border: 1px solid rgba(200,149,42,0.35);
      background: rgba(200,149,42,0.08);
      color: var(--gold-l, #e8b94f);
      font-size: 13px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.25s ease;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .theme-btn:hover {
      background: rgba(200,149,42,0.18);
      border-color: rgba(200,149,42,0.6);
    }
    .theme-btn .tb-icon { font-size: 15px; }

    /* ── LIGHT THEME OVERRIDES ─────────────────────── */
    html[data-theme="light"] {
      --bg-primary:   #f4ede0;
      --bg-secondary: #ede3d0;
      --bg-card:      #fdf8f0;
      --bg-sidebar:   #ede3d0;
      --bg-nav:       #e8dcc8;
      --border-col:   rgba(100,70,20,0.18);
      --text1:        #1a1208;
      --text2:        #3a2a10;
      --text3:        #6b5530;
      --gold-l:       #8b6014;
      --gold-d:       #c8952a;
      --shadow:       0 2px 16px rgba(80,50,10,0.13);
    }

    html[data-theme="light"] body {
      background-color: #f4ede0;
      color: #1a1208;
    }

    html[data-theme="light"] .navbar {
      background: rgba(232,220,200,0.97);
      border-bottom-color: rgba(100,70,20,0.18);
    }

    html[data-theme="light"] .sidebar {
      background: rgba(237,227,208,0.97);
      border-right-color: rgba(100,70,20,0.15);
    }

    html[data-theme="light"] .sidebar-item {
      color: #3a2a10;
    }

    html[data-theme="light"] .sidebar-item:hover,
    html[data-theme="light"] .sidebar-item.active {
      background: rgba(200,149,42,0.15);
      color: #8b6014;
    }

    html[data-theme="light"] .sb-title {
      color: #8b6014;
      border-bottom-color: rgba(100,70,20,0.15);
    }
    
    html[data-theme="light"] .sidebar-item.sb-ai-tool {
      background: rgba(200,149,42,0.1);
      border-color: rgba(200,149,42,0.4);
      color: #8b6014;
    }
    html[data-theme="light"] .sidebar-item.sb-ai-tool:hover {
      background: rgba(200,149,42,0.2);
    }

    html[data-theme="light"] .artifact-card {
      background: #fdf8f0;
      border-color: rgba(100,70,20,0.15);
      box-shadow: 0 2px 12px rgba(80,50,10,0.08);
    }

    html[data-theme="light"] .artifact-card:hover {
      border-color: rgba(200,149,42,0.5);
      box-shadow: 0 8px 28px rgba(80,50,10,0.15);
    }

    html[data-theme="light"] .card-title { color: #1a1208; }
    html[data-theme="light"] .card-sub   { color: #6b5530; }
    html[data-theme="light"] .card-abstract { color: #3a2a10; }

    html[data-theme="light"] .list-card {
      background: #fdf8f0;
      border-color: rgba(100,70,20,0.15);
    }

    html[data-theme="light"] .hero {
      background: linear-gradient(135deg, rgba(200,149,42,0.07) 0%, rgba(237,227,208,0.5) 100%);
      border-color: rgba(200,149,42,0.2);
    }

    html[data-theme="light"] .hero-title { color: #1a1208; }
    html[data-theme="light"] .hero-text  { color: #3a2a10; }
    html[data-theme="light"] .hs-val     { color: #8b6014; }
    html[data-theme="light"] .hs-label   { color: #6b5530; }

    html[data-theme="light"] .cat-pill {
      background: rgba(100,70,20,0.07);
      border-color: rgba(100,70,20,0.2);
      color: #3a2a10;
    }
    html[data-theme="light"] .cat-pill.active,
    html[data-theme="light"] .cat-pill:hover {
      background: rgba(200,149,42,0.18);
      border-color: #c8952a;
      color: #8b6014;
    }

    html[data-theme="light"] .toolbar {
      background: rgba(237,227,208,0.7);
      border-color: rgba(100,70,20,0.15);
      color: #3a2a10;
    }

    html[data-theme="light"] .sort-select {
      background: #fdf8f0;
      border-color: rgba(100,70,20,0.25);
      color: #1a1208;
    }

    html[data-theme="light"] .view-btn {
      background: rgba(100,70,20,0.07);
      border-color: rgba(100,70,20,0.2);
      color: #3a2a10;
    }
    html[data-theme="light"] .view-btn.active {
      background: rgba(200,149,42,0.2);
      color: #8b6014;
    }

    html[data-theme="light"] .article-infobox {
      background: #fdf8f0;
      border-color: rgba(100,70,20,0.18);
    }

    html[data-theme="light"] .infobox-header {
      background: rgba(200,149,42,0.12);
      border-bottom-color: rgba(100,70,20,0.15);
    }

    html[data-theme="light"] .infobox-row {
      border-bottom-color: rgba(100,70,20,0.08);
    }

    html[data-theme="light"] .info-label { color: #8b6014; }
    html[data-theme="light"] .info-value { color: #1a1208; }

    html[data-theme="light"] .article-title  { color: #1a1208; }
    html[data-theme="light"] .article-subtitle { color: #6b5530; }

    html[data-theme="light"] .article-abstract {
      background: rgba(200,149,42,0.08);
      border-left-color: #c8952a;
      color: #3a2a10;
    }

    html[data-theme="light"] .article-body h3 { color: #8b6014; }
    html[data-theme="light"] .article-body p  { color: #2a1e08; }

    html[data-theme="light"] .article-tag {
      background: rgba(100,70,20,0.08);
      border-color: rgba(100,70,20,0.2);
      color: #6b5530;
    }
    html[data-theme="light"] .article-tag:hover {
      background: rgba(200,149,42,0.18);
      color: #8b6014;
    }

    html[data-theme="light"] .bc-link { color: #8b6014; }

    html[data-theme="light"] .nav-logo-text { color: #8b6014; }
    html[data-theme="light"] .nav-tagline   { color: #6b5530; }
    html[data-theme="light"] .nav-stat-val  { color: #8b6014; }
    html[data-theme="light"] .nav-stat-label { color: #6b5530; }

    html[data-theme="light"] .nav-search {
      background: rgba(255,252,245,0.9);
      border-color: rgba(100,70,20,0.2);
    }
    html[data-theme="light"] .nav-search input {
      color: #1a1208;
    }
    html[data-theme="light"] .nav-search input::placeholder {
      color: #9a7a4a;
    }

    html[data-theme="light"] .meta-tag {
      background: rgba(100,70,20,0.08);
      color: #6b5530;
    }

    html[data-theme="light"] .card-footer {
      border-top-color: rgba(100,70,20,0.1);
    }

    html[data-theme="light"] .footer-period { color: #8b6014; }
    html[data-theme="light"] .footer-link   { color: #c8952a; }

    html[data-theme="light"] .sb-count {
      background: rgba(100,70,20,0.1);
      color: #8b6014;
    }

    html[data-theme="light"] .bg-blobs {
      opacity: 0.25;
    }

    html[data-theme="light"] #bg-canvas {
      opacity: 0.3;
    }

    html[data-theme="light"] .theme-btn {
      border-color: rgba(100,70,20,0.3);
      background: rgba(100,70,20,0.08);
      color: #8b6014;
    }

    html[data-theme="light"] .main-content {
      background: transparent;
    }

    html[data-theme="light"] .related-section h2 { color: #8b6014; }
  </style>
</head>
<body>

<!-- ─── BACKGROUND ─────────────────────────────── -->
<canvas id="bg-canvas"></canvas>
<div class="bg-blobs"></div>

<!-- ─── NAVBAR ────────────────────────────────── -->
<nav class="navbar" role="navigation" aria-label="Main navigation">

  <div class="nav-logo" data-action="home" aria-label="Go to homepage">
    <!-- logo text removed -->
  </div>

  <div class="nav-divider"></div>
  <p class="nav-tagline">Open Encyclopedia of<br>Kazakhstan Archaeology</p>

  <div class="nav-search">
    <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"
         viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
    </svg>
    <input id="search-input" type="search"
           placeholder="Search artifacts, cultures, materials…"
           aria-label="Search the encyclopedia"
           autocomplete="off">
  </div>

  <button class="theme-btn" id="theme-toggle" aria-label="Toggle theme" title="Switch theme">
    <span class="tb-icon" id="theme-icon">☀️</span>
    <span id="theme-label">Light</span>
  </button>

  <div class="nav-stats" aria-label="Encyclopedia statistics">
    <div class="nav-stat">
      <div class="nav-stat-val">7</div>
      <div class="nav-stat-label">Artifacts</div>
    </div>
    <div class="nav-stat">
      <div class="nav-stat-val">4</div>
      <div class="nav-stat-label">Categories</div>
    </div>
    <div class="nav-stat">
      <div class="nav-stat-val">KZ</div>
      <div class="nav-stat-label">Region</div>
    </div>
  </div>
</nav>

<!-- ─── APP LAYOUT ─────────────────────────────── -->
<div class="app-layout">

  <!-- SIDEBAR -->
  <aside class="sidebar" role="navigation" aria-label="Encyclopedia sections">

    <div class="sb-section">
      <div class="sb-title">AI Tool</div>
      <a href="identify.html" class="sidebar-item sb-ai-tool">
        <span class="sb-icon">🤖</span>
        <span>AI Identifier</span>
        <span class="sb-badge">NEW</span>
      </a>
    </div>

    <div class="sb-section">
      <div class="sb-title">Sections</div>
      <ul style="list-style:none">
        <li class="sidebar-item active" data-cat="all">
          <span class="sb-icon">🏛️</span>
          <span>All Artifacts</span>
          <span class="sb-count">7</span>
        </li>
        <li class="sidebar-item" data-cat="ceramics">
          <span class="sb-icon">🏺</span>
          <span>Ceramics</span>
          <span class="sb-count">3</span>
        </li>
        <li class="sidebar-item" data-cat="jewelry">
          <span class="sb-icon">💍</span>
          <span>Jewelry</span>
          <span class="sb-count">1</span>
        </li>
        <li class="sidebar-item" data-cat="stone">
          <span class="sb-icon">🪨</span>
          <span>Stone Objects</span>
          <span class="sb-count">2</span>
        </li>
        <li class="sidebar-item" data-cat="bone">
          <span class="sb-icon">🦴</span>
          <span>Bone Objects</span>
          <span class="sb-count">1</span>
        </li>
      </ul>
    </div>

    <div class="sb-section">
      <div class="sb-title">Period</div>
      <ul style="list-style:none">
        <li class="sidebar-item active" data-cat="all">
          <span class="sb-icon">⏳</span>
          <span>Bronze Age</span>
          <span class="sb-count">7</span>
        </li>
      </ul>
    </div>

    <div class="sb-section">
      <div class="sb-title">Region</div>
      <ul style="list-style:none">
        <li class="sidebar-item active" data-cat="all">
          <span class="sb-icon">📍</span>
          <span>Kazakhstan</span>
          <span class="sb-count">7</span>
        </li>
      </ul>
    </div>

    <div class="sb-section">
      <div class="sb-title">About</div>
      <div style="padding:0 8px;font-size:12px;color:var(--text3);line-height:1.7">
        Encyclopedia created by<br>
        <strong style="color:var(--gold-l)">Gambit Jr.</strong><br>
        as part of Innovation Project<br>
        FLL Season 2024–2025.<br><br>
        Open access for everyone:<br>
        researchers, students<br>
        and the curious.
      </div>
    </div>

  </aside>

  <!-- MAIN -->
  <main class="main-content" role="main">

    <!-- ─── BROWSE VIEW ──────────────────────── -->
    <div id="browse-view">

      <!-- Hero -->
      <section class="hero" aria-labelledby="hero-title">
        <div class="hero-eyebrow">🏺 Open Encyclopedia</div>
        <h1 class="hero-title" id="hero-title">
          Archaeology of<br>Central Asia
        </h1>
        <p class="hero-text">
          Explore Bronze Age artifacts of Kazakhstan in open access.
          For scholars, students and everyone curious about history.
        </p>
        
        <div class="hero-actions">
          <a href="identify.html" class="cta-btn">
            <span class="cta-icon">🤖</span>
            <span>Identify Artifact with AI</span>
          </a>
        </div>

        <div class="hero-stats" aria-label="Collection statistics">
          <div>
            <div class="hs-val">7</div>
            <div class="hs-label">Artifacts</div>
          </div>
          <div>
            <div class="hs-val">~3500</div>
            <div class="hs-label">Years of History</div>
          </div>
          <div>
            <div class="hs-val">4</div>
            <div class="hs-label">Categories</div>
          </div>
        </div>
      </section>

      <!-- Category pills -->
      <div class="cat-pills" role="tablist" aria-label="Filter by category">
        <button class="cat-pill active" data-cat="all"      role="tab">🏛️ All</button>
        <button class="cat-pill"        data-cat="ceramics" role="tab">🏺 Ceramics</button>
        <button class="cat-pill"        data-cat="jewelry"  role="tab">💍 Jewelry</button>
        <button class="cat-pill"        data-cat="stone"    role="tab">🪨 Stone</button>
        <button class="cat-pill"        data-cat="bone"     role="tab">🦴 Bone</button>
      </div>

      <!-- Toolbar -->
      <div class="toolbar" role="toolbar">
        <div class="toolbar-left">
          Found: <strong><span id="result-count">7</span></strong> artifacts
        </div>
        <div class="toolbar-right">
          <select id="sort-select" class="sort-select" aria-label="Sort order">
            <option value="default">Default</option>
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="category">By Category</option>
          </select>
          <div class="view-toggle" role="group" aria-label="Display mode">
            <button class="view-btn active" data-view="grid"
                    title="Grid" aria-label="Grid view">⊞</button>
            <button class="view-btn" data-view="list"
                    title="List" aria-label="List view">☰</button>
          </div>
        </div>
      </div>

      <!-- Cards -->
      <div id="artifacts-container" class="artifacts-grid" role="list"
           aria-label="Artifacts">
        <!-- Rendered by encyclopedia.js -->
      </div>

    </div><!-- /#browse-view -->

    <!-- ─── ARTICLE VIEW ─────────────────────── -->
    <div id="article-view" style="display:none" role="article">
      <!-- Rendered by encyclopedia.js -->
    </div>

  </main>
</div><!-- /.app-layout -->

<script src="encyclopedia.js"></script>
<script>
  // ── THEME TOGGLE ──────────────────────────────────
  const html       = document.documentElement;
  const btn        = document.getElementById('theme-toggle');
  const icon       = document.getElementById('theme-icon');
  const label      = document.getElementById('theme-label');

  const saved = localStorage.getItem('archaeo-theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const next = html.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('archaeo-theme', next);
  });

  function applyTheme(t) {
    html.dataset.theme = t;
    if (t === 'dark') {
      icon.textContent  = '☀️';
      label.textContent = 'Light';
    } else {
      icon.textContent  = '🌙';
      label.textContent = 'Dark';
    }
  }
</script>
</body>
</html>
