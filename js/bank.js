document.getElementById('login-submit').addEventListener('click', function () {

    //user email set
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //user password set
    const passwordField = document.getElementById('user-password');
    const userpassword = passwordField.value;

    //location change
    window.location.href = 'banking.html';

    //required pass & email
    // if (userEmail == 'dipu@apu.com ' && userpassword == 'khan') {
    //     window.location.href = 'banking.html';
    // }
})