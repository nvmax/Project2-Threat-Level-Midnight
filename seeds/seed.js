
const sequelize = require('../config/connection');
// import models
const  { CpuInfo, GpuInfo, Steam } = require('../models');
const cpuData = require('./cpuSeedData.json');
const gpuData = require('./gpuSeedData.json');
const steam = require('./steamSeedData.json');



const seedDatabase = async () => {
    await sequelize.sync ({ force: true });
    await CpuInfo.bulkCreate(cpuData);
    await GpuInfo.bulkCreate(gpuData);
    await Steam.bulkCreate(steam);
    process.exit(0);
};


seedDatabase();

