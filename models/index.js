const CpuInfo = require('./CpuInfo');
const GpuInfo = require('./GpuInfo');
const User = require('./Users');
const Steam = require('./Steam');



CpuInfo.hasMany(User, {
    foreignKey: 'cpu_id',
});

User.belongsTo(CpuInfo, {
    foreignKey: 'cpu_id',
});

GpuInfo.hasMany(User, {
    foreignKey: 'gpu_id',
});

User.belongsTo(GpuInfo, {
    foreignKey: 'gpu_id',
});

Steam.hasMany(User, {
    foreignKey: 'steam_id',
});

User.belongsTo(Steam, {
    foreignKey: 'steam_id',
});



module.exports = { User, GpuInfo, CpuInfo, Steam };
