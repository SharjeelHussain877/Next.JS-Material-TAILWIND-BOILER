import React from "react";
import Card from "./Card";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt, FaReact  } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiNextdotjs } from "react-icons/si";

const data = [
  {
    id: 1,
    title: "HTML",
    icon: <FaHtml5 size={28}/>,
    status: "passed"
  },
  {
    id: 2,
    title: "CSS",
    icon: <FaCss3Alt size={28}/>,
    status: "passed"
  },
  {
    id: 3,
    title: "JavaScript",
    icon: <IoLogoJavascript size={28}/>,
    status: "failed"
  },
  {
    id: 4,
    title: "React.js",
    icon: <FaReact  size={28}/>,
    status: "enrolled"
  },
  {
    id: 5,
    title: "Next.js",
    icon: <SiNextdotjs size={28}/>,
    status: "enrolled"
  }
]

function CardContainer() {
  return (
    <div className="m-8 w-full max-w-screen-2xl px-8 flex justify-start gap-8 lg:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-row-5">

      {
        data.length && data.map((elem) => (
          <Card data={elem} key={elem.id}/>
        ))
      }
    </div>
  );
}

export default CardContainer;
