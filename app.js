// app. js

const toogle = document.querySelector(".toggle-btn");
const close = document.querySelector(".icon-close");

const display = document.querySelector(".side-nav");

toogle.addEventListener("click", function(){
    display.classList.toggle("show");

    toggler();

})

close.addEventListener("click", function(){
    display.classList.remove("show");

    toggler();
})

function toggler(){
    toogle.firstElementChild.classList.toggle("icon-close");
    toogle.firstElementChild.classList.toggle("icon-bars");
}