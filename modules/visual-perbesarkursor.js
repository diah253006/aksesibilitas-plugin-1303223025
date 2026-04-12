(function () {

    let isMono = false;
    let isCursorBig = false;

    const Visual = {

        toggleMono(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isMono = !isMono;
            el.classList.toggle("monochrome");

            console.log("Monochrome:", isMono ? "ON" : "OFF");
        },

        toggleCursor(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            isCursorBig = !isCursorBig;
            el.classList.toggle("big-cursor");

            console.log("Cursor:", isCursorBig ? "BIG" : "NORMAL");
        }

    };

    // GLOBAL
    window.APR_VISUAL = Visual;

    console.log("VISUAL READY");

    // AUTO DETECT CLICK
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // 1. PRIORITAS: ATRIBUT
        // ========================

        if (btn.hasAttribute("data-apr-mono")) {
            const target = btn.getAttribute("data-target") || "body";
            Visual.toggleMono(target);
            return;
        }

        if (btn.hasAttribute("data-apr-cursor")) {
            const target = btn.getAttribute("data-target") || "body";
            Visual.toggleCursor(target);
            return;
        }

        // ========================
        // 2. FALLBACK: TEXT
        // ========================

        const text = (btn.innerText || "").toLowerCase();

        if (text.includes("mono") || text.includes("hitam putih")) {
            Visual.toggleMono("body");
        }

        if (text.includes("cursor") || text.includes("kursor")) {
            Visual.toggleCursor("body");
        }

    });

})();