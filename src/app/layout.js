import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Certificate generate!",
  description: "Open source portfolio for biggners!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="description" content={metadata.description} />
      <link rel="icon" href="/avatar.png" />
        <script
          src="https://kit.fontawesome.com/3b2468ae5a.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
