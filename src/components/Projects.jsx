import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiStarSFill } from "react-icons/ri";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { CgGitFork } from "react-icons/cg";
import { GrLanguage } from "react-icons/gr";
import { AiOutlineLoading } from "react-icons/ai";
import { GiStack } from "react-icons/gi";
function Projects() {
  const [pinned, setpinnedRep] = useState([]);
  useEffect(() => {
    axios
      .get("https://gh-pinned-repos.egoist.sh/?username=hinzwifi")
      .then((res) => {
        console.log(res.data);
        setpinnedRep(res.data);
      });
  }, []);

  return (
    <>
      <div className=" text-center text-lg md:text-3xl  lg:text-6xl mt-10">
        Pinned Repositories
      </div>
      <div className={`mt-10  ${pinned.length ? `  ` : ""}  `}>
        {pinned.length ? (
          pinned.map((pin) => (
            <>
              <div
                key={pin.id}
                className={` rounded-md bg-[#293845]  border-2 grid  hover:border-white hover:text-yellow-300  duration-300     grid-flow-row relative mb-2 px-10 py-3    border-[#293845]   `}
              >
                <div className={` text-[#7BE1A5]  mt-2`}>
                  <h1 className="first-letter:uppercase text-3xl">
                    {pin.repo}
                  </h1>
                  <div className="text-2xl  text-[#7BE1A5]">
                    - {pin.description}
                  </div>

                  <div className=" flex flex-wrap gap-3 text-md">
                    <div className="flex     items-center">
                      <RiStarSFill className="text-yellow-400" />{" "}
                      <div className="ml-2">{pin.stars}</div>
                    </div>
                    <div className="flex    items-center">
                      <CgGitFork className="text-red-400" />
                      <div className="ml-2">{pin.forks}</div>
                    </div>
                    <div className="flex     items-center">
                      <GiStack className="text-blue-400 text-sm" />
                      <div className="ml-2 text-sm  text-white">
                        {pin.language}
                      </div>
                    </div>
                  </div>

                  {pin.website ? (
                    <a
                      className=" w-20 text-center"
                      title={pin.repo + " Demo"}
                      target="_blank"
                      rel="noopener"
                      href={pin.website}
                    >
                      <div
                        className="  border-2 border-[#7BE1A5] hover:border-[#293845]   w-20 text-center   duration-300 hover:text-[#7BE1A5] hover:brightness-150  mt-3 
                       px-3"
                      >
                        Demo
                      </div>
                    </a>
                  ) : (
                    <></>
                  )}

                  {/* <img src={pin.image} /> */}
                  <a
                    title={pin.repo + " Repo"}
                    target="_blank"
                    rel="noopener"
                    href={pin.link}
                    className=" absolute top-3 hover:scale-150 hover:animate-pulse right-3 hover:text-teal-300 duration-300"
                  >
                    <BsArrowUpRightSquare />
                  </a>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className=" flex items-center  mt-60 justify-center text-8xl">
            <AiOutlineLoading className=" rounded-full animate-spin" />
          </div>
        )}
      </div>
    </>
  );
}

export default Projects;
