import React from "react";
import profileImage from "../assets/frustrated-bagark (2).png";
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { Menu } from "@headlessui/react";
import { DiChrome } from "react-icons/di";
import MenuHam from "./MenuHam";
function Navbar() {
  return (
    // bg-[#383A59]
    <>
      <div className="flex justify-between items-center mt-3  ">
        <div className="flex items-center  ">
          <div className="mr-2 w-14 h-auto  ">
            <img
              src={profileImage}
              className=" w-full rounded-full"
              alt="Logo"
            />
          </div>
          <div className="text-4xl  py-3 navname  ">
            <Link to="/">
              <span className="hover:text-slate-300">hinzwifi</span>
            </Link>
          </div>
        </div>

        {/* <div className="md:flex  hidden flex-wrap justify-evenly ">
          <div className="navcomments">About</div>
          <div className="navcomments">Socials</div>
          <div className="navcomments">Projects</div>
          <div className="navcomments">About</div>
          <div></div>
        </div> */}
        {/* <button>SHID</button> */}
        {/* <div className="burger  ">
          <div className="burger-icon">
            <GiHamburgerMenu />
          </div>
        </div> */}
        <MenuHam />
      </div>

      {/* <div className="text-center">
        <div className="navcomments">About</div>
        <div className="navcomments">Socials</div>
        <div className="navcomments">Projects</div>
        <div className="navcomments">About</div>
      </div> */}
    </>
  );
}

export default Navbar;
