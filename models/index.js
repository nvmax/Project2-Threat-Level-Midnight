const CpuInfo = require('./CpuInfo');
const GpuInfo = require('./GpuInfo');
const User = require('./Users');



CpuInfo.hasMany(User, {
    foreignKey: 'cpu_id',
    });

User.belongsTo(CpuInfo, {
    foreignKey: 'cpu_id',

});

GpuInfo.hasMany(User,{
    foreignKey: 'gpu_id',
});

User.belongsTo(GpuInfo,{
    foreignKey: 'gpu_id',
});


module.exports = {User, GpuInfo, CpuInfo};
