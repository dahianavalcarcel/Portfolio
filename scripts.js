// Envolver cada letra de "Portfolio" en un span
document.addEventListener("DOMContentLoaded", function() {
    const title = document.querySelector(".portfolio-title");
    const text = title.innerText;
    title.innerHTML = "";

    text.split("").forEach((char, index) => {
        const span = document.createElement("span");
        span.innerText = char;
        title.appendChild(span);
    });
});