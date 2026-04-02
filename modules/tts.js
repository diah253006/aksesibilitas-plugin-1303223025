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
//detect global
    window.APR_TTS = TTS;
    // 🔥 AUTO DETECT BUTTON
    document.addEventListener("DOMContentLoaded", () => {

        // Cari semua elemen dengan atribut khusus
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

