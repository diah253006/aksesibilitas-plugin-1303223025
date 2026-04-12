(function () {

    let fontSize = 16;

    const PANEL = {
        toggle() {
            const panel = document.getElementById("accessibilityPanel");
        const tab = document.getElementById("accessibilityTab");
            
        console.log("TAB:", tab);
        if (!panel || !tab) return;

        panel.classList.toggle("hide");
        tab.classList.toggle("hide");
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

    window.APR_PANEL = PANEL;

    document.addEventListener("click", function (e) {
        const toggleBtn = e.target.closest("#accessibilityTab, [data-apr-panel-toggle]");
        if (toggleBtn) {
            PANEL.toggle();
            return;
        }

        if (e.target.closest("[data-apr-font-increase]")) {
            PANEL.fontIncrease();
            return;
        }

        if (e.target.closest("[data-apr-font-decrease]")) {
            PANEL.fontDecrease();
            return;
        }

        if (e.target.closest("[data-apr-contrast-toggle]")) {
            PANEL.contrast();
            return;
        }
    });

})();