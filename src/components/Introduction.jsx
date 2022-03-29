import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skills from "./Skills";
import axios from "axios";
import { BiCurrentLocation } from "react-icons/bi";
import { GiSuitcase } from "react-icons/gi";
import Projects from "./Projects";
import { BsArrowUpRightSquare } from "react-icons/bs";

function Introduction() {
  const [githubProfile, setNoice] = useState(false);
  const [rando, setRando] = useState(false);
  useEffect(() => {
    // axios.get("https://api.github.com/users/hinzwifi").then((res) => {
    //   // console.log(res.data);
    //   setNoice(res.data);
    // });
    newQuote();
  }, []);
  const newQuote = () => {
    axios.get("https://muskapi.herokuapp.com/api/random").then((res) => {
      // console.log(res.data);
      const getJson = res.data;

      setRando(getJson.message);
    });
  };
  console.log();
  return (
    <>
      <div className="  py-3      mt-10   ">
        <div className="text-center text-4xl md:text-6xl mb-16 md:mb-12">
          Hello <span className="emojiwave">👋</span>, I'm{" "}
          <Link
            to="/socials"
            className="rounded-md socials inline-block duration-300 name text-[#7BE1A5]"
          >
            hinzwifi
          </Link>
          .
        </div>
        <p className="mb-5  text-center text-3xl ">
          {" "}
          a {new Date().getFullYear() - 2002} year old student from the{" "}
          <span
            title="Born and raised"
            className=" socials hover:cursor-pointer duration-300 "
          >
            {" "}
            Philippines
          </span>
          . I honor the{" "}
          <span className="  bg-gradient-to-r text-transparent bg-clip-text from-blue-300 to-[#7BE1A5] ">
            Almighty Javascript
          </span>{" "}
          and learn it's ways.
        </p>
        <div className="md:flex text-md md:text-xl  mx-6 sm:mx-0 gap-2  items-center">
          {" "}
          {githubProfile ? (
            <>
              <div className=" w-full p-10 md:w-6/12 bg-[#293845]  border-smoothgreen  mt-2 h0 border-2 h-[490px] rounded-md">
                <blockquote className="before:content-['<github>'] my-4  before:font-mono after:font-mono    before:text-[#7BE1A5]  after:text-[#7BE1A5] after:content-['</github>']">
                  <ul>
                    <li className="flex items-center ">
                      {" "}
                      <BiCurrentLocation className="mr-2 animate-pulse text-green-400" />
                      {githubProfile.location}
                    </li>
                    <li>{githubProfile.public_repos}</li>
                    <li>{githubProfile.public_repos}</li>
                  </ul>
                </blockquote>
              </div>
            </>
          ) : (
            <></>
          )}
          <div
            className={` w-full  ${
              githubProfile ? "md:w-6/12" : "md:w-full"
            } mt-2 relative`}
          >
            {/* md:min-h-[490px] md:max-h-[490px] */}
            <figure className="border-blue-300 bg-[#293845]  text-3xl  flex flex-wrap justify-center items-center h-auto  border-2 rounded-md p-5 ">
              <blockquote className="before:content-['<elonmusk>'] my-4  before:font-mono after:font-mono    before:text-[#7BE1A5]  after:text-[#7BE1A5] after:content-['</elonmusk>']">
                {rando ? (
                  <>
                    {" "}
                    <br />
                    <br />
                    {rando.quote} <br />
                    <br />
                  </>
                ) : (
                  <>
                    <br />
                    <br />
                    Thinking of a good quote.... <br />
                    <br />
                  </>
                )}
              </blockquote>
              <button
                onClick={newQuote}
                className="bg-blue-300 duration-300 text-black hover:text-white"
              >
                Get new quote
              </button>
              <a
                title={"Website"}
                target="_blank"
                rel="noopener"
                href={`https://muskapi.hinzwifi.xyz`}
                className=" absolute top-3 hover:scale-105 hover:animate-pulse right-3 text-[#7BE1A5] duration-300"
              >
                <BsArrowUpRightSquare />
              </a>
            </figure>
          </div>
        </div>

        <br />
      </div>
    </>
  );
}

export default Introduction;
