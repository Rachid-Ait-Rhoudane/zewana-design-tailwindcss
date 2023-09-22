let menuBtn = document.getElementById("seconde-menu-btn");

let menuBtnTopLigne = document.querySelector("#seconde-menu-btn span");

let menu = document.getElementById("menu");

let menuChildren = document.querySelectorAll("#menu *");

menuBtn.addEventListener("click", function () {
    menuBtnTopLigne.classList.toggle("w-full");
    menuBtn.classList.toggle("bg-gray-100");
    menuBtn.classList.toggle("text-blue-500");
    menu.classList.toggle("h-fit");
    menu.classList.toggle("p-4");
});

window.addEventListener("click", function (e) {

    if(e.target.id !== "seconde-menu-btn" && e.target.id !== "menu" && !Array.from(menuChildren).includes(e.target)) {
        menuBtnTopLigne.classList.remove("w-full");
        menuBtn.classList.remove("bg-gray-100");
        menuBtn.classList.remove("text-blue-500");
        menu.classList.remove("h-fit");
        menu.classList.remove("p-4");
    }

});