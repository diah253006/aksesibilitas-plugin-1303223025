(function () {

    let fontSize = 16;

    const PANEL = {

        toggle() {
            const panel = document.getElementById("accessibilityPanel");
            if (!panel) return;

            panel.classList.toggle("hide");
        },

        fontIncrease() {
            fontSize += 2;
            document.body.style.fontSize = fontSize + "px";
        },

        fontDecrease() {
            fontSize -= 2;
            document.body.style.fontSize = fontSize + "px";
        },

        contrast() {
            document.body.classList.toggle("high-contrast");
        }

    };

    // GLOBAL (optional)
    window.APR_PANEL = PANEL;

    console.log("PANEL READY");

    // 🔥 AUTO DETECT CLICK
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // ATRIBUT MODE (UTAMA)
        // ========================
        if (btn.hasAttribute("data-apr-panel-toggle")) {
            PANEL.toggle();
            return;
        }

        if (btn.hasAttribute("data-apr-font-increase")) {
            PANEL.fontIncrease();
            return;
        }

        if (btn.hasAttribute("data-apr-font-decrease")) {
            PANEL.fontDecrease();
            return;
        }

        if (btn.hasAttribute("data-apr-contrast-toggle")) {
            PANEL.contrast();
            return;
        }

        // ========================
        // 🔥 FALLBACK (AUTO TEXT)
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("aksesibilitas")) {
            PANEL.toggle();
        }

        if (text.includes("perbesar")) {
            PANEL.fontIncrease();
        }

        if (text.includes("perkecil")) {
            PANEL.fontDecrease();
        }

        if (text.includes("contrast")) {
            PANEL.contrast();
        }

    });

})();
