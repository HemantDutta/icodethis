//Menu Item Activator
let menu_items = document.querySelectorAll(".list-item");
menu_items.forEach((x) => {
    x.addEventListener("click", () => {
        x.classList.toggle("active");
    })
})

//Close others
function closeOthers(x) {
    menu_items.forEach((y) => {
        if (x !== y) y.classList.remove("active");
    })

    const item_lists = ["reminders", "todo", "groceries", "others"];
    let curr_list = document.getElementById(item_lists[x.id]);
    curr_list.classList.add("active");
    item_lists.forEach((m) => {
        if (m !== item_lists[x.id]) {
            let curr = document.getElementById(m);
            curr.classList.remove("active");
        }
    })
}

//Item checker
let list_items = document.querySelectorAll(".items span");
list_items.forEach((x) => {
    x.addEventListener("click", () => {
        x.classList.toggle("checked");
    })
})

//Panel Opener
let opener = document.getElementById("opener");
opener.addEventListener("click", () => {
    opener.classList.toggle("opened");
    document.getElementById("left").classList.toggle("opened");
})