let init = 30 * 60;

function runTimer() {
    let curr = init;
    let minutes = String(Math.trunc(curr / 60));
    let seconds = String(curr % 60);
    if (minutes.length === 1) minutes = "0" + minutes;
    if (seconds.length === 1) seconds = "0" + seconds;
    document.getElementById("min").innerText = minutes;
    document.getElementById("secs").innerText = seconds;
}

setInterval(() => {
    init -= 1;
    runTimer();
}, 1000);


let ans = document.querySelectorAll(".ans-item");

function chooseAns(x) {
    ans.forEach((y) => {
        if(x === y) x.classList.toggle("active");
        else y.classList.remove("active");
    })
}