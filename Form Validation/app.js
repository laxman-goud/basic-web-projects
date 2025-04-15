const Fname = document.getElementById('full-name');
const number = document.getElementById('phone-no');
const email = document.getElementById('email-id');
const submitEl = document.querySelector('.submit');
const errorMsg = document.querySelector('.error-message');

function submitForm(event) {
    event.preventDefault(); // Prevent default form submission

    const nameVal = Fname.value.trim();
    const phoneVal = number.value.trim();
    const emailVal = email.value.trim();

    // Full Name Validation
    if (!/^[a-zA-Z ]{3,}$/.test(nameVal)) {
        errorMsg.textContent = "Enter a valid full name (only letters, min 3 characters).";
        errorMsg.style.color = "red";
        return;
    }

    // Phone Number Validation
    if (!/^\d{10}$/.test(phoneVal)) {
        errorMsg.textContent = "Enter a valid 10-digit phone number.";
        errorMsg.style.color = "red";
        return;
    }

    // Email Validation
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(emailVal)) {
        errorMsg.textContent = "Enter a valid email address.";
        errorMsg.style.color = "red";
        return;
    }

    errorMsg.textContent = "Form Submitted Successfully!";
    errorMsg.style.color = "blue";

    setTimeout(() => {
        errorMsg.textContent = "";
        Fname.value = '';
        number.value = '';
        email.value = '';
    }, 2000);
}

submitEl.addEventListener('click', submitForm);
