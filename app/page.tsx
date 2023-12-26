import ReloadNavbar from "./components/navbar";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Home() {
  return (
    <>
      <ReloadNavbar />
      <div className="p-5">
        <h1 className="font-bold text-5xl">
          Esto, es <span className="rgb-animation">Reload.</span>
        </h1>
        <div className="flex pt-5 gap-10">
          <Image
            as={NextImage}
            width={500}
            height={500}
            alt="NextUI hero Image"
            src="/images/reload.png"
          />
          <Image
            as={NextImage}
            width={500}
            height={500}
            alt="NextUI hero Image"
            src="/images/jail.png"
          />
          <Image
            as={NextImage}
            width={500}
            height={500}
            alt="NextUI hero Image"
            src="/images/jail2.png"
          />
        </div>
      </div>
    </>
  );
}
