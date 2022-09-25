const gpuInfo = require('gpu-info');
gpuInfo().then(function(data) {
    console.log('GPUS:', data);
});