const sequelize = require('../config/connection');
// import models
const  { CpuInfo, GpuInfo } = require('../models');
const cpuData = require('./cpuSeedData.json');
const gpuData = require('./gpuSeedData.json');



const seedcpuDatabase = async () => {
    await sequelize.sync ({ force: true });
    await CpuInfo.bulkCreate(cpuData);
    process.exit(0);
};

const seedgpuDatabase = async () => {
    await sequelize.sync ({ force: true });
    await GpuInfo.bulkCreate(gpuData);
    process.exit(0);
};

seedcpuDatabase();
seedgpuDatabase();
