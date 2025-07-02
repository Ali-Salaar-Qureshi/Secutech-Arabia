import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./components/navbar";
import Homepage from "./pages/HomePage/homepage";

export default function Home() {
  return (
  <>
  <NavBar />
  <Homepage />
  </>
  );
}
