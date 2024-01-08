import ReloadNavbar from "./components/navbar";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
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
            isZoomed
          />
          <Image
            as={NextImage}
            width={500}
            height={500}
            alt="NextUI hero Image"
            src="/images/jail.png"
            isZoomed
          />
          <Image
            as={NextImage}
            width={500}
            height={500}
            alt="NextUI hero Image"
            src="/images/jail2.png"
            isZoomed
          />
        </div>
        <div className="flex flex-wrap pt-16">
          <div className="flex-1 ">
            <h1 className="font-bold text-5xl pt-5">¿Quienes somos?</h1>
            <p className="text-justify text-base pt-5">
              RELOAD es una comunidad vibrante y apasionada de Counter-Strike 2,
              dedicada a proporcionar una experiencia de juego única y
              emocionante a través de nuestro servidor multimod. Nos
              enorgullecemos de ofrecer una variedad de modos de juego,
              incluyendo Jailbreak, Minigames, Surf, Aim, HNS y Deathrun, cada
              uno diseñado para desafiar y entretener a nuestros jugadores. En
              RELOAD, valoramos la camaradería, el juego limpio y la diversión.
              Nuestro objetivo es crear un espacio donde jugadores de todos los
              niveles puedan reunirse para compartir su amor por Counter-Strike
              2, mejorar sus habilidades y disfrutar de la competencia en un
              ambiente amigable y acogedor. ¡Únete a RELOAD y sé parte de una
              comunidad que celebra la emoción y la estrategia de Counter-Strike
              2!
            </p>
          </div>

          <div className="flex-initial pt-16 pl-28">
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
        <div className="flex flex-wrap pt-16">
          <div className="flex-1 ">
            <h1 className="font-bold text-5xl pt-5">
              ¿Por qué jugar en <span className="rgb-animation">Reload</span>?
            </h1>
            <p className="text-justify text-base pt-5">
              En RELOAD, la diversión es la clave de nuestra experiencia en
              Counter-Strike 2. Nuestra comunidad es el destino ideal para
              quienes buscan disfrutar de una variedad de modos de juego, desde
              Jailbreak hasta Surf, en un ambiente relajado y amigable. Aquí, el
              juego es una aventura continua, llena de momentos emocionantes y
              risas compartidas. Sin la presión de la competencia intensa,
              RELOAD es el lugar perfecto para desconectar, disfrutar y
              sumergirse en la pura alegría del juego. ¡Ven a RELOAD para vivir
              la diversión al máximo en Counter-Strike 2
            </p>
          </div>

          <div className="flex-initial pt-16 pl-28">
            <Image
              as={NextImage}
              width={500}
              height={200}
              alt="NextUI hero Image"
              src="/images/jail2.png"
              isZoomed
            />
          </div>
        </div>{" "}
      </div>
    </>
  );
}
