```javascript
// Portfolio JavaScript


// 1. Page Loaded Message

document.addEventListener("DOMContentLoaded", function () {

    console.log("Welcome to Akshat Saxena's Portfolio!");

});


// 2. Navigation Links

const navLinks = document.querySelectorAll(".nav-links a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId.startsWith("#")) {

            const targetSection = document.querySelector(targetId);

            if (targetSection) {

                event.preventDefault();

                targetSection.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }

    });

});


// 3. Contact Form

const contactForm = document.querySelector(".contact-form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();


        // Check Name

        if (name === "") {

            alert("Please enter your name.");

            return;
        }


        // Check Email

        if (email === "") {

            alert("Please enter your email.");

            return;
        }


        // Check Message

        if (message === "") {

            alert("Please enter your message.");

            return;
        }


        // Check Email Format

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(email)) {

            alert("Please enter a valid email address.");

            return;
        }


        // Success Message

        alert(
            "Thank you, " +
            name +
            "! Your message has been received."
        );


        // Clear Form

        contactForm.reset();

    });

}


// 4. Project Cards

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.cursor = "pointer";

    });

});


// 5. Current Year

const footerText =
    document.querySelector("footer p");


if (footerText) {

    const currentYear =
        new Date().getFullYear();


    footerText.innerHTML =
        "&copy; " +
        currentYear +
        " Akshat Saxena. All Rights Reserved.";

}


// 6. Profile Image

const profileImage =
    document.querySelector(".profile img");


if (profileImage) {

    profileImage.addEventListener("error", function () {

        console.log("Profile image could not be loaded.");

    });

}


// 7. Active Navigation

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;


        if (window.scrollY >= sectionTop - 150) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.style.color = "white";


        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.style.color = "#60a5fa";

        }

    });

});
```
