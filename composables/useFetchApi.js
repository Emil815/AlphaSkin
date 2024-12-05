export default (url, options = {}) => {

    const authCookie = useCookie("auth_token");

    const config = useRuntimeConfig();


    console.log({ options })
    return $fetch(url, {
        ...options,
        baseURL: config.public.apiBase,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${authCookie.value}`,
        },
    });
};
