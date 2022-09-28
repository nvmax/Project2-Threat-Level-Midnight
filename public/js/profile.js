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
            if (response.ok) {
                // getting data from table and setting it to variables
                const user = await response.json();
                const id = user.id;
                const username = user.username;
                const email = user.email;
                const ram = user.ramsize;
                const cpu = JSON.parse(localStorage.getItem('cpu'));
                const gpu = JSON.parse(localStorage.getItem('gpu'));
    
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
    }
    } else {
        console.log('Please enter your email first');
    }
};

const ProfileUpdateHandler = async (event) => {
    event.preventDefault();
    const id = JSON.parse(localStorage.getItem('id'));
    const username = JSON.parse(localStorage.getItem('username'));
    const email = JSON.parse(localStorage.getItem('email'));
    const ram = document.querySelector('#ram').value.trim();
    const gpuID = JSON.parse(localStorage.getItem('gpu_info'));
    const cpuID = JSON.parse(localStorage.getItem('cpu_info'));
    const response = await fetch(`/api/user/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ username, email, ramsize: ram, cpu_id: cpuID, gpu_id: gpuID,  }),
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
const cpuHandler = async (event) => {
    event.preventDefault();
    // when user types in id="CPU" grab the value and look it up in the database
    const cpu = document.querySelector('#CPU').value.trim();
    console.log(cpu);
    // save cpu to localstorage 
    localStorage.setItem('cpu', JSON.stringify(cpu));
};

const gpuHandler = async (event) => {
    event.preventDefault();
    // when user types in id="GPU" grab the value and look it up in the database
    const gpu = document.querySelector('#GPU').value.trim();
    console.log(gpu);
    // save gpu to localstorage
    localStorage.setItem('gpu', JSON.stringify(gpu));
};

const gpuLookupHandler = async (event) => {
    event.preventDefault();
    // get gpu id from api call
    const gpu = JSON.parse(localStorage.getItem('gpu'));
    console.log(gpu);
    // get gpu info from database
    const response = await fetch(`/api/gpuinfo/search/${gpu}`, {
        method: 'GET',
    });
    if (response.ok) {
        const gpuinfo = await response.json();
        console.log(gpuinfo);
        // save gpu info to localstorage
        const gpuID = JSON.stringify(gpuinfo[0].id);
        localStorage.setItem('gpu_info', gpuID);
    } else {
        console.log('Failed to get gpu info');
    }
};

const cpuLookupHandler = async (event) => {
    event.preventDefault();
    // get cpu id from api call
    const cpu = JSON.parse(localStorage.getItem('cpu'));
    console.log(cpu);
    // get cpu info from database
    const response = await fetch(`/api/cpuinfo/search/${cpu}`, {
        method: 'GET',
    });
    if (response.ok) {
        const cpuinfo = await response.json();
        console.log(cpuinfo);
        // save cpu info to localstorage
        const cpuID = JSON.stringify(cpuinfo[0].id);
        localStorage.setItem('cpu_info', cpuID);
    } else {
        console.log('Failed to get cpu info');
    }
};






// add event listern to keyup event to send to cpuHandler function to grab cpu info from database
document.querySelector('#CPU').addEventListener('keyup', cpuHandler);
document.querySelector('#GPU').addEventListener('keyup', gpuHandler);
// using id="submitDevice" in profile.handlebars to call profileUpdateHandler
document.querySelector('#submitDevice').addEventListener('click', cpuLookupHandler);
document.querySelector('#submitDevice').addEventListener('click', gpuLookupHandler);
document.querySelector('#submitDevice').addEventListener('click', ProfileUpdateHandler);
document.querySelector('#ram').addEventListener('change', profileFormHandler);
document.querySelector('#desktop').addEventListener('change', profileFormHandler);
document.querySelector('#laptop').addEventListener('change', profileFormHandler);
document.addEventListener('DOMContentLoaded', profileFormHandler);