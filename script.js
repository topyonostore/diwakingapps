document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
       ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const mainNav = document.getElementById("mainNav");

    if (menuBtn && mainNav) {

        menuBtn.addEventListener("click", function () {

            mainNav.classList.toggle("active");

            const isOpen =
                mainNav.classList.contains("active");

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

        });


        // Mobile menu close after clicking a link
        mainNav.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                mainNav.classList.remove("active");

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* =========================
       SMOOTH SCROLL
       ========================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener("click", function (event) {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                    history.pushState(
                        null,
                        "",
                        targetId
                    );
                }

            });

        });


    /* =========================
       FAQ ACCORDION
       ========================= */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(function (question) {

        question.addEventListener("click", function () {

            const currentItem =
                question.parentElement;

            const isActive =
                currentItem.classList.contains("active");


            // Close all FAQ items
            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove("active");

                    const button =
                        item.querySelector(".faq-question");

                    const icon =
                        button.querySelector("span");

                    if (icon) {
                        icon.textContent = "+";
                    }

                });


            // Open clicked FAQ
            if (!isActive) {

                currentItem.classList.add("active");

                const icon =
                    question.querySelector("span");

                if (icon) {
                    icon.textContent = "−";
                }

            }

        });

    });

});
