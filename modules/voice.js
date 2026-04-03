(function () {

    let recognition = null;
    let isListening = false;

    const VOICE = {

        start() {
            if (!('webkitSpeechRecognition' in window)) {
                alert("Browser tidak mendukung voice command");
                return;
            }

            recognition = new webkitSpeechRecognition();
            recognition.lang = "id-ID";
            recognition.continuous = true;
            recognition.interimResults = false;

            recognition.onstart = () => {
                isListening = true;
                console.log("🎤 Voice aktif");
            };

            recognition.onend = () => {
                isListening = false;
                console.log("🎤 Voice berhenti");
            };

            recognition.onresult = (event) => {
                let transcript = event.results[event.results.length - 1][0].transcript.toLowerCase();
                console.log("Perintah:", transcript);

                this.handleCommand(transcript);
            };

            recognition.start();
        },

        stop() {
            if (recognition) recognition.stop();
        },

        handleCommand(command) {

            // 🔍 SEARCH
            if (command.includes("cari")) {

                let keyword = command
                    .replace("cari", "")
                    .replace(/[^\w\s]/gi, "")
                    .trim();

                let input = document.querySelector("#searchInput");

                if (input) {
                    input.value = keyword;
                    input.dispatchEvent(new Event('input'));
                }

                this.speak("Mencari " + keyword);
            }

            // ⬇️ SCROLL
            else if (command.includes("scroll bawah")) {
                window.scrollBy({ top: 500, behavior: 'smooth' });
            }
            else if (command.includes("scroll atas")) {
                window.scrollBy({ top: -500, behavior: 'smooth' });
            }

            // 📂 FILTER
            else if (command.includes("buka filter")) {
                document.getElementById("filterCollapse")?.classList.add("show");
                this.speak("Filter dibuka");
            }

            // 🔊 TTS (integrasi otomatis)
            else if (command.includes("baca")) {
                if (window.APR_TTS) {
                    window.APR_TTS.start("#mainContent");
                }
            }
            else if (command.includes("stop")) {
                if (window.APR_TTS) {
                    window.APR_TTS.stop();
                }
            }

            else {
                this.speak("Perintah tidak dikenali");
            }
        },

        speak(text) {
            let msg = new SpeechSynthesisUtterance(text);
            msg.lang = "id-ID";
            speechSynthesis.speak(msg);
        }
    };

    // 🔥 EXPORT GLOBAL
    window.APR_VOICE = VOICE;

    console.log("VOICE READY");

    // 🔥 AUTO BUTTON DETECT
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // PRIORITAS: ATRIBUT
        if (btn.hasAttribute("data-apr-voice")) {
            console.log("Start Voice");
            VOICE.start();
            return;
        }

        if (btn.hasAttribute("data-apr-voice-stop")) {
            console.log("Stop Voice");
            VOICE.stop();
            return;
        }

        // 🔥 FALLBACK AUTO TEXT
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("voice") || text.includes("mic")) {
            VOICE.start();
        }

        if (text.includes("stop voice")) {
            VOICE.stop();
        }

    });

})();
