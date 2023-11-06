let eventDate = new Date("Dec 7, 2023 00:00:00").getTime();

setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = eventDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString();
    document.getElementById("hours").innerText = hours.toString();
    document.getElementById("minutes").innerText = minutes.toString();
    document.getElementById("seconds").innerText = seconds.toString();
}, 1000);

//init Animations
function init() {
    let head = document.getElementById("head");
    let count = document.getElementById("count");
    let dets = document.getElementById("dets");

    if (window.innerWidth > 991) {
        head.style.transform = "translate(35%,200%)";
    } else {
        head.style.transform = "translate(0,200%)";
    }

    setTimeout(() => {
        head.style.transition = "all 0.8s ease";
        setTimeout(() => {
            head.style.transform = "translate(0,0)";
            setTimeout(() => {
                count.style.opacity = "1";
                dets.style.opacity = "1";
            }, 800);
        }, 400);
    }, 400);
}

init();