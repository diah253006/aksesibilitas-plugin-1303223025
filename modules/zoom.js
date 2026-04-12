(function () {

    let zoomLevel = 1;

    const ZOOM = {

        in() {
            if (zoomLevel < 2) {
                zoomLevel += 0.25;
                this.apply();
            }
        },

        out() {
            if (zoomLevel > 1) {
                zoomLevel -= 0.25;
                this.apply();
            }
        },

        reset() {
            zoomLevel = 1;
            this.apply();
        },

        apply() {
            document.body.style.transform = `scale(${zoomLevel})`;
            document.body.style.transformOrigin = "top left";
            document.body.style.width = (100 / zoomLevel) + "%";
        }
    };

    // 🔥 EXPORT GLOBAL (optional)
    window.APR_ZOOM = ZOOM;

    console.log("ZOOM READY");

    // 🔥 AUTO DETECT BUTTON
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // PRIORITAS: ATRIBUT
        if (btn.hasAttribute("data-apr-zoom-in")) {
            console.log("Zoom In");
            ZOOM.in();
            return;
        }

        if (btn.hasAttribute("data-apr-zoom-out")) {
            console.log("Zoom Out");
            ZOOM.out();
            return;
        }

        if (btn.hasAttribute("data-apr-zoom-reset")) {
            console.log("Zoom Reset");
            ZOOM.reset();
            return;
        }

        // 🔥 FALLBACK AUTO TEXT (opsional)
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("zoom +") || text.includes("perbesar")) {
            ZOOM.in();
        }

        if (text.includes("zoom -") || text.includes("perkecil")) {
            ZOOM.out();
        }

        if (text.includes("reset")) {
            ZOOM.reset();
        }

    });

})();