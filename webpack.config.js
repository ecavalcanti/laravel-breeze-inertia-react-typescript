const path = require('path');

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
            ziggy: path.resolve('vendor/tightenco/ziggy/dist'), 
        }
    },
};
