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

    // GLOBAL
    window.APR_SPACING = Spacing;

    console.log("SPACING READY");

    // AUTO DETECT
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

    document.addEventListener("click", function (e) {

        if (e.target.matches("[data-apr-spacing-reset]")) {
            const target = e.target.getAttribute("data-target") || "#mainContent";
            Spacing.reset(target);
        }

    });

})();
