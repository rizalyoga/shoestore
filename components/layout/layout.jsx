import React from "react";
import { useRouter } from "next/router";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Head from "next/head";

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>SHOESTORE</title>
        <link rel="icon" href="./icon.png" type="image/x-icon" />
        {/* /* ------------------------------ nprogress CDN -----------------------------  */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" /> */}
      </Head>
      <Navbar />
      <main className="w-full flex flex-row mx-auto" style={{ maxWidth: "1440px" }}>
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
      {router.asPath === "/" ? (
        <div className="w-full banner-bottom my-5 mx-auto flex justify-center" style={{ maxWidth: "1440px" }}>
          <img src="./banner-bottom.png" alt="banner-bottom" />
        </div>
      ) : (
        <></>
      )}
      <Footer />
    </>
  );
};

export default Layout;
