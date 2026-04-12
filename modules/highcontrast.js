(function () {

    let isHighContrast = false;

    const Contrast = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isHighContrast = !isHighContrast;

            el.classList.toggle("high-contrast");

            console.log("Contrast:", isHighContrast ? "ON" : "OFF");

            // 🔊 voice feedback
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

    window.APR_CONTRAST = Contrast;

    console.log("CONTRAST READY");

    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // 1. PRIORITAS: ATRIBUT
        // ========================
        if (btn.hasAttribute("data-apr-contrast")) {
            console.log("Klik contrast (atribut)");

            const target = btn.getAttribute("data-target") || "body";
            Contrast.toggle(target);

            if (btn.hasAttribute("data-apr-auto-text")) {
                btn.innerText = isHighContrast
                    ? "🌗 Normal Mode"
                    : "🌓 High Contrast";
            }

            return;
        }

        // ========================
        // 2. FALLBACK: TEXT
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("contrast") || text.includes("kontras")) {
            console.log("Klik contrast (auto)");
            Contrast.toggle("body");
        }

    });

})();