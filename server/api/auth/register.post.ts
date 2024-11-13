// import { useNuxtApp } from "nuxt/app";

// export default defineEventHandler(async (event) => {
//   const body = await readBody(event);
//   const runtimeConfig = useRuntimeConfig();
// const { $axios } = useNuxtApp();

//   try {
//     await $axios.post("/api/auth/signup", {
//       name: "qedim",
//       surname: "babayev",
//       password: "qedim123",
//       phoneNumber: "0558490094",
//     });
//   } catch (err) {
//     throw createError({
//       message: "Authorization Failed",
//       statusCode: 401,
//     });
//   }

//   return {
//     message: "success",
//   };
// });
