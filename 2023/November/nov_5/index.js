//Login Function
function login() {
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    let msg = document.getElementById("msg");
    let loginCard = document.getElementById("login");
    let light = document.getElementById("light");

    if (!username.value || !password.value) {
        msg.classList.remove("success");
        msg.classList.add("error");
        msg.innerText = "Please fill all the fields!";
    } else {
        msg.classList.remove("error");
        msg.classList.add("success");
        msg.innerText = "Login Successful";
        setTimeout(() => {
            loginCard.style.transform = "translateY(20%)";
            loginCard.style.opacity = "0";
            setTimeout(() => {
                loginCard.style.display = "none";
                light.style.display = "flex";
                setTimeout(() => {
                    light.style.transform = "translateY(0%)";
                    light.style.opacity = "1";
                }, 400)
            }, 400)
        }, 400)
    }
}

//On-Off
function onOff() {
    let light = document.getElementById("light");
    let dark = document.getElementById("dark");
    let onBtn = document.getElementById("onBtn");

    if (light.classList.contains("dark")) {
        onBtn.disabled = true;
        light.classList.remove("dark");
        dark.style.transform = "translateY(-100%)";
        onBtn.style.background = "#ffffff";
        onBtn.style.color = "#000000";
        onBtn.innerText = "ON";
        setTimeout(() => {
            dark.style.display = "none";
            dark.style.transform = "translateY(100%)";
            onBtn.disabled = false;
        }, 400);
    } else {
        onBtn.disabled = true;
        light.classList.add("dark");
        dark.style.display = "initial";
        setTimeout(() => {
            dark.style.transform = "translateY(0%)";
            onBtn.disabled = false;
            onBtn.style.background = "#1e2b57";
            onBtn.style.color = "#697ed4";
            onBtn.innerText = "OFF";
        }, 50)
    }
}