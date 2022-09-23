const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#login-email').value.trim();
    const password = document.querySelector('#login-password').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/user/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/search');
      } else {
        const warning = document.getElementById('warning');
        warning.innerHTML = 'Failed to log in';
      }
    }
  };
  
  document
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);
  