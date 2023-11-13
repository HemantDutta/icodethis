//change month
function changeMonth(x) {
    let months = document.querySelectorAll(".months span");
    let dates = document.querySelectorAll(".date");
    months.forEach((y) => {
        if (x === y) {
            x.classList.add("active");
        } else y.classList.remove("active");
    })
    let curr = dates[0].innerText.substring(0,3);
    dates.forEach((z) => {
      z.innerText = z.innerText.replace(curr,x.id.toUpperCase());
    })
}