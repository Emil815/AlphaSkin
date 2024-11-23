export default defineEventHandler(async (event) => {


  

  //   // Make the original API call (e.g., fetching data from an external service)

  console.log("bura girr");

  //   // Check if the API call returns 403 (Forbidden)
  //   if (apiResponse.status === 403) {
  //     try {
  //       // Refresh the token if it's expired or invalid
  //       await auth.refreshToken();

  //       // Retry the original request with the new token
  //       const retryResponse = await fetchSomeApi(event); // Retry the request after refreshing the token

  //       // Return the new response after retrying
  //       return retryResponse;
  //     } catch (error) {
  //       console.error("Error refreshing token:", error);
  //       // If refreshing the token fails, return a 401 Unauthorized error
  //       throw createError({ statusCode: 401, message: "Unauthorized" });
  //     }
  //   }

  //   // If the response is not 403, return the original API response
  //   return apiResponse;
});
