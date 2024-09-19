"use client";

import style from "./style.module.scss";

import { AuthForm } from "@/widgets/auth-form";

import useUserStore from "@/entities/user/model/store";

import { UserLogout } from "@/features/logout";
import { User } from "@/entities/user";

import { Title } from "@/shared/ui/title";

const Profile = () => {
  const { setIsLoggedIn, isLoggedIn, setUser } = useUserStore();

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
