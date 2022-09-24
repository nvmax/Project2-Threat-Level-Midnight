const searchFormHandler = async (event) => {
    event.preventDefault();
const searchInput = document.querySelector('#search-input').value.trim();


if (searchInput) {
    // get appid from api/steam/ + searchInput
    const response = await fetch('/api/steam/' + searchInput, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    });
    // return appid and name to console.log
    if (response.ok) {
        console.log(response.json());
    } else {
        console.log('Failed to search');
    }
} else {
    console.log('Please enter a game name first');   
}};






// https://git.heroku.com/intense-inlet-78981.git // heroku deploy for handling cors error

const games = 'https://intense-inlet-78981.herokuapp.com/https://steamspy.com/api.php?request=top100in2weeks';
// use corsOptions to get the data from the api
fetch(games, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:3001' }
})
    .then(response => response.json())
    .then(data => {
        const appidArray = Object.keys(data); 
            const appidDataArray = appidArray.map(function (appid) {
                return {
                    appid,
                    ccu: data[appid].ccu
                };
            });
            appidDataArray.sort(function (a, b) {
                return b.ccu - a.ccu;
            });      
             // grab only the first 10 
            const top20 = appidDataArray.slice(0, 20);
            console.log(top20);
    })
    .catch(err => {
        console.log(err);
    });






    // fetch(url1)
    // .then(function (response) {
    //     return response.json();
    // })
    // .then(function (data) {
    //     const appidArray = Object.keys(data); 
    //     const appidDataArray = appidArray.map(function (appid) {
    //         return {
    //             appid,
    //             ccu: data[appid].ccu
    //         };
    //     });
    //     appidDataArray.sort(function (a, b) {
    //         return b.ccu - a.ccu;
    //     });      
    //      // grab only the first 10 
    //     const top20 = appidDataArray.slice(0, 20);
    //     console.log(top20);
    // })
    // .catch(function (err) {
    //     console.log(err);
    // });
















document.querySelector('#search').addEventListener('submit', searchFormHandler);



