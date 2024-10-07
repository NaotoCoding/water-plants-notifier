import { messagingApi, ClientConfig, TextMessage } from "@line/bot-sdk";
import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import { messageFromPlants } from "./messageFromPlants";

const getParamsFromSSM = async (paramName: string) => {
  const ssmClient = new SSMClient({ region: process.env.AWS_REGION });
  const commandGetChannelId = new GetParameterCommand({ Name: paramName });
  const paramStore = await ssmClient.send(commandGetChannelId);
  return paramStore.Parameter?.Value;
};

export const handler = async (event: any) => {
  const businessLineChannelAccessToken = await getParamsFromSSM(
    process.env.BUSINESS_LINE_CHANNEL_ACCESS_TOKEN_SSM_PARAMETER_NAME!
  );
  const businessLineChannelSecret = await getParamsFromSSM(
    process.env.BUSINESS_LINE_CHANNEL_SECRET_SSM_PARAMETER_NAME!
  );

  const config: ClientConfig = {
    channelAccessToken: businessLineChannelAccessToken!,
    channelSecret: businessLineChannelSecret!,
  };
  const messages: TextMessage[] = [
    {
      type: "text",
      text: messageFromPlants(new Date()),
    },
  ];
  const client = new messagingApi.MessagingApiClient(config);
  await client.broadcast({ messages });
};
