(function () {

    const TTS = {
        speech: null,

        start(target = "body") {
            this.stop();

            const element = document.querySelector(target);
            if (!element) return;

            let text = element.innerText.trim().substring(0, 3000);
            if (!text) return;

            this.speech = new SpeechSynthesisUtterance(text);
            this.speech.lang = "id-ID";

            window.speechSynthesis.speak(this.speech);
        },

        stop() {
            window.speechSynthesis.cancel();
        }
    };

    // expose global (optional)
    window.APR_TTS = TTS;

    // 🔥 AUTO DETECT TANPA ATRIBUT
    document.addEventListener("DOMContentLoaded", function () {

        document.querySelectorAll("button").forEach(btn => {
            const text = btn.innerText.toLowerCase();

            // START
            if (text.includes("baca")) {
                btn.addEventListener("click", () => {
                    TTS.start("#mainContent");
                });
            }

            // STOP
            if (text.includes("stop")) {
                btn.addEventListener("click", () => {
                    TTS.stop();
                });
            }
        });

    });

})();
