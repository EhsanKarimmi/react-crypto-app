import React from "react";
import logo from "../assets/images/crypto-hunter-logo.png";
import { Link } from "react-router-dom";
import { navbarLinks } from "../utils/NavbarLinks";

function Navbar() {
    return (
        <nav className="col-span-2 bg-red-400 grid grid-cols-12">
            <div className=" bg-zinc-900 rounded-r-lg h-screen  col-span-12 fixed  top-0 bottom-0">
                {/* logo */}
                <Link to={"/"}>
                    <div className="flex justify-start items-center gap-2 p-5">
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        <h3 className="uppercase font-bold text-xl text-yellow-400">
                            Crypto Hunter
                        </h3>
                    </div>
                </Link>
                {/* links */}
                <ul className="my-20 mr-1">
                    {navbarLinks.map((link) => {
                        return (
                            <Link key={link.title} to={link.to}>
                                <li className="flex justify-start items-center gap-3 my-3 p-3 rounded-r-lg border-l-4 border-l-transparent font-medium text-white hover:bg-yellow-400 hover:text-zinc-900 transition-all duration-300">
                                    <span>{link.icon}</span>
                                    <span>{link.title}</span>
                                </li>
                            </Link>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
