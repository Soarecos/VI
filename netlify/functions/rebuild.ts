import { Handler } from "@netlify/functions";
import fetch from 'node-fetch';

export const handler: Handler = async () => {
  await fetch('https://api.netlify.com/build_hooks/671b62349136974b3ac5bf85', {
    method: 'POST',
  });

  return {
    statusCode: 200,
    body: 'Rebuild triggered',
  };
}