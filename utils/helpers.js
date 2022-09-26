const loggedIn = require('../utils/loggedIn');
console.log(loggedIn);

const searchLink = document.getElementById('searchlink');
const loginLink = document.getElementById('loginlink');
const logout = document.getElementById('logout');
const registerLink = document.getElementById('registerlink');

if (loggedIn == "logged") {
    searchLink.style.display = "inline-block";
    logout.style.display = "inline-block";
    loginLink.style.display = "none";
    registerLink.style.display = "none";
} else {
    searchLink.style.display = "none";
    logout.style.display = "none";
    loginLink.style.display = "inline-block";
    registerLink.style.display = "inline-block";
}