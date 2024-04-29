import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
const Navbar = () => {
  return (
    <div>
      <nav className="flex items-center justify-between py-10 max-w-[1300px] m-auto">
        <h2 className="text-md text-white font-medium">Afan Khan</h2>
        <ul className="text-sm flex items-center justify-between gap-10 text-white">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>Books</Link>
          </li>
          <li>
            <Link href={"/"}>Articles</Link>
          </li>
          <li>
            <Link href={"/"}>Projects</Link>
          </li>
          <li>
            <Link href={"/"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Services</Link>
          </li>
          <li>
            <Link href={"/"}>Testimonials</Link>
          </li>
        </ul>
        <Button className="text-black text-[16px] font-medium  " size="lg">
          Let`s Talk 
          <span className="px-3">
            <Image src={"/Arrow.png"} height={12} width={13}/>
          </span>
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
