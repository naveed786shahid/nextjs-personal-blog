"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import AnimatedCircleWithArrow from "@/components/AnimatedCircle";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppButton phoneNumber="+97332380244" message="Hi there!" />
          <AnimatedCircleWithArrow />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
import WhatsAppButton from "@/components/WhatsAppButton";
