import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const RegisterAcount = () => {
  const router = useRouter();

  const toHome = () => {
    router.push("/");
  };

  const submitHandle = (e) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Shoestore | Register</title>
        <link rel="icon" href="./icon.png" type="image/x-icon" />
      </Head>
      <section id="register" className="h-screen flex flex-col justify-center items-center">
        <div className="heading-store mt-50px]">
          <h1 className="text-bold text-4xl font-bold text-center cursor-pointer" onClick={toHome}>
            SHOESTORE
          </h1>
        </div>

        <form onSubmit={submitHandle} className="bg-white flex flex-col w-[90%] md:w-[70%] lg:w-[40%] justify-center items-center p-5 mt-5 rounded-xl shadow-xl">
          <h1 className="text-2xl md:text-4xl text-center">Create New Acount</h1>
          <h5 className="text-xl md:text-3xl text-center md:pb-6">It's quick and easy.</h5>
          <div className="row-name md:flex w-full">
            <input type="text" placeholder="First Name" className=" w-[100%] md:w-[50%] border-2 h-10 md-m-1 my-1 rounded text-center focus:outline-blue-500" />
            <input type="text" placeholder="Surename" className=" w-[100%] md:w-[50%] border-2 h-10 md-m-1 my-1 rounded text-center focus:outline-blue-500" />
          </div>
          <div className="row-email-password w-full">
            <input type="text" placeholder="Mobile Number or Email Address" className="border-2 w-[100%] lg:w-[100%] text-center h-10 rounded my-1 focus:outline-blue-500  " />
            <input type="text" placeholder="Password" className="border-2 w-[100%] lg:w-[100%] text-center h-10 rounded my-1 focus:outline-blue-500  " />
          </div>
          <div className="gender-col md:flex w-full">
            <div className="male-col flex justify-center items-center w-full border-2 h-10 md-m-1 my-1 rounded text-center focus:outline-blue-500">
              <input type="radio" id="male" name="gender" value="male" className="mx-2 accent-red-500" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="female-col flex justify-center items-center w-full border-2 h-10 md-m-1 my-1 rounded text-center focus:outline-blue-500">
              <input type="radio" id="female" name="gender" value="female" className="mx-2 accent-red-500" />
              <label htmlFor="male">Female</label>
            </div>
          </div>
          <input type="submit" className=" border-2 h-10 w-full md:w-[30%] rounded bg-green-500 active:bg-green-500 hover:bg-blue-500 text-white font-bold cursor-pointer my-2" />
        </form>
      </section>
    </>
  );
};

export default RegisterAcount;
