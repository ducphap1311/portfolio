import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiFigma} from "react-icons/si";
import { FaHtml5, FaCss3, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const LeftBanner = () => {
    const [text] = useTypewriter({
        words: ["Professional Coder.", "Software Engineer"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });
    return (
        <div className="w-full lgl:w-1/2 flex flex-col gap-20">
            <div className="flex flex-col gap-5">
                <h1 className="text-6xl font-bold text-white">
                    Hi, I'm{" "}
                    <span className="text-designColor capitalize">
                        Ho Duc Phap
                    </span>
                </h1>
                <h2 className="text-4xl font-bold text-white">
                    a <span>{text}</span>
                    <Cursor
                        cursorBlinking="false"
                        cursorStyle="|"
                        cursorColor="#ff014f"
                    />
                </h2>
                <p className="text-base font-bodyFont leading-6 tracking-wide">
                    I'm a software engineer passionate about creating engaging
                    digital experiences. With expertise in HTML, CSS, SASS, TailwindCSS,
                    JavaScript, ReactJS, NodeJS and ExpressJS, I thrive on turning ideas into software development. I excel in collaborative environments and stay
                    updated on industry trends. Let's connect and bring
                    innovative ideas to life!
                </p>
            </div>
            <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
                <div>
                    <h2 className="text-base uppercase font-titleFont mb-4">
                        BEST SKILL ON
                    </h2>
                    <div className="flex gap-4">
                        <span className="bannerIcon">
                            <FaHtml5 />
                        </span>
                        <span className="bannerIcon">
                        <FaCss3 />
                        </span>
                        <span className="bannerIcon">
                        <IoLogoJavascript />
                        </span>
                        <span className="bannerIcon">
                            <FaReact />
                        </span>
                        <span className="bannerIcon">
                            <SiTailwindcss />
                        </span>
                        <span className="bannerIcon">
                            <FaNodeJs />
                        </span>
                        <span className="bannerIcon">
                            <SiFigma />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftBanner;
