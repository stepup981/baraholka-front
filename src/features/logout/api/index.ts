import axiosConfigUser from "@/shared/api/user";

const logout = async (): Promise<void> => {
  return await axiosConfigUser.post("logout");
};

export default logout;
