/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Metadata } from "next";
import localFont from "next/font/local";
import {Inter,IBM_Plex_Serif} from "next/font/google"
import "./globals.css";
import Home from "./(root)/page";
import SignIn from "./(auth)/sign-in/page";
import SignUp from "./(auth)/sign-up/page";

const inter = Inter({subsets: ["latin"], variable:'--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"], 
  weight: ['400','700'],
  variable:'--font-inter'
});

export const metadata: Metadata = {
  title: "Citi",
  description: "Citibank, N.A. is the primary U.S. banking subsidiary of Citigroup, a financial services multinational corporation ",
  icons : '/icons/logo.svg'
};

export default function Root({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
