"use client";

import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import axios from "axios";

const api = "http://habibqatar.com.pk/TestService";

export default function Panel() {
  const [num, setNum] = useState(0);

  function foo() {
    const randomNumber = Math.round(Math.random() * 10);
    setNum(randomNumber);
    apiCallMe(api, "13", "1");
  }

  const apiCallMe = async (domain, _branchid, _priceregionid) => {
    fetch(`${domain}/${_branchid}/${_priceregionid}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
      })
      .catch((e) => console.log("error"));
  };
  // const apiCallMe = async (domain, _branchid, _priceregionid) => {
  //   const url = `${domain}/${_branchid}/${_priceregionid}`;
  //   console.log("url --> ", url);
  //   try {
  //     const res = await axios.get(url);
  //     console.log(res);
  //   } catch (e) {
  //     console.log("error", e);
  //   }
  // };

  // const fetchJSONwithouttoken = async ({ url }) => {
  //   const res = await axios(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   return axios.get(url);
  // };

  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <div className="m-4 text-4xl bg-blue-gray-100 w-20 h-20 flex justify-center items-center rounded-md">
        {num}
      </div>
      <Button type="button" onClick={foo}>
        Click me
      </Button>
    </div>
  );
}
