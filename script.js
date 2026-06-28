// ===============================
// TYPING EFFECT
// ===============================

const text = "Hi, Love ❤️ I made this website especially for you.";

let i = 0;

function typing() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing, 70);

    }

}

typing();


// ===============================
// FLOATING HEARTS
// ===============================

const heartsContainer = document.getElementById("hearts");

setInterval(() => {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (Math.random() * 25 + 18) + "px";

    heart.style.animationDuration = (Math.random() * 3 + 5) + "s";

    heart.style.opacity = Math.random() * 0.5 + 0.5;

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 8000);

}, 150);


// ===============================
// ENVELOPE
// ===============================

const overlay = document.getElementById("overlay");

const envelope = document.querySelector(".envelope");

const letterBtn = document.getElementById("letterBtn");


// Open Envelope

letterBtn.addEventListener("click", () => {

    overlay.style.display = "flex";

    setTimeout(() => {

        envelope.classList.add("open");

    }, 250);

});


// Close Envelope

overlay.addEventListener("click", (e) => {

    if (e.target === overlay) {

        envelope.classList.remove("open");

        setTimeout(() => {

            overlay.style.display = "none";

        }, 900);

    }

});


// ===============================
// ESC KEY CLOSE
// ===============================

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        envelope.classList.remove("open");

        setTimeout(() => {

            overlay.style.display = "none";

        }, 900);

    }

});


// ===============================
// HEART BEAT
// ===============================

const heartIcon = document.querySelector(".heart-icon");

setInterval(() => {

    if (heartIcon) {

        heartIcon.style.transform = "scale(1.15)";

        setTimeout(() => {

            heartIcon.style.transform = "scale(1)";

        }, 250);

    }

}, 1500);