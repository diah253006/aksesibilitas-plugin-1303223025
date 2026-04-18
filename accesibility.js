(function () {

    if (window.__APR_ACCESSIBILITY__) return;
    window.__APR_ACCESSIBILITY__ = true;

    console.log("APR ACCESSIBILITY INIT");

    const BASE = "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest";

    // =============================
    // 1. LOAD CSS
    // =============================
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = BASE + "/aksesibilitas.css";
    document.head.appendChild(css);

    // =============================
    // 2. INJECT UI
    // =============================
    function injectUI() {

        if (document.getElementById("apr-1303223025-panel")) return;

        const panel = document.createElement("div");
        panel.id = "apr-1303223025-panel";
        panel.className = "apr-1303223025-panel apr-1303223025-hide";

        panel.innerHTML = `
            <div class="apr-header">
                <span>Aksesibilitas</span>
                <button data-apr-toggle>✕</button>
            </div>

            <div class="apr-body">
                <button data-apr-images>Gambar</button>
                <button data-apr-contrast>Kontras</button>
                <button data-apr-animation>Animasi</button>
                <button data-apr-mono>Mono</button>
                <button data-apr-cursor>Cursor</button>

                <button data-apr-font-increase>+</button>
                <button data-apr-font-decrease>-</button>

                <button data-apr-tts>Baca</button>
                <button data-apr-tts-stop>Stop</button>

                <button data-apr-zoom-in>Zoom +</button>
                <button data-apr-zoom-out>Zoom -</button>
                <button data-apr-zoom-reset>Reset</button>

                <button data-apr-magnifier>Magnifier</button>
            </div>
        `;

        document.body.appendChild(panel);

        const tab = document.createElement("div");
        tab.id = "apr-1303223025-tab";
        tab.className = "apr-1303223025-tab";
        tab.setAttribute("data-apr-toggle", "");
        tab.innerHTML = "♿";

        // 🔥 fallback style supaya selalu terlihat
        Object.assign(tab.style, {
          position: "fixed",
          right: "0",
          top: "50%",
          transform: "translateY(-50%)",
          width: "60px",
          height: "60px",
          background: "#2d5bff",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          zIndex: "9999999",
          cursor: "pointer"
        });
        document.body.appendChild(tab);
    }

    // =============================
    // 3. LOAD SCRIPT SEQUENTIAL
    // =============================
    function loadScripts(list, i = 0) {
        if (i >= list.length) return;

        const s = document.createElement("script");
        s.src = list[i];
        s.onload = () => loadScripts(list, i + 1);
        document.body.appendChild(s);
    }

    const v = "?v=3";
        BASE + "/bundle/tampilan.bundle.js",
        BASE + "/bundle/teks.bundle.js",
        BASE + "/bundle/aksesibilitas.bundle.js"
    ];

    function init() {
        injectUI();
        loadScripts(scripts);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
