
const profileFormHandler = async (event) => {
    event.preventDefault();
    // get user email from local storage
    let email = JSON.parse(localStorage.getItem('email'));
    // get which is checked laptop or desktop 
    // const device = document.querySelector('input[type="checkbox"]:checked').value;
    // console.log(device);
    // get ram from form
    // const ram = document.querySelector('#ram').value.trim();
    // console.log(ram);
    let id = "";

    if (email) {
        const response = await fetch(`/api/user/email/${email}`, {
            method: 'GET',
        });
        if (response.ok) {
            // getting data from table and setting it to variables
            const user = await response.json();
            const id = user.id;
            const username = user.username;
            const email = user.email;
            const ram = user.ramsize;
            const cpu = user.cpu_id;
            const gpu = user.gpu_id;

            // setting data to the html
            document.getElementById("uname").textContent = username;
            document.getElementById("email").textContent = email;
            document.getElementById("profileRAM").innerHTML = `<b>Ram Size:</b> ${ram} GB`;
            document.getElementById("profileCPU").innerHTML = `<b>CPU ID:</b> ${cpu}`;
            document.getElementById("profileGPU").innerHTML = `<b>GPU ID:</b> ${gpu}`;

            // storing data in localstorage
            localStorage.setItem('id', JSON.stringify(id));
            localStorage.setItem('username', JSON.stringify(username));
        } else {
            console.log('Failed to get user info');
        }
    } else {
        console.log('Please enter your email first');
    }
};

const ProfileUpdateHandler = async (event) => {
    event.preventDefault();
    // getting data from local storage
    const id = JSON.parse(localStorage.getItem('id'));
    const username = JSON.parse(localStorage.getItem('username'));
    const email = JSON.parse(localStorage.getItem('email'));

    // getting data from the forms
    const ram = document.querySelector('#ram').value.trim();
    const cpu = document.querySelector('#cpu').value.trim();
    const gpu = document.querySelector('#gpu').value.trim();
    console.log(cpu, gpu);


    // sending new data to the user's row
    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ username, email, ramsize: ram}),
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        const user = await response.json();
        console.log(user);
    } else {
        console.log('Failed to update user info');
    }
};

// create function to handle grabbing cpu info from database as key clicks are happening
// const cpuHandler = async (event) => {
//     event.preventDefault();
//     // when user types in id="CPU" grab the value and look it up in the database
//     const cpu = document.querySelector('#CPU').value.trim();
//     console.log(cpu);
//     const response = await fetch(`/api/cpuinfo/search/${cpu}`, {
//         method: 'GET',
//     });
//     if (response.ok) {
//         const cpuinfo = await response.json();
//         console.log(cpuinfo);
       
//         const cpuinfoText = cpuinfo.map((cpu) => cpu.cpuinfo).join('');
//         console.log(cpuinfoText);
//         //returns objects----- problem
//         document.querySelector('#CPU').value = cpuinfo;
//     } else {
//         console.log('Failed to get cpu info');
//     }
//     // update type = text with results from database 
// };


// add event listern to keyup event to send to cpuHandler function to grab cpu info from database
// document.querySelector('#CPU').addEventListener('keyup', cpuHandler);
// using id="submitDevice" in profile.handlebars to call profileUpdateHandler
document.querySelector('#submitDevice').addEventListener('click', ProfileUpdateHandler);
document.querySelector('#ram').addEventListener('change', profileFormHandler);
document.querySelector('#desktop').addEventListener('change', profileFormHandler);
document.querySelector('#laptop').addEventListener('change', profileFormHandler);
document.addEventListener('DOMContentLoaded', profileFormHandler);