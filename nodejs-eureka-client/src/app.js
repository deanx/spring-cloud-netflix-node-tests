import server from './server';

import Eureka from 'eureka-client';

const client = new Eureka({
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
server.listen(3030, () => {
    console.log('server listening at 3030');
    client.start();
});