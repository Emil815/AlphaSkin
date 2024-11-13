import { type Login, type LoginForm } from '~/types'


export default () => {
    const useAuthToken = () => useState("auth_token");
    const useAuthUser = () => useState("auth_user");
    const useAuthLoading = () => useState("auth_loading", () => true);

    const setToken = (newToken:string) => {
        const authToken = useAuthToken();
        authToken.value = newToken;
    };

    // const setUser = (newUser) => {
    //     const authUser = useAuthUser();
    //     authUser.value = newUser;
    // };

    // const setIsAuthLoading = (value) => {
    //     const authLoading = useAuthLoading();
    //     authLoading.value = value;
    // };

    const login = ({ phoneNumber, password }: LoginForm) => {
      return new Promise(async (resolve, reject) => {
        try {
          const data: Login = await $fetch("/api/auth/signin", {
            method: "POST",
            body: {
              phoneNumber,
              password,
            },
          });

          setToken(data.accessToken);
          // setUser(data.user);

          resolve(data);
        } catch (error) {
          reject(error);
        }
      });
    };

    const refreshToken = () => {
        return new Promise(async (resolve, reject) => {
            try {
                const data: Login = await $fetch("/api/auth/repeat",{
                    method: "POST"
                });

                setToken(data.accessToken);
                resolve(data);
            } catch (error) {
                reject(error);
            }
        });
    };


    const logout = () => {
         return new Promise(async (resolve, reject) => {
           try {
             const data: Login = await $fetch("/api/auth/logout", {
               method: "POST",
             });

             setToken('');
             window.location.reload();
             resolve(data);
           } catch (error) {
             reject(error);
           }
         });
    };

    return {
        login,
        useAuthUser,
        useAuthToken,
        refreshToken,
        // initAuth,
        useAuthLoading,
        logout,
    };
};
