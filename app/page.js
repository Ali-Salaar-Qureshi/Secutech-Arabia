import Image from "next/image";
import styles from "./page.module.css";
import "./globals.css";
import Homepage from "./components/pages/homepage";
import NavBar from "./components/shared/Navbar";

export default function Home() {
  return (
    <>
      <Homepage />
    </>
  );
}
