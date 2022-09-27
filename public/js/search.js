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

const gameInfoHandler = async (event) => {
    event.preventDefault();
    const appid = event.target.getAttribute('data-appid');
    // get data from https://store.steampowered.com/api/appdetails?appids=
    const response = await fetch('https://intense-inlet-78981.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=' + appid + '&l=en', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    // return data to console.log
    if (response.ok) {
        const game = await response.json();
        // break out data to be used 
        const gameinfo = game[appid].data;
        console.log(gameinfo);
        const name = gameinfo.name;
        const date = gameinfo.release_date.date;
        const description = gameinfo.short_description;
        const background = gameinfo.background;
        const recommended = gameinfo.pc_requirements.recommended;
        const website = gameinfo.website;
        const headerimage = gameinfo.header_image;

        console.log(headerimage);
        
        document.querySelector('#name').textContent = name;

        document.querySelector('#date').textContent = date;

        document.querySelector('#description').textContent = description;

        const backgroundEl = document.querySelector('.modCard');
        backgroundEl.style.backgroundImage = `url('${background}')`;

        const modImg = document.querySelector('.modImg');
        modImg.style.backgroundImage = `url('${headerimage}')`;

        document.querySelector('#recommended').innerHTML = recommended;

        document.querySelector('#website').innerHTML = website;

    } else {
        console.log('Failed to get game info');
    }
    document.querySelector('.modal').style.visibility = 'visible';
    // get appid from click on modal 
    console.log( event.target.getAttribute('data-appid'));
    // close modal when clicked again
    document.querySelector('.modal').addEventListener('click', (event) => {
        document.querySelector('.modal').style.visibility = 'hidden';
    });
    
};

const toggleProfile = async (event) => {
    event.preventDefault();
    
    const profile = document.getElementById("userProfile");
    if (window.getComputedStyle(profile).visibility === "hidden") {
        profile.style.visibility = 'visible';
    } else {
        profile.style.visibility = 'hidden';
    }
}

[...document.getElementsByClassName('main-card-container')].forEach(e => e.addEventListener('click', gameInfoHandler));
document.querySelector('#search').addEventListener('submit', searchFormHandler);
document.querySelector('#profileToggle').addEventListener('click', toggleProfile);




