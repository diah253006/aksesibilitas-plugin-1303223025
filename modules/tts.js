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

    // ✅ WAJIB: expose ke global
    window.APR_TTS = TTS;

    // 🔥 AUTO DETECT BUTTON
    document.addEventListener("DOMContentLoaded", () => {

        document.querySelectorAll("[data-apr-tts]").forEach(btn => {
            btn.addEventListener("click", function () {
                const target = this.getAttribute("data-target") || "body";
                window.APR_TTS.start(target);
            });
        });

        document.querySelectorAll("[data-apr-tts-stop]").forEach(btn => {
            btn.addEventListener("click", function () {
                window.APR_TTS.stop();
            });
        });

    });

})();