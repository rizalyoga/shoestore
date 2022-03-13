import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import Head from "next/head";

const NotFoundPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Page Note Found</title>
      </Head>
      <Navbar />
      <div className="h-screen flex justify-center items-center">
        <h1 className="text-6xl text-gray-800">Oops, Page Not Found !!!</h1>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
