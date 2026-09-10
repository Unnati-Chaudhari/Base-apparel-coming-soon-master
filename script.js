const email = document.querySelector("#email");
const checkBtn = document.querySelector(".arrow");
const message = document.querySelector("#message");

checkBtn.addEventListener("click", () => {
    const emailValue = email.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(emailValue)) {
        message.textContent = "";
        email.classList.remove("error");
    } else {
        message.textContent = "Please provide a valid email";
        email.classList.add("error");
    }
});