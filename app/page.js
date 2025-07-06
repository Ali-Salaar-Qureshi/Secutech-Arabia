import Image from "next/image";
import styles from "./page.module.css";
import './globals.css';
import Homepage from "./pages/homepage";
import NavBar from "./components/Navbar";


export default function Home() {
  return (
  <>
  <NavBar />
  <Homepage />
  
  </>
  );
}
