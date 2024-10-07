import * as cdk from "aws-cdk-lib";
import * as iam from "aws-cdk-lib/aws-iam";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import * as ssm from "aws-cdk-lib/aws-ssm";
import * as events from "aws-cdk-lib/aws-events";
import * as targets from "aws-cdk-lib/aws-events-targets";
import { Construct } from "constructs";
import * as dotenv from "dotenv";

export class WaterPlantsNotifierStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // SSMパラメータストアに保存
    dotenv.config();
    new ssm.StringParameter(this, "ParameterBusinessLineChannelSecret", {
      parameterName: `${process.env.BUSINESS_LINE_CHANNEL_SECRET_SSM_PARAMETER_NAME}`,
      stringValue: `${process.env.BUSINESS_LINE_CHANNEL_SECRET}`,
    });
    new ssm.StringParameter(this, "ParameterBusinessLineChannelAccessToken", {
      parameterName: `${process.env.BUSINESS_LINE_CHANNEL_ACCESS_TOKEN_SSM_PARAMETER_NAME}`,
      stringValue: `${process.env.BUSINESS_LINE_CHANNEL_ACCESS_TOKEN}`,
    });

    // Lambdaを作成
    const waterPlantsNotifierFunction = new NodejsFunction(
      this,
      "WaterPlantsNotifierFunction",
      {
        entry: "lambda/index.ts",
        handler: "handler",
        runtime: lambda.Runtime.NODEJS_20_X,
        environment: {
          BUSINESS_LINE_CHANNEL_SECRET_SSM_PARAMETER_NAME:
            process.env.BUSINESS_LINE_CHANNEL_SECRET_SSM_PARAMETER_NAME ||
            "default-secret",
          BUSINESS_LINE_CHANNEL_ACCESS_TOKEN_SSM_PARAMETER_NAME:
            process.env.BUSINESS_LINE_CHANNEL_ACCESS_TOKEN_SSM_PARAMETER_NAME ||
            "default-token",
        },
      }
    );

    // LambdaにSSMパラメータストアのアクセス権限を付与
    waterPlantsNotifierFunction.addToRolePolicy(
      new iam.PolicyStatement({
        actions: [
          "ssm:GetParameter",
          "ssm:GetParameters",
          "ssm:GetParameterHistory",
        ],
        resources: [
          `arn:aws:ssm:${cdk.Stack.of(this).region}:${
            cdk.Stack.of(this).account
          }:parameter/*`,
        ],
      })
    );

    // CloudWatch Events ルールの作成（毎朝8時に実行する）
    const rule = new events.Rule(this, "WaterPlantsNotifierScheduleRule", {
      schedule: events.Schedule.cron({
        minute: "0",
        hour: "23", // UTC 23時 = JST 8時
        day: "*",
        month: "*",
        year: "*",
      }),
    });

    // Lambda 関数をターゲットとして設定
    rule.addTarget(new targets.LambdaFunction(waterPlantsNotifierFunction));
  }
}
