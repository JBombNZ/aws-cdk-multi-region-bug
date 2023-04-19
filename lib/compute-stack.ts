import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {ARecord, RecordTarget} from "aws-cdk-lib/aws-route53";
import {StackProps} from "aws-cdk-lib";
import {DnsStack} from "./dns-stack";

interface ComputeStackProps extends StackProps {
    dnsStack: DnsStack
}

export class ComputeStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props: ComputeStackProps) {
        super(scope, id, props);

        new ARecord(this, 'ARecord', {
            recordName: this.region + '-compute',
            target: RecordTarget.fromIpAddresses('192.168.1.1'),
            zone: props.dnsStack.hostedZone
        })

    }

}
