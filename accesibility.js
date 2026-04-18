(function () {

    console.log("ACCESSIBILITY PLUGIN INIT");

    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025/aksesibilitas.css";
    document.head.appendChild(css);

    const scripts = [
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/tampilan.bundle.js",
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/teks.bundle.js",
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/aksesibilitas.bundle.js"
    ];

    scripts.forEach(src => {
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        document.body.appendChild(s);
    });

    function injectPanel() {

        if (document.getElementById("accessibilityPanel")) return;

        const panel = document.createElement("div");
        panel.id = "accessibilityPanel";
        panel.className = "accessibility-panel hide";

        panel.innerHTML = `
    <div class="apr-header">
        <span>Menu Aksesibilitas</span>
        <button class="apr-close" data-apr-panel-toggle>✕</button>
    </div>

    <div class="apr-body">

            <h5>Aksesibilitas</h5>

            <button data-apr-images>Gambar</button>
            <button data-apr-contrast>Contrast</button>
            <button data-apr-animation>Animasi</button>
            <button data-apr-mono>Mono</button>
            <button data-apr-cursor>Cursor</button>

            <button data-apr-font-increase>+</button>
            <button data-apr-font-decrease>-</button>

            <button data-apr-tts>Baca</button>
            <button data-apr-voice>Voice</button>

            <button data-apr-magnifier>Magnifier</button>
    </div>
        `;

        document.body.appendChild(panel);

        const tab = document.createElement("div");
        tab.id = "accessibilityTab";
        tab.className = "accessibility-tab";
        tab.setAttribute("data-apr-panel-toggle", "");
        tab.innerHTML = "♿";

        document.body.appendChild(tab);

        // FIX: toggle panel
       

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectPanel);
    } else {
        injectPanel();
    }

})();
