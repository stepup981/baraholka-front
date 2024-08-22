"use client";
import { useEffect } from "react";
import style from "./style.module.scss";

import { checkAuth, login } from "@/features/login/api";

import useUserStore from "@/entities/user/model/store";

import { LoginForm } from "@/features/login";
import { UserLogout } from "@/features/logout";
import { User } from "@/entities/user";
import { Spinner } from "@/shared/ui/spinner";

import { Title } from "@/shared/ui/title";

const Profile = () => {
  const { setIsLoggedIn, isLoggedIn, setUser, isLoading, setIsLoading } =
    useUserStore();

  useEffect(() => {
    if (!localStorage.getItem("token")) return;
    const fetchAuthStatus = async () => {
      try {
        setIsLoading(true);
        const response = await checkAuth();
        localStorage.setItem("token", response.data.accessToken);
        setUser(response.data.user);
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAuthStatus();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className={style.profile}>
      <Title level={1}>Profile</Title>
      {!isLoggedIn && <LoginForm />}
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
