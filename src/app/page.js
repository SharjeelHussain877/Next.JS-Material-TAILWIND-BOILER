"use client";
import { useState, useEffect } from "react";
import { SignUp } from "@/components/Signup";
import { Login } from "@/components/Login";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Panel() {
  const [showLogin, setShowLogin] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      console.log(token);
      if (token == null || token?.trim() === "") {
        router.push("/");
      } else{
        router.push("/dashboard");
      }
    }
  }, [router]);

  return (
    <div className="flex flex-col items-center mt-20 mx-auto max-w-screen-sm">
      <Image
        src="/logo.png"
        alt="Description of image"
        width={150}
        height={100} 
      />
      <h1 className="font-bold text-gray-700">Student Portal</h1>
      <div className="flex space-x-2 px-4 mb-4 mt-4 w-[100%]">
        <button
          onClick={() => setShowLogin(true)}
          className={`w-full py-2 rounded ${
            showLogin ? "bg-[#0D72B6] text-white" : "bg-gray-200"
          }`}
        >
          Login
        </button>
        <button
          onClick={() => setShowLogin(false)}
          className={`w-full py-2 rounded ${
            !showLogin ? "bg-[#0D72B6] text-white" : "bg-gray-200"
          }`}
        >
          Sign Up
        </button>
      </div>
      {showLogin ? <Login /> : <SignUp />}
    </div>
  );
}
