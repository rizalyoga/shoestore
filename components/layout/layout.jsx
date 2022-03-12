import React from "react";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import Footer from "../footer/footer";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>SHOESTORE</title>
        <link rel="icon" href="/favicon.ico" />
        {/* /* ------------------------------ nprogress CDN -----------------------------  */}
        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" /> */}
      </Head>
      <Navbar />
      <main className="w-full flex flex-row mx-auto" style={{ maxWidth: "1440px" }}>
        <Sidebar />
        <div className="w-full">{children}</div>
      </main>
      <Footer />

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
