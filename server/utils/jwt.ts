import { H3Event } from "h3";

export const sendRefreshToken = (event: H3Event, token: string) => {
  setCookie(event, "refresh_token", token, {
    httpOnly: true,
    sameSite: true,
  });
};
