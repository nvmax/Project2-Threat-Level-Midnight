const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    
    if (response.ok) {
      alert('You have been logged out')
      document.location.replace('/index');
    } else {
      alert('Failed to log out.');
    }
  };
  
  // document.querySelector('#logout').addEventListener('click', logout);
  