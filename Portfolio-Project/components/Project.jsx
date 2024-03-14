import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/perfil.jpg";

export default function Project() {
  return (
    <nav className="fixed w-full h-32 shadow-xl bg-primary-200">
      <div className="text-white flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo Primary"
            width={70}
            height={75}
            className="cursor-pointer rounded-full transition-all duration-300 transform hover:scale-125"
            priority
          />
        </Link>
        <div>
          <ul className="hidden sm:flex">
            <Link href="/Inicio">
              <li className="ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125">
                Inicio
              </li>
            </Link>
            <Link href="/Habilidades">
              <li className="ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125">
                Habilidades
              </li>
            </Link>
            <Link href="/Projetos">
              <li className="ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125">
                Projetos
              </li>
            </Link>
            <Link href="/Sobre">
              <li className="ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125">
                Sobre
              </li>
            </Link>
            <Link href="/Contato">
              <li className="ml-10 uppercase hover:text-primary-100 text-xl transition-all duration-300 transform hover:scale-125">
                Contato
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
}
