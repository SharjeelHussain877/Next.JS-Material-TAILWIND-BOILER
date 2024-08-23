"use client";
import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { Header, Hero, CustomButton, CustomCard, CustomHeading, CustomImage, CustomFooter } from "@/components"
export default function Panel() {
  const [num, setNum] = useState(0);

  function foo() {
    setNum(Math.floor(Math.random() * 10))
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="m-4 text-4xl bg-blue-gray-100 w-20 h-20 flex justify-center items-center rounded-md">
        {num}
      </div>
      <Button type="button" onClick={foo}>
        Click me
      </Button>

      <div>
        <Header />
        <Hero />
        <CustomButton />
        <CustomCard />
        <CustomHeading />
        <CustomImage />
        <CustomFooter />
      </div>
    </div>
  );
}
