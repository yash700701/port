import React from "react";
import github from "@/app/images/github.png";
import insta from "@/app/images/instagram.png";
import leetcode from "@/app/images/icons8-leetcode-96.png";
import linkedin from "@/app/images/linkedin.png";
import twitter from "@/app/images/twitter.png";
import Image from "next/image";

const connect = [
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/yash-tiwari20/",
        img: linkedin,
    },
    {
        name: "Github",
        link: "https://github.com/yash700701",
        img: github,
    },
    {
        name: "Instagram",
        link: "https://www.instagram.com/yash_pandit_8/",
        img: insta,
    },
    {
        name: "Leetcode",
        link: "https://leetcode.com/u/yash_tiwari700/",
        img: leetcode,
    },
    {
        name: "Twitter",
        link: "https://x.com/yash_700757",
        img: twitter,
    },
];

function Connect() {
    return (
        <div className="mt-10">
            <h1 className="font-specialGothicExpandedOne">Connect With Me</h1>
            <div className="mt-5 flex flex-wrap gap-3">
                {connect.map((item, index) => (
                    <div
                        key={index}
                        className="bg-zinc-100 rounded-lg shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white px-4 py-2 font-poppins text-lg items-center flex"
                    >
                        <a href={item.link}>{item.name}</a>
                        <div className="h-7 w-7 bg-zinc-100 rounded-sm shadow-zinc-400 shadow-md inset-shadow-2xs inset-shadow-white ml-2 flex justify-center items-center">
                            <Image
                                src={item.img}
                                alt=""
                                className="w-6 h-6 cursor-pointer p-1"
                                unoptimized
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Connect;
