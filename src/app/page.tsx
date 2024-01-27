import Image from "next/image";
import Overview from "@/components/Overview";
import Navbar from "@/components/Navbar";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Navbar />
      <Overview />
    </Fragment>
  );
}
