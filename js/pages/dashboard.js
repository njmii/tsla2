document.addEventListener("DOMContentLoaded", () => {

    console.log("TSLA Dashboard Loaded");

    document.querySelectorAll(".tool-card").forEach(card => {

        card.addEventListener("touchstart", () => {
            card.style.transform = "translateY(-5px)";
        });

        card.addEventListener("touchend", () => {
            card.style.transform = "";
        });

    });

});
