(function () {

    const FONT = {

        set(type, target = "#mainContent", btn = null) {

            const el = document.querySelector(target);
            if (!el) {
                console.warn("Target tidak ditemukan:", target);
                return;
            }

            // reset class
            el.classList.remove(
                "font-default",
                "font-sans",
                "font-serif",
                "font-dyslexic"
            );

            // set baru
            el.classList.add("font-" + type);

            console.log("Font:", type);

            // aktifkan tombol
            if (btn) {
                document.querySelectorAll("[data-apr-font]")
                    .forEach(b => b.classList.remove("active"));

                btn.classList.add("active");
            }
        }

    };

    // export global (optional)
    window.APR_FONT = FONT;

    console.log("FONT READY");

    // 🔥 AUTO BUTTON DETECT
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // 1. PRIORITAS: ATRIBUT
        // ========================
        if (btn.hasAttribute("data-apr-font")) {

            const type = btn.getAttribute("data-apr-font");
            const target = btn.getAttribute("data-target") || "#mainContent";

            FONT.set(type, target, btn);
            return;
        }

        // ========================
        // 2. FALLBACK AUTO TEXT
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("dyslexic")) {
            FONT.set("dyslexic", "#mainContent", btn);
        }

        if (text.includes("serif")) {
            FONT.set("serif", "#mainContent", btn);
        }

        if (text.includes("sans")) {
            FONT.set("sans", "#mainContent", btn);
        }

        if (text.includes("default")) {
            FONT.set("default", "#mainContent", btn);
        }

    });

<<<<<<< HEAD
})();
=======
})();
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
