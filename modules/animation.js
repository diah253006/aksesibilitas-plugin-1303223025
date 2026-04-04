(function () {

    let isPaused = false;

    const Animation = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isPaused = !isPaused;

            el.classList.toggle("reduce-motion");

            console.log("Animation:", isPaused ? "OFF" : "ON");

            // optional voice feedback
            if (window.speechSynthesis) {
                const msg = new SpeechSynthesisUtterance(
                    isPaused ? "Animasi dimatikan" : "Animasi diaktifkan"
                );
                msg.lang = "id-ID";
                speechSynthesis.speak(msg);
            }
        }

    };

    // GLOBAL
    window.APR_ANIMATION = Animation;

    console.log("ANIMATION READY");

    // AUTO DETECT CLICK
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("[data-apr-animation]");
        if (!btn) return;

        const target = btn.getAttribute("data-target") || "body";

        Animation.toggle(target);

        // update text tombol otomatis
        if (btn.hasAttribute("data-apr-auto-text")) {
            btn.innerText = isPaused
                ? "▶️ Aktifkan Animasi"
                : "⏸ Pause Animasi";
        }

    });

    // AUTO APPLY SYSTEM PREF
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.body.classList.add("reduce-motion");
        isPaused = true;
    }

})();
