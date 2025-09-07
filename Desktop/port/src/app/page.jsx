"use client";

import Image from "next/image";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import iconkit from "@/app/images/Screenshot 2025-06-30 181011.png";
import mimzy from "@/app/images/Screenshot 2025-06-05 204735.png";
import npmLeetcodeCalendar from "@/app/images/npmLeetcodeCalendar.png";
import report from "@/app/images/Screenshot 2025-06-05 205655.png";
import github from "@/app/images/github.png";
import insta from "@/app/images/instagram.png";
import leetcode from "@/app/images/icons8-leetcode-96.png";
import linkedin from "@/app/images/linkedin.png";
import open from "@/app/images/share.png";
import twitter from "@/app/images/twitter.png";
import yash from "@/app/images/WhatsApp Image 2025-06-30 at 17.59.51_dba963c1.jpg";
import frontendBg from "../../public/mehdi-mirzaie-kUe-dIOu5FE-unsplash.jpg";
import devop from "../../public/devop.jpg";
import backend from "../../public/florian-krumm-yLDabpoCL3s-unsplash.jpg";
import db from "../../public/db.jpg";
import GitHubCalendar from "react-github-calendar";
import { AuroraText } from "@/components/magicui/aurora-text";

import { LeetCodeCalendar } from "@yashx700/leetcodecalendar";
import { ins } from "motion/react-client";

export default function Home() {
    const [viewCount, setViewCount] = useState();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [resultMessage, setResultMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const eS = 116;
    const eQ = 885;
    const mS = 75;
    const mQ = 1883;
    const hS = 2;
    const hQ = 853;
    const percentageEasy = (eS / eQ) * 100;
    const percentageMedium = (mS / mQ) * 100;
    const percentageHard = (hS / hQ) * 100;

    useEffect(() => {
        const fetchViewCount = async () => {
            const res = await axios.post("/api/getCount");
            console.log(res.data.viewsCount.viewsCount);
            setViewCount(res.data.viewsCount.viewsCount);
        };
        fetchViewCount();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setResultMessage("Please wait...");

        const payload = {
            access_key: "2b9fc0fa-46bc-4da4-8ca7-89c72dae6e4c",
            ...formData,
        };

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(payload),
            });

            const result = await response.json();
            setResultMessage(
                response.status === 200
                    ? "Message sent successfully!"
                    : "Failed to send message. Please try again."
            );
        } catch (error) {
            setResultMessage("Something went wrong!");
        } finally {
            setIsLoading(false);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setResultMessage(""), 3000);
        }
    };

    return (
        <div className="relative bg-zinc-100 lg:px-60 w-full">
            {/* <Image src={bg} alt="bg" className="fixed top-0 left-0 w-full h-screen object-cover" /> */}

            <div className="overflow-y-scroll px-3  relative z-10 text-4xl font-grapeNuts font-bold text-zinc-900 ">
                <div className="w-full h-14 text-lg border-b-[2px] flex items-center justify-between">
                    <div className="bg-zinc-100  rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white font-poppins px-2 py-1">
                        <span className="text-green-500">●</span> Open to Work
                    </div>
                    <div>
                        {viewCount && (
                            <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-2 py-1">
                                visitors: {viewCount}
                            </div>
                        )}
                    </div>
                </div>

                <div className="mt-10 grid sm:grid-cols-10">
                    <div className="col-span-8 mt-9 grid sm:grid-cols-10 gap-5 sm:mt-0">
                        <div className="col-span-3 bg-zinc-100 flex justify-center items-center rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white w-40 h-40 relative overflow-hidden">
                            <Image
                                src={yash}
                                alt="bg"
                                className="w-36 h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans  bottom-0 left-0 p-2">
                                <span className="text-white font-extralight px-2 text-xs">
                                    ∘ 2024
                                </span>
                            </div>
                        </div>

                        <div className="col-span-7">
                            <h1>
                                Hi there, I am{" "}
                                <AuroraText className="font-specialGothicExpandedOne">
                                    Yash Tiwari
                                </AuroraText>
                            </h1>
                            <h1 className="h-28">
                                I am into
                                <span className="font-specialGothicExpandedOne">
                                    <Typewriter
                                        words={[
                                            " Web Development",
                                            " Design",
                                            " Programming",
                                        ]}
                                        loop={false}
                                        cursor
                                        cursorStyle=" !"
                                        typeSpeed={100}
                                        deleteSpeed={50}
                                    />
                                </span>
                            </h1>
                        </div>
                    </div>
                </div>

                <div className="flex gap-2 mt-5">
                    <div className=" bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                        <a href="https://aqua-brandy-94.tiiny.site/">Resume</a>
                        <Image
                            src={open}
                            alt=""
                            className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                            unoptimized
                        />
                    </div>
                    <div className=" bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                        <a
                            href="https://askyash.vercel.app/ "
                            className="bg-gradient-to-r from-blue-600 via-sky-700 to-indigo-400 inline-block text-transparent bg-clip-text"
                        >
                            AI Assistant
                        </a>
                        <Image
                            src={open}
                            alt=""
                            className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                            unoptimized
                        />
                    </div>
                </div>

                <Section title="Who Am I">
                    <p className="text-justify text-2xl">
                        Hi! 👋 I’m Yash Tiwari, a MERN developer from Noida. I
                        specialize in creating full-stack web applications using
                        MongoDB, Express.js, React, and Node.js. With expertise
                        in building responsive designs and user-friendly
                        interfaces, I transform ideas into scalable,
                        high-performance solutions. Let’s connect!
                    </p>
                </Section>

                <div className="mt-10 bg-[#faf8f7]">
                    <h1 className="font-specialGothicExpandedOne">
                        Connect With Me
                    </h1>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                            <a href="https://www.linkedin.com/in/yash-tiwari20/">
                                LinkedIn
                            </a>
                            <div className="h-7 w-7 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ml-2 flex justify-center items-center">
                                <Image
                                    src={linkedin}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer p-1"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                            <a href="https://github.com/yash700701">Github</a>
                            <div className="h-7 w-7 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ml-2 flex justify-center items-center">
                                <Image
                                    src={github}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer p-1"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex ">
                            <a href="https://www.instagram.com/yash_pandit_8/">
                                Instagram
                            </a>
                            <div className="h-7 w-7 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ml-2 flex justify-center items-center">
                                <Image
                                    src={insta}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer p-1"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                            <a href="https://leetcode.com/u/yash_tiwari700/">
                                Leetcode
                            </a>
                            <div className="h-7 w-7 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ml-2 flex justify-center items-center">
                                <Image
                                    src={leetcode}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer p-1"
                                    unoptimized
                                />
                            </div>
                        </div>
                        <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex ">
                            <a href="https://x.com/yash_700757">Twitter</a>
                            <div className="h-7 w-7 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ml-2 flex justify-center items-center">
                                <Image
                                    src={twitter}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer p-1"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="font-specialGothicExpandedOne">
                        Tech Stack
                    </h1>

                    <div className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden">
                        <div className="flex justify-center items-center mt-2 px-2">
                            <Image
                                src={frontendBg}
                                alt="bg"
                                className=" h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans top-24 left-0 p-2">
                                <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                    ◎ Frontend
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg p-2 gap-2 ">
                            {[
                                "React",
                                "NextJs",
                                "Tailwind",
                                "Html",
                                "Figma",
                            ].map((tech, i) => (
                                <p
                                    key={i}
                                    className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                >
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden">
                        <div className="flex justify-center items-center mt-2 px-2">
                            <Image
                                src={backend}
                                alt="bg"
                                className=" h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans top-24 left-0 p-2">
                                <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                    ◎ Backend
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg p-2 gap-2">
                            {["Express", "NodeJs"].map((tech, i) => (
                                <p
                                    key={i}
                                    className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                                >
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden">
                        <div className="flex justify-center items-center mt-2 px-2">
                            <Image
                                src={db}
                                alt="bg"
                                className=" h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans top-24 left-0 p-2">
                                <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                    ◎ Database
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg p-2 gap-2">
                            {["MongoDB", "PostgresSQL", "Appwrite"].map(
                                (tech, i) => (
                                    <p
                                        key={i}
                                        className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                                    >
                                        {tech}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    <div className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden">
                        <div className="flex justify-center items-center mt-2 px-2">
                            <Image
                                src={devop}
                                alt="bg"
                                className=" h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans top-24 left-0 p-2">
                                <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                    ◎ Devops
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg p-2 gap-2">
                            {["Docker"].map((tech, i) => (
                                <p
                                    key={i}
                                    className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                                >
                                    {tech}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden">
                        <div className="flex justify-center items-center mt-2 px-2">
                            <Image
                                src={frontendBg}
                                alt="bg"
                                className=" h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans top-24 left-0 p-2">
                                <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                    ◎ Programming Languages
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg p-2 gap-2">
                            {["JavaScript", "C++", "C", "Java", "Python"].map(
                                (tech, i) => (
                                    <p
                                        key={i}
                                        className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                                    >
                                        {tech}
                                    </p>
                                )
                            )}
                        </div>
                    </div>

                    <div className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden">
                        <div className="flex justify-center items-center mt-2 px-2">
                            <Image
                                src={frontendBg}
                                alt="bg"
                                className=" h-36 object-cover rounded-sm"
                            />

                            <div className="absolute font-sans top-24 left-0 p-2">
                                <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                    ◎ Tools
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-wrap text-lg p-2 gap-2">
                            {["Git", "Github", "Postman", "Redux Toolkit"].map(
                                (tech, i) => (
                                    <p
                                        key={i}
                                        className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                                    >
                                        {tech}
                                    </p>
                                )
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-10">
                    <h1 className="font-specialGothicExpandedOne">
                        Things I've Made
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="mt-5 text-2xl bg-zinc-100 rounded-2xl shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white">
                            <div className="p-2  ">
                                <Image
                                    src={iconkit}
                                    alt=""
                                    className=" rounded-lg bg-zinc-100 p-2 shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                    unoptimized
                                />
                            </div>
                            <h1 className="mt-2 text-justify px-2 text-lg font-light font-sans">
                                <span className="underline text-sky-500">
                                    IconKit
                                </span>{" "}
                                is a powerful online tool that helps you
                                generate platform-specific app icons like iOS,
                                Android, and Web icons in various sizes and
                                shapes (circle, square, squircle, etc.). It
                                supports customization like background color,
                                padding, badges, and text overlays. Now, IconKit
                                also lets you generate AI-based images as icons
                                using Gemini AI image generation, so you can
                                create icons from text prompts too!
                            </h1>
                            <div className="flex flex-wrap p-2 gap-2 mt-2">
                                <div className=" bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                                    <a href="https://iconkit.vercel.app/">
                                        Link
                                    </a>
                                    <Image
                                        src={open}
                                        alt=""
                                        className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                        unoptimized
                                    />
                                </div>

                                <div className=" bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                                    <a href="https://github.com/yash700701/iconkit">
                                        Github
                                    </a>
                                    <Image
                                        src={open}
                                        alt=""
                                        className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-5 text-2xl bg-zinc-100 rounded-2xl shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white">
                            <div className="p-2">
                                <Image
                                    src={npmLeetcodeCalendar}
                                    alt=""
                                    className=" rounded-lg bg-zinc-100 p-2 shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                    unoptimized
                                />{" "}
                            </div>
                            <h1 className="mt-2 text-justify text-lg font-sans font-light px-2">
                                <span className="underline text-green-700">
                                    LeetCode Calendar
                                </span>{" "}
                                is an open-source React component that
                                visualizes LeetCode activity in a GitHub-style
                                contribution calendar. It supports full
                                customization of block size, spacing, fonts,
                                themes, and layout, making it easy for
                                developers to showcase their coding streaks.
                                Published on npm as @yashx700/leetcodecalendar,
                                it's designed for easy installation and
                                integration into personal websites or
                                dashboards.
                            </h1>
                            <div className="flex flex-wrap gap-2 mt-2 p-2">
                                <div className=" bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                                    <a href="https://www.npmjs.com/package/@yashx700/leetcodecalendar#leetcodecalendar">
                                        Link
                                    </a>
                                    <Image
                                        src={open}
                                        alt=""
                                        className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                        unoptimized
                                    />
                                </div>

                                <div className=" bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex">
                                    <a href="https://github.com/yash700701/leetcodecalendar">
                                        Github
                                    </a>
                                    <Image
                                        src={open}
                                        alt=""
                                        className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 text-2xl">
                            <div className="p-2 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ">
                                <Image
                                    src={mimzy}
                                    alt=""
                                    className="rounded-sm"
                                    unoptimized
                                />
                            </div>
                            <h1 className="mt-2 text-justify text-lg font-poppins">
                                <span className="underline text-amber-600">
                                    Mimzy
                                </span>{" "}
                                is a fun and engaging social media platform
                                where users can post memes, images, or videos
                                and earn points for every post they make. You
                                can like, comment, and interact with any post,
                                search for users, and easily login or logout.
                                Mimzy focuses on reward-based content sharing to
                                make posting and engaging more exciting.
                            </h1>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <a
                                    href="https://mimzy.vercel.app/"
                                    className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg"
                                >
                                    Link
                                </a>
                                <a
                                    href="https://github.com/yash700701/memehub"
                                    className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                        <div className="mt-16 text-2xl">
                            <div className="p-2 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ">
                                <Image
                                    src={report}
                                    alt=""
                                    className="rounded-sm"
                                    unoptimized
                                />
                            </div>
                            <h1 className="mt-2 text-justify text-lg font-poppins">
                                <span className="underline text-blue-600">
                                    The Report Management System
                                </span>{" "}
                                is a web app built with Next.js and MongoDB that
                                helps organizations track daily employee
                                activities. Employees can submit task reports,
                                while admins can view, filter, and manage all
                                submissions through a centralized dashboard for
                                better transparency and productivity.
                            </h1>
                            <div className="flex flex-wrap gap-2 mt-2">
                                <a
                                    href="https://afj-reports.vercel.app/"
                                    className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg"
                                >
                                    Link
                                </a>
                                <a
                                    href="https://github.com/yash700701/nextbyte"
                                    className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg"
                                >
                                    Github
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Section title="Contributions">
                    <GitHubCalendar
                        username="yash700701"
                        theme={{
                            light: [
                                "#ebedf0",
                                "#c6e48b",
                                "#7bc96f",
                                "#239a3b",
                                "#196127",
                            ],
                            dark: [
                                "#ebedf0",
                                "#6c757d",
                                "#495057",
                                "#343a40",
                                "#212529",
                            ],
                        }}
                        colorScheme="dark" // optional
                    />

                </Section>
                <Section title="Leetcode">
                    <div className="text-lg font-poppins">
                        <p>Easy</p>
                        <div style={{ width: "100%" }} className="mt-2">
                            <div
                                style={{
                                    background: "#ebedf0",
                                    height: "30px",
                                    maxWidth: "850px",
                                }}
                                className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                            >
                                <div
                                    style={{
                                        width: `${percentageEasy}%`,
                                        height: "100%",
                                        transition: "width 0.3s ease",
                                    }}
                                    className="bg-zinc-950  rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-zinc-700"
                                />
                            </div>
                            <p
                                style={{
                                    color: "#aaa",
                                    fontSize: "12px",
                                }}
                                className="mt-1"
                            >
                                {eS} / {eQ}
                            </p>
                        </div>
                    </div>
                    <div className="text-lg font-poppins mt-2">
                        <p>Medium</p>
                        <div style={{ width: "100%" }} className="mt-2">
                            <div
                                style={{
                                    background: "#ebedf0",
                                    height: "30px",
                                    maxWidth: "850px",
                                }}
                                className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                            >
                                <div
                                    style={{
                                        width: `${percentageMedium}%`,
                                        height: "100%",
                                        transition: "width 0.3s ease",
                                    }}
                                    className="bg-zinc-950  rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-zinc-700"
                                />
                            </div>
                            <p
                                style={{
                                    color: "#aaa",
                                    fontSize: "12px",
                                }}
                                className="mt-1"
                            >
                                {mS} / {mQ}
                            </p>
                        </div>
                    </div>
                    <div className="text-lg font-poppins mt-2">
                        <p>Hard</p>
                        <div style={{ width: "100%" }} className="mt-2">
                            <div
                                style={{
                                    background: "#ebedf0",
                                    height: "30px",
                                    maxWidth: "850px",
                                }}
                                className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                            >
                                <div
                                    style={{
                                        width: `${percentageHard}%`,
                                        height: "100%",
                                        transition: "width 0.3s ease",
                                    }}
                                    className="bg-zinc-950  rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-zinc-700"
                                />
                            </div>
                            <p
                                style={{
                                    color: "#aaa",
                                    fontSize: "12px",
                                }}
                                className="mt-1"
                            >
                                {hS} / {hQ}
                            </p>
                        </div>
                    </div>
                    

                    <div className="w-full overflow-x-scroll mt-5">
                        <LeetCodeCalendar
                            username="yash_tiwari700"
                            blockSize={12}
                            blockMargin={3}
                            fontSize={14}
                            theme={{
                                background: "transparent",
                                text: "#000000ff",
                                level0: "#ebedf0",
                                level1: "#6c757d",
                                level2: "#495057",
                                level3: "#343a40",
                                level4: "#212529",
                            }}
                            style={{ padding: "0px" }}
                        />
                    </div>
                </Section>

                <Section title="Education">
                    <div className="text-lg font-poppins">
                        <p>
                            Bachelor of Technology in{" "}
                            <span className="text-sky-600">
                                Computer Science
                            </span>{" "}
                            - GPA 8.52
                        </p>
                        <p>JSS Academy of Technical Education 2023 - 27</p>
                        <p>Class XII (CBSE) - 94%</p>
                        <p>Class X (CBSE) - 95%</p>
                    </div>
                </Section>

                <Section title="Work Experience">
                    <div className="text-lg font-poppins">
                        <p>
                            FullStack Developer intern @
                            <a
                                href="https://www.linkedin.com/company/kartavyatech/posts/?feedView=all"
                                className="text-sky-600"
                            >
                                Kartavya Technologies
                            </a>
                        </p>
                        <p>Aug 2025 - Present</p>
                        {/* <a href="https://drive.google.com/file/d/1yC2e_nV5FdCdenWg6GwVKMjoKXIF2MKx/view" className="underline"><p className="text-sky-600">Internship Completion</p></a>
            <a href="https://drive.google.com/file/d/1PNMOx5FjNNmabysvpghFzG3eRsLZTgKC/view" className="underline"><p className="text-sky-600">Letter of Recommendation</p></a> */}
                    </div>
                    <div className="text-lg mt-10 font-poppins">
                        <p>
                            FullStack Developer intern @
                            <a
                                href="https://www.linkedin.com/company/byteedu/posts/?feedView=all"
                                className="text-sky-600"
                            >
                                byteEdu
                            </a>
                        </p>
                        <p>Nov 2024 - Apr 2025</p>
                        <a
                            href="https://drive.google.com/file/d/1yC2e_nV5FdCdenWg6GwVKMjoKXIF2MKx/view"
                            className="underline"
                        >
                            <p className="text-sky-600">
                                Internship Completion
                            </p>
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1PNMOx5FjNNmabysvpghFzG3eRsLZTgKC/view"
                            className="underline"
                        >
                            <p className="text-sky-600">
                                Letter of Recommendation
                            </p>
                        </a>
                    </div>
                </Section>

                <Section title="Drop a Message">
                    <form
                        className="space-y-4 my-5 font-poppins"
                        onSubmit={handleSubmit}
                    >
                        {["name", "email"].map((field) => (
                            <input
                                key={field}
                                type={field === "email" ? "email" : "text"}
                                id={field}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                                required
                                placeholder={`Your ${
                                    field.charAt(0).toUpperCase() +
                                    field.slice(1)
                                }`}
                                className="mt-1 py-1 border-b-[1px] w-full"
                            />
                        ))}

                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Your Message"
                            className="mt-1 py-1 border-b-[1px] w-full"
                        ></textarea>

                        <div className="text-center text-green-400 mt-4">
                            {resultMessage}
                        </div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="mt-1 py-1 bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full"
                        >
                            {isLoading ? "Sending..." : "Send"}
                        </button>
                    </form>
                </Section>
            </div>
        </div>
    );
}

const Section = ({ title, children }) => (
    <div className="mt-10">
        <h1 className="font-specialGothicExpandedOne">{title}</h1>
        <div className="mt-5 text-2xl">{children}</div>
    </div>
);
