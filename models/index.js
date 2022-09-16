const cpuinfo = require('./cpuinfo');
const gpuinfo = require('./gpuinfo');
const User = require('./user');

User.hasOne(cpuinfo, {
    foreignKey: 'user_id',
});

cpuinfo.belongsTo(User, {
    foreignKey: 'user_id',
    
});

gpuinfo.belongsTo(User,{
    foreignKey: 'user_id',
});





module.exports = {User, gpuinfo, cpuinfo};
