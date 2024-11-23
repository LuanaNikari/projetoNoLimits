document.addEventListener('DOMContentLoaded', function() {
    const hamburguerBtn = document.getElementById('hamburguer-btn');
    const navbar = document.getElementById('navbar');
    const navLinks = navbar.querySelectorAll('a'); 


    hamburguerBtn.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });


    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');  
        });
    });
});

// Referência ao botão
const scrollUpBtn = document.getElementById("scrollUpBtn");

// Mostrar o botão ao rolar
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollUpBtn.classList.add("show");
        scrollUpBtn.classList.remove("hide");
    } else {
        scrollUpBtn.classList.add("hide");
        scrollUpBtn.classList.remove("show");
    }
});

// Rolar para o topo ao clicar no botão
scrollUpBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});