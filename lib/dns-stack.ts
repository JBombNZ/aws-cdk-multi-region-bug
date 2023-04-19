import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {PublicHostedZone} from "aws-cdk-lib/aws-route53";

export class DnsStack extends cdk.Stack {

    public hostedZone: PublicHostedZone

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        this.hostedZone = new PublicHostedZone(this, 'HostedZone', {
            zoneName: 'test.testdomain.com'
        })

    }

}
