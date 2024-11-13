import { useFetch } from "nuxt/app";
import { H3Event } from "h3";
import { Login } from "~/types";
import { sendRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event:H3Event) => {
  const config = useRuntimeConfig();
  
    sendRefreshToken(event, '');
 
    return {
        accessToken : '',
    }
 
});
