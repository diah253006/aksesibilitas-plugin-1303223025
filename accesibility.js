(function () {

    if (window.__APR_LOADED__) return;
    window.__APR_LOADED__ = true;

    console.log("ACCESSIBILITY PLUGIN INIT");

    // =============================
    // 1. LOAD CSS
    // =============================
    const css = document.createElement("link");
    css.rel = "stylesheet";
    css.href = "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/aksesibilitas.css";
    document.head.appendChild(css);

    // =============================
    // 2. INJECT PANEL (FIRST!)
    // =============================
    function injectPanel() {
        if (document.getElementById("accessibilityPanel")) return;

        const panel = document.createElement("div");
        panel.id = "accessibilityPanel";
        panel.className = "accessibility-panel hide";

        panel.innerHTML = `...`; // tetap

        document.body.appendChild(panel);

        const tab = document.createElement("div");
        tab.id = "accessibilityTab";
        tab.className = "accessibility-tab";
        tab.setAttribute("data-apr-panel-toggle", "");
        tab.innerHTML = "♿";

        document.body.appendChild(tab);
    }

    // =============================
    // 3. LOAD SCRIPT BERURUTAN
    // =============================
    function loadScriptsSequentially(list, i = 0) {
        if (i >= list.length) return;

        const s = document.createElement("script");
        s.src = list[i];
        s.onload = () => loadScriptsSequentially(list, i + 1);

        document.body.appendChild(s);
    }

    const scripts = [
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/tampilan.bundle.js",
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/teks.bundle.js",
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/aksesibilitas.bundle.js"
    ];

    function init() {
        injectPanel();
        loadScriptsSequentially(scripts);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }

})();
