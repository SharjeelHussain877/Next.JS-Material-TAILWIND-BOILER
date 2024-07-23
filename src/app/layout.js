import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hospital",
  description: "I don't know",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="description" content={metadata.description} />
        {/* <script
          src="https://kit.fontawesome.com/3b2468ae5a.js"
          crossOrigin="anonymous"
        ></script> */}
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
