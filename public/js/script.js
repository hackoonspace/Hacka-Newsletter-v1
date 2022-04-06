document.querySelector(".form-style").addEventListener("click", onClick);

function onClick() {
    grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_key, {action: 'submit'})
        .then(function(token) {
            document.querySelector('#token').value = token;
        });
    });
}