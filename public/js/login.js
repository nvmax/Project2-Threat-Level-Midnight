const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/search');
    } else {
      const warning = document.getElementById('warning');
      warning.innerHTML = 'Failed to log in';
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

document.querySelector('#login').addEventListener('submit', loginFormHandler);
