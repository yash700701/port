import React, { useState } from "react";
import iconkit from "@/app/images/Screenshot 2025-06-30 181011.png";
import mimzy from "@/app/images/Screenshot 2025-06-05 204735.png";
import npmLeetcodeCalendar from "@/app/images/npmLeetcodeCalendar.png";
import report from "@/app/images/Screenshot 2025-06-05 205655.png";
import careerPath from "@/app/images/careerPath.png";
import Image from "next/image";
import open from "@/app/images/share.png";

const projects = [
    {
        name: "CareerPath",
        description:
            "CareerPath is a comprehensive platform designed to help individuals navigate their career journeys. It offers personalized career advice, skill assessments, and resources to help users make informed decisions about their professional paths.",
        link: "https://career-path-gen-ai-exchange.vercel.app/",
        github: "https://github.com/yash700701/career_path_backend",
        image: careerPath,
    },
    {
        name: "IconKit",
        description:
            "IconKit is a powerful online tool that helps you generate platform-specific app icons like iOS, Android, and Web icons in various sizes and shapes (circle, square, squircle, etc.). It supports customization like background color, padding, badges, and text overlays. Now, IconKit also lets you generate AI-based images as icons using Gemini AI image generation, so you can create icons from text prompts too!",
        link: "https://iconkit.vercel.app/",
        github: "https://github.com/yashx700/iconkit",
        image: iconkit,
    },
    {
        name: "LeetCode Calendar",
        description:
            "LeetCode Calendar is an open-source React component that visualizes LeetCode activity in a GitHub-style contribution calendar. It supports full customization of block size, spacing, fonts, themes, and layout, making it easy for developers to showcase their coding streaks. Published on npm as @yashx700/leetcodecalendar, it's designed for easy installation and integration into personal websites or dashboards.",
        link: "https://www.npmjs.com/package/@yashx700/leetcodecalendar#leetcodecalendar",
        github: "https://github.com/yashx700/leetcodecalendar",
        image: npmLeetcodeCalendar,
    },
    {
        name: "Mimzy",
        description:
            "Mimzy is a modern, open-source chat application built with React and Firebase. It features real-time messaging, user authentication, and a responsive design, making it easy for users to connect and communicate. With a focus on simplicity and usability, Mimzy is the perfect solution for anyone looking to create their own chat application.",
        link: "https://mimzy.vercel.app/",
        github: "https://github.com/yashx700/mimzy",
        image: mimzy,
    },
    {
        name: "The Report Management System",
        description:
            "The Report Management System is a web application designed to streamline the process of creating, managing, and sharing reports within an organization. Built with a focus on user-friendliness and efficiency, this system allows users to easily generate reports using customizable templates, track report statuses, and collaborate with team members in real-time. With robust access controls and integration capabilities, the Report Management System ensures that sensitive information is protected while facilitating seamless communication and workflow management.",
        link: "https://report-management-system.vercel.app/",
        github: "https://github.com/yashx700/report-management-system",
        image: report,
    },
];

function Project() {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleDescription = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="mt-16">
            <h1 className="font-specialGothicExpandedOne">Things I've Made</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="mt-5 text-2xl bg-zinc-100 rounded-2xl shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white relative"
                    >
                        <div className="p-2">
                            <Image
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg bg-zinc-100 p-2 shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                unoptimized
                            />
                        </div>

                        {/* Header with toggle button */}
                        <div className="flex justify-between items-center px-2">
                            <h1 className="text-xl font-light font-sans">
                                <span className="underline font-poppins text-sky-500">
                                    {project.name}
                                </span>
                            </h1>
                            <button
                                onClick={() => toggleDescription(index)}
                                className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none"
                            >
                                {openIndex === index ? "Hide" : "Show"}
                            </button>
                        </div>

                        {/* Animated Description */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ease-in-out px-2 ${
                                openIndex === index
                                    ? "max-h-96 mt-2"
                                    : "max-h-0"
                            }`}
                        >
                            <p className="text-justify text-base font-light font-sans">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap p-2 gap-2 mt-2">
                            <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md px-4 py-2 font-poppins text-lg items-center flex">
                                <a href={project.link}>Link</a>
                                <Image
                                    src={open}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                    unoptimized
                                />
                            </div>

                            <div className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md px-4 py-2 font-poppins text-lg items-center flex">
                                <a href={project.github}>Github</a>
                                <Image
                                    src={open}
                                    alt=""
                                    className="w-6 h-6 cursor-pointer ml-2 p-1 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                                    unoptimized
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
