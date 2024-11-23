export default (url, options = {}) => {
    const { useAuthToken } = useAuth();
    const config = useRuntimeConfig();


    console.log({ options })
    return $fetch(url, {
        ...options,
        baseURL: config.public.apiBase,
        // headers: {
        //     ...options.headers,
        //     Authorization: `Bearer ${useAuthToken().value}`,
        // },
    });
};
