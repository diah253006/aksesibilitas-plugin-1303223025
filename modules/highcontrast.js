(function () {

    let isHighContrast = false;

    const Contrast = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isHighContrast = !isHighContrast;

            el.classList.toggle("high-contrast");

            console.log("Contrast:", isHighContrast ? "ON" : "OFF");

            // 🔊 Optional voice feedback
            if (window.speechSynthesis) {
                const msg = new SpeechSynthesisUtterance(
                    isHighContrast
                        ? "Mode kontras tinggi aktif"
                        : "Mode normal aktif"
                );
                msg.lang = "id-ID";
                speechSynthesis.speak(msg);
            }
        }

    };

    // GLOBAL
    window.APR_CONTRAST = Contrast;

    console.log("CONTRAST READY");

    // AUTO DETECT CLICK
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("[data-apr-contrast]");
        if (!btn) return;

        const target = btn.getAttribute("data-target") || "body";

        Contrast.toggle(target);

        // 🔄 Auto change text tombol
        if (btn.hasAttribute("data-apr-auto-text")) {
            btn.innerText = isHighContrast
                ? "🌗 Normal Mode"
                : "🌓 High Contrast";
        }

    });

})();
