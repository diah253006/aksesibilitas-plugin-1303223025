<<<<<<< HEAD
(function () {

    const APR = {
        config: {
            tts: true,
            voice: true,
            zoom: true,
            contrast: true,
            font: true
        },

        init() {
            console.log("Aksesibilitas Plugin Aktif");

            this.loadConfig();
            this.injectUI();

            if (this.config.tts) this.initTTS();
            if (this.config.voice) this.initVoice();
            if (this.config.zoom) this.initZoom();
            if (this.config.contrast) this.initContrast();
            if (this.config.font) this.initFont();
        },

        loadConfig() {
            if (window.APR_CONFIG) {
                this.config = { ...this.config, ...window.APR_CONFIG };
            }
        },

        injectUI() {
            const panel = `
            <div id="apr-1303223025-panel" class="apr-1303223025-panel">
                <button onclick="APR.startRead()">🔊 Baca</button>
                <button onclick="APR.toggleVoice()">🎤 Voice</button>
                <button onclick="APR.zoomIn()">➕ Zoom</button>
                <button onclick="APR.zoomOut()">➖ Zoom</button>
                <button onclick="APR.toggleContrast()">🌓 Kontras</button>
                <button onclick="APR.setFont('dyslexic')">🔤 Dyslexic</button>
            </div>

            <div id="apr-1303223025-tab" class="apr-1303223025-tab">♿</div>
            `;

            document.body.insertAdjacentHTML("beforeend", panel);

            document.getElementById("apr-1303223025-tab").onclick = () => {
                document.getElementById("apr-1303223025-panel").classList.toggle("apr-1303223025-hide");
            };
        },

        // ================= TTS =================
        initTTS() {
            this.startRead = function () {
                let text = document.body.innerText.substring(0, 2000);
                let speech = new SpeechSynthesisUtterance(text);
                speech.lang = "id-ID";
                speechSynthesis.speak(speech);
            };
        },

        // ================= VOICE =================
        initVoice() {
            let recognition;
            let active = false;

            this.toggleVoice = function () {
                if (!('webkitSpeechRecognition' in window)) {
                    alert("Browser tidak support voice");
                    return;
                }

                if (!active) {
                    recognition = new webkitSpeechRecognition();
                    recognition.lang = "id-ID";

                    recognition.onresult = (e) => {
                        let cmd = e.results[0][0].transcript.toLowerCase();

                        if (cmd.includes("zoom")) APR.zoomIn();
                        if (cmd.includes("kontras")) APR.toggleContrast();
                    };

                    recognition.start();
                    active = true;
                } else {
                    recognition.stop();
                    active = false;
                }
            };
        },

        // ================= ZOOM =================
        initZoom() {
            let zoom = 1;

            this.zoomIn = function () {
                zoom += 0.2;
                document.body.style.transform = `scale(${zoom})`;
                document.body.style.transformOrigin = "top left";
            };

            this.zoomOut = function () {
                zoom -= 0.2;
                document.body.style.transform = `scale(${zoom})`;
                document.body.style.transformOrigin = "top left";
            };
        },

        // ================= CONTRAST =================
        initContrast() {
            this.toggleContrast = function () {
                document.body.classList.toggle("apr-1303223025-contrast");
            };
        },

        // ================= FONT =================
        initFont() {
            this.setFont = function (type) {
                document.body.classList.remove("apr-1303223025-font-default", "apr-1303223025-font-dyslexic");

                if (type === "dyslexic") {
                    document.body.classList.add("apr-1303223025-font-dyslexic");
                }
            };
        }
    };

    // GLOBAL EXPORT
    window.APR = APR;

    document.addEventListener("DOMContentLoaded", () => APR.init());

=======
(function () {

    const APR = {
        config: {
            tts: true,
            voice: true,
            zoom: true,
            contrast: true,
            font: true
        },

        init() {
            console.log("Aksesibilitas Plugin Aktif");

            this.loadConfig();
            this.injectUI();

            if (this.config.tts) this.initTTS();
            if (this.config.voice) this.initVoice();
            if (this.config.zoom) this.initZoom();
            if (this.config.contrast) this.initContrast();
            if (this.config.font) this.initFont();
        },

        loadConfig() {
            if (window.APR_CONFIG) {
                this.config = { ...this.config, ...window.APR_CONFIG };
            }
        },

        injectUI() {
            const panel = `
            <div id="apr-1303223025-panel" class="apr-1303223025-panel">
                <button onclick="APR.startRead()">🔊 Baca</button>
                <button onclick="APR.toggleVoice()">🎤 Voice</button>
                <button onclick="APR.zoomIn()">➕ Zoom</button>
                <button onclick="APR.zoomOut()">➖ Zoom</button>
                <button onclick="APR.toggleContrast()">🌓 Kontras</button>
                <button onclick="APR.setFont('dyslexic')">🔤 Dyslexic</button>
            </div>

            <div id="apr-1303223025-tab" class="apr-1303223025-tab">♿</div>
            `;

            document.body.insertAdjacentHTML("beforeend", panel);

            document.getElementById("apr-1303223025-tab").onclick = () => {
                document.getElementById("apr-1303223025-panel").classList.toggle("apr-1303223025-hide");
            };
        },

        // ================= TTS =================
        initTTS() {
            this.startRead = function () {
                let text = document.body.innerText.substring(0, 2000);
                let speech = new SpeechSynthesisUtterance(text);
                speech.lang = "id-ID";
                speechSynthesis.speak(speech);
            };
        },

        // ================= VOICE =================
        initVoice() {
            let recognition;
            let active = false;

            this.toggleVoice = function () {
                if (!('webkitSpeechRecognition' in window)) {
                    alert("Browser tidak support voice");
                    return;
                }

                if (!active) {
                    recognition = new webkitSpeechRecognition();
                    recognition.lang = "id-ID";

                    recognition.onresult = (e) => {
                        let cmd = e.results[0][0].transcript.toLowerCase();

                        if (cmd.includes("zoom")) APR.zoomIn();
                        if (cmd.includes("kontras")) APR.toggleContrast();
                    };

                    recognition.start();
                    active = true;
                } else {
                    recognition.stop();
                    active = false;
                }
            };
        },

        // ================= ZOOM =================
        initZoom() {
            let zoom = 1;

            this.zoomIn = function () {
                zoom += 0.2;
                document.body.style.transform = `scale(${zoom})`;
                document.body.style.transformOrigin = "top left";
            };

            this.zoomOut = function () {
                zoom -= 0.2;
                document.body.style.transform = `scale(${zoom})`;
                document.body.style.transformOrigin = "top left";
            };
        },

        // ================= CONTRAST =================
        initContrast() {
            this.toggleContrast = function () {
                document.body.classList.toggle("apr-1303223025-contrast");
            };
        },

        // ================= FONT =================
        initFont() {
            this.setFont = function (type) {
                document.body.classList.remove("apr-1303223025-font-default", "apr-1303223025-font-dyslexic");

                if (type === "dyslexic") {
                    document.body.classList.add("apr-1303223025-font-dyslexic");
                }
            };
        }
    };

    // GLOBAL EXPORT
    window.APR = APR;

    document.addEventListener("DOMContentLoaded", () => APR.init());

>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
})();