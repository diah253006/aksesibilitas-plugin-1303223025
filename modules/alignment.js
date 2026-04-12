(function () {

    const ALIGN = {

        set(type, target = "#mainContent") {
            const el = document.querySelector(target);

            if (!el) {
                console.warn("Target tidak ditemukan:", target);
                return;
            }

            el.style.textAlign = type;
            console.log("Align:", type);
        }

    };

    // EXPORT GLOBAL (optional)
    window.APR_ALIGN = ALIGN;

    console.log("ALIGN READY");

    // 🔥 AUTO DETECT BUTTON
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // 1. PRIORITAS: ATRIBUT
        // ========================
        if (btn.hasAttribute("data-apr-align")) {

            const type = btn.getAttribute("data-apr-align");
            const target = btn.getAttribute("data-target") || "#mainContent";

            ALIGN.set(type, target);
            return;
        }

        // ========================
        // 2. FALLBACK AUTO TEXT
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("left")) {
            ALIGN.set("left");
        }

        if (text.includes("center")) {
            ALIGN.set("center");
        }

        if (text.includes("right")) {
            ALIGN.set("right");
        }

        if (text.includes("justify")) {
            ALIGN.set("justify");
        }

    });

<<<<<<< HEAD
})();
=======
})();
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
