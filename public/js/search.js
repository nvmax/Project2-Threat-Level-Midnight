const spinner = document.querySelector(".spinner");
const displayLoading = () => {
  spinner.style.display = "block";
};

const hideLoading = () => {
  spinner.style.display = "none";
};

const searchFormHandler = async (event) => {
  event.preventDefault();
  const searchInput = document.querySelector("#search-input").value.trim();

  const parse = new DOMParser();

  if (searchInput) {
    displayLoading();
    // get appid from api/steam/ + searchInput
    const response = await fetch("/api/steam/" + searchInput, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    // return appid and name to console.log
    if (response.ok) {
      const games = await response.text();
      //    console.log(games);
      const gamehtml = parse.parseFromString(games, "text/html");

      const gameinfo = gamehtml.querySelector(".searched-games-container");
      hideLoading();
      document
        .querySelector(".search-page-container")
        .replaceChildren(gameinfo);
    } else {
      console.log("Failed to search");
    }
  } else {
    console.log("Please enter a game name first");
  }
};

const searchedGamesHandler = async (event) => {
  event.preventDefault();
  // get image src link
  const image = event.target.getAttribute("src");
  console.log(image);
  // https://cdn.akamai.steamstatic.com/steam/apps/1188540/header.jpg
  // get id after apps/
  const appid = image.split("/")[5];
  console.log(appid);
  const response = await fetch(
    `https://intense-inlet-78981.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${appid}&l=en`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
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

    document.querySelector("#name").textContent = name;
    document.querySelector("#date").textContent = date;
    document.querySelector("#description").textContent = description;
    const backgroundEl = document.querySelector(".modCard");

    backgroundEl.style.backgroundImage = `url('${background}')`;
    document.querySelector("#recommended").innerHTML = recommended;
    document.querySelector("#website").innerHTML = website;

    const mod1Img = document.querySelector(".modImg");
    mod1Img.style.backgroundImage = `url('${headerimage}')`;
  } else {
    console.log("Failed to get game info");
  }
  document.querySelector(".modal").style.visibility = "visible";
  // get appid from click on modal
  console.log(event.target.getAttribute("data-appid"));
  // close modal when clicked again
  document.querySelector(".modal").addEventListener("click", (event) => {
    document.querySelector(".modal").style.visibility = "hidden";
  });
};

const gameInfoHandler = async (event) => {
  event.preventDefault();
  // get image src link
  const image = event.target.getAttribute("src");
  console.log(image);
  // https://cdn.akamai.steamstatic.com/steam/apps/1188540/header.jpg
  // get id after apps/
  const appid = image.split("/")[5];
  console.log(appid);
  const response = await fetch(
    `https://intense-inlet-78981.herokuapp.com/https://store.steampowered.com/api/appdetails?appids=${appid}&l=en`,
    {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }
  );
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

    document.querySelector("#name").textContent = name;

    document.querySelector("#date").textContent = date;

    document.querySelector("#description").textContent = description;

    const backgroundEl = document.querySelector(".modCard");
    backgroundEl.style.backgroundImage = `url('${background}')`;

    const modImg = document.querySelector(".modImg");
    modImg.style.backgroundImage = `url('${headerimage}')`;

    document.querySelector("#recommended").innerHTML = recommended;

    document.querySelector("#website").innerHTML = website;
  } else {
    console.log("Failed to get game info");
  }
  document.querySelector(".modal").style.visibility = "visible";
  // get appid from click on modal
  console.log(event.target.getAttribute("data-appid"));
  // close modal when clicked again
  document.querySelector(".modal").addEventListener("click", (event) => {
    document.querySelector(".modal").style.visibility = "hidden";
  });
};

const toggleProfile = async (event) => {
  event.preventDefault();

  const profile = document.getElementById("userProfile");
  if (window.getComputedStyle(profile).visibility === "hidden") {
    profile.style.visibility = "visible";
  } else {
    profile.style.visibility = "hidden";
  }
};

const displayManageForm = async (event) => {
  event.preventDefault();

  const manageForm2 = document.getElementById("manageDevices2");
  const manageForm1 = document.getElementById("manageDevices1");
  if (window.getComputedStyle(manageForm2).display === "none") {
    manageForm2.style.display = "block";
    manageForm1.style.display = "none";
  }
};

const manageDeviceData = async (event) => {
  event.preventDefault();

  const manageForm2 = document.getElementById("manageDevices2");
  const manageForm1 = document.getElementById("manageDevices1");
  if (window.getComputedStyle(manageForm2).display === "none") {
    manageForm2.style.display = "none";
    manageForm1.style.display = "block";
  }

  // whatever you want to do with the data
};

const searchPageContainer = document.querySelector(".search-page-container");
searchPageContainer.addEventListener("click", searchedGamesHandler);

[...document.getElementsByClassName("main-card-container")].forEach((e) =>
  e.addEventListener("click", gameInfoHandler)
);
document.querySelector("#search").addEventListener("submit", searchFormHandler);
document
  .querySelector("#profileToggle")
  .addEventListener("click", toggleProfile);
document
  .querySelector("#manageButton")
  .addEventListener("click", displayManageForm);
document
  .querySelector("#submitDevice")
  .addEventListener("click", manageDeviceData);
