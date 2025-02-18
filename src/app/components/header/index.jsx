"use client"; 
import { useState } from "react";
import Link from "next/link";
import "../../styles/style.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white p-2 flex items-center shadow-sm">
      <div className="container flex items-center justify-between">
        <h1 className="text-[26px] min-[350px]:text-[28px] md:text-[30px] lg:text-[32px] xl:text-[38px] cursor-pointer text-blue-600 font-bold">Андижан школы №56</h1>

        <div className="hidden min-[1024px]:flex items-center gap-4">
        <Link className="text-[17px] hover:text-gray-500" href={"/"}>Главная</Link>
          <Link className="text-[17px] hover:text-gray-500" href={"/courses"}>Курсы</Link>
          <Link className="text-[17px] hover:text-gray-500" href={"/about"}>О школе</Link>
          <Link className="text-[17px] hover:text-gray-500" href={"/winners"}>Победители школы</Link>

        </div>

        <div className="flex items-center gap-2">
          <Link href={'/contact'} className="hidden md:flex bg-blue-600 border-[1px] border-blue-600 transition-all h-[35px] lg:h-[40px] text-white rounded-lg w-[180px] items-center justify-center hover:bg-transparent hover:text-blue-600">Связаться</Link>
          <button className="md:hidden" onClick={() => setMenuOpen(true)}>
            <i className="fa-solid fa-bars fa-xl"></i>
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-gray-200 shadow-lg transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-gray-600"
          onClick={() => setMenuOpen(false)}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
        <nav className="flex flex-col mt-10 p-4">
        <Link href={"/"} className="py-1 text-blue-600" onClick={() => setMenuOpen(false)}>Главная страница</Link>
          <Link href={"/courses"} className="py-1 text-blue-600" onClick={() => setMenuOpen(false)}>Курсы</Link>
          <Link href={"/about"} className="py-1 text-blue-600" onClick={() => setMenuOpen(false)}>О школе</Link>
          <Link href={"/winners"} className="py-1 text-blue-600" onClick={() => setMenuOpen(false)}>Победители нашей школы</Link>
          <Link href={"/contact"} className="py-1 text-blue-600" onClick={() => setMenuOpen(false)}>Связаться</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
