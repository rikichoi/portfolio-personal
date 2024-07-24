import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";

export default function Home() {
  return (
    <div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">src/app/page.js</code>
          </p>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] ">
          <div className="grid gap-3">
            <h1 className="font-inter font-bold text-6xl">RIKI CHOI</h1>
            <h1 className="font-inter font-semibold text-3xl">
              FRONT-END WEB DEVELOPER WITH A PASSION FOR CODING.
            </h1>
            <div className="pt-10 flex z-50 flex-row gap-10">
              <a
                href=""
                className="bg-gray-900 text-white font-semibold z-50 py-5 text-center max-w-40 w-full text-xl"
              >
                ABOUT ME
              </a>
              <a
                href=""
                className="bg-gray-900 text-white font-semibold z-50 py-5 text-center max-w-40 w-full text-xl"
              >
                HIRE ME
              </a>
            </div>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </main>
      <div className="grid grid-cols-3 bg-gradient-to-r from-cyan-600 to-blue-500 ">
        <p className="col-span-2 text-white font-poppins py-16 pl-24 text-4xl">
          I am an <b>enthusiastic developer</b> with a passion for creating{" "}
          <b>solutions for complex problems.</b>
        </p>
        <div className="items-center flex justify-center">
          <a
            href=""
            className="bg-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-xl"
          >
            RESUME
          </a>
        </div>
      </div>
      <div className="grid gap-5 min-h-screen grid-rows-5 bg-white ">
        <div className="row-span-1 grid grid-cols-3 bg-white ">
          <p className="font-semibold flex items-center col-span-2 text-gray-900 font-poppins py-16 pl-24 text-4xl">
            PROJECTS
          </p>
          <div className="items-center flex justify-center">
            <a
              href=""
              className="bg-gray-950 font-bold py-5 text-white text-center max-w-40 w-full text-xl"
            >
              GITHUB
            </a>
          </div>
        </div>
        <div className="px-10 row-span-2 gap-5 grid grid-cols-5  ">
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
                  className="bg-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-lg"
                >
                  LIVE DEMO
                </a>
                <a
                  href="https://github.com/rikichoi/calorie-tracking-app"
                  target="_blank"
                  className="bg-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex text-white h-full w-full justify-end px-10 py-16 flex-col">
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
                  className="bg-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-lg"
                >
                  LIVE DEMO
                </a>
                <a
                  href="https://github.com/rikichoi/openhouse-listing-app"
                  target="_blank"
                  className="bg-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex h-full w-full text-white justify-end px-10 py-12 flex-col">
              <h1 className="text-4xl font-poppins font-semibold w-full">
                OPEN HOUSE
              </h1>
              <p className="font-poppins">OpenHouse is a platform that streamlines the management and advertisement process of open house listings...</p>
            </div>
          </div>
        </div>
        <div className="px-10 row-span-2 gap-5 grid grid-cols-5  ">
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
                  <RiTailwindCssFill className="mr-3" />
                  <p className="text-3xl">Tailwind CSS</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 flex flex-col ml-auto items-center justify-center">
                <a
                  href="https://github.com/rikichoi/openhouse-listing-app"
                  target="_blank"
                  className="bg-white font-bold py-5 text-gray-950 text-center max-w-40 w-full text-lg"
                >
                  VIEW GITHUB
                </a>
              </div>
            </div>
            <div className="flex h-full w-full text-white justify-end px-10 py-16 flex-col">
              <h1 className="text-4xl font-poppins font-semibold  w-full">
                THIS WEBSITE!
              </h1>
              <p className="font-poppins">This Website was made from scratch using NextJS and Tailwind CSS, for convenience it is hosted on Vercel...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
