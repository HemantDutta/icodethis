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
        card.classList.remove("au");
        card.classList.add("exp");
        card.style.minHeight = "250px";
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
    let star = document.getElementById("star");

    expBox.style.opacity = "0";
    expBox.style.transform = "translateY(100%)";
    setTimeout(() => {
        card.classList.remove("exp");
        card.classList.add("str");
        card.style.minHeight = "300px";
        card.style.backgroundColor = "#db627d";
        expBox.style.display = "none";
        star.style.display = "flex";
        setTimeout(() => {
            star.style.opacity = "1";
            star.style.transform = "translateY(0)";
        }, 50)
    }, 800)
}

//Star Rating
let stars = document.querySelectorAll(".star-flex span i");
let rateValue = 0;

function starRating(x) {
    rateValue = x.dataset.value;
    stars.forEach((x) => {
        x.classList.remove("fa-solid");
        x.classList.add("fa-regular");
    })
    for (let i = 0; i < x.dataset.value; i++) {
        stars[i].classList.remove("fa-regular");
        stars[i].classList.add("fa-solid");
    }
    document.getElementById("next2").style.opacity = "1";
}

//Open Check
function openCheck() {
    let card = document.getElementById("card");
    let star = document.getElementById("star");
    let check = document.getElementById("check");
    let thanks = document.getElementById("thanks");

    star.style.opacity = "0";
    star.style.transform = "translateY(100%)";
    setTimeout(() => {
        star.style.display = "none";
        rateValue==="5"?thanks.style.display = "grid":check.style.display = "flex";
        rateValue==="5"?card.style.width = window.outerWidth > 550 ? "450px" : "90vw":card.style.width = window.outerWidth > 550 ? "450px" : "90vw";
        rateValue==="5"?card.style.minHeight = "250px":card.style.minHeight = "400px";
        rateValue==="5"?card.style.backgroundColor = "#c71855":card.style.backgroundColor = "#8343d3";
        setTimeout(() => {
            rateValue==="5"?thanks.style.opacity = "1":check.style.opacity = "1";
            rateValue==="5"?thanks.style.transform = "translateY(0)":check.style.transform = "translateY(0)";
        }, 800)
    }, 800)
}

//Open Thanks
function openThanks() {
    let check = document.getElementById("check");
    let card = document.getElementById("card");
    let thanks = document.getElementById("thanks");

    check.style.opacity = "0";
    check.style.transform = "translateY(100%)";
    setTimeout(() => {
        check.style.display = "none";
        thanks.style.display = "grid";
        card.style.width = window.outerWidth > 550 ? "450px" : "90vw";
        card.style.minHeight = "250px";
        card.style.backgroundColor = "#c71855";
        setTimeout(() => {
            thanks.style.opacity = "1";
            thanks.style.transform = "translateY(0)";
        }, 800)
    }, 800)
}