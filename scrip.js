document.addEventListener("DOMContentLoaded", () => {
    // --- Handle Add to Cart buttons (Gallery page) ---
    const cartButtons = document.querySelectorAll(".shoes-card button");

    cartButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const productName = button.parentElement.querySelector("h3").textContent;
            const price = button.parentElement.querySelector(".price").textContent;
            alert(`${productName} has been added to your cart.\nPrice: ${price}`);
        });
    });

    // --- Handle Contact Form (Feature page) ---
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault(); // Stop page reload

            const name = contactForm.querySelector("input[type='text']").value;
            const email = contactForm.querySelector("input[type='email']").value;
            const message = contactForm.querySelector("textarea").value;

            alert(`Thank you, ${name}! Your message has been sent.\nWe’ll contact you at ${email} soon.`);

            console.log("Form Submitted:");
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);

            contactForm.reset(); // Clear form
        });
    }
});
