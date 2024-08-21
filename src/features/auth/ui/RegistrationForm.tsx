"use client";
import React, { useState } from "react";

import {
  validateEmail,
  validatePassword,
} from "@/features/auth/model/validation";

import useUserStore from "@/entities/user/model/store";

import { MainForm } from "@/shared/ui/forms/main";
import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { ErrorText } from "@/shared/ui/error-text";
import { Title } from "@/shared/ui/title";
import { Spinner } from "@/shared/ui/spinner";

const RegistrationForm = () => {
  const { registrationUser, isLoading } = useUserStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<{
    email?: string;
    password?: string;
    general?: string;
  }>({});
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const submitRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailError = validateEmail(email) ? "" : "Enter a correct email";
    const passwordError = validatePassword(password)
      ? ""
      : "The password must contain 8 characters, including letters and numbers";

    if (emailError || passwordError) {
      setError({ email: emailError, password: passwordError });
      return;
    }

    try {
      await registrationUser(email, password);
      setRegistrationSuccess(true);
    } catch (error: any) {
      const message = error.response?.data?.message;
      setError({ general: message });
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
    <MainForm action="POST" onSubmit={submitRegistration}>
      <Input
        type="text"
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
      <MainButton>Confirm</MainButton>
    </MainForm>
  );
};

export default RegistrationForm;
