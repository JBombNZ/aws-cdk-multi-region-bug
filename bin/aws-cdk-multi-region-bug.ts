#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import {DnsStack} from "../lib/dns-stack";
import {ComputeStack} from "../lib/compute-stack";

const app = new cdk.App();

const dnsStack = new DnsStack(app, 'DNSStack', {
    env: {
        region: 'us-east-1',
    },
    crossRegionReferences: true
})

const regions = ['us-west-1', 'us-east-1', 'ap-southeast-2']

regions.forEach((region) => {

    new ComputeStack(app, region + '-ComputeStack', {
        env: {
            region: region
        },
        crossRegionReferences: true,
        dnsStack
    })

})