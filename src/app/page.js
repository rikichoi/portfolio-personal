import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { SiCsharp } from "react-icons/si";
import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiFirebase } from "react-icons/di";
import Logo from "@/app/images/logo.png";
import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { Tooltip } from "@nextui-org/tooltip";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <div className="fixed top-0 w-full flex justify-between min-w-full z-50 sm:px-12 lg:px-44 min-h-20 bg-white border-b-2">
        <div className="flex justify-center items-center">
          <Image src={Logo} alt="my logo" className="max-w-44"></Image>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="#contact"
            className="bg-gray-900 hover:bg-cyan-600 transition-all duration-500 text-white font-semibold z-50 py-4 px-3 text-center max-w-40 w-full text-xl"
          >
            CONTACT ME
          </a>
        </div>
      </div>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-6xl w-full items-center justify-between font-mono text-sm lg:flex"></div>
        <div className="xs:h-full w-full h-full grid gap-3">
          <div className="xs:flex-col sm:flex-col font-inter flex xl:flex-row font-bold text-6xl">
            <h1 className="w-full">RIKI CHOI</h1>
            <div className=" sm:z-50 sm:py-4 sm:justify-start w-full gap-10 text-4xl flex xl:justify-center text-center items-center flex-row">
              <Tooltip showArrow={true} content="Download CV PDF">
                <a
                  href="/files/Riki-Choi-Resume.pdf"
                  alt="Riki Choi Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex hover:text-red-600"
                >
                  <FaDownload className="text-3xl" />
                </a>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub">
                <a
                  href="https://github.com/rikichoi"
                  target="_blank"
                  className="flex hover:text-red-600"
                >
                  <FaGithub />
                </a>
              </Tooltip>
              <Tooltip showArrow={true} content="LinkedIn">
                <a
                  href="https://www.linkedin.com/in/rikichoi/"
                  target="_blank"
                  className="flex hover:text-red-600"
                >
                  <FaLinkedin />
                </a>
              </Tooltip>
              <Tooltip showArrow={true} content="Email">
                <a
                  href="mailto:choi.riki@gmail.com"
                  className="flex hover:text-red-600"
                >
                  <MdOutlineEmail />
                </a>
              </Tooltip>
            </div>
          </div>
          <h1 className="pointer-events-none font-inter font-semibold text-3xl">
            FRONT-END WEB DEVELOPER WITH A PASSION FOR CODING.
          </h1>
          <div className="flex z-40 flex-row gap-10">
            <a
              href="#about"
              className="bg-gray-900 hover:bg-cyan-600 transition-all duration-500 text-white font-semibold z-50 py-5 text-center max-w-40 w-full text-xl"
            >
              ABOUT ME
            </a>
            <a
              href="#projects"
              className="bg-gray-900 hover:bg-cyan-600 transition-all duration-500 text-white font-semibold z-50 py-5 text-center max-w-40 w-full text-xl"
            >
              PROJECTS
            </a>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </div>
      <div className="grid sm:pb-10 sm:grid-cols-1 lg:grid-cols-3 bg-gradient-to-r from-cyan-600 to-blue-500 ">
        <p className="pointer-events-none col-span-2 text-white font-poppins py-16 sm:text-center sm:px-2 lg:pl-24 text-4xl">
          I am an <b>enthusiastic developer</b> with a passion for creating{" "}
          <b>solutions for complex problems.</b>
        </p>
        <div className="items-center flex justify-center">
          <a
            href=""
            className="bg-zinc-50 hover:bg-zinc-900 transition-all duration-500 hover:text-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-xl"
          >
            RESUME
          </a>
        </div>
      </div>
      <div
        id="projects"
        className="scroll-mt-16 grid gap-5 min-h-screen grid-rows-5 bg-zinc-50 "
      >
        <div className="row-span-1 sm:grid-cols-1 grid lg:grid-cols-3 bg-zinc-50 ">
          <div className="pointer-events-none font-semibold flex gap-7 items-center flex-col col-span-2 text-gray-900 font-poppins py-16 sm:px-2 lg:px-12 text-4xl">
            PROJECTS
            <p className="text-xl text-center font-semibold justify-center flex text-black">
              *demo account details provided in project login pages*
            </p>
          </div>
          <div className="items-center flex justify-center">
            <a
              href="https://github.com/rikichoi"
              target="_blank"
              className="bg-gray-950 hover:bg-cyan-600 transition-all duration-500 font-bold py-5 text-white text-center max-w-40 w-full text-xl"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="px-10 row-span-2 lg:gap-5 sm:gap-y-3 grid sm:grid-cols-1 lg:grid-cols-5">
          <div className="col-span-3 flex flex-col hover:brightness-125 transition-all duration-500 bg-[url('./images/calorie-tracker-app.png')]  bg-cover bg-center">
            <div className="font-poppins flex flex-row pt-16 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row">
                  <FaReact className="mr-3" />
                  <p className="text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className="text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <IoLogoFirebase className="mr-3" />
                  <p className="text-3xl">FireBase</p>
                </div>
                <div className="flex flex-row">
                  <RiTailwindCssFill className="mr-3" />
                  <p className="text-3xl">Tailwind CSS</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 flex ml-auto items-center justify-end">
                <a
                  href="https://calorie-tracker-app-one.vercel.app/"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  LIVE DEMO
                </a>
                <a
                  href="https://github.com/rikichoi/calorie-tracking-app"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex text-white h-full w-full justify-end px-10 py-12 flex-col">
              <h1 className="text-4xl font-poppins font-semibold w-full">
                HEALTH DIARY
              </h1>
              <p className="font-poppins">
                HealthDiary is a service that provides access to a dynamic
                calorie tracking application, with the goal of assisting users
                of any type to stay on top of their health and nutrition...
              </p>
            </div>
          </div>
          <div className="col-span-2 flex flex-col hover:brightness-125 transition-all duration-500 bg-[url('./images/open-house-app-agent.png')]  bg-cover bg-center">
            <div className="font-poppins flex flex-row pt-16 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row">
                  <FaReact className="mr-3" />
                  <p className="text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className="text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <IoLogoFirebase className="mr-3" />
                  <p className="text-3xl">FireBase</p>
                </div>
                <div className="flex flex-row">
                  <RiTailwindCssFill className="mr-3" />
                  <p className="text-3xl">Tailwind CSS</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 flex flex-col ml-auto items-center justify-end">
                <a
                  href="https://openhouse-listing-app.vercel.app/"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  LIVE DEMO
                </a>
                <a
                  href="https://github.com/rikichoi/openhouse-listing-app"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex h-full w-full text-white justify-end px-10 py-12 flex-col">
              <h1 className="text-4xl font-poppins font-semibold w-full">
                OPEN HOUSE
              </h1>
              <p className="font-poppins">
                OpenHouse is a platform that streamlines the management and
                advertisement process of open house listings...
              </p>
            </div>
          </div>
        </div>
        <div className="px-10 row-span-2 lg:gap-5 sm:gap-y-3 grid sm:grid-cols-1 lg:grid-cols-5">
          <div className="col-span-2 flex flex-col hover:brightness-125 transition-all duration-500 bg-[url('./images/portfolio-app.png')]  bg-cover bg-center">
            <div className="font-poppins flex flex-row pt-16 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row">
                  <FaReact className="mr-3" />
                  <p className="text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className="text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <RiTailwindCssFill className="mr-3" />
                  <p className="text-3xl">Tailwind CSS</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 flex flex-col ml-auto items-center justify-center">
                <a
                  href="https://github.com/rikichoi/portfolio-personal"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex h-full w-full text-white justify-end px-10 py-12 flex-col">
              <h1 className="text-4xl font-poppins font-semibold  w-full">
                THIS WEBSITE!
              </h1>
              <p className="font-poppins">
                This Website was made from scratch using NextJS and Tailwind
                CSS, for convenience it is hosted on Vercel...
              </p>
            </div>
          </div>
          <div className="col-span-3 flex flex-col hover:brightness-125 transition-all duration-500 bg-[url('./images/nba-app.jpg')]  bg-cover bg-center">
            <div className="font-poppins flex flex-row pt-16 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row">
                  <FaReact className="mr-3" />
                  <p className="text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <FaAws className="mr-3" />
                  <p className="text-3xl">AWS RDS</p>
                </div>
                <div className="flex flex-row">
                  <DiDotnet className="mr-3" />
                  <p className="text-3xl">.NET API</p>
                </div>
                <div className="flex flex-row">
                  <BsFiletypeSql className="mr-3" />
                  <p className="text-3xl">SQL</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 flex ml-auto items-center justify-end">
                <a
                  href="https://youtu.be/EqkZ8--z3ag"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  VIDEO
                </a>
                <a
                  href="https://github.com/dan933/2022-NBA-Prediction-Application"
                  target="_blank"
                  className="bg-zinc-800 hover:bg-zinc-700 rounded-lg font-bold py-5 text-white text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex text-white h-full w-full justify-end px-10 py-12 flex-col">
              <h1 className="text-4xl font-poppins font-semibold w-full">
                NBA PREDICTION APP
              </h1>
              <p className="font-poppins">
                A side project that was developed along side a handful of
                friends. This app assists in sports betting by predicting the
                odds of NBA teams...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="about" className="min-h-screen items-center justify-center flex">
        <div className="pointer-events-none space-y-14 text-black font-poppins py-16 sm:text-3xl sm:text-center lg:text-start lg:pl-24 text-4xl">
          <h1 className="font-bold">ABOUT ME</h1>
          <p>
            Born in Japan. <b>Grew up in 3 countries</b> and currently in
            Australia looking to become a Web Developer.
          </p>
          <p>
            Currently studying a{" "}
            <b>
              Bachelor of Information Technology at Swinburne University of
              Technology.
            </b>{" "}
            Expecting to graduate this year.
          </p>
          <p>
            When im not programming you might find me <b>playing soccer,</b>{" "}
            <b>watching movies</b> or{" "}
            <b>grinding competitive FPS shooters & fighting games.</b>
          </p>
        </div>
      </div>
      <div className="grid overflow-x-auto bg-gradient-to-r from-cyan-600 to-blue-500 ">
        <div className="pointer-events-none text-white font-poppins py-16 px-12 text-4xl">
          <h1 className="font-bold text-start pl-10">MY SKILLS</h1>
          <div className="font-poppins font-bold gap-10 flex flex-row items-center justify-center pt-16 px-10 text-6xl">
            <div className="flex gap-2 items-center flex-col">
              <FaSquareGithub className="" />
              <p className="text-2xl">GitHub</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <IoLogoJavascript className="" />
              <p className="text-2xl">JavaScript</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <FaCss3Alt className="" />
              <p className="text-2xl">CSS</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <FaHtml5 className="" />
              <p className="text-2xl">HTML</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <FaReact className="" />
              <p className="text-2xl">React</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <RiNextjsFill className="" />
              <p className="text-2xl">NextJS</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <IoLogoFirebase className="" />
              <p className="text-2xl">FireBase</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <DiFirebase className="" />
              <p className="text-2xl">NoSQL</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <FaAws className="" />
              <p className="text-2xl">AWS RDS</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <DiDotnet className="" />
              <p className="text-2xl">.NET API</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <BsFiletypeSql className="" />
              <p className="text-2xl">SQL</p>
            </div>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className="grid items-center min-h-screen text-white bg-zinc-900"
      >
        <div className="w-full font-poppins py-16 px-24 text-4xl">
          <h1 className="font-bold">CONTACT</h1>
          <p className="text-2xl">
            I&apos;d love to hear from you! Let&apos;s connect via email or
            LinkedIn
          </p>
          <div className="py-10 w-full gap-10 text-4xl flex justify-center text-center items-center flex-row">
            <a
              href="/files/Riki-Choi-Resume.pdf"
              alt="Riki Choi Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <FaDownload className="text-3xl" />
            </a>
            <a
              href="https://github.com/rikichoi"
              target="_blank"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rikichoi/"
              target="_blank"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:choi.riki@gmail.com"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <MdOutlineEmail />
            </a>
          </div>
          <form
            action="https://formsubmit.co/choi.riki@gmail.com"
            method="POST"
          >
            <div className="font-poppins font-bold gap-10 flex flex-row items-center justify-center">
              <div className="grid gap-5 w-full sm:grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-rows-3 w-full  gap-3">
                  <input
                    name="name"
                    placeholder="Name"
                    className="w-full text-xl bg-zinc-700 py-2 px-2 "
                  ></input>
                  <input
                    name="email"
                    placeholder="Email"
                    className="w-full text-xl bg-zinc-700 py-2 px-2"
                  ></input>
                  <input
                    name="subject"
                    placeholder="Subject"
                    className="w-full text-xl bg-zinc-700 py-2 px-2"
                  ></input>
                </div>
                <div className="grid w-full h-full gap-5">
                  <textarea
                    name="message"
                    placeholder="Message"
                    className="w-full h-full text-xl bg-zinc-700 py-2 px-2 "
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="w-full flex justify-end py-5 items-end">
              <button
                type="submit"
                className="bg-cyan-600 hover:bg-cyan-300 hover:text-black transition-all duration-500 text-white font-semibold z-50 py-5 text-center max-w-40 w-full text-xl"
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
