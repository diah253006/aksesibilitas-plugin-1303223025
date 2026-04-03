(function () {

    let active = false;
    let lens, zoomed;

    const MAGNIFIER = {

        init() {
            // lens
            lens = document.createElement("div");
            lens.id = "apr-magnifier";

            Object.assign(lens.style, {
                position: "fixed",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                border: "3px solid black",
                overflow: "hidden",
                pointerEvents: "none",
                display: "none",
                zIndex: "9999"
            });

            // zoom content
            zoomed = document.createElement("div");

            Object.assign(zoomed.style, {
                position: "absolute",
                transform: "scale(2)",
                transformOrigin: "top left"
            });

            zoomed.innerHTML = document.body.innerHTML;

            lens.appendChild(zoomed);
            document.body.appendChild(lens);
        },

        toggle() {
            active = !active;

            if (active) {
                lens.style.display = "block";
                document.addEventListener("mousemove", this.move);
            } else {
                lens.style.display = "none";
                document.removeEventListener("mousemove", this.move);
            }
        },

        move(e) {
            const x = e.clientX;
            const y = e.clientY;

            lens.style.left = (x - 75) + "px";
            lens.style.top = (y - 75) + "px";

            zoomed.style.left = (-x * 2 + 75) + "px";
            zoomed.style.top = (-y * 2 + 75) + "px";
        }

    };

    document.addEventListener("DOMContentLoaded", () => {
        MAGNIFIER.init();
    });

    window.APR_MAGNIFIER = MAGNIFIER;

    document.addEventListener("click", function (e) {
        const btn = e.target.closest("button");

        if (!btn) return;

        if (btn.hasAttribute("data-apr-magnifier")) {
            MAGNIFIER.toggle();
        }
    });

})();
