import React from "react";
import frontendBg from "../../public/mehdi-mirzaie-kUe-dIOu5FE-unsplash.jpg";
import devop from "../../public/devop.jpg";
import backend from "../../public/florian-krumm-yLDabpoCL3s-unsplash.jpg";
import programming from "../../public/programming.jpg";
import tool from "../../public/tool.jpg";
import db from "../../public/db.jpg";
import ai from "../../public/igor-omilaev-IsYT5rUuVcs-unsplash.jpg";
import Image from "next/image";

const skills = [
    {
        category: "Frontend",
        technologies: ["React", "NextJs", "Tailwind", "Html", "Figma"],
        image: frontendBg,
    },
    {
        category: "Backend",
        technologies: ["Express", "NodeJs"],
        image: backend,
    },
    {
        category: "DevOps",
        technologies: ["Docker"],
        image: devop,
    },
    {
        category: "Database",
        technologies: ["MongoDB", "PostgresSQL", "Appwrite", "Kafka"],
        image: db,
    },
    {
        category: "Programming",
        technologies: ["JavaScript", "C++", "C", "Java", "Python"],
        image: programming,
    },
    {
        category: "Tools",
        technologies: ["Git", "Github", "Postman", "Redux Toolkit", "n8n"],
        image: tool,
    },
    {
        category: "Generative AI",
        technologies: ["LangChain", "VectorDB", "RAG"],
        image: ai,
    },
];

function TechStack() {
    return (
        <div className="mt-10">
            <h1 className="font-specialGothicExpandedOne">Tech Stack</h1>

            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="col-span-3 bg-zinc-100 mt-5 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white  relative overflow-hidden"
                >
                    <div className="flex justify-center items-center mt-2 px-2">
                        <Image
                            src={skill.image}
                            alt="bg"
                            className=" h-36 object-cover rounded-sm"
                        />

                        <div className="absolute font-sans top-24 left-0 p-2">
                            <span className="text-white font-extralight font-specialGothicExpandedOne px-2 text-2xl">
                                ◎ {skill.category}
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-wrap text-lg p-2 gap-2 ">
                        {skill.technologies.map((tech, i) => (
                            <p
                                key={i}
                                className="font-poppins px-4 py-1 bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white"
                            >
                                {tech}
                            </p>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default TechStack;
