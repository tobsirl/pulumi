import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

type FMBucketArgs = {
  Name: string;
  Product: string;
};

export class FMBucket extends pulumi.ComponentResource {
  constructor(args: FMBucketArgs, opts?: pulumi.ComponentResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FMBucket", resourceName, {}, opts);
  }
}
