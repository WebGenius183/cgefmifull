document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.getElementById("hamburger");
        const menu = document.getElementById("menu");
        const buttons = document.getElementById("buttons");

        hamburger.addEventListener("click", function () {
            menu.classList.toggle("active");
            buttons.classList.toggle("active");
        });
    });

let popup = document.getElementById('popup');

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            else{
                entry.target.classList.remove('show')
            }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
