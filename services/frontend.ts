import * as pulumi from "@pulumi/pulumi";
import { FMBucket } from "../resources/bucket";

type FMFrontendArgs = {
  Name: string;
  Product: string;
};

export class FMFrontend extends pulumi.ComponentResource {
  constructor(args: FMFrontendArgs, opts?: pulumi.ComponentResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FMFrontend", resourceName, {}, opts);

    new FMBucket(
      {
        Name: args.Name,
        Product: args.Product,
        Public: true,
      },
      { parent: this }
    );
  }
}
