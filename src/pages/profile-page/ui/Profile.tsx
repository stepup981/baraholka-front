"use client";
import { useEffect } from "react";
import style from "./style.module.scss";

import { checkAuth, login } from "@/features/login/api";
import { AuthForm } from "@/widgets/auth-form";

import useUserStore from "@/entities/user/model/store";

import { UserLogout } from "@/features/logout";
import { User } from "@/entities/user";
import { Spinner } from "@/shared/ui/spinner";

import { Title } from "@/shared/ui/title";

const Profile = () => {
  const { setIsLoggedIn, isLoggedIn, setUser } = useUserStore();

  // useEffect(() => {
  //   if (!localStorage.getItem("token")) return;
  //   const fetchAuthStatus = async () => {
  //     try {
  //
  //       const response = await checkAuth();
  //       localStorage.setItem("token", response.data.accessToken);
  //       setUser(response.data.user);
  //       setIsLoggedIn(true);
  //     } catch (error) {
  //       setIsLoggedIn(false);
  //       console.log(error);
  //     }
  //   };
  //   fetchAuthStatus();
  // }, []);

  return (
    <section className={style.profile}>
      <Title level={1}>Profile</Title>
      {!isLoggedIn && <AuthForm isLoginMode={true} />}
      {isLoggedIn && (
        <>
          <User />
          <UserLogout />
        </>
      )}
    </section>
  );
};

export default Profile;
