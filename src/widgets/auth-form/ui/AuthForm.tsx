import React, { useState } from "react";
import Link from "next/link";

import useUserStore from "@/entities/user/model/store";

import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { MainForm } from "@/shared/ui/forms/main";
import { ErrorText } from "@/shared/ui/error-text";
import { Spinner } from "@/shared/ui/spinner";
import { Title } from "@/shared/ui/title";

import { submitLogin } from "@/features/login/model";
import { submitRegistration } from "@/features/registration/model";
import { path } from "@/shared/routing";

interface AuthFormProps {
  isLoginMode: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLoginMode }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const submitAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoginMode) {
      await submitLogin(email, password, setIsLoading, setError);
    } else {
      await submitRegistration(
        email,
        password,
        setError,
        setIsLoading,
        setRegistrationSuccess,
      );
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  if (registrationSuccess) {
    return (
      <div>
        <Title level={2}>Registration success</Title>
        <p>Please, check your email</p>
      </div>
    );
  }

  return (
    <div>
      <MainForm action="POST" onSubmit={submitAuth}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error.email && <ErrorText>{error.email}</ErrorText>}

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error.password && <ErrorText>{error.password}</ErrorText>}
        {error.general && <ErrorText>{error.general}</ErrorText>}

        <MainButton>{isLoginMode ? "Login" : "Confirm"}</MainButton>
        {isLoginMode ? (
          <p>
            If you dont have an account,{" "}
            <Link href={path.registration}>register</Link>
          </p>
        ) : (
          ""
        )}
      </MainForm>
    </div>
  );
};

export default AuthForm;
