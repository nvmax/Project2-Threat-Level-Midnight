const os = require('node:os');

exports.totalmem = function () {
    // in bytes
    const totalmem = os.totalmem();

    // user memory
    const userMem = Math.round(totalmem / 1073741824 / 4) * 4;
    console.log(userMem);
};

exports.cpus = function () {
    // return just one
    const CPUarray = os.cpus();

    // user core
    const userCPU = CPUarray.map(function (i) {
        return i.model;
    });
    console.log(userCPU[0]);
};