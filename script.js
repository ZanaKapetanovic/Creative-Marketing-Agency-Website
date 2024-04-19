
var navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}

document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = i === index ? "flex" : "none";
        }
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    document.getElementById("next").addEventListener("click", nextSlide);
    document.getElementById("prev").addEventListener("click", prevSlide);

    showSlide(currentSlide);
});

var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('full-name').value;

    if (name.length == 0) {
        nameError.innerHTML = 'This field is required';
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="bx bx-check"></i>';
    return true;

}

function validatePhone() {
    var phone = document.getElementById('phone').value;

    if (phone.length == 0) {
        phoneError.innerHTML = 'This field is required';
        return false;
    }

    if (!phone.match(/^\d+$/)) {
        phoneError.innerHTML = 'Invalid phone number';
        return false;
    }

    phoneError.innerHTML = '<i class="bx bx-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = 'This field is required';
        return false;
    }
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        emailError.innerHTML = 'Invalid email address';
        return false;
    }
    emailError.innerHTML = '<i class="bx bx-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById('message').value;

    if (message.length === 0) {
        messageError.innerHTML = 'This field is required';
        return false;
    }

    messageError.innerHTML = '<i class="bx bx-check"></i>';
    return true;
}

function validateForm() {
    var isNameValid = validateName();
    var isPhoneValid = validatePhone();
    var isEmailValid = validateEmail();
    var isMessageValid = validateMessage();

    if (isPhoneValid && isEmailValid && isPhoneValid && isMessageValid) {
        document.getElementById('submit-error').innerHTML = '';
        return true; 
    } else {
        document.getElementById('submit-error').innerHTML = 'Please fill in all required fields correctly.';
        return false; 
    }
}
function scrollToContactForm() {
    var contactForm = document.getElementById('contact-fieldset');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
     }
 }
