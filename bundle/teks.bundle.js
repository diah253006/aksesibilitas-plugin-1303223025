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

})();
(function () {

    const Spacing = {

        setLine(value, target = "#mainContent") {
            const el = document.querySelector(target);
            if (!el) return;
            el.style.lineHeight = value;
        },

        setLetter(value, target = "#mainContent") {
            const el = document.querySelector(target);
            if (!el) return;
            el.style.letterSpacing = value + "px";
        },

        setWord(value, target = "#mainContent") {
            const el = document.querySelector(target);
            if (!el) return;
            el.style.wordSpacing = value + "px";
        },

        reset(target = "#mainContent") {
            const el = document.querySelector(target);
            if (!el) return;
            el.style.lineHeight = "1.5";
            el.style.letterSpacing = "0px";
            el.style.wordSpacing = "0px";
        }

    };

    window.APR_SPACING = Spacing;

    console.log("SPACING READY");

    // ================= INPUT (RANGE)
    document.addEventListener("input", function (e) {

        const el = e.target;

        if (el.matches("[data-apr-line]")) {
            const target = el.getAttribute("data-target") || "#mainContent";
            Spacing.setLine(el.value, target);
        }

        if (el.matches("[data-apr-letter]")) {
            const target = el.getAttribute("data-target") || "#mainContent";
            Spacing.setLetter(el.value, target);
        }

        if (el.matches("[data-apr-word]")) {
            const target = el.getAttribute("data-target") || "#mainContent";
            Spacing.setWord(el.value, target);
        }

    });

    // ================= BUTTON
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        if (btn.hasAttribute("data-apr-line")) {
            const value = btn.getAttribute("data-apr-line");
            const target = btn.getAttribute("data-target") || "#mainContent";
            Spacing.setLine(value, target);
        }

        if (btn.hasAttribute("data-apr-letter")) {
            const value = btn.getAttribute("data-apr-letter");
            const target = btn.getAttribute("data-target") || "#mainContent";
            Spacing.setLetter(value, target);
        }

        if (btn.hasAttribute("data-apr-word")) {
            const value = btn.getAttribute("data-apr-word");
            const target = btn.getAttribute("data-target") || "#mainContent";
            Spacing.setWord(value, target);
        }

        if (btn.hasAttribute("data-apr-spacing-reset")) {
            const target = btn.getAttribute("data-target") || "#mainContent";
            Spacing.reset(target);
        }

    });

})();
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

})();
