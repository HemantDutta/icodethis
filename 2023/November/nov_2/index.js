let date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getUTCMonth()];
document.getElementById("date").innerText = date.getUTCDate().toString() + " " + month + " " + date.getUTCFullYear().toString();

const icons = document.querySelectorAll(".card-links .link i");
icons.forEach((x) => {
    x.addEventListener("click", () => {
        x.classList.toggle("active");
    });
})

let counter = 0;

function updateLikes() {
    if(!counter) {
        document.getElementById("likes").innerText = "76 Likes";
        counter = 1;
    }
    else {
        document.getElementById("likes").innerText = "75 Likes";
        counter = 0;
    }
}