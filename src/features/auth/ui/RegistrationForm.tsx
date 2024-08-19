"use client";
import React, { useState } from "react";

import registration from "@/features/auth/api/registration";

import { MainForm } from "@/shared/ui/forms/main";
import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { ErrorText } from "@/shared/ui/error-text";

import { validateEmail, validatePassword } from "../model/validation";

export default function RegistrationFrom() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitRegistration = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Enter a correct email");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "The password must contain 8 characters. As well as letters and numbers",
      );
      return;
    }

    registration({ email, password });
  };
  return (
    <MainForm action="POST" onSubmit={submitRegistration}>
      <Input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <MainButton>Confirm</MainButton>
      {error && <ErrorText>{error}</ErrorText>}
    </MainForm>
  );
}
