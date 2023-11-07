//Audio box animation
function audioAnim() {
    let audioBox = document.getElementById("audioBox");
    let audio = document.getElementById("audio");
    let video = document.getElementById("video");
    let videoIcon = document.querySelector("#video .icon img");
    let perf = document.getElementById("perf");
    let perfIcon = document.querySelector("#perf .icon img");
    let line1 = document.getElementById("line1");
    let line2 = document.getElementById("line2");
    let check1 = document.getElementById("check1");
    let check2 = document.getElementById("check2");
    let check3 = document.getElementById("check3");

    console.log(videoIcon);

    audioBox.style.opacity = "1";
    audioBox.style.transform = "translateY(0)";
    setTimeout(() => {
        line1.style.opacity = "1";
        video.style.opacity = "1";
        audio.style.opacity = "0";
        setTimeout(() => {
            audio.style.display = "none";
            check1.style.display = "grid";
            setTimeout(() => {
                check1.style.opacity = "1";
                setTimeout(() => {
                    videoIcon.style.opacity = "0";
                    setTimeout(() => {
                        videoIcon.style.display = "none";
                        check2.style.display = "grid";
                        setTimeout(() => {
                            check2.style.opacity = "1";
                            line2.style.opacity = "1";
                            perf.style.opacity = "1";
                            setTimeout(() => {
                                perfIcon.style.opacity = "0";
                                setTimeout(() => {
                                    perfIcon.style.display = "none";
                                    check3.style.display = "grid";
                                    setTimeout(() => {
                                        check3.style.opacity = "1";
                                        setTimeout(() => {
                                            audioBox.style.opacity = "0";
                                            audioBox.style.transform = "translateY(100%)";
                                            setTimeout(() => {
                                                expAnim();
                                            }, 800)
                                        }, 800)
                                    }, 400)
                                }, 400)
                            }, 1200)
                        }, 50)
                    }, 400)
                }, 1200)
            }, 400)
        }, 400)
    }, 1200)
}

audioAnim();

let exp = false;

//experience
function expAnim() {
    exp = true;
    let audioBox = document.getElementById("audioBox");
    let expBox = document.getElementById("expBox");
    let card = document.getElementById("card");

    audioBox.style.display = "none";
    setTimeout(() => {
        card.style.width = window.outerWidth > 550 ? "500px" : "90vw";
        card.style.height = "250px";
        card.style.backgroundColor = "#9b348e";
        setTimeout(() => {
            expBox.style.display = "flex";
            setTimeout(() => {
                expBox.style.opacity = "1";
                expBox.style.transform = "translateY(0)";
            }, 50)
        }, 800)
    }, 800)
}

//Close Others
let rateSpans = document.querySelectorAll(".rating span");

function closeOthers(x) {
    document.getElementById("next").style.opacity = "1";
    rateSpans.forEach((y) => {
        if (x !== y) y.classList.remove("active");
        else y.classList.add("active");
    })
}

//open stars
function openStars() {
    let expBox = document.getElementById("expBox");
    let card = document.getElementById("card");
}