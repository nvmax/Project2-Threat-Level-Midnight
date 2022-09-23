const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#form-username').value.trim();
  const email = document.querySelector('#form-email').value.trim();
  const password = document.querySelector('#form-password').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/search');
    } else {
      warning.innerHTML = 'Failed to sign up.';
    }
  } else {
    const form = document.querySelector('.login-form-container');
    const errorMsg = document.createElement('span');
    errorMsg.textContent = 'Please enter your information first';
    errorMsg.classList.add('error-message');
    form.appendChild(errorMsg);

    setTimeout(() => {
      document.querySelector('.error-message').innerHTML = '';
    }, 2500);
    
  }
};

document
  .querySelector('#register')
  .addEventListener('submit', signupFormHandler);
