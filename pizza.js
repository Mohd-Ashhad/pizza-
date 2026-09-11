/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (menu.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

    } else {

        icon.classList.remove("fa-times");
        
        icon.classList.add("fa-bars");

    }

});


/* =========================
   CLOSE MENU AFTER CLICK
========================= */

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   HEART BUTTON
========================= */

const hearts = document.querySelectorAll(".heart");

hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        const icon = heart.querySelector("i");

        icon.classList.toggle("far");
        icon.classList.toggle("fas");

        if (icon.classList.contains("fas")) {
            heart.style.color = "#ff3b30";
        } else {
            heart.style.color = "#ff5a1f";
        }

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealItems = document.querySelectorAll(
    ".food-card, .step, .gallery-item, .review-card"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(20px)";
    item.style.transition = "opacity .6s ease, transform .6s ease";

    observer.observe(item);

});


/* =========================
   ORDER BUTTON FEEDBACK
========================= */

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.innerHTML = '<i class="fas fa-check"></i>';

        setTimeout(() => {

            button.innerHTML = '<i class="fas fa-shopping-cart"></i>';

        }, 1000);

    });

});
