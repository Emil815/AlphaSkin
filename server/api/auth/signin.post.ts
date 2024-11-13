import { useFetch } from "nuxt/app";
import { H3Event } from "h3";
import { Login } from "~/types";
import { sendRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event:H3Event) => {
  const config = useRuntimeConfig();

  let tokens:Login = {
    accessToken : '',
    refreshToken : ''
  }

  const { phoneNumber, password } = await readBody(event); // Assuming useBody is used to retrieve request body

  try {
    const result: Login = await $fetch("/api/auth/login", {
      method: "POST",
      body: { phoneNumber, password },
      baseURL: config.public.apiBase,
    });


    const { refreshToken, accessToken }= result;

    tokens = {
        refreshToken,
        accessToken
    }
    sendRefreshToken(event, refreshToken);
 
  } catch (error) {
    console.error("API call failed:", error);
    throw error; // Rethrow or handle error accordingly
  }

  return { ...tokens };
});
