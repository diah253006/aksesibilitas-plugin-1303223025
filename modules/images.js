(function () {

    let hidden = false;

    const Images = {

        toggle(target = "body") {
            const el = document.querySelector(target);
            if (!el) return;

            hidden = !hidden;

            el.classList.toggle("hide-images");

            console.log("Images:", hidden ? "HIDDEN" : "VISIBLE");

            // 🔊 Optional voice
            if (window.speechSynthesis) {
                const msg = new SpeechSynthesisUtterance(
                    hidden ? "Gambar disembunyikan" : "Gambar ditampilkan"
                );
                msg.lang = "id-ID";
                speechSynthesis.speak(msg);
            }
        }

    };

    // GLOBAL (optional)
    window.APR_IMAGES = Images;

    console.log("IMAGES READY");

    // 🔥 AUTO DETECT (ATRIBUT + TEXT)
    document.addEventListener("click", function (e) {

        const btn = e.target.closest("button");
        if (!btn) return;

        // ========================
        // PRIORITAS: ATRIBUT
        // ========================
        if (btn.hasAttribute("data-apr-images")) {
            const target = btn.getAttribute("data-target") || "body";
            Images.toggle(target);
            return;
        }

        // ========================
        // FALLBACK: TEXT DETECT
        // ========================
        const text = (btn.innerText || "").toLowerCase();

        if (
            text.includes("sembunyikan gambar") ||
            text.includes("tampilkan gambar") ||
            text.includes("gambar")
        ) {
            Images.toggle("body");
        }

    });

<<<<<<< HEAD
})();
=======
})();
>>>>>>> 18d0129eb52c5d0ebf913f6bcbba1bbe41c0f70c
