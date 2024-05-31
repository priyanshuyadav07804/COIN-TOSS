import React from "react";
import GithubIcon from "../assets/GithubIcon";
import TwitterIcon from "../assets/TwitterIcon";
import InstagramIcon from "../assets/InstagramIcon";

const Footer = () => {
  return (
    <footer className="px-6 py-16 sm:px-16 sm:min-w-[650px]  bg-white  ">
      <div className="mx-auto flex flex-col items-start md:items-center max-w-screen-xl text-center">
        <div className="flex items-center relative">
          <img src="./coin.svg" alt="coin" height="60px" width="60px" />
          <div className="flex flex-col leading-[4px] relative  items-start">
            <span className="text-2xl font-bold">Flip A Coin</span>
            <span className="text-[10px]">By Hero'sHappy</span>
          </div>
        </div>
        <p className="my-6 text-sm text-start md:text-center text-gray-500 tracking-wide sm:max-w-[950px]">
        Coin flipping has been around for a long time. The custom of deciding between two options by tossing a coin dates back to the Roman Empire.
        </p>
  
        <div className="flex space-x-10 mt-5  mx-auto">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/priyanshuyadav07804"
            title="Github"
            className="flex items-center p-1"
          >
            <GithubIcon/>
            <p className="hidden">Follow Priyanshu Yadav on Github</p>

          </a>
          
          <a
            rel="noopener noreferrer"
            href="https://x.com/priyanshuYd_v"
            target="_blank"
            title="Twitter"
            className="flex items-center p-1"
          >
            <TwitterIcon/>
            <p className="hidden">Follow Priyanshu Yadav on Twitter</p>
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/priyanshupower/"
            title="Instagram"
            className="flex items-center p-1"
          >
            <InstagramIcon/>
            <p className="hidden">Follow Priyanshu Yadav on Instagram</p>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
