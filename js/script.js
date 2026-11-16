// 1. زرار تفعيل وإلغاء الوضع الليلي
const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// 2. ميزة إضافية: الترحيب بالزائر ومنع الفورم من إرسال بيانات فاضية
const contactForm = document.getElementById("contact-form");
const visitorNameInput = document.getElementById("visitor-name");
const emailInput = document.getElementById("email");
const greetingMsg = document.getElementById("greeting-msg");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // يمنع الصفحة من عمل Refresh

    const nameValue = visitorNameInput.value.trim();
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        alert("Please enter your email.");
        return;
    }

    greetingMsg.textContent = "Hello, " + nameValue + "! Thanks for leaving your contact.";
    contactForm.reset();
});