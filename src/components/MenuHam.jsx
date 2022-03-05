import React from "react";
import { Menu } from "@headlessui/react";
import {
  DiChrome,
  DiGithub,
  DiGithubAlt,
  DiGithubBadge,
  DiGithubFull,
  DiTechcrunch,
  DiWebplatform,
} from "react-icons/di";
import {
  AiFillHome,
  AiFillProject,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { Transition } from "@headlessui/react";
import { IoShareSocialSharp } from "react-icons/io5";
import { Fragment, useEffect, useRef, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GiHamburgerMenu, GiTechnoHeart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { SiHomebrew, SiMdnwebdocs } from "react-icons/si";
function MenuHam() {
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="hover:ring-1  ring-[#6272A4]  duration-300 inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-[#7BE1A5] bg-[#293845] rounded-md  hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <GiHamburgerMenu
              className="     text-[#7BE1A5] hover:text-opacity-70 duration-300"
              aria-hidden="true"
              size={32}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 z-10 origin-top-right bg-[#293845] divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/">
                    <button
                      className={`${
                        active
                          ? " text-white"
                          : "text-smoothgreen bg-transparent "
                      } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    >
                      {active ? (
                        <AiFillHome className="menuicons" aria-hidden="true" />
                      ) : (
                        <AiFillHome className="menuiconsA" aria-hidden="true" />
                      )}
                      Home
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/about">
                    <button
                      className={`${
                        active
                          ? " text-white"
                          : "text-smoothgreen bg-transparent "
                      } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    >
                      {active ? (
                        <BsFillPersonFill
                          className="menuicons"
                          aria-hidden="true"
                        />
                      ) : (
                        <BsFillPersonFill
                          className="menuiconsA"
                          aria-hidden="true"
                        />
                      )}
                      About
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/projects">
                    <button
                      className={`${
                        active
                          ? " text-white"
                          : "text-smoothgreen bg-transparent "
                      } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    >
                      {active ? (
                        <AiOutlineFundProjectionScreen
                          className="menuicons"
                          aria-hidden="true"
                        />
                      ) : (
                        <AiOutlineFundProjectionScreen
                          className="menuiconsA"
                          aria-hidden="true"
                        />
                      )}
                      Projects
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/tech">
                    {" "}
                    <button
                      className={`${
                        active
                          ? " text-white"
                          : "text-smoothgreen bg-transparent "
                      } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    >
                      {active ? (
                        <SiMdnwebdocs
                          className="menuicons"
                          aria-hidden="true"
                        />
                      ) : (
                        <SiMdnwebdocs
                          className="menuiconsA"
                          aria-hidden="true"
                        />
                      )}
                      Tech Stack
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to="/socials">
                    <button
                      className={`${
                        active
                          ? " text-white"
                          : "text-smoothgreen bg-transparent "
                      } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    >
                      {active ? (
                        <IoShareSocialSharp
                          className="menuicons"
                          aria-hidden="true"
                        />
                      ) : (
                        <IoShareSocialSharp
                          className="menuiconsA"
                          aria-hidden="true"
                        />
                      )}
                      Socials
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    target="_blank"
                    rel="noopener"
                    href="https://github.com/hinzwifi"
                  >
                    <button
                      className={`${
                        active
                          ? " text-white"
                          : "text-smoothgreen bg-transparent "
                      } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                    >
                      {active ? (
                        <DiGithubBadge
                          className="menuicons"
                          aria-hidden="true"
                        />
                      ) : (
                        <DiGithubBadge
                          className="menuiconsA"
                          aria-hidden="true"
                        />
                      )}
                      Profile
                    </button>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}

export default MenuHam;

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
    </svg>
  );
}

function ArchiveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function ArchiveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="8"
        width="10"
        height="8"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <rect
        x="4"
        y="4"
        width="12"
        height="4"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function MoveActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}

function DeleteInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
    </svg>
  );
}

function DeleteActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5"
        y="6"
        width="10"
        height="10"
        fill="#8B5CF6"
        stroke="#C4B5FD"
        strokeWidth="2"
      />
      <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
      <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
    </svg>
  );
}
