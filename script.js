console.log("Script loaded!");
```javascript
/* ==========================================
   TYPING ANIMATION
========================================== */

const typingText = [
    "BCA Student",
    "Web Developer",
    "Frontend Developer",
    "AI & ML Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement = document.querySelector(".hero-content h3");

function typeEffect() {

    if (!typingElement) return;

    const currentText = typingText[textIndex];

    if (!isDeleting) {

        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            textIndex++;

            if (textIndex >= typingText.length) {

                textIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, isDeleting ? 60 : 100);

}

typeEffect();



/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {

        threshold: 0.2

    }

);

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});



/* ==========================================
   SCROLL TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "scrollTopBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.cursor = "pointer";
topButton.style.background =
    "linear-gradient(135deg,#8B5CF6,#F9A8D4)";
topButton.style.color = "#fff";
topButton.style.fontSize = "22px";
topButton.style.display = "none";
topButton.style.boxShadow =
    "0 10px 20px rgba(0,0,0,.15)";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



/* ==========================================
   DARK MODE
========================================== */

const darkButton = document.createElement("button");

darkButton.innerHTML = "🌙";

darkButton.id = "darkModeBtn";

darkButton.style.position = "fixed";
darkButton.style.top = "20px";
darkButton.style.right = "20px";
darkButton.style.width = "50px";
darkButton.style.height = "50px";
darkButton.style.border = "none";
darkButton.style.borderRadius = "50%";
darkButton.style.cursor = "pointer";
darkButton.style.background = "#8B5CF6";
darkButton.style.color = "#fff";
darkButton.style.fontSize = "20px";
darkButton.style.zIndex = "9999";

document.body.appendChild(darkButton);

darkButton.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkButton.innerHTML = "☀️";

    }

    else {

        darkButton.innerHTML = "🌙";

    }

});
/* ===========================
   MOBILE MENU
=========================== */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    links.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_ucyqzsr",
        "template_3fu8foo",
        this
    )
    .then(function () {
        alert("✅ Message sent successfully!");
        contactForm.reset();
    })
    .catch(function (error) {
        console.error(error);
        alert("❌ Failed to send message. Please try again.");
});
```
