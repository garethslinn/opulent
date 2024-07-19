import Image from "next/image";
import styles from "./page.module.css";
import QuoteTool from "@/app/components/quoteTool/QuoteTool";

export default function Home() {
  return (
      <div>
        <QuoteTool />
      </div>
  );
}
