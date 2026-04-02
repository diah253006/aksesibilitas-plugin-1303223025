(function () {

    const TTS = {
        speech: null,

        start(target = "body") {
            this.stop();

            const el = document.querySelector(target);
            if (!el) {
                console.warn("Target tidak ditemukan:", target);
                return;
            }

            const text = el.innerText.substring(0, 3000);
            if (!text) {
                console.warn("Tidak ada teks");
                return;
            }

            this.speech = new SpeechSynthesisUtterance(text);
            this.speech.lang = "id-ID";

            const speakNow = () => {
                console.log("Mulai bicara...");
                speechSynthesis.speak(this.speech);
            };

            if (speechSynthesis.getVoices().length === 0) {
                speechSynthesis.onvoiceschanged = speakNow;
            } else {
                speakNow();
            }
        },

        stop() {
            console.log("Stop bicara");
            speechSynthesis.cancel();
        }
    };

    console.log("TTS READY");

    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button, [role='button'], .btn, a");
        if (!btn) return;

        const text = btn.innerText
    .toLowerCase()
    .replace(/[^\w\s]/gi, "") // hapus emoji & simbol
    .trim();
    console.log("TEXT:", text);
        // PRIORITAS: ATRIBUT
        if (btn.matches("[data-apr-tts]")) {
            console.log("Klik baca (atribut)");
            const target = btn.getAttribute("data-target") || "body";
            TTS.start(target);
            return;
        }

        if (btn.matches("[data-apr-tts-stop]")) {
            console.log("Klik stop (atribut)");
            TTS.stop();
            return;
        }

        // AUTO DETECT (lebih aman)
        if (text.includes("baca")) {
            console.log("Klik baca (auto)");
            const target = document.querySelector("#mainContent") ? "#mainContent" : "body";
            TTS.start(target);
        }

        if (text.includes("stop") || text.includes("berhenti")) {
            console.log("Klik stop (auto)");
            TTS.stop();
        }

    });

})();
