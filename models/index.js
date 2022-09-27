const CpuInfo = require('./cpuInfo');
const GpuInfo = require('./gpuInfo');
const User = require('./users');
const Steam = require('./steam');
const SteamUsers = require('./steamUser');



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

Steam.belongsToMany(User, {
    foreignKey : 'steam_id',
    through: {
        model: SteamUsers,
        unique: false,
    },
    as : 'user_steam',
});

User.belongsToMany(Steam, {
    foreignKey : 'user_id',
    through: {
        model: SteamUsers,
        unique: false,
    },
    as : 'steam_users',
});





module.exports = { User, GpuInfo, CpuInfo, Steam, SteamUsers};
