(function () {

    const TTS = {
        speech: null,

        start(target = "body") {
            this.stop();

            const el = document.querySelector(target);
            if (!el) return;

            const text = el.innerText.substring(0, 3000);
            if (!text) return;

            this.speech = new SpeechSynthesisUtterance(text);
            this.speech.lang = "id-ID";

            const speakNow = () => {
                speechSynthesis.speak(this.speech);
            };

            if (speechSynthesis.getVoices().length === 0) {
                speechSynthesis.onvoiceschanged = speakNow;
            } else {
                speakNow();
            }
        },

        stop() {
            speechSynthesis.cancel();
        }
    };

    // AUTO INIT
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelectorAll("[data-apr-tts]").forEach(btn => {
            btn.addEventListener("click", () => {
                const target = btn.getAttribute("data-target") || "body";
                TTS.start(target);
            });
        });

        document.querySelectorAll("[data-apr-tts-stop]").forEach(btn => {
            btn.addEventListener("click", () => {
                TTS.stop();
            });
        });

    });

})();
