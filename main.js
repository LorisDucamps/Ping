window.addEventListener('load', function () {
  document.body.classList.remove('clean-transition');
  setTimeout(function () {
    document.querySelector('.loader').classList.add('loaded');
  }, 1500);

  /* Déclaration variables */
  const formulaire = document.getElementById('form');
  const email = document.getElementById('email');
  const infosubmit = document.getElementById('info-text');

  /* Fonction de vérification avec regex*/
  function validationEmail(email) {
    var result = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return result.test(String(email).toLowerCase());
  }

  formulaire.addEventListener('submit', function (e) {
    e.preventDefault();
    var emailValue = email.value;

    if (!validationEmail(emailValue)) {
      if (emailValue.length == '') {
        formulaire.classList.add('error');
        infosubmit.innerHTML =
          'Whoops! It looks like you forgot to add your email';
      } else {
        formulaire.classList.add('error');
        infosubmit.innerHTML = 'Please provide a valid email address';
      }
    } else {
      formulaire.classList.remove('error');
      formulaire.classList.add('success');
      email.value = '';
      infosubmit.innerHTML =
        'Your email address has been taken into account. Thank you';
    }
  });
});
