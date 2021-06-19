import wdio from './wdio.conf';

//change the config here by changing wdio.config
wdio.config.specs =  [
    './test/specs-api/*.js'
]

exports.config = wdio.config;