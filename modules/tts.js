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

    console.log("TTS READY");

    // 🔥 SUPER STABIL (tidak tergantung DOM)
    document.addEventListener("click", function (e) {

        if (e.target.matches("[data-apr-tts]")) {
            console.log("Klik baca");
            const target = e.target.getAttribute("data-target") || "body";
            TTS.start(target);
        }

        if (e.target.matches("[data-apr-tts-stop]")) {
            console.log("Klik stop");
            TTS.stop();
        }

    });

})();
