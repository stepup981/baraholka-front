"use client";

import React, { useState } from "react";
import Link from "next/link";

import { MainButton } from "@/shared/ui/buttons/main";
import { Input } from "@/shared/ui/inputs/main-input";
import { MainForm } from "@/shared/ui/forms/main";

import { path } from "@/shared/routing";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    console.log("test");
  };

  return (
    <section>
      <MainForm action="POST" onSubmit={login}>
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
        <MainButton>Login</MainButton>
        <p>
          If you dont have an account,{" "}
          <Link href={path.registration}>register</Link>
        </p>
      </MainForm>
    </section>
  );
}
