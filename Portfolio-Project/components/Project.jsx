import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../public/perfil.jpg";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineLinkedin,
  AiOutlineInstagram,
  AiOutlineSkype,
  AiOutlineGithub
} from "react-icons/ai";

export default function Project() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed w-full h-28 shadow-xl bg-primary-200">
      <div className="text-white flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo Primary"
            width={80}
            height={75}
            className="cursor-pointer rounded-full transition-all duration-300 transform hover:scale-125"
            priority
          />
        </Link>
        <div className="font-mono hidden sm:flex">
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
        <div onClick={handleNav} className="md:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-primary-100 p-12 ease-in duration-700"
            : "fixed left-[-100%] top-0 p-12 ease-in duration-700"
        }
      >
        <div className="flex w-full items-center justify-end ">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4 text-xl uppercase font-mono text-white">
          <ul>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Inicio
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Habilidades
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Projetos
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Sobre
              </li>
            </Link>
            <Link href="/">
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer ml-10 hover:text-primary-200 text-xl transition-all duration-300 transform hover:scale-125 hover:underline"
              >
                Contato
              </li>
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
          <AiOutlineLinkedin
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
          <AiOutlineGithub
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
          <AiOutlineSkype
            size={30}
            className="cursor-pointer hover:text-white hover:bg-gray-800 rounded-xl text-xl transition-all duration-300 transform hover:scale-125"
          />
        </div>
      </div>
    </nav>
  );
}
