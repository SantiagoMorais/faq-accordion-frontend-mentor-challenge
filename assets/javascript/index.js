const faqs = document.querySelectorAll(".faq")

faqs.forEach(question => {
    question.addEventListener("click", () => {
        const faqSelected = document.querySelector(".selected");
        if (faqSelected) {
            if (faqSelected === question) {
                faqSelected.classList.toggle("selected")
            } else {
                faqSelected.classList.toggle("selected");
                question.classList.toggle("selected");
            }
        } else {
            question.classList.toggle("selected")
        }
    })
})