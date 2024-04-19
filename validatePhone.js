var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validatePhone() {
    var phone = document.getElementById('phone').value;

    if (!phone.match(/^\d+$/)) {
        phoneError.innerHTML = 'Invalid phone number';
        return false;
    }

    phoneError.innerHTML = '<i class="bx bx-check"></i>';
    return true;
}
