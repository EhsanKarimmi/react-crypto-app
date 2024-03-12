import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/crypto-hunter-logo.png";

function Footer() {
    return (
        <footer className="bg-zinc-400 border-t-2 border-zinc-500 h-1/6">
            {/* logo */}
            <Link to={"/"}>
                <div className="flex justify-center items-center gap-2 pt-4 pb-2">
                    <img src={logo} alt="Logo" className="w-10 h-10" />
                    <h3 className="uppercase font-bold text-2xl text-yellow-400">
                        Crypto Hunter
                    </h3>
                </div>
            </Link>
            {/* copyright text */}
            <p className="text-center font-medium text-sm">All Rights Reserved.</p>
            {/* social media icons -> coming soon */}
        </footer>
    );
}

export default Footer;
