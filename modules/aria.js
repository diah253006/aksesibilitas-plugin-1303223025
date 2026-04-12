(function () {

    const ARIA = {

        init() {

            // =========================
            // 1. KEYBOARD SUPPORT (Enter & Space)
            // =========================
            document.addEventListener("keydown", function (e) {

                const el = e.target.closest("[data-apr-clickable]");
                if (!el) return;

                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    el.click();
                }

            });

            // =========================
            // 2. FOCUS STYLE
            // =========================
            document.addEventListener("focusin", function (e) {

                const el = e.target.closest("[data-apr-clickable]");
                if (!el) return;

                el.classList.add("focus-visible");

            });

            document.addEventListener("focusout", function (e) {

                const el = e.target.closest("[data-apr-clickable]");
                if (!el) return;

                el.classList.remove("focus-visible");

            });

            // =========================
            // 3. ARIA EXPANDED TOGGLE
            // =========================
            document.addEventListener("click", function (e) {

                const el = e.target.closest("[data-apr-toggle]");
                if (!el) return;

                const expanded = el.getAttribute("aria-expanded") === "true";
                el.setAttribute("aria-expanded", !expanded);

            });

            // =========================
            // 4. SKIP LINK
            // =========================
            document.addEventListener("click", function (e) {

                const link = e.target.closest("[data-apr-skip]");
                if (!link) return;

                const target = link.getAttribute("data-target") || "#mainContent";
                const el = document.querySelector(target);

                if (el) {
                    el.setAttribute("tabindex", "-1");
                    el.focus();
                }

            });

        }

    };

    // GLOBAL
    window.APR_ARIA = ARIA;

    console.log("ARIA READY");

    // AUTO INIT
    document.addEventListener("DOMContentLoaded", function () {
        ARIA.init();
    });

<<<<<<< HEAD
})();
=======
})();
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
