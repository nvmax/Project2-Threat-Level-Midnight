//steamspy.com/api.php?request=top100in2weeks 

const url1 = "https://steamspy.com/api.php?request=top100in2weeks";

fetch(url1)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
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
    .catch(function (err) {
        console.log(err);
    });
