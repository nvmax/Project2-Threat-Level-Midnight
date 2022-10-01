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
    // displayLoading();
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
      // hideLoading();
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

const gamesModalHandler = async (event) => {
  event.preventDefault();
  // get image src link
  const image = event.target.getAttribute("src");
  // https://cdn.akamai.steamstatic.com/steam/apps/1188540/header.jpg
  // get id after apps/
  const appid = image.split("/")[5];
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
    const uid = await JSON.parse(localStorage.getItem("id"));
    console.log(appid, uid);
    console.log(JSON.stringify(uid));
    // use user id and game id to run comparison
    const response2 = await fetch(
      `/api/steamuser/compare/uid/${JSON.stringify(uid)}/appid/${appid.replace(
        /"/g,
        ""
      )}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    // return appid and name to console.log
    if (response2.ok) {
      const executioner = await response2.json();
      // break out data to be used
      const gameinfo = game[appid].data;
      // console.log(gameinfo);
      const name = gameinfo.name;
      const date = gameinfo.release_date.date;
      const description = gameinfo.short_description;
      const background = gameinfo.background;

      const website = gameinfo.website;
      const headerimage = gameinfo.header_image;

      // console.log(headerimage);

      document.querySelector("#modName").textContent = name;

      document.querySelector("#modDate").textContent = date;

      document.querySelector("#description").textContent = description;

      const backgroundEl = document.querySelector(".modCard");
      backgroundEl.style.backgroundImage = `url('${background}')`;

      const modImg = document.querySelector(".modImg");
      modImg.style.backgroundImage = `url('${headerimage}')`;

      document.querySelector("#website").innerHTML = website;
      // console.log(gameinfo.pc_requirements)
      // if (gameinfo.pc_requirements !== "undefined") {
      if (gameinfo.pc_requirements.recommended) {
        const recommended = gameinfo.pc_requirements.recommended;
        document.querySelector("#recommended").innerHTML = recommended;
        document.querySelector("#minimum").innerHTML = '';
      } else {
        const minimum = gameinfo.pc_requirements.minimum;
        document.querySelector("#minimum").innerHTML = minimum;
        document.querySelector("#recommended").innerHTML = '';
      }

      console.log(executioner);
      ["cpu", "gpu", "ram"].forEach((key1) => {
        ["Rec", "Min"].forEach((key2) => {
          const elem = document.getElementById(`${key1}Status${key2}`);
          console.log(elem);
          const hardware = `${key1}Meets${key2}`;
          console.log(hardware);
          let result = executioner[hardware];

          if (result === true || result === false) {
            console.log(result);
            if (result === true) {
              elem.innerHTML = "✔️";
            } else if (result === false) {
              console.log("que pasa");
              elem.innerHTML = "❌";
            }
          } else {
            elem.innerHTML = "❔";
          }
        });
      });
    } else {
      console.log("Failed to get compare info");
    }
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
};

const searchPageContainer = document.querySelector(".search-page-container");
searchPageContainer.addEventListener("click", gamesModalHandler);

[...document.getElementsByClassName("card-img-container")].forEach((e) =>
  e.addEventListener("click", gamesModalHandler)
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
