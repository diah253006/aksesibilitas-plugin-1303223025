(function () {
    console.log("ACCESSIBILITY LOADER INIT");

    const CONFIG = {
        css: "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/aksesibilitas.css",
        bundles: [
            "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/tampilan.bundle.js",
            "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/teks.bundle.js",
            "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/aksesibilitas.bundle.js"
        ]
    };

    // =============================
    // 1. LOAD CSS (ONCE)
    // =============================
    function loadCSS() {
        if (document.getElementById("apr-css")) return;

        const link = document.createElement("link");
        link.id = "apr-css";
        link.rel = "stylesheet";
        link.href = CONFIG.css;

        document.head.appendChild(link);
    }

    // =============================
    // 2. INJECT UI (SINGLE SOURCE)
    // =============================
    function injectUI() {
        if (document.getElementById("accessibilityPanel")) return;

        const panel = document.createElement("div");
        panel.id = "accessibilityPanel";
        panel.className = "apr-1303223025-panel apr-1303223025-hide";

        panel.innerHTML = `
            <div class="apr-header">
                <span>Aksesibilitas</span>
                <button class="apr-close" data-apr-panel-toggle>✕</button>
            </div>

            <div class="apr-body">

                <h6>Tampilan</h6>
                <button data-apr-images>Gambar</button>
                <button data-apr-contrast-toggle>Kontras</button>
                <button data-apr-animation>Animasi</button>
                <button data-apr-mono>Mono</button>
                <button data-apr-cursor>Cursor</button>

                <h6>Teks</h6>
                <button data-apr-font-increase>+</button>
                <button data-apr-font-decrease>-</button>

                <h6>Akses</h6>
                <button data-apr-tts>Baca</button>
                <button data-apr-tts-stop>Stop</button>
                <button data-apr-voice>Voice</button>
                <button data-apr-voice-stop>Stop Voice</button>
                <button data-apr-zoom-in>Zoom +</button>
                <button data-apr-zoom-out>Zoom -</button>
                <button data-apr-zoom-reset>Reset Zoom</button>
                <button data-apr-magnifier>Magnifier</button>

            </div>
        `;

        document.body.appendChild(panel);

        const tab = document.createElement("div");
        tab.id = "accessibilityTab";
        tab.className = "apr-1303223025-tab";
        tab.setAttribute("data-apr-panel-toggle", "");
        tab.innerHTML = "♿";

        document.body.appendChild(tab);

        console.log("UI injected");
    }

    // =============================
    // 3. LOAD BUNDLES (ORDERED)
    // =============================
    function loadBundles() {
        CONFIG.bundles.forEach(src => {
            const script = document.createElement("script");
            script.src = src;
            script.defer = true;
            document.body.appendChild(script);
        });
    }

    // =============================
    // INIT (SAFE)
    // =============================
    function init() {
        loadCSS();
        injectUI();
        loadBundles();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
