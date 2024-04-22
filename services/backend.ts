import * as pulumi from "@pulumi/pulumi";

type FMBackendArgs = {
  Name: string;
  Product: string;
};

export class FMBackend extends pulumi.ComponentResource {
  constructor(args: FMBackendArgs, opts?: pulumi.ComponentResourceOptions) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FMBackend", resourceName, {}, opts);
  }
}
