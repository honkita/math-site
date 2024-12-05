import React from "react";
import NavBar from "../components/NavBar";
import "../styles/global.css";

export const metadata = {
  title: "Math Home",
  description: "Welcome to Math App",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
