// =============================
// REMOVE USERWAY (SAFE & RINGAN)
// =============================
function removeUserWay() {
    document.querySelectorAll(".uwy, .uwif").forEach(el => el.remove());
}

// jalankan awal
removeUserWay();

// retry async
setTimeout(removeUserWay, 1000);
setTimeout(removeUserWay, 3000);

// observer ringan
const observer = new MutationObserver(() => {
    if (document.querySelector(".uwy, .uwif")) {
        removeUserWay();
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});


// =============================
// PLUGIN START
// =============================
(function () {

    console.log("ACCESSIBILITY PLUGIN INIT");

    // =============================
    // LOAD CSS
    // =============================
    if (!document.getElementById("apr-css")) {
        const css = document.createElement("link");
        css.id = "apr-css";
        css.rel = "stylesheet";
        css.href = "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025/aksesibilitas.css";
        document.head.appendChild(css);
    }

    // =============================
    // LOAD JS BUNDLE
    // =============================
    const scripts = [
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/tampilan.bundle.js",
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/teks.bundle.js",
        "https://cdn.jsdelivr.net/gh/VCTryo0304/aksesibilitas-plugin-1303223025@latest/bundle/aksesibilitas.bundle.js"
    ];

    scripts.forEach(src => {
        if (document.querySelector(`script[src="${src}"]`)) return;

        const s = document.createElement("script");
        s.src = src;
        s.defer = true;
        s.onerror = () => console.warn("Gagal load:", src);

        (document.body || document.head).appendChild(s);
    });

    // =============================
    // PANEL UI
    // =============================
    function injectPanel() {

        if (document.getElementById("accessibilityPanel")) return;

        const panel = document.createElement("div");
        panel.id = "accessibilityPanel";
        panel.className = "accessibility-panel hide";

        panel.innerHTML = `
            <button data-apr-panel-toggle>✖</button>
            <h5>Aksesibilitas</h5>

            <button data-apr-magnifier>🔍 Magnifier</button>
        `;

        document.body.appendChild(panel);

        const tab = document.createElement("div");
        tab.id = "accessibilityTab";
        tab.className = "accessibility-tab";
        tab.setAttribute("data-apr-panel-toggle", "");
        tab.innerHTML = `♿`;

        document.body.appendChild(tab);
    }

    // =============================
    // TOGGLE PANEL
    // =============================
    document.addEventListener("click", function (e) {
        const toggle = e.target.closest("[data-apr-panel-toggle]");
        if (!toggle) return;

        const panel = document.getElementById("accessibilityPanel");
        if (panel) panel.classList.toggle("hide");
    });

    // =============================
    // MAGNIFIER (OPTIMIZED)
    // =============================
    let active = false;
    let lens = null;

    function createLens() {
        if (document.getElementById("apr-lens")) return;

        lens = document.createElement("div");
        lens.id = "apr-lens";

        Object.assign(lens.style, {
            position: "fixed",
            width: "140px",
            height: "140px",
            borderRadius: "50%",
            border: "2px solid black",
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: "99999",
            display: "none",
            background: "white"
        });

        document.body.appendChild(lens);
    }

    function moveLens(e) {
        if (!active || !lens) return;

        const zoom = 2;
        const x = e.clientX;
        const y = e.clientY;

        lens.style.display = "block";
        lens.style.left = (x - 70) + "px";
        lens.style.top = (y - 70) + "px";

        const el = document.elementFromPoint(x, y);
        if (!el) return;

        // hindari element besar
        if (el === document.body || el === document.documentElement) return;

        const rect = el.getBoundingClientRect();

        lens.innerHTML = "";

        const clone = el.cloneNode(true);
        clone.style.transform = `scale(${zoom})`;
        clone.style.transformOrigin = "top left";
        clone.style.pointerEvents = "none";

        lens.appendChild(clone);

        clone.style.marginLeft = -(x - rect.left) * zoom + 70 + "px";
        clone.style.marginTop = -(y - rect.top) * zoom + 70 + "px";
    }

    function enableMagnifier() {
        active = true;
        document.addEventListener("mousemove", moveLens);
    }

    function disableMagnifier() {
        active = false;
        if (lens) lens.style.display = "none";
        document.removeEventListener("mousemove", moveLens);
    }

    createLens();

    document.addEventListener("click", function (e) {
        if (e.target.closest("[data-apr-magnifier]")) {
            active ? disableMagnifier() : enableMagnifier();
        }
    });

    // =============================
    // INIT
    // =============================
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", injectPanel);
    } else {
        injectPanel();
    }

    // =============================
    // GLOBAL API
    // =============================
    window.A11Y = {
        toggle: () => {
            const panel = document.getElementById("accessibilityPanel");
            if (panel) panel.classList.toggle("hide");
        }
    };

})();
