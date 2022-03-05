import React from "react";
import Helmet from "react-helmet";
function About() {
  return (
    <div className="  py-3 px-10   mt-10 mx-auto  flex flex-col gap-3  ">
      <Helmet>
        <title>hinzwifi's self</title>
      </Helmet>
      <span className=" text-center text-6xl mb-10">About Me</span>
      <div className=" text-lg md:text-4xl text-justify">
        <div>
          {" "}
          I am Mark Joshua Haynes. I am currently studying{" "}
          <abbr title="Bachelor of Science in Aeronautical Engineering">
            BSAE
          </abbr>{" "}
          at Cebu Aeronautical Technical School. I love to learn almost anything
          computer related. I have dabbled in{" "}
          <span className=" text-blue-400"> 🐋 Self-hosting</span>,{" "}
          <span className=" text-smoothgreen">💻 Web development</span> , and
          also making <span className=" text-violet-500"> 🤖 bots</span> for my
          discord groups.{" "}
        </div>
        <br />
        <div>
          I mainly learn web dev to make my life easier and try to solve my
          problems. I see myself as a very knowledge thirsty person.
        </div>
      </div>
    </div>
  );
}

export default About;
