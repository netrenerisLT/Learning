import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Loader from "../components/Loader";
import { toast } from "react-toastify";
const customToastId = "1";

export default function Home() {
  return (
    <div>
      <button
        onClick={() =>
          toast("Wow so easy !", {
            toastId: customToastId,
          })
        }
      ></button>
    </div>
  );
}
