const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector('#login-email').value.trim();
  const password = document.querySelector('#login-password').value.trim();

  if (email && password) {
    const response = await fetch('/api/user/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // console.log(response);
    if (response.ok) {
      let userEmail = await document.getElementById('login-email').value;
      // console.log(userEmail);
      window.localStorage.setItem('email', JSON.stringify(userEmail));

      document.location.replace('/search');
    } else {
      const warning = document.getElementById('warning');
      warning.innerHTML = 'Email or password is incorrect';

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

document.querySelector('#login').addEventListener('submit', loginFormHandler);