document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Produs adăugat!");
    });
});
// Countdown 24h
let countdownTime = 24 * 60 * 60; // 24 ore in secunde

const timerElement = document.getElementById("timer");

function updateCountdown() {

    let hours = Math.floor(countdownTime / 3600);
    let minutes = Math.floor((countdownTime % 3600) / 60);
    let seconds = countdownTime % 60;

    timerElement.textContent =
        String(hours).padStart(2, '0') + ":" +
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');

    if (countdownTime > 0) {
        countdownTime--;
    } else {
        timerElement.textContent = "Reducerea a expirat!";
        clearInterval(timerInterval);
    }
}

const timerInterval = setInterval(updateCountdown, 1000);