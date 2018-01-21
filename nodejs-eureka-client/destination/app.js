'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _eurekaClient = require('eureka-client');

var _eurekaClient2 = _interopRequireDefault(_eurekaClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = new _eurekaClient2.default({
    instance: {
        app: 'node-service',
        instanceId: '10.0.1.8:node-service:3030',
        hostName: '10.0.1.8',
        ipAddr: '10.0.1.8',
        vipAddress: 'node-service',
        dataCenterInfo: {
            name: 'MyOwn',
            "@class": 'com.netflix.appinfo.MyDataCenterInfo'
        },
        statusPageUrl: null,
        homePageUrl: null,
        healthCheckUrl: null,
        "securePort": { "$": "443", "@enabled": "false" },
        "port": { "$": "3030", "@enabled": "true" }
    },
    eureka: {
        host: '127.0.0.1',
        port: 8761,
        servicePath: '/eureka/apps/',
        statusPageUrl: 'http://localhost:8761/info',
        homePageUrl: 'http://localhost:8761',
        healthCheckUrl: 'http://localhost:8761/health'
    }
});
_server2.default.listen(3030, function () {
    console.log('server listening at 3030');
    client.start();
});