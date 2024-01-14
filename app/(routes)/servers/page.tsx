import Layout from "@/app/components/layout";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";

export default function Servers() {
  return (
    <>
      <Layout>
        <div className="p-5 mb-32">
          <h1 className="font-bold text-5xl">
            Nuestros <span className="rgb-animation">servers</span>
          </h1>
          <div className="flex flex-wrap pt-16">
            <div className="flex-1 ">
              <h1 className="font-bold text-5xl pt-5">Servidor Multimod</h1>
              <p className="text-justify text-base pt-5">
                Actualmente, solo contamos con nuestro servidor multimod.
              </p>
              <p className="text-justify text-base pt-5">
                El mismo, cuenta con los siguientes modos de juego: Jailbreak,
                Minigames, Surf, Aim, HNS y Deathrun.
              </p>
              <p className="text-justify text-base pt-5">
                Para ingresar al servidor, debes abrir el Counter-Strike 2, y
                escribir en la consola:
              </p>
              <p className="text-center  text-base pt-10">
                <code> connect 45.235.99.105:27225</code>
              </p>
            </div>

            <div className="flex-initial pt-16 px-10">
              <Image
                as={NextImage}
                width={500}
                height={200}
                alt="NextUI hero Image"
                src="/images/jail2.png"
                isZoomed
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
