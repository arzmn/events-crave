"use client";
import * as React from "react";
import { useParams } from "next/navigation";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export default function Login() {
  const { loginType } = useParams<{ loginType: string }>();

  return (
    <>
      {loginType === "sign-in" && <SignIn />}
      {loginType === "sign-up" && <SignUp />}
      <div id="captcha-container"></div>
    </>
  );
}
