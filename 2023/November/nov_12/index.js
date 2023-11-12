let date = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let month = months[date.getUTCMonth()];
document.getElementById("currDate").innerText = date.getUTCDate().toString() + " " + month + ", " + date.getUTCFullYear().toString();

//Cart count
let cc = 0;

function addCart() {
    cc++;
    document.getElementById("quan").innerText = cc.toString();
}

// Item count
let ic = 3;
function removeItem(x) {
    ic--;
    if(ic === 0) document.getElementById("wishlist").style.display = "none";
    let item = document.querySelectorAll(".cart-item")[x];
    item.style.scale = "0"
    item.style.opacity = "0";
    setTimeout(() => {
        item.style.display = "none";
    }, 400)
    document.getElementById("reset").style.display = "initial";
}

function reset() {
    ic = 3;
    document.getElementById("wishlist").style.display = "initial";
    let items = document.querySelectorAll(".cart-item");
    items.forEach((x) => {
        x.style.display = "grid";
        setTimeout(() => {
            x.style.opacity = "1";
            x.style.scale = "1";
        }, 100)

    })
}
