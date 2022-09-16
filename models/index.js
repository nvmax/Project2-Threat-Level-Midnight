const CpuInfo = require('./CpuInfo');
const GpuInfo = require('./GpuInfo');
const User = require('./user');

User.hasOne(CpuInfo, {
    foreignKey: 'user_id',
});

CpuInfo.belongsTo(User, {
    foreignKey: 'user_id',
    
});

GpuInfo.belongsTo(User,{
    foreignKey: 'user_id',
});







module.exports = {User, GpuInfo, CpuInfo};
