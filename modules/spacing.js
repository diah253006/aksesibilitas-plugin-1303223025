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