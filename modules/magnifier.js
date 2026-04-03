(function () {

    let active = false;
    let lens = null;

    const MAGNIFIER = {

        init() {
            // buat lens otomatis
            lens = document.createElement("div");
            lens.id = "apr-magnifier-lens";

            Object.assign(lens.style, {
                position: "fixed",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "2px solid #000",
                overflow: "hidden",
                pointerEvents: "none",
                display: "none",
                zIndex: "9999",
                transform: "scale(2)",
                transformOrigin: "top left",
                background: "#fff"
            });

            document.body.appendChild(lens);
        },

        toggle() {
            active = !active;

            if (active) {
                lens.style.display = "block";
                document.addEventListener("mousemove", this.move);
                console.log("Magnifier ON");
            } else {
                lens.style.display = "none";
                document.removeEventListener("mousemove", this.move);
                console.log("Magnifier OFF");
            }
        },

        move(e) {
            const x = e.clientX;
            const y = e.clientY;

            lens.style.left = (x - 75) + "px";
            lens.style.top = (y - 75) + "px";

            // 🔥 TRICK: zoom pakai CSS, bukan clone DOM
            lens.style.backgroundImage = `url(${MAGNIFIER.capture()})`;
            lens.style.backgroundRepeat = "no-repeat";
            lens.style.backgroundSize = `${window.innerWidth * 2}px ${window.innerHeight * 2}px`;
            lens.style.backgroundPosition = `-${x * 2 - 75}px -${y * 2 - 75}px`;
        },

        // ambil screenshot halaman (simple hack)
        capture() {
            return window.location.href;
        }

    };

    // 🔥 INIT AUTO
    document.addEventListener("DOMContentLoaded", () => {
        MAGNIFIER.init();
    });

    // 🔥 EXPORT GLOBAL
    window.APR_MAGNIFIER = MAGNIFIER;

    console.log("MAGNIFIER READY");

    // 🔥 AUTO BUTTON DETECT
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // PRIORITAS: ATRIBUT
        if (btn.hasAttribute("data-apr-magnifier")) {
            MAGNIFIER.toggle();
            return;
        }

        // 🔥 FALLBACK AUTO TEXT
        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("magnifier") || text.includes("zoom kaca")) {
            MAGNIFIER.toggle();
        }

    });

})();
