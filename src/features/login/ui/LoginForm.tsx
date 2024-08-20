"use client";

import React, { useState } from "react";
import Link from "next/link";

import login from "@/features/login/api/login";
import useUserStore from "@/entities/user/model/store";

import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { MainForm } from "@/shared/ui/forms/main";
import { ErrorText } from "@/shared/ui/error-text";
import { Spinner } from "@/shared/ui/spinner";

import { path } from "@/shared/routing";

export default function LoginForm({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { setInfoOnUser } = useUserStore();

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      const userData = await login({ email, password });
      setInfoOnUser({
        email: userData?.user.email,
      });
      onLogin();
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <MainForm action="POST" onSubmit={submitLogin}>
        <Input
          type="text"
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
}
