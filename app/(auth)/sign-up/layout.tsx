/* eslint-disable @typescript-eslint/no-unused-vars */

import SignIn from "../sign-in/page";
import SignUp from "./page";
import React from "react";

export default function RootLayout ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main>
          {children}
      </main>
    );
  }
  