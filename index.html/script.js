
let button = document.getElementById("surpriseBtn");

let letter = document.getElementById("letter");

button.addEventListener("click", function() {

    letter.style.display = "block";

    button.style.display = "none";

});

function createHeart() {

    let heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = "25px";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 6000);

}

setInterval(createHeart, 400);
