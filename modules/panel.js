(function () {

    let fontSize = 16;

    const PANEL = {
        toggle() {
            const panel = document.getElementById("accessibilityPanel");
<<<<<<< HEAD
        const tab = document.getElementById("accessibilityTab");
            
        console.log("TAB:", tab);
        if (!panel || !tab) return;

        panel.classList.toggle("hide");
        tab.classList.toggle("hide");
=======
            const tab = document.getElementById("accessibilityTab");

            if (!panel || !tab) return;

            panel.classList.toggle("hide");
            tab.classList.toggle("hide");
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
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
<<<<<<< HEAD
        const toggleBtn = e.target.closest("#accessibilityTab, [data-apr-panel-toggle]");
        if (toggleBtn) {
=======

        if (e.target.closest("[data-apr-panel-toggle]")) {
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
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

<<<<<<< HEAD
})();
=======
})();
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
