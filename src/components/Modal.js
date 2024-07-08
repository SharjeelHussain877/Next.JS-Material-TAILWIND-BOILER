import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";
import PdfGenerator from "./Pdf";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { MdDownload } from "react-icons/md";

export default function Modal({ open, handleOpen, data }) {
  const printRef = React.useRef();

  const handleGeneratePdf = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element, { scale: 8 });

    const imgData = canvas.toDataURL("image/jpeg", 0.85);

    const elementWidth = element.offsetWidth;
    const elementHeight = element.offsetHeight;

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [elementWidth, elementHeight],
    });

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      0,
      elementWidth,
      elementHeight,
      undefined,
      "FAST"
    );

    // Save the PDF
    pdf.save("certificate.pdf");
  };

  async function download() {
    await handleGeneratePdf();
    handleOpen();
  }
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
        <DialogHeader className="nunito">
          Certificate for {data?.title}
        </DialogHeader>
        <DialogBody className="nunito flex justify-center">
          <Image
            src="/certificate.avif"
            alt="CErtificate"
            width={500}
            height={300}
          />
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
          <Button variant="gradient" color="green" onClick={download} className="flex gap-2 items-center">
            <span className="nunito">Download</span> <MdDownload size={20}/>
          </Button>
        </DialogFooter>
        <span className="absolute left-[1000vh]">
          <PdfGenerator printRef={printRef} />
        </span>
      </Dialog>
    </>
  );
}
