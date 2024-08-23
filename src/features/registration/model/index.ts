import registration from "@/features/registration/api";
import {
  validateEmail,
  validatePassword,
} from "@/features/registration/model/validation";
import useUserStore from "@/entities/user/model/store";

export const submitRegistration = async (
  email: string,
  password: string,
  setError: (error: any) => void,
  setIsLoading: (loading: boolean) => void,
  setRegistrationSuccess: (success: boolean) => void,
) => {
  const emailError = validateEmail(email) ? "" : "Enter a correct email";
  const passwordError = validatePassword(password)
    ? ""
    : "The password must contain 8 characters, including letters and numbers";

  if (emailError || passwordError) {
    setError({ email: emailError, password: passwordError });
    return;
  }

  try {
    setIsLoading(true);
    await registration(email, password);
    setRegistrationSuccess(true);
  } catch (error: any) {
    setError({ general: error.response?.data?.message });
  } finally {
    setIsLoading(false);
  }
};
