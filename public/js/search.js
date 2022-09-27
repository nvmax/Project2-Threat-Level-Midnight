const searchFormHandler = async (event) => {
    event.preventDefault();
const searchInput = document.querySelector('#search-input').value.trim();
const parse = new DOMParser();

if (searchInput) {
    // get appid from api/steam/ + searchInput
    const response = await fetch('/api/steam/' + searchInput, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    // return appid and name to console.log
    if (response.ok) {
       const games = await response.text();
       const gamehtml = parse.parseFromString(games, 'text/html');

       const gameinfo = gamehtml.querySelector('.searched-games-container');
       document.querySelector('.search-page-container').replaceChildren(gameinfo);

    } else {
        console.log('Failed to search');
    }
} else {
    console.log('Please enter a game name first');   
}};






// https://git.heroku.com/intense-inlet-78981.git













const toggleProfile = async (event) => {
    event.preventDefault();

    const profile = document.getElementById("userProfile");
    if (window.getComputedStyle(profile).visibility === "hidden") {
        profile.style.visibility = 'visible';
    } else {
        profile.style.visibility = 'hidden';
    }
}


// [...document.getElementsByClassName('main-card-container')].forEach(e => e.addEventListener('click', gameInfoHandler));

document.querySelector('#search').addEventListener('submit', searchFormHandler);

document.querySelector('#profileToggle').addEventListener('click', toggleProfile);



