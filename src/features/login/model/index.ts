import { login } from "@/features/login/api";
import useUserStore from "@/entities/user/model/store";

export const submitLogin = async (
  email: string,
  password: string,
  setIsLoading: (loading: boolean) => void,
  setError: (error: any) => void,
) => {
  try {
    setIsLoading(true);
    const response = await login(email, password);
    useUserStore.getState().setIsLoggedIn(true);
    useUserStore.getState().setUser(response.data.user);
    localStorage.setItem("token", response.data.accessToken);
  } catch (error: any) {
    setError({ general: error.response.data.message });
  } finally {
    setIsLoading(false);
  }
};
