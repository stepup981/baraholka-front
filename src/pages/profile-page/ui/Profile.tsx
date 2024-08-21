"use client";
import style from "./style.module.scss";

import useUserStore from "@/entities/user/model/store";

import { LoginForm } from "@/features/login";
import { UserLogout } from "@/features/logout";
import { User } from "@/entities/user";

import { Title } from "@/shared/ui/title";

const Profile = () => {
  const { isAuth } = useUserStore();

  return (
    <section className={style.profile}>
      <Title level={1}>Profile</Title>
      {!isAuth && <LoginForm />}
      {isAuth && (
        <>
          <User />
          <UserLogout />
        </>
      )}
    </section>
  );
};

export default Profile;
