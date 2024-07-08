// import React from "react";
// import profileIcon from "./../../assets/defaultprofile.jpeg";
// import schoolIcon from "./../../assets/defaultSchoolIcon.png";
// import { Col, Row, Typography, QRCode, List, Avatar } from "antd";
// // import jsPDF from "jspdf";
// // import html2canvas from "html2canvas";
// // import { useRef } from "react";
// import { MdCheckCircle } from "react-icons/md";
// import { PiScissorsFill } from "react-icons/pi";

// const styles = {
//   flexCenter: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   wave: {
//     position: "absolute",
//     // left: "0.1rem",
//     // width: "84.5mm",
//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "center",
//   },
//   logo: {
//     marginTop: 22,
//     width: 54,
//     height: 54,
//     borderRadius: "50%",
//   },
//   title: {
//     backgroundColor: "#fff",
//     textAlign: " center",
//     display: "flex",
//     justifyContent: "center",
//     lineHeight: 1.1,
//     marginTop: 22,
//   },
//   borderStyle: {
//     padding: 4,
//     width: "160px",
//     borderLeft: "1px solid black",
//     borderRight: "1px solid black",
//     position: "relative",
//     top: -10,
//   },
//   topBorderStyle: {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     right: "0",
//     height: "1px",
//     backgroundImage: "linear-gradient(to right, #000 20%, transparent 40%)",
//   },
//   bottomBorderStyle: {
//     position: "absolute",
//     bottom: "0",
//     left: "0",
//     right: "0",
//     height: "1px",
//     backgroundImage: "linear-gradient(to left, #000 20%, transparent 40%)",
//   },
//   profileImageContainer: {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   imageDiv: {
//     height: 60,
//     width: 60,
//     border: "4px solid #C2D0D1",
//   },
//   image: {
//     objectFit: "cover",
//     objectPosition: "center",
//     width: "100%",
//     height: "100%",
//   },
//   field: {
//     marginTop: -9,
//     fontSize: "16px",
//     display: "flex",
//     alignItems: "center",
//   },
//   detailsTitle: {
//     marginRight: "8px",
//     color: "#474747",
//     fontSize: "12px",
//   },
//   value: {
//     flex: 1,
//     paddingBottom: "6px",
//     borderBottom: "1px solid #000",
//     textAlign: "start",
//     fontSize: "12px",
//   },
//   svgContainer: {
//     position: "relative",
//     width: "100%",
//     height: "58px",
//     marginBottom: "-1px",
//   },
//   svg1: {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     height: "100%",
//   },
//   svg2: {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     height: "100%",
//   },
//   svg3: {
//     position: "absolute",
//     top: "0",
//     left: "0",
//     width: "100%",
//     height: "100%",
//   },
//   card: {
//     height: "98.60mm",
//     width: "66.80mm",
//     position: "relative",
//   },
// };

// // const details = {
// //   name: "Sharjeel hussain",
// //   erolledIn: "Nursery",
// //   id: "VmA-92658",
// //   parentName: "Ghulam Nabi",
// //   class: "III", // should in roman count
// //   section: "B",
// //   id: "o4897543g37t8734rbc78r",
// //   organizationTitle: "Nubit Software",
// //   conditions: [
// //     "Lorem ipsum is placeholder text commonly used in the graphic, youts and visual mockups.",
// //     "Lorem ipsum is placeholder text commonly used in the graphic",
// //     "In publishing and grapstrate the visual form of a document or a typeface without relying on meaningful content. L",
// //     "Lorem ipsum may be used as a placeholder before the final copy is available.",
// //   ],
// //   note: "Note if available", // if any
// // };

// const CustomPdf = ({ details, contentRef }) => {
//   // const contentRef = useRef();

//   // // // this function should be there where ypu creates ref
//   // const generatePdf = async () => {
//   //   const content = contentRef.current;
//   //   const canvas = await html2canvas(content, { scale: 4 });
//   //   const imgData = canvas.toDataURL("image/png");
//   //   const pdf = new jsPDF("p", "mm", "a4");
//   //   const imgWidth = 210;
//   //   const imgHeight = (canvas.height * imgWidth) / canvas.width;

//   //   pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

//   //   const pdfBlob = pdf.output("blob");
//   //   const pdfFile = new Blob([pdfBlob], { type: "application/pdf" });
//   //   pdf.save("identity-card.pdf");
//   // };

//   const { Title, Text } = Typography;

//   // details = {
//   //   ...details,
//   //   note: "Something change",
//   //   conditions: ["Must be something IF you cant customize", "new"],
//   // };

//   const name = details?.name || "Smith";
//   const organizationTitle = details?.organizationTitle || "Nubit Software";
//   const classGrade = `Grade - ${details?.classGrade}` || "Grade X";
//   const section = details?.section || "A";
//   const parentName = details?.parentName || "John Doe";
//   const imageSrc = details?.image || schoolIcon;
//   const profileImageSrc = details?.profile || profileIcon;
//   const id = details?._id || "Id not be generated";
//   const rollnum = `VMA-${details?.id}` || "abc-1234";
//   const note =
//     details?.note ||
//     "Note: This card is for organization premises only. If found please return to organization";
//   const term = details?.conditions || [
//     "This ID card is the property of school and must be presented upon request by school authorities.",
//     "The ID card is non-transferable and should not be used by anyone other than the named student.",
//     "Loss of this ID card should be reported immediately to the school office.",
//     "The ID card must be worn visibly at all times during school hours.",
//     "Misuse or alteration of this ID card may result in disciplinary action.",
//     "This ID card grants access to school facilities and services according to school rules and regulations.",
//     "Replacement of a lost ID card may incur a fee as per school policy.",
//     "The ID card must be returned upon withdrawal or graduation from the school.",
//   ];

//   return (
//     <div>
//       <div
//         id="content"
//         ref={contentRef}
//         style={{
//           width: "210mm",
//           height: "297mm",
//           padding: "20mm",
//           boxSizing: "border-box",
//           backgroundColor: "#fff",
//           overflow: "hidden",
//         }}
//       >
//         <Row
//           gutter={24}
//           style={{
//             padding: "30px 10px",
//             border: "1px dashed #000",
//             ...styles.flexCenter,
//           }}
//         >
//           <Col
//             span={12}
//             style={{ ...styles.flexCenter, borderRight: "1px dashed #000" }}
//           >
//             <section
//               style={{
//                 ...styles.card,
//                 overflow: "hidden",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                   style={{ ...styles.wave, zIndex: 99 }}
//                 >
//                   <path
//                     fill="#C2D0D1"
//                     fillOpacity="1"
//                     d="M0,256L120,213.3C240,171,480,85,720,58.7C960,32,1200,64,1320,80L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
//                   ></path>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                   style={styles.wave}
//                 >
//                   <path
//                     fill="#999D9D"
//                     fillOpacity="1"
//                     d="M0,224L120,192C240,160,480,96,720,106.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
//                   ></path>
//                 </svg>
//               </div>

//               <section>
//                 <picture style={styles.logoContainer}>
//                   <img style={styles.logo} src={imageSrc} alt="Logo" />
//                 </picture>

//                 <Title level={4} style={styles.title}>
//                   <span style={styles.borderStyle}>
//                     <span style={styles.topBorderStyle}></span>
//                     <span style={styles.bottomBorderStyle}></span>
//                     <span
//                       style={{
//                         position: "relative",
//                         top: "-10px",
//                         fontSize: "18px",
//                       }}
//                     >
//                       {organizationTitle}
//                     </span>
//                   </span>
//                 </Title>

//                 <picture style={styles.profileImageContainer}>
//                   <span style={styles.imageDiv}>
//                     <img
//                       style={styles.image}
//                       src={profileImageSrc}
//                       alt="profile image"
//                     />
//                   </span>
//                 </picture>

//                 <Title
//                   level={2}
//                   style={{
//                     textAlign: "center",
//                     marginTop: 14,
//                     fontSize: "18px",
//                     textTransform: "capitalize",
//                   }}
//                 >
//                   {name}
//                 </Title>

//                 <Title
//                   level={4}
//                   style={{
//                     textAlign: "center",
//                     marginTop: -6,
//                     fontSize: "14px",
//                   }}
//                 >
//                   {classGrade}
//                 </Title>

//                 <Title
//                   level={2}
//                   style={{
//                     textAlign: "center",
//                     marginTop: 4,
//                     fontSize: "18px",
//                     textTransform: "uppercase",
//                   }}
//                 >
//                   {rollnum}
//                 </Title>
//               </section>

//               <div style={styles.svgContainer}>
//                 <svg
//                   style={styles.svg1}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                 >
//                   <path
//                     fill="#999D9D"
//                     fillOpacity="1"
//                     d="M0,320L720,320L1440,128L1440,320L720,320L0,320Z"
//                   ></path>
//                 </svg>

//                 <svg
//                   style={styles.svg3}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                 >
//                   <path
//                     fill="#999D9D"
//                     fillOpacity="1"
//                     d="M0,320L220,32L1440,380L1440,320L720,320L0,320Z"
//                   ></path>
//                 </svg>

//                 <svg
//                   style={styles.svg2}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                 >
//                   <path
//                     fill="#C2D0D1"
//                     fillOpacity="1"
//                     d="M0,320L240,102L1440,320L1440,320L720,320L0,320Z"
//                   ></path>
//                 </svg>
//               </div>
//             </section>
//           </Col>

//           <Col span={12} style={{ ...styles.flexCenter }}>
//             <section
//               style={{
//                 ...styles.card,
//                 overflow: "hidden",
//                 position: "relative",
//               }}
//             >
//               <div>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                   style={{ ...styles.wave, zIndex: 99 }}
//                 >
//                   <path
//                     fill="#C2D0D1"
//                     fillOpacity="1"
//                     d="M0,256L120,213.3C240,171,480,85,720,58.7C960,32,1200,64,1320,80L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
//                   ></path>
//                 </svg>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                   style={styles.wave}
//                 >
//                   <path
//                     fill="#999D9D"
//                     fillOpacity="1"
//                     d="M0,224L120,192C240,160,480,96,720,106.7C960,117,1200,203,1320,245.3L1440,288L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
//                   ></path>
//                 </svg>
//               </div>

//               <div style={{ padding: "0px 20px", marginTop: 58 }}>
//                 <Title level={5} style={styles.field}>
//                   <span style={styles.detailsTitle}>Name:</span>
//                   <span style={styles.value}>{name}</span>
//                 </Title>

//                 <Title level={5} style={styles.field}>
//                   <span style={styles.detailsTitle}>Father Name:</span>
//                   <span style={styles.value}>{parentName}</span>
//                 </Title>

//                 <Title level={5} style={styles.field}>
//                   <span style={styles.detailsTitle}>Class:</span>
//                   <span style={styles.value}>{classGrade}</span>
//                 </Title>

//                 <Title level={5} style={styles.field}>
//                   <span style={styles.detailsTitle}>Section:</span>
//                   <span style={styles.value}>{section}</span>
//                 </Title>

//                 <div style={{ ...styles.flexCenter, margin: "12px 0px" }}>
//                   <QRCode
//                     errorLevel="Q"
//                     value={id}
//                     // icon={imageSrc}
//                     size={90}
//                     style={{ padding: 4, border: 0, marginTop: 4 }}
//                   />
//                 </div>

//                 <div
//                   style={{
//                     margin: "8px 0px",
//                     lineHeight: "12px",
//                   }}
//                 >
//                   <Text
//                     strong
//                     style={{
//                       fontSize: "8px",
//                       lineHeight: "4px",
//                     }}
//                   >
//                     {note}
//                   </Text>
//                 </div>
//               </div>

//               <div
//                 style={{
//                   ...styles.svgContainer,
//                   position: "absolute",
//                   bottom: "0px",
//                 }}
//               >
//                 <svg
//                   style={styles.svg1}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                 >
//                   <path
//                     fill="#999D9D"
//                     fillOpacity="1"
//                     d="M0,320L720,320L1440,128L1440,320L720,320L0,320Z"
//                   ></path>
//                 </svg>

//                 <svg
//                   style={styles.svg3}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                 >
//                   <path
//                     fill="#999D9D"
//                     fillOpacity="1"
//                     d="M0,320L220,32L1440,380L1440,320L720,320L0,320Z"
//                   ></path>
//                 </svg>

//                 <svg
//                   style={styles.svg2}
//                   xmlns="http://www.w3.org/2000/svg"
//                   viewBox="0 0 1440 320"
//                 >
//                   <path
//                     fill="#C2D0D1"
//                     fillOpacity="1"
//                     d="M0,320L240,102L1440,320L1440,320L720,320L0,320Z"
//                   ></path>
//                 </svg>
//               </div>
//             </section>
//           </Col>
//         </Row>

//         <PiScissorsFill
//           style={{
//             marginLeft: "-12px",
//             marginTop: "-12px",
//             fontSize: "24px",
//             backgroundColor: "#fff",
//             color: "#000",
//           }}
//         />

//         <div style={{ marginTop: 24 }}>
//           {term.map((v, index) => (
//             <div
//               key={index}
//               style={{ display: "flex", gap: 10, marginTop: 12 }}
//             >
//               <div style={{ marginTop: 8 }}>
//                 <MdCheckCircle style={{ fontSize: "20px" }} />
//               </div>
//               <Title level={5} style={{ textAlign: "start" }}>
//                 {v}
//               </Title>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomPdf;























// import React, { useState, useEffect, useRef, useContext } from "react";
// import QrScanner from "qr-scanner";
// import { ScannerQRContext } from "../../context/scannerqr";
// import { FetchContext } from "../../context/fetch";
// import PostErorr from "../../utils/errorlog";

// function Scanner({ message }) {
//   const { id, setId } = useContext(ScannerQRContext);
//   const { state, setState } = useContext(FetchContext);
//   const [qrData, setQrData] = useState("");
//   const videoRef = useRef(null);
//   const qrScannerRef = useRef(null);
//   const audioRef = useRef(null);

//   const handleScan = (result) => {
//     if (result) {
//       setQrData(result.data);
//       setId(result.data);
//       audioRef.current.play();
//     }
//   };

//   const startCamera = async () => {
//     const video = videoRef.current;
//     try {
//       qrScannerRef.current = new QrScanner(video, handleScan, {
//         highlightScanRegion: true,
//         highlightCodeOutline: true,
//         inversionMode: "original",
//       });
//       qrScannerRef.current.start();
//     } catch (error) {
//       PostErorr(error);

//       console.error("Error accessing the camera", error);
//     }
//   };

//   useEffect(() => {
//     startCamera();

//     return () => {
//       if (qrScannerRef.current) {
//         qrScannerRef.current.stop();
//         qrScannerRef.current.destroy();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     function sendToParent() {
//       setState(true);
//       setTimeout(() => {
//         setId("");
//         setQrData("");
//         console.log("id set to empty");
//       }, 1000);
//       setTimeout(() => {
//         setState(false);
//         console.log("state set to false");
//       }, 5000);
//     }
//     if (qrData) {
//       sendToParent();
//     }
//   }, [qrData]);

//   const refreshCamera = () => {
//     if (qrScannerRef.current) {
//       qrScannerRef.current.stop();
//       qrScannerRef.current.destroy();
//       qrScannerRef.current = null;
//     }
//     setQrData("");
//     startCamera();
//   };

//   return (
//     <div className="my-5 flex flex-col gap-2 items-center">
//       <span className={state ? "flex " : "hidden"}>
//         {message ? `${message} !!` : "Loading..."}
//       </span>
//       <div className={`${state ? "hidden" : ""}`}>
//         <div className={`flex flex-col gap-2 items-center`}>
//           <h1 className="text-3xl font-bold"> QR Scanner</h1>
//           <video ref={videoRef} className={`w-80`}></video>
//           <audio ref={audioRef} src="/beep.mp3" className="hidden"></audio>
//           {qrData && (
//             <p className="text-lg">
//               <span className="font-semibold text-xl">Scanned Data:</span>{" "}
//               {qrData}
//             </p>
//           )}
//           <button
//             onClick={refreshCamera}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Refresh Camera
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Scanner;















// import React, { useState, useEffect, useRef, useContext } from "react";
// import QrScanner from "qr-scanner";
// import { ScannerQRContext } from "../../context/scannerqr";
// import { FetchContext } from "../../context/fetch";
// import PostErorr from "../../utils/errorlog";

// function Scanner({ message }) {
//   const { id, setId } = useContext(ScannerQRContext);
//   const { state, setState } = useContext(FetchContext);
//   const [qrData, setQrData] = useState("");
//   const videoRef = useRef(null);
//   const qrScannerRef = useRef(null);
//   const audioRef = useRef(null);

//   const handleScan = (result) => {
//     if (result) {
//       setQrData(result.data);
//       setId(result.data);
//       audioRef.current.play();
//     }
//   };

//   const startCamera = async () => {
//     const video = videoRef.current;
//     try {
//       qrScannerRef.current = new QrScanner(video, handleScan, {
//         highlightScanRegion: true,
//         highlightCodeOutline: true,
//         inversionMode: "original",
//       });
//       qrScannerRef.current.start();
//     } catch (error) {
//       PostErorr(error);

//       console.error("Error accessing the camera", error);
//     }
//   };

//   useEffect(() => {
//     startCamera();

//     return () => {
//       if (qrScannerRef.current) {
//         qrScannerRef.current.stop();
//         qrScannerRef.current.destroy();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     function sendToParent() {
//       setState(true);
//       setTimeout(() => {
//         setId("");
//         setQrData("");
//         console.log("id set to empty");
//       }, 1000);
//       setTimeout(() => {
//         setState(false);
//         console.log("state set to false");
//       }, 5000);
//     }
//     if (qrData) {
//       sendToParent();
//     }
//   }, [qrData]);

//   const refreshCamera = () => {
//     if (qrScannerRef.current) {
//       qrScannerRef.current.stop();
//       qrScannerRef.current.destroy();
//       qrScannerRef.current = null;
//     }
//     setQrData("");
//     startCamera();
//   };

//   return (
//     <div className="my-5 flex flex-col gap-2 items-center">
//       <span className={state ? "flex " : "hidden"}>
//         {message ? `${message} !!` : "Loading..."}
//       </span>
//       <div className={`${state ? "hidden" : ""}`}>
//         <div className={`flex flex-col gap-2 items-center`}>
//           <h1 className="text-3xl font-bold"> QR Scanner</h1>
//           <video ref={videoRef} className={`w-80`}></video>
//           <audio ref={audioRef} src="/beep.mp3" className="hidden"></audio>
//           {qrData && (
//             <p className="text-lg">
//               <span className="font-semibold text-xl">Scanned Data:</span>{" "}
//               {qrData}
//             </p>
//           )}
//           <button
//             onClick={refreshCamera}
//             className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//           >
//             Refresh Camera
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Scanner;




// // new code for modal


// import React, { useContext, useState } from "react";
// import { Modal, QRCode } from "antd";
// import Scanner from "./scanner";
// const QRScanner = ({button, message}) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const showModal = () => {
//     setIsModalOpen(true);
//   };
//   const handleOk = () => {
//     setIsModalOpen(false);
//   };
//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <button
//         className="bg-gray-500  px-2 py-1 rounded text-white tracking-widest"
//         type="primary"
//         onClick={showModal}
//       >
//         {button}
//       </button>
//       <Modal
//         title={null}
//         footer={null}
//         open={isModalOpen}
//         onOk={handleOk}
//         onCancel={handleCancel}
//         // className="!w-[400px] "
//       >
//         <div className="">
          
//         <Scanner message={message}  />
//         </div>
//       </Modal>
//     </>
//   );
// };
// export default QRScanner;