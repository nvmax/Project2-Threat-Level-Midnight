
const profileFormHandler = async (event) => {
    event.preventDefault();
    // get user email from local storage
    let email = JSON.parse(localStorage.getItem('email'));
     console.log(email);
    // get which is checked laptop or desktop 
    // const device = document.querySelector('input[type="checkbox"]:checked').value;
    // console.log(device);
    // get ram from form
    // const ram = document.querySelector('#ram').value.trim();
    // console.log(ram);


    if (email) {
        // get user info from database using email
        const response = await fetch(`/api/user/email/${email}`, {
            method: 'GET',
        });
        // return user info to console.log
        if (response.ok) {
            const user = await response.json();
            console.log(user);
            // get user id
            const id = user.id;
            console.log(id);
            // get user email
            const email = user.email;
            console.log(email);
        } else {
            console.log('Failed to get user info');
        }
    } else {
        console.log('Please enter your email first');
    }
};



document.querySelector('#ram').addEventListener('change', profileFormHandler);
document.querySelector('#desktop').addEventListener('change', profileFormHandler);
document.querySelector('#laptop').addEventListener('change', profileFormHandler);
document.addEventListener('DOMContentLoaded', profileFormHandler);