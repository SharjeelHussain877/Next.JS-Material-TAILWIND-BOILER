import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { GrLinkNext } from "react-icons/gr";

export default function ProcessModal({ open, handleOpen, data }) {
   
  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
          <DialogHeader className="nunito flex-col mt-3 ">
        Instructions for Claiming Your {data?.title} Certificate
        <hr className="bg-black w-full" />
      </DialogHeader>
      <DialogBody className="nunito justify-center overflow-y-scroll  max-h-[50vh] p-4">
        <h1 className="text-xl">1: Complete the Quiz:</h1>
        <ul className="list-disc pl-5">
          <li>30 MCQs, 20 minutes.</li>
          <li>Focus on course material.</li>
        </ul>
        <h1 className="text-xl mt-4 ">2: Achieve Passing Marks:</h1>
        <ul className="list-disc pl-5">
          <li>Minimum 70% required.</li>
          <li>Certificate displayed only if passed.</li>
        </ul>
        <h1 className="text-xl mt-4 ">3: Quiz Guidelines:</h1>
        <ul className="list-disc pl-5">
          <li>Manage time effectively.</li>
          <li>Read questions carefully.</li>
        </ul>
        <h1 className="text-xl mt-4 ">4: Support:</h1>
        <ul className="list-disc pl-5">
          <li>Contact support for issues.</li>
          <li>Check FAQs for common questions.</li>
        </ul>
        <h1 className="text-lg mt-4 ">Remember, the quiz is an important part of the certification process, designed to ensure that you have acquired the necessary knowledge and skills. Good luck!</h1>
      </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span className="nunito">Cancel</span>
          </Button>
          <Button variant="gradient" color="green" className="flex gap-2 items-center">
            <span className="nunito">Start Quiz</span> <GrLinkNext size={20}/>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
