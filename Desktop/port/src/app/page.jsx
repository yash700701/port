"use client";

import Image from "next/image";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";

import open from "@/app/images/share.png";
import yash from "@/app/images/WhatsApp Image 2025-06-30 at 17.59.51_dba963c1.jpg";

import GitHubCalendar from "react-github-calendar";
import { AuroraText } from "@/components/magicui/aurora-text";

import { LeetCodeCalendar } from "@yashx700/leetcodecalendar";
import { ins } from "motion/react-client";

// components
import Head from "@/components/header";
import Projects from "@/components/project";
import TechStack from "@/components/techStack";
import Connect from "@/components/connect";

export default function Home() {
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

    const leetcode = [
        {
            s: eS,
            q: eQ,
            p: percentageEasy,
        },
        {
            s: mS,
            q: mQ,
            p: percentageMedium,
        },
        {
            s: hS,
            q: hQ,
            p: percentageHard,
        },
    ];

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
                <Head />
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

                <Connect />
                <TechStack />
                <Projects />

                <Section title="Contributions" className="mt-10">
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

                <Section title="Leetcode" className="mt-10">
                    <div className="text-lg font-poppins">
                        <p>Easy || Medium || Hard</p>
                        {leetcode.map((item, index) => (
                            <div
                                key={index}
                                style={{ width: "100%" }}
                                className="mt-2"
                            >
                                <div
                                    style={{
                                        background: "#ebedf0",
                                        height: "40px",
                                        maxWidth: "850px",
                                    }}
                                    className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white "
                                >
                                    <div
                                        style={{
                                            width: `${item.p}%`,
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
                                    {item.s} / {item.q}
                                </p>
                            </div>
                        ))}
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
                            className="mt-1 py-1 bg-zinc-100 rounded-lg hadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white w-full"
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
