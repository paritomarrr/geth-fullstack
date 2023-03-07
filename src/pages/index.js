import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="bg-[#018175] h-screen m-auto text-center py-48">
        <div className="text-[#fee3b2] font-medium text-3xl flex text-center justify-center">
          <div className="p-5">Balance of Contract</div>
          <div className="p-5">10 ETH</div>
        </div>
        <div className="py-8">
          <input className="bg-[#94dd8b] p-4 text-black outline-0" type="address" />
          <button className="bg-[#10b68d] p-4 text-[#fee3b2]" type="submit">Transfer</button>
        </div>
        <div>
          <button className="bg-[#10b68d] p-4 px-36 text-[#fee3b2] m-5">Withdraw</button>
        </div>
      </div>
    </>
  );
}
