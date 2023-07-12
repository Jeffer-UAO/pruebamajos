import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";

import { Footer, FooterApp, LoginFormClient, Redes } from "../../components";
import { BasicLayout } from "@/layouts";

export default function Login() {
  const { user } = useAuth();
  const router = useRouter();

  if (user) {
    window.location.replace("/");
    return null;
  }
  return (
    <>
      <LoginFormClient />
    </>
  );
}
