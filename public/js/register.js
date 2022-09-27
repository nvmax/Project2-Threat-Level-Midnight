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
      const loginResponse = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (loginResponse.ok) {
        document.location.replace('/search');
      }
    } else {
      const warning = document.getElementById('warning');
      warning.innerHTML = 'Failed to register, you may already have an account';

      setTimeout(() => {
        document.getElementById('warning').innerHTML = '';
      }, 2500);
    }
  } else {
    const warning = document.getElementById('warning');
    warning.innerHTML = 'Please enter your information first.';

    setTimeout(() => {
      document.getElementById('warning').innerHTML = '';
    }, 2500);
  }
};

document
  .querySelector('#register')
  .addEventListener('submit', signupFormHandler);
