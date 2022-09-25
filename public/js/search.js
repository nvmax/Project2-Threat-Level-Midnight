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






// https://git.heroku.com/intense-inlet-78981.git // heroku deploy for handling cors error













document.querySelector('#search').addEventListener('submit', searchFormHandler);



