const url = "http://store.steampowered.com/api/appdetails?appids=387990";


// get json from steam api image.png http://store.steampowered.com/api/appdetails?appids=387990 log body
fetch(url)
.then(function(response) {
    return response.json();
}).then(function(data) {
 
    let recommended = data[387990].data.pc_requirements.recommended;
   
    let recommendedArray = recommended.split("<strong>");
    console.log(recommendedArray);
   
    recommendedArray.forEach(function(item) {
        item = item.replace(/<\/?[^>]+(>|$)/g, "");
        console.log(item);
    }
    );
}).catch(function(err) {
    console.log(err);
});
// alec ottersons job