console.log("FILE KELOAD");
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

    function loadCSS() {
        if (document.getElementById("apr-css")) return;

        const link = document.createElement("link");
        link.id = "apr-css";
        link.rel = "stylesheet";
        link.href = CONFIG.css;
        document.head.appendChild(link);
    }

    function injectUI() {
        if (document.getElementById("apr-1303223025-panel")) return;

        document.body.insertAdjacentHTML("beforeend", `
            <div id="apr-1303223025-panel" class="accessibility-panel hide">

                <div class="apr-header">
                    <span>Aksesibilitas</span>
                    <button data-apr-panel-toggle>✕</button>
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
                    <button data-apr-voice>Voice</button>

                    <button data-apr-magnifier>Magnifier</button>
                </div>
            </div>

            <div id="apr-1303223025-tab"
                 class="accessibility-tab"
                 data-apr-panel-toggle>♿</div>
        `);

        console.log("UI injected");
    }

    function loadBundles() {
        CONFIG.bundles.forEach(src => {
            const s = document.createElement("script");
            s.src = src;
            s.defer = true;
            document.body.appendChild(s);
        });
    }

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
