import { H3Event } from "h3";
import { Login } from "~/types";
import { sendRefreshToken } from "~/server/utils/jwt";

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig();
  const refresh_token = getCookie(event, "refresh_token");

  let tokens: Login = {
    accessToken: "",
    refreshToken: "",
  };

  const defaultHeader = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  console.log({ refresh_token });

  if (refresh_token) {
    try {
      const result: Login = await $fetch("/api/auth/refresh", {
        method: "POST",
        baseURL: config.public.apiBase,
        headers: {
          ...defaultHeader,
          Authorization: `Bearer ${refresh_token}`,
        },
      });

      console.log({ result });
      const { refreshToken, accessToken } = result;

      tokens = {
        refreshToken,
        accessToken,
      };
      sendRefreshToken(event, refreshToken);
    } catch (error) {
      console.error("API call failed:", error);
      throw error; // Rethrow or handle error accordingly
    }
  }

  return { ...tokens };
});
