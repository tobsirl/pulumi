import * as pulumi from "@pulumi/pulumi";

type FMDockerImageRepoArgs = {
  Name: string;
  Product: string;
};

export class FMDockerImageRepo extends pulumi.ComponentResource {
  constructor(
    args: FMDockerImageRepoArgs,
    opts?: pulumi.ComponentResourceOptions
  ) {
    const resourceName = `${args.Product}-${args.Name}`;
    super("pkg:index:FMDockerImageRepo", resourceName, {}, opts);
  }
}
