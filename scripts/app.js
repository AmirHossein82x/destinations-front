const navBtn = document.querySelector(".nav__btn")
const mobileMenu = document.querySelector(".nav__menu")

let navOpen = false;
navBtn.addEventListener("click", function () {
    if (navOpen){
        navBtn.classList.remove("nav__btn--open")
        navOpen = false;
        mobileMenu.style.left = "-25rem";
        

    }
    else {

        navBtn.classList.add("nav__btn--open")
        navOpen = true;
        mobileMenu.style.left = "0";
    }
    
})