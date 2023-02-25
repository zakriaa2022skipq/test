const { Stack, Duration } = require("aws-cdk-lib");
const path = require("path");
// const sqs = require('aws-cdk-lib/aws-sqs');
const lambda = require("aws-cdk-lib/aws-lambda");
class TrainingSprint1Stack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);
    const hello = new lambda.Function(this, "HelloLambda", {
      runtime: lambda.Runtime.NODEJS_16_X,
      code: lambda.Code.fromAsset("resources"),
      handler: "HelloWorldLamda.handler",
    });
    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'TrainingSprint1Queue', {
    //   visibilityTimeout: Duration.seconds(300)
    // });
  }
}

module.exports = { TrainingSprint1Stack };
