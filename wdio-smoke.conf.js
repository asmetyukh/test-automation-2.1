import wdio from './wdio.conf';

//change the config here by changing wdio.config
wdio.config.specs =  [
    './test/specs-smoke/*.js'
];

wdio.config.mochaOpts = {
    require: ['@babel/register'],
    ui: 'bdd',
    timeout: 60000,
    bail: true
};

exports.config = wdio.config;