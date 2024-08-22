"use client";

import React, { useState } from "react";
import Link from "next/link";

import useUserStore from "@/entities/user/model/store";
import { login } from "@/features/login/api";

import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { MainForm } from "@/shared/ui/forms/main";
import { ErrorText } from "@/shared/ui/error-text";
import { Spinner } from "@/shared/ui/spinner";

import { path } from "@/shared/routing";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setUser, setIsLoggedIn, setIsLoading, isLoading } = useUserStore();

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await login(email, password);
      setIsLoggedIn(true);
      setUser(response.data.user);
      localStorage.setItem("token", response.data.accessToken);
    } catch (error: any) {
      setError(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <MainForm action="POST" onSubmit={submitLogin}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <MainButton>Login</MainButton>
        <p>
          If you dont have an account,{" "}
          <Link href={path.registration}>register</Link>
        </p>
      </MainForm>
    </div>
  );
};

export default LoginForm;
