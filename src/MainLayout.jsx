import React from "react";
import Nav from "./Components/Nav";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import MobileNav from "./Components/MobileNav";

function MainLayout() {
  return (
    <>
      <main className=" flex bg-[#f1f1f1] text-[#333] box-border font-sans antialiased">
        <Nav />

        <section className="bg-[#f1f1f1] flex flex-col w-[calc(100vw-300px)] ml-[300px]  mt-20  px-30 py-10 pb-10 max-2xl:w-full max-2xl:ml-[300px]  max-xl:w-[calc(100vw - 100px)] max-xl:ml-[100px] max-2xl:pb-30 max-2xl:p-10 max-2xl:ml-0 max-lg:px-4 max-md:mt-8 max-lg:ml-0">
          <Header />
          <Outlet />
        </section>
      </main>
      <div className="bg-[#f1f1f1] fixed bottom-0 right-0 z-100 w-full hidden max-lg:block  max-2xl:w-full max-2xl:ml-0  shadow-top">
        <MobileNav />
      </div>
    </>
  );
}

export default MainLayout;
