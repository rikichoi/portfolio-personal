"use client";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { RiAttachment2, RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { FaAws } from "react-icons/fa";
import { DiDotnet, DiPostgresql } from "react-icons/di";
import { BsFiletypeSql } from "react-icons/bs";
import { SiExpress, SiNodedotjs, SiTypescript, SiZod } from "react-icons/si";
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
import { useEffect, useRef, useState } from "react";
import sendEmail from "./actions/sendEmail";
import { toast } from "react-toastify";
import { BsStripe } from "react-icons/bs";
import { SiMongodb } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiJirasoftware } from "react-icons/si";
import { AiFillOpenAI } from "react-icons/ai";
import { SiLangchain } from "react-icons/si";
import { SiAstra } from "react-icons/si";
import { motion, useInView, useAnimation } from "framer-motion";
import Link from "next/link";
import Lenis from "lenis";

export default function Home() {
  const [errors, setErrors] = useState({});
  const nameRef = useRef();
  const emailRef = useRef();
  const subjectRef = useRef();
  const messageRef = useRef();
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();
  const ref7 = useRef();
  const ref8 = useRef();

  const isInView = useInView(ref1, { once: true });
  const projectSectionisInView = useInView(ref2, { once: true });
  const project1isInView = useInView(ref3, { once: true });
  const project2isInView = useInView(ref4, { once: true });
  const project3isInView = useInView(ref5, { once: true });
  const project4isInView = useInView(ref6, { once: true });
  const project5isInView = useInView(ref7, { once: true });
  const project6isInView = useInView(ref8, { once: true });

  const mainControls = useAnimation();
  const projectControls = useAnimation();
  const project1Controls = useAnimation();
  const project2Controls = useAnimation();
  const project3Controls = useAnimation();
  const project4Controls = useAnimation();
  const project5Controls = useAnimation();
  const project6Controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
    if (projectSectionisInView) {
      projectControls.start("visible");
    }
    if (project1isInView) {
      project1Controls.start("visible");
    }
    if (project2isInView) {
      project2Controls.start("visible");
    }
    if (project3isInView) {
      project3Controls.start("visible");
    }
    if (project4isInView) {
      project4Controls.start("visible");
    }
    if (project5isInView) {
      project5Controls.start("visible");
    }
    if (project6isInView) {
      project6Controls.start("visible");
    }
  }, [
    isInView,
    projectSectionisInView,
    project1isInView,
    project2isInView,
    project3isInView,
    project4isInView,
    project5isInView,
    project6isInView,
  ]);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const validate = () => {
    let errors = {};
    if (!nameRef.current.value) {
      errors.name = "Please enter a name";
    }
    if (
      !emailRef.current.value ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailRef.current.value)
    ) {
      errors.email = "Please enter a valid email";
    }
    if (!subjectRef.current.value) {
      errors.subject = "Please enter a subject";
    }
    if (!messageRef.current.value) {
      errors.message = "Please enter a message";
    }
    return errors;
  };

  const submitHandler = () => {
    let errors = validate();
    if (Object.keys(errors).length) return setErrors(errors);
    sendEmail(
      nameRef.current.value,
      emailRef.current.value,
      subjectRef.current.value,
      messageRef.current.value
    );
    setErrors({});
    toast.success("Email sent successfully!");
  };

  return (
    <main className="bg-[#ffffff] font-kanit">
      <motion.div
        id="home"
        className="min-h-screen absolute inset-0 h-full w-full bg-[#ffffff] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
      ></motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        className="fixed top-0 w-full flex justify-between min-w-full z-50 sm:px-2 lg:px-44 min-h-12 py-2 bg-white border-b-2"
      >
        <Link href="#home" className="flex justify-center items-center">
          <Image
            src={Logo}
            alt="my logo"
            className="sm:max-w-24 lg:max-w-44 flex-shrink flex"
          ></Image>
        </Link>
        <div className="flex justify-center items-center">
          <Link
            href="#contact"
            className="bg-gray-900 hover:bg-blue-500 transition-all duration-500 text-white font-semibold z-50 sm:py-2 lg:py-4 sm:px-2 lg:px-3 text-center max-w-40 w-full sm:text-sm lg:text-xl"
          >
            CONTACT ME
          </Link>
        </div>
      </motion.div>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        className="flex min-h-screen w-full flex-col items-center justify-center px-8 pt-28 lg:pt-0"
      >
        <div className="z-40 w-full items-center justify-center font-anek text-sm lg:flex"></div>
        <div className="xs:h-full h-full grid gap-3">
          <div className="xs:flex-col w-full sm:flex-col font-reddit flex lg:flex-row font-bold text-6xl">
            <h1 className="w-full z-40 pointer-events-none font-anek font-bold  flex items-end">
              RIKI CHOI
            </h1>
            <div className="sm:z-40 sm:py-4 sm:justify-start w-full sm:gap-3 sm:mt-3 gap-10 text-4xl flex lg:justify-center text-center items-center flex-row">
              <Tooltip showArrow={true} content="Download CV PDF">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="/files/Riki_Choi_Resume.pdf"
                  alt="Riki Choi Resume"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex hover:text-blue-500 hover:bg-blue-600 p-2 rounded-xl bg-gray-900"
                >
                  <FaDownload className="text-white" />
                </motion.a>
              </Tooltip>
              <Tooltip showArrow={true} content="GitHub">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://github.com/rikichoi"
                  target="_blank"
                  className="flex hover:text-blue-500 hover:bg-blue-600 p-2 rounded-xl bg-gray-900"
                >
                  <FaGithub className="text-white" />
                </motion.a>
              </Tooltip>
              <Tooltip showArrow={true} content="LinkedIn">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/rikichoi/"
                  target="_blank"
                  className="flex hover:text-blue-500 hover:bg-blue-600 p-2 rounded-xl bg-gray-900"
                >
                  <FaLinkedin className="text-white" />
                </motion.a>
              </Tooltip>
              <Tooltip showArrow={true} content="Email">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:choi.riki@gmail.com"
                  className="flex hover:text-blue-500 hover:bg-blue-600 p-2 rounded-xl bg-gray-900"
                >
                  <MdOutlineEmail className="text-white" />
                </motion.a>
              </Tooltip>
            </div>
          </div>
          <h1 className="z-40 pointer-events-none font-reddit font-semibold text-3xl">
            FRONTEND WEB DEVELOPER WITH A PASSION FOR CODING.
          </h1>
          <div className="flex z-40 flex-row gap-3 lg:gap-8">
            <Link
              href="/files/Riki_Choi_Resume.pdf"
              alt="Riki Choi Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 pr-2 items-center justify-center flex gap-1 hover:bg-blue-500 transition-all duration-500 text-white font-semibold z-50 py-5 text-center max-w-40 w-full sm:text-lg lg:text-xl"
            >
              <RiAttachment2 size={20} />
              RESUME
            </Link>
            <Link
              href="#experience"
              className="bg-gray-900 uppercase hover:bg-blue-500 transition-all duration-500 text-white font-semibold z-50 py-5 text-center max-w-40 w-full sm:text-lg lg:text-xl"
            >
              Experience
            </Link>
          </div>
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
      </motion.div>
      <div
        id="experience"
        className="scroll-mt-16 grid gap-y-5 sm:pb-10 sm:grid-cols-1 py-16 lg:grid-cols-3 bg-gradient-to-r from-cyan-600 to-blue-500 "
      >
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          className="text-2xl col-span-2 text-white sm:px-2 lg:pl-24 lg:text-4xl"
        >
          <h1 className="font-anek font-semibold tracking-tight text-xl uppercase mb-5">
            Work Experience
          </h1>
          <Link
            href="https://www.edable.org.au/"
            target="_blank"
            className="font-kanit select-none mb-1.5 font-semibold text-orange-300 tracking-tight relative w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-orange-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
          >
            EdAble
          </Link>
          <h2 className="font-kanit font-semibold tracking-tight">
            Volunteer Full-Stack Web Developer
          </h2>
          <h2 className="font-kanit text-slate-200 tracking-tight">
            Feb 2022 - Dec 2022
          </h2>
          <h3 className="text-xl font-reddit font-bold mt-3">
            Technical Skills:
          </h3>
          <ul className="list-disc sm:text-base tracking-wide pl-5 font-reddit text-xl">
            <li>
              <span className="font-semibold">Core Technologies:</span> Angular,
              FireBase, AWS, Auth0
            </li>
            <li>
              <span className="font-semibold">Tools and Libraries:</span>{" "}
              WebDataRocks, ChartJS, Angular Material UI
            </li>
            <li>
              <span className="font-semibold">
                Version Control Development:
              </span>{" "}
              Git, GitHub, Jira, Visual Studio, ESLint, Prettier
            </li>
            <li>
              <span className="font-semibold">Project Management:</span> Agile
              Methodology
            </li>
            <li>
              <span className="font-semibold">Business Documentation:</span>{" "}
              Feasability, Business Requirements, Software Analysis, Business
              Case, Project Management Plan
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref1}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          className="items-center flex justify-center"
        >
          <Link
            href="/files/Riki_Choi_Resume.pdf"
            alt="Riki Choi Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-50 hover:bg-zinc-900 hover:border-2 border-2 transition-all duration-500 hover:text-white font-bold py-5 text-gray-950 text-center max-w-40 w-full sm:text-lg lg:text-xl"
          >
            RESUME
          </Link>
        </motion.div>
      </div>
      <div
        id="projects"
        className="scroll-mt-16 grid gap-5 h-full min-h-screen sm:grid-rows-10 lg:grid-rows-7 bg-[#ffffff] "
      >
        <div className="row-span-1 sm:grid-cols-1 grid lg:grid-cols-3 bg-[#ffffff] ">
          <motion.div
            ref={ref2}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={projectControls}
            className="pointer-events-none font-semibold flex gap-7 items-center flex-col col-span-2 text-gray-900  py-16 sm:px-2 lg:px-12 text-4xl"
          >
            <motion.p className="font-anek tracking-tight uppercase text-center">
              Personal Projects
            </motion.p>
            <motion.p className="text-xl text-center font-semibold justify-center flex text-black underline-offset-4 underline">
              *demo account details provided in project login pages*
            </motion.p>
          </motion.div>
          <motion.div
            ref={ref2}
            variants={{
              hidden: { opacity: 0, y: 75 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={projectControls}
            className="items-center flex justify-center"
          >
            <motion.a
              href="https://github.com/rikichoi"
              target="_blank"
              className="bg-gray-950 hover:bg-blue-500 transition-all duration-500 font-bold py-5 text-white text-center max-w-40 w-full sm:text-lg lg:text-xl"
            >
              GITHUB
            </motion.a>
          </motion.div>
        </div>

        <div className="lg:px-10 sm:px-5 sm:row-span-3  lg:row-span-2 lg:gap-5 sm:gap-y-3 grid sm:grid-cols-1 lg:grid-cols-5">
          <motion.div
            ref={ref3}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={project1Controls}
            className="col-span-3 min-h-40 justify-between rounded-3xl shadow-xl group overflow-hidden relative flex flex-col bg-[url('./images/calorie-tracker-app.png')]  bg-cover bg-center"
          >
            <div className="absolute h-1/2 group-hover:top-0 bg-blue-500 bg-opacity-30 transition-all duration-500  w-full group-hover:opacity-100 opacity-0 -top-96 flex flex-row pt-12 sm:px-5 px-10 text-4xl">
              <div className="text-white flex flex-1">
                <div className="flex flex-row gap-5 ">
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-row items-center">
                      <FaReact className="mr-3" />
                      <p className="hidden lg:block sm:text-xl lg:text-3xl">
                        React
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <RiNextjsFill className="mr-3" />
                      <p className="hidden lg:block sm:text-xl lg:text-3xl">
                        NextJS
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <IoLogoFirebase className="mr-3" />
                      <p className="hidden lg:block sm:text-xl lg:text-3xl">
                        FireBase
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <RiTailwindCssFill className="mr-3" />
                      <p className="hidden lg:block sm:text-xl lg:text-3xl">
                        Tailwind
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-row items-center">
                      <AiFillOpenAI className="mr-3" />
                      <p className="hidden lg:block sm:text-xl lg:text-3xl">
                        OpenAI
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <SiLangchain className="mr-3" />
                      <p className="hidden lg:block sm:text-xl lg:text-3xl">
                        LangChain
                      </p>
                    </div>
                    <div className="flex flex-row">
                      <SiAstra className="mr-3" />
                      <p className=" hidden lg:block sm:text-xl lg:text-3xl">
                        AstraDB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/2 gap-10 sm:flex-col sm:flex-wrap lg:flex-row flex sm:ml-auto lg:ml-auto items-center sm:justify-start  lg:justify-end">
                <Link
                  href="https://calorie-tracker-app-one.vercel.app/"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full sm:text-sm lg:text-lg"
                >
                  LIVE
                </Link>
                <Link
                  href="https://github.com/rikichoi/calorie-tracking-app"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  GITHUB
                </Link>
              </div>
            </div>
            <div className="flex  group-hover:opacity-100 opacity-0 absolute h-1/2 group-hover:bottom-0 transition-all duration-500 bg-blue-500 bg-opacity-30 -bottom-96  text-white w-full justify-end sm:px-4 lg:px-10 py-12 flex-col">
              <h1 className="sm:text-2xl lg:text-4xl  font-semibold w-full">
                HealthDiary
              </h1>
              <p className="">
                HealthDiary is a service that provides access to a dynamic
                calorie tracking application, with the goal of assisting users
                of any type to stay on top of their health and nutrition...
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref4}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={project2Controls}
            className="col-span-2 min-h-40 justify-between rounded-3xl shadow-xl group overflow-hidden relative flex flex-col bg-[url('./images/open-house-app-agent.png')]  bg-cover bg-center"
          >
            <div className="absolute h-1/2 group-hover:top-0 bg-blue-500 bg-opacity-30 transition-all duration-500 group-hover:opacity-100 opacity-0 w-full -top-96 flex flex-row pt-12 sm:px-5 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row">
                  <FaReact className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <IoLogoFirebase className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">FireBase</p>
                </div>
                <div className="flex flex-row">
                  <RiTailwindCssFill className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">Tailwind</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 sm:flex-col sm:flex-wrap lg:flex-row flex sm:ml-auto lg:ml-auto items-center sm:justify-start  lg:justify-end">
                <Link
                  href="https://openhouse-listing-app.vercel.app/"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  LIVE
                </Link>
                <Link
                  href="https://github.com/rikichoi/openhouse-listing-app"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  GITHUB
                </Link>
              </div>
            </div>
            <div className="flex absolute h-1/2 group-hover:bottom-0 transition-all duration-500 bg-blue-500 bg-opacity-30 group-hover:opacity-100 opacity-0 -bottom-96  text-white w-full justify-end sm:px-4 lg:px-10 py-12 flex-col">
              <h1 className="sm:text-2xl lg:text-4xl  font-semibold w-full">
                OpenHouse
              </h1>
              <p className="">
                OpenHouse is a platform that streamlines the management and
                advertisement process of open house listings...
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:px-10 sm:px-5 sm:row-span-3  lg:row-span-2 lg:gap-5 sm:gap-y-3 grid sm:grid-cols-1 lg:grid-cols-5">
          <motion.div
            ref={ref5}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={project3Controls}
            className="col-span-2 min-h-40 justify-between rounded-3xl shadow-xl group overflow-hidden relative flex flex-col bg-[url('./images/techbyte-app.png')] bg-cover bg-center"
          >
            <div className="absolute h-1/2 group-hover:top-0 bg-blue-500 bg-opacity-30 transition-all duration-500 group-hover:opacity-100 opacity-0 w-full -top-96 flex flex-row pt-12 sm:px-5 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row items-center">
                  <FaReact className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <IoLogoFirebase className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">MongoDB</p>
                </div>
                <div className="flex flex-row">
                  <BsStripe className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">Stripe</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 sm:flex-col sm:flex-wrap lg:flex-row flex sm:ml-auto lg:ml-auto items-center sm:justify-start  lg:justify-end">
                <Link
                  href="https://techbyte-store.vercel.app/"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  LIVE
                </Link>
                <Link
                  href="https://github.com/rikichoi/techbyte-store"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  GITHUB
                </Link>
              </div>
            </div>
            <div className="flex absolute h-1/2 group-hover:bottom-0 transition-all duration-500 bg-blue-500 bg-opacity-30 group-hover:opacity-100 opacity-0 -bottom-96  text-white w-full justify-end sm:px-4 lg:px-10 py-12 flex-col">
              <h1 className="sm:text-2xl lg:text-4xl  font-semibold w-full">
                TechByte
              </h1>
              <p className="">
                Tech product based e-commerce store for all your tech needs!
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref6}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={project4Controls}
            className="col-span-3 min-h-40 justify-between rounded-3xl shadow-xl group overflow-hidden relative flex flex-col bg-[url('./images/reviewme-app.png')]  bg-cover bg-center"
          >
            <div className="absolute h-1/2 group-hover:top-0 bg-blue-500 bg-opacity-30 transition-all duration-500  w-full group-hover:opacity-100 opacity-0 -top-96 flex flex-row pt-12 sm:px-5 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row items-center">
                  <FaReact className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <DiPostgresql className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">PostgreSQL</p>
                </div>
                <div className="flex flex-row">
                  <SiPrisma className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">Prisma</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 sm:flex-col sm:flex-wrap lg:flex-row flex sm:ml-auto lg:ml-auto items-center sm:justify-start  lg:justify-end">
                <Link
                  href="https://reviewme-jet.vercel.app/"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full sm:text-sm lg:text-lg"
                >
                  LIVE
                </Link>
                <Link
                  href="https://github.com/rikichoi/reviewme-nextjs"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  GITHUB
                </Link>
              </div>
            </div>
            <div className="flex  group-hover:opacity-100 opacity-0 absolute h-1/2 group-hover:bottom-0 transition-all duration-500 bg-blue-500 bg-opacity-30 -bottom-96  text-white w-full justify-end sm:px-4 lg:px-10 py-12 flex-col">
              <h1 className="sm:text-2xl lg:text-4xl  font-semibold w-full">
                ReviewMe
              </h1>
              <p className="">
                ReviewMe is a platform that allows users to post reviews and
                start threads about ANYTHING!
              </p>
            </div>
          </motion.div>
        </div>

        <div className="lg:px-10 sm:px-5 sm:row-span-3  lg:row-span-2 lg:gap-5 sm:gap-y-3 grid sm:grid-cols-1 lg:grid-cols-5">
          <motion.div
            ref={ref7}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={project5Controls}
            className="col-span-3 min-h-40 justify-between rounded-3xl shadow-xl group overflow-hidden relative flex flex-col bg-[url('./images/nba-app.jpg')]  bg-cover bg-center"
          >
            <div className="absolute h-1/2 group-hover:top-0 bg-blue-500 bg-opacity-30 transition-all duration-500  w-full group-hover:opacity-100 opacity-0 -top-96 flex flex-row pt-12 sm:px-5 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row items-center">
                  <FaReact className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <DiDotnet className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">.NET</p>
                </div>
                <div className="flex flex-row">
                  <FaAws className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">AWS</p>
                </div>
                <div className="flex flex-row">
                  <BsFiletypeSql className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">SQL</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 sm:flex-col sm:flex-wrap lg:flex-row flex sm:ml-auto lg:ml-auto items-center sm:justify-start  lg:justify-end">
                <Link
                  href="https://youtu.be/EqkZ8--z3ag"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full sm:text-sm lg:text-lg"
                >
                  VIDEO
                </Link>
                <Link
                  href="https://github.com/dan933/2022-NBA-Prediction-Application"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  GITHUB
                </Link>
              </div>
            </div>
            <div className="flex  group-hover:opacity-100 opacity-0 absolute h-1/2 group-hover:bottom-0 transition-all duration-500 bg-blue-500 bg-opacity-30 -bottom-96  text-white w-full justify-end sm:px-4 lg:px-10 py-12 flex-col">
              <h1 className="sm:text-2xl lg:text-4xl font-semibold w-full">
                NBA Prediction Application
              </h1>
              <p className="">
                A side project that was developed along side a handful of
                friends. This app assists in sports betting by predicting the
                odds of NBA teams...
              </p>
            </div>
          </motion.div>

          <motion.div
            ref={ref8}
            variants={{
              hidden: { opacity: 0, y: 100 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            animate={project6Controls}
            className="col-span-2 min-h-40 justify-between rounded-3xl shadow-xl group overflow-hidden relative flex flex-col bg-[url('./images/admindash-app.png')] bg-cover bg-center"
          >
            <div className="absolute h-1/2 group-hover:top-0 bg-blue-500 bg-opacity-30 transition-all duration-500 group-hover:opacity-100 opacity-0 w-full -top-96 flex flex-row pt-12 sm:px-5 px-10 text-4xl">
              <div className="text-white space-y-3">
                <div className="flex flex-row items-center">
                  <FaReact className="mr-3" />
                  <p className="sm:text-xl lg:text-3xl">React</p>
                </div>
                <div className="flex flex-row">
                  <RiNextjsFill className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">NextJS</p>
                </div>
                <div className="flex flex-row">
                  <SiNodedotjs className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">Node</p>
                </div>
                <div className="flex flex-row">
                  <SiExpress className="mr-3" />
                  <p className=" sm:text-xl lg:text-3xl">Express</p>
                </div>
              </div>
              <div className="w-1/2 gap-10 sm:flex-col sm:flex-wrap lg:flex-row flex sm:ml-auto lg:ml-auto items-center sm:justify-start  lg:justify-end">
                <Link
                  href="https://admindash-sooty.vercel.app"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  LIVE
                </Link>
                <Link
                  href="https://github.com/rikichoi/admindash"
                  target="_blank"
                  className="bg-gray-900 hover:bg-white hover:border-2 border-2 border-gray-900 hover:text-gray-900 transition-all duration-300 rounded-lg font-bold py-5 text-white text-center sm:max-w-full max-w-40 w-full text-sm lg:text-lg"
                >
                  GITHUB
                </Link>
              </div>
            </div>

            <div className="flex absolute h-1/2 group-hover:bottom-0 transition-all duration-500 bg-blue-500 bg-opacity-30 group-hover:opacity-100 opacity-0 -bottom-96  text-white w-full justify-end sm:px-4 lg:px-10 py-12 flex-col">
              <h1 className="sm:text-2xl lg:text-4xl  font-semibold w-full">
                AdminDash
              </h1>
              <p className="">
                An information system that provides business analytics
                and finance management
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        id="about"
        className="min-h-screen items-center justify-center py-10 flex bg-[#ffffff]"
      >
        <div className="pointer-events-none font-reddit space-y-16 text-black  sm:text-xl sm:text-center lg:text-start lg:px-24 lg:text-4xl">
          <h1 className="font-anek tracking-tight uppercase font-semibold">
            ABOUT ME
          </h1>
          <p>
            Based in Australia. <b>Grew up in 3 countries</b> and currently
            aspiring to become a <b>Full-Stack Web Developer.</b>
          </p>
          <p>
            Currently studying a{" "}
            <b>
              Bachelor of Information Technology at Swinburne University of
              Technology (Majoring in Software Technology).
            </b>{" "}
            Expected to graduate by the end of 2024.
          </p>
          <p>
            When I&apos;m not programming you might find me{" "}
            <b>playing soccer</b> or <b>watching movies.</b>
          </p>
        </div>
      </div>
      <div className="overflow-x-auto bg-gradient-to-r from-cyan-600 to-blue-500 ">
        <div className="pointer-events-none text-white py-16 text-4xl max-w-5xl px-7 mx-auto">
          <h1 className="font-bold text-start">MY SKILLS</h1>
          <div className="flex flex-wrap font-bold gap-10 flex-row items-center justify-center pt-16 text-6xl">
            <div className="flex gap-2 items-center flex-col">
              <FaSquareGithub className="" />
              <p className="text-2xl">GitHub</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <FaHtml5 className="" />
              <p className="text-2xl">HTML</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <IoLogoJavascript className="" />
              <p className="text-2xl">JavaScript</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiTypescript className="" />
              <p className="text-2xl">TypeScript</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <FaCss3Alt className="" />
              <p className="text-2xl">CSS</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiTailwindcss />
              <p className="text-2xl">Tailwind</p>
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
              <SiZod className="" />
              <p className="text-2xl">Zod</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiNodedotjs />
              <p className="text-2xl">Node</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiExpress />
              <p className="text-2xl">Express</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <IoLogoFirebase className="" />
              <p className="text-2xl">FireBase</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiMongodb />
              <p className="text-2xl">MongoDB</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <DiFirebase className="" />
              <p className="text-2xl">NoSQL</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiPrisma />
              <p className="text-2xl">Prisma</p>
            </div>
            <div className="flex gap-2 items-center flex-col">
              <SiJirasoftware />
              <p className="text-2xl">Jira</p>
            </div>
          </div>
        </div>
      </div>

      <div
        id="contact"
        className="scroll-mt-16 grid items-center min-h-screen text-white bg-zinc-900"
      >
        <div className="w-full  py-16 sm:px-2 lg:px-24 sm:text-2xl lg:text-4xl">
          <h1 className="font-bold">CONTACT</h1>
          <p className="sm:text-lg lg:text-2xl">
            I&apos;d love to hear from you! Let&apos;s connect via email or
            LinkedIn
          </p>
          <div className="py-10 w-full gap-10 text-4xl flex justify-center text-center items-center flex-row">
            <Link
              href="/files/Riki_Choi_Resume.pdf"
              alt="Riki Choi Resume"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <FaDownload className="text-3xl" />
            </Link>
            <Link
              href="https://github.com/rikichoi"
              target="_blank"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <FaGithub />
            </Link>
            <Link
              href="https://www.linkedin.com/in/rikichoi/"
              target="_blank"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="mailto:choi.riki@gmail.com"
              className="flex hover:text-red-600 items-center flex-row"
            >
              <MdOutlineEmail />
            </Link>
          </div>
          <form action={() => submitHandler()}>
            <div className=" font-bold gap-10 flex flex-row items-center justify-center">
              <div className="grid gap-5 w-full sm:grid-cols-1 lg:grid-cols-2">
                <div className="grid grid-rows-3 w-full gap-3">
                  <div>
                    <input
                      ref={nameRef}
                      placeholder="Name"
                      className="w-full text-xl bg-zinc-700 py-2 px-2 "
                    ></input>
                    {errors.name ? (
                      <p className="text-base text-red-600">{errors.name}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <input
                      ref={emailRef}
                      placeholder="Email"
                      className="w-full text-xl bg-zinc-700 py-2 px-2"
                    ></input>
                    {errors.email ? (
                      <p className="text-base text-red-600">{errors.email}</p>
                    ) : (
                      ""
                    )}
                  </div>
                  <div>
                    <input
                      ref={subjectRef}
                      placeholder="Subject"
                      className="w-full text-xl bg-zinc-700 py-2 px-2"
                    ></input>
                    {errors.subject ? (
                      <p className="text-base text-red-600">{errors.subject}</p>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
                <div className="grid w-full h-full gap-5">
                  <div>
                    <textarea
                      ref={messageRef}
                      placeholder="Message"
                      className="w-full h-full text-xl bg-zinc-700 py-2 px-2 "
                    ></textarea>
                    {errors.message ? (
                      <p className="text-base text-red-600">{errors.message}</p>
                    ) : (
                      ""
                    )}
                  </div>
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
        <div>
          <p className="text-center text-sm leading-loose text-white">
            &copy; {new Date().getFullYear()} Riki Choi. All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
