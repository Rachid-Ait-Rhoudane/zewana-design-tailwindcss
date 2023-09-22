let menuBtn = document.getElementById("seconde-menu-btn");

let menuBtnTopLigne = document.querySelector("#seconde-menu-btn span");

console.log(menuBtnTopLigne.classList);

let menu = document.getElementById("menu");

menuBtn.addEventListener("click", function () {
    if(menu.classList.contains("flex")) {
        menu.classList.remove("flex");
        menu.classList.add("hidden");
        menuBtnTopLigne.classList.remove("w-fill");
        menuBtnTopLigne.classList.add("w-0");

    } else {
        menu.classList.remove("hidden");
        menuBtnTopLigne.classList.remove("w-0");
        menu.classList.add("flex");
        menuBtnTopLigne.classList.add("w-fll");
    };
});