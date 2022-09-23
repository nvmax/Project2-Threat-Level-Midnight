const os = require('node:os');

// return just one
const CPUarray = os.cpus();

// in bytes
const totalmem = os.totalmem();

// user core
const userCPU = CPUarray.map(function(i) {
    return i.model;
});
console.log(userCPU[0]);

// user memory
const userMem = Math.round(totalmem / 1073741824 / 4) * 4;
console.log(userMem);
