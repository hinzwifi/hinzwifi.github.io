import React from "react";
import { BsSpotify, BsDiscord, BsGithub } from "react-icons/bs";
import { FaSteam, FaReddit } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiTelegram } from "react-icons/si";
function Socials() {
  return (
    <div className="  py-3 px-10 text-6xl  mt-10 mx-auto max-w-md flex flex-col gap-3  ">
      <span className=" text-center mb-10">Socials</span>
      <a
        href="https://steamcommunity.com/id/hinzzz10/"
        target="_blank"
        rel="noopener"
      >
        <button className="steam flex items-center justify-center">
          <FaSteam className="mr-3" size={24} />
          Steam
        </button>
      </a>
      <a
        href="https://discord.com/users/507173681647058955"
        target="_blank"
        rel="noopener"
      >
        <button className="discord flex items-center justify-center">
          <BsDiscord className="mr-3" size={24} />
          Discord
        </button>
      </a>
      <a
        href="https://open.spotify.com/user/2uzjwn48tyyhrt3c51rcjzlt9?si=8f2a7c87f3954f19"
        target="_blank"
        rel="noopener"
      >
        <button className="spotify flex items-center justify-center">
          <BsSpotify className="mr-3" size={24} />
          Spotify
        </button>
      </a>
      <a href="https://reddit.com/u/hinzwifi" target="_blank" rel="noopener">
        <button className="reddit flex items-center justify-center">
          <FaReddit className="mr-3" size={24} />
          Reddit
        </button>
      </a>
      <a href="https://github.com/hinzwifi" target="_blank" rel="noopener">
        <button className="github flex items-center justify-center">
          <BsGithub className="mr-3" size={24} />
          Github
        </button>
      </a>
      <a
        href="mailto:markjoshuahaynes@protonmail.com&subject=I would like to contact you about something.&body=Hello Mark Joshua Haynes, "
        target="_blank"
        rel="noopener"
      >
        <button className="email flex items-center justify-center ">
          <MdEmail className="mr-3" size={24} />
          Email
        </button>
      </a>
      <a href="https://t.me/hinzwifi" target="_blank" rel="noopener">
        <button className="telegram flex items-center justify-center ">
          <SiTelegram className="mr-3" size={24} />
          Telegram
        </button>
      </a>
    </div>
  );
}

export default Socials;
