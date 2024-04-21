import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

type FMBucketArgs = {
  Name: string;
  Product: string;
  Public?: boolean;
};

export class FMBucket extends pulumi.ComponentResource {
  constructor(args: FMBucketArgs, opts?: pulumi.ComponentResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;

    super("pkg:index:FMBucket", resourceName, {}, opts);

    const stack = pulumi.getStack();

    const bucketName = `${resourceName}-${stack}`;

    const bucket = new aws.s3.Bucket(
      args.Name,
      {
        bucket: bucketName,
        acl: aws.s3.CannedAcl.Private,
        tags: {
          Name: bucketName,
          Environment: stack,
        },
      },
      {
        parent: this,
      }
    );

    if (args.Public) {
      new aws.s3.BucketPublicAccessBlock(
        args.Name,
        {
          bucket: bucket.id,
          blockPublicAcls: true,
          blockPublicPolicy: true,
          ignorePublicAcls: true,
          restrictPublicBuckets: true,
        },
        {
          parent: this,
        }
      );
    }
  }
}
