"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Appbar from "@/components/Navbar";
import Image from "next/image";
import CustomCard from "@/components/CustomCard";
import { LuCode2 } from "react-icons/lu";
import { FaPython } from "react-icons/fa";

const courses = [
  {
    icon: (size) => <LuCode2 size={size} />,
    course: "web and app",
    status: "enrolled",
    city: "karachi",
    joining: new Date(),
    description: "Learn web and app development from scratch.",
  },
  {
    icon: (size) => <FaPython size={size} />,
    course: "python",
    status: "completed",
    city: "karachi",
    joining: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
      .toISOString()
      .slice(0, 10),
    endDate: new Date(),
    description: "Master Python programming language and its applications.",

  },
  {
    icon: (size) => (
      <Image alt="My Image" src={"/UXlogo.png"} width={size} height={size} />
    ),
    course: "UI/UX",
    status: "enrolled",
    city: "karachi",
    joining: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10),
    description: "Explore the principles of user interface and user experience design.",
  },
];

let pastDate = new Date(Date.now() - 20 * 24 * 60 * 60 * 1000) // 20 days back
  .toISOString()
  .slice(0, 10); // this line can substract days

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token == null || token?.trim() === "") {
        router.push("/");
      } else{
        router.push("/dashboard");
      }
    }
  }, [router]);

  return (
    <div className="flex items-center flex-col mx-auto max-w-screen-3xl">
      <Appbar />
      <span className="w-full max-w-screen-2xl my-10 mt-12 px-5 text-start ">
        Hi! Muhammad Fakhir 👋 <br />
        Welcome to the SMIT student portal. You can find all your courses listed
        below
      </span>
      <div className="m-8 w-full max-w-screen-2xl px-8 flex justify-start gap-8 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-row-4">
        {courses.length && courses.map((elem, i) => <CustomCard obj={elem} index={i} />)}
      </div>
      {/* <PdfGenerator /> */}
    </div>
  );
}
