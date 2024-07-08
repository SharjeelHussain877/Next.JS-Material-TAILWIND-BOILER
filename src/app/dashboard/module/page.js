"use client";
import { useEffect } from "react";
import { useRouter, redirect } from "next/navigation";
import Appbar from "@/components/Navbar";
import CardContainer from "@/components/CardContainer";


export default function Page() {


  return (
    <div className="flex items-center flex-col mx-auto max-w-screen-3xl">
      <Appbar />
      <>
        <span className="w-full max-w-screen-2xl my-10 mt-12 px-5 text-start " >
        Hi! Muhammad Fakhir 👋 <br/>
        Welcome to the SMIT student portal. You can find all your courses listed below
        </span>
      </>
      <CardContainer />
      {/* <PdfGenerator /> */}
    </div>
  );
}