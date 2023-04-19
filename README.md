# Multi Region Bug

## Steps to replicate

1. `npm install`
2. Bootstrap multiple regions: `cdk bootstrap aws://$accountId/ap-southeast-2 aws://$accountId/us-west-1 aws://$accountId/us-east-1`
3. `cdk deploy --all` to deploy
4. Observe error

```
Received response status [FAILED] from custom resource. Message returned: AccessDeniedException: User: arn:aws:sts::$accountId:assumed-role/DNSStack-CustomCrossRegionExportWriterCustomResour-1TVU17T3ISUAH/DNSS
tack-CustomCrossRegionExportWriterCustomResour-XVqkhaL6MfRN is not authorized to perform: ssm:ListTagsForResource on resource: arn:aws:ssm:ap-southeast-2:705690605585:parameter/cdk/exports/ap-southeast-2-Compute
Stack/DNSStackuseast1RefHostedZoneDB99F8669F50CE3B because no identity-based policy allows the ssm:ListTagsForResource action
```