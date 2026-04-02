/*(function () {

    const TTS = {
        speech: null,

        start(target = "body") {
            this.stop();

            const element = document.querySelector(target);
            if (!element) {
                console.warn("TTS: target tidak ditemukan");
                return;
            }

            let text = element.innerText.trim().substring(0, 3000);

            if (!text) {
                alert("Tidak ada teks untuk dibaca");
                return;
            }

            this.speech = new SpeechSynthesisUtterance(text);

            this.speech.lang = "id-ID";
            this.speech.rate = 1;
            this.speech.pitch = 1;

            this.setVoice(() => {
                window.speechSynthesis.speak(this.speech);
            });
        },

        stop() {
            window.speechSynthesis.cancel();
        },

        pause() {
            window.speechSynthesis.pause();
        },

        resume() {
            window.speechSynthesis.resume();
        },

        setVoice(callback) {
            const voices = speechSynthesis.getVoices();

            const indoVoice = voices.find(v =>
                v.lang.toLowerCase().includes("id")
            );

            if (indoVoice) {
                this.speech.voice = indoVoice;
            }

            if (voices.length === 0) {
                speechSynthesis.onvoiceschanged = () => callback();
            } else {
                callback();
            }
        }
    };

    // EXPORT GLOBAL
    window.APR_TTS = TTS;

})();

*/
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