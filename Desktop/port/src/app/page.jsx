"use client";

import Image from "next/image";
import axios from "axios";
import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import iconkit from "@/app/images/Screenshot 2025-06-30 181011.png";
import mimzy from "@/app/images/Screenshot 2025-06-05 204735.png";
import report from "@/app/images/Screenshot 2025-06-05 205655.png";
import github from "@/app/images/icons8-github-128.png";
import insta from "@/app/images/icons8-instagram-logo-100.png";
import leetcode from "@/app/images/icons8-leetcode-96.png";
import linkedin from "@/app/images/icons8-linkedin-100.png";
import open from "@/app/images/icons8-open-60.png";
import twitter from "@/app/images/icons8-twitter-100.png";
import yash from "@/app/images/WhatsApp Image 2025-06-30 at 17.59.51_dba963c1.jpg";
import GitHubCalendar from 'react-github-calendar';


export default function Home() {
  const [viewCount, setViewCount] = useState();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [resultMessage, setResultMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const eS = 116;
  const eQ = 885;
  const mS = 75;
  const mQ = 1883;
  const hS = 0;
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
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      setResultMessage(response.status === 200 ? "Message sent successfully!" : "Failed to send message. Please try again.");
    } catch (error) {
      setResultMessage("Something went wrong!");
    } finally {
      setIsLoading(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setResultMessage(""), 3000);
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* <Image src={bg} alt="bg" className="fixed top-0 left-0 w-full h-screen object-cover" /> */}

      <div className="overflow-y-scroll bg-zinc-50 relative z-10 text-4xl font-grapeNuts font-bold text-zinc-900 p-5">
        <div className="text-right w-full h-10 text-lg border-b-[2px]">
          {viewCount && <div>visitors: {viewCount}</div>}
        </div>

        <div className="mt-10 grid sm:grid-cols-10">
          <div className="col-span-8 mt-9 grid sm:grid-cols-10 sm:mt-0">
           <Image
            src={yash}
            alt="bg"
            className="w-40 h-40 mb-5 col-span-3 object-cover border-[1px] rounded-lg border-white animate-glow"
          />

            <div className="col-span-7">
              <h1>Hi there, I am <span className="text-7xl bg-gradient-to-r from-zinc-950 via-zinc-700 font-specialGothicExpandedOne to-zinc-950 inline-block text-transparent bg-clip-text">Yash Tiwari</span></h1>
              <h1 className="h-28">
                I am into
                <span className="font-specialGothicExpandedOne">
                  <Typewriter words={[' Web Development', ' Design', ' Programming']} loop={false} cursor cursorStyle=" !" typeSpeed={100} deleteSpeed={50} />
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 py-1 font-poppins text-lg flex">
            <a href="https://maroon-rycca-31.tiiny.site/">Resume</a>
            <Image src={open} alt="" className="w-6 h-6 ml-2 bg-black" unoptimized />
          </div>

          <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3  py-1 font-poppins text-lg flex">
            <a href="https://askyash.vercel.app/ " className="bg-gradient-to-r from-blue-600 via-sky-700 to-indigo-400 inline-block text-transparent bg-clip-text">AI assistant</a>
            <Image src={open} alt="" className="w-6 h-6 ml-2 bg-black" unoptimized />
          </div>
        </div>

        <Section title="Who Am I">
          <p className="text-justify font-poppins text-lg">Hi! 👋 I’m Yash Tiwari, a MERN developer from Noida. I specialize in creating full-stack web applications using MongoDB, Express.js, React, and Node.js. With expertise in building responsive designs and user-friendly interfaces, I transform ideas into scalable, high-performance solutions. Let’s connect!</p>
        </Section>

        <div className="mt-10">
          <h1 className="font-specialGothicExpandedOne">Connect With Me</h1>
          <div className="mt-5 flex flex-wrap gap-3">
            <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center px-3 py-1 font-poppins text-lg flex ">
                <a href="https://www.linkedin.com/in/yash-tiwari20/" >
                LinkedIn
                </a>
                <Image
                  src={linkedin}
                  alt=""
                  className="w-6 h-6 ml-2 bg-black"
                  unoptimized
                />
            </div>
            <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center px-3 py-1 font-poppins text-lg flex ">
                <a href="https://github.com/yash700701" >
                Github
                </a>
                <Image
                  src={github}
                  alt=""
                  className="w-6 h-6 ml-2 bg-black"
                  unoptimized
                />
            </div>
            <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center px-3 py-1 font-poppins text-lg flex ">
                <a href="https://www.instagram.com/yash_pandit_8/" >
                Instagram
                </a>
                <Image
                  src={insta}
                  alt=""
                  className="w-6 h-6 ml-2 bg-black"
                  unoptimized
                />
            </div>
            <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center px-3 py-1 font-poppins text-lg flex ">
                <a href="https://leetcode.com/u/yash_tiwari700/" >
                Leetcode
                </a>
                <Image
                  src={leetcode}
                  alt=""
                  className="w-6 h-6 ml-2 bg-black"
                  unoptimized
                />
            </div>
            <div className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] items-center px-3 py-1 font-poppins text-lg flex ">
                <a href="https://x.com/yash_700757" >
                Twitter
                </a>
                <Image
                  src={twitter}
                  alt=""
                  className="w-6 h-6 ml-2 bg-black"
                  unoptimized
                />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h1 className="font-specialGothicExpandedOne">Tech Stack</h1>
          <h1 className="font-specialGothicExpandedOne mt-5 text-2xl border-b-[1px]">Frontend</h1>
          <div className="flex flex-wrap text-lg mt-5 gap-2" >
            {["React", "NextJs", "Tailwind", "Html", "Figma"].map((tech, i) => (
              <p key={i} className="font-poppins px-3 border-[2px] rounded-lg shadow-zinc-300 bg-white shadow-lg underline">{tech}</p>
            ))}
          </div>
          <h1 className="font-specialGothicExpandedOne mt-5 text-2xl border-b-[1px]">Backend</h1>
          <div className="flex flex-wrap text-lg mt-5 gap-2" >
            {["Express", "NodeJs"].map((tech, i) => (
              <p key={i} className="font-poppins px-3 border-[2px] rounded-lg shadow-zinc-300 bg-white shadow-lg underline">{tech}</p>
            ))}
          </div>
          <h1 className="font-specialGothicExpandedOne mt-5 text-2xl border-b-[1px]">Database</h1>
          <div className="flex flex-wrap text-lg mt-5 gap-2" >
            {["MongoDB", "PostgresSQL", "Appwrite"].map((tech, i) => (
              <p key={i} className="font-poppins px-3 border-[2px] rounded-lg shadow-zinc-300 bg-white shadow-lg underline">{tech}</p>
            ))}
          </div>
          <h1 className="font-specialGothicExpandedOne mt-5 text-2xl border-b-[1px]">Devops</h1>
          <div className="flex flex-wrap text-lg mt-5 gap-2" >
            {["Docker"].map((tech, i) => (
              <p key={i} className="font-poppins px-3 border-[2px] rounded-lg shadow-zinc-300 bg-white shadow-lg underline">{tech}</p>
            ))}
          </div>

          <h1 className="font-specialGothicExpandedOne mt-5 text-2xl border-b-[1px]">Programming Language</h1>
          <div className="flex flex-wrap text-lg mt-5 gap-2" >
            {[ "JavaScript", "C++", "C", "Java", "Python"].map((tech, i) => (
              <p key={i} className="font-poppins px-3 border-[2px] rounded-lg shadow-zinc-300 bg-white shadow-lg underline">{tech}</p>
            ))}
          </div>

          <h1 className="font-specialGothicExpandedOne mt-5 text-2xl border-b-[1px]">Tools</h1>
          <div className="flex flex-wrap text-lg mt-5 gap-2" >
            {["Git", "Github", "Postman", "Redux Toolkit",].map((tech, i) => (
              <p key={i} className="font-poppins px-3 border-[2px] rounded-lg shadow-zinc-300 bg-white shadow-lg underline">{tech}</p>
            ))}
         </div>
        </div>

        <div className="mt-10">
          <h1 className="font-specialGothicExpandedOne">Things I've Made</h1>
          <div className="mt-5 text-2xl">
          <Image
            src={iconkit}
            alt=""
            className="border-[1px] border-black"
            unoptimized
          />
          <h1 className="mt-2 text-justify text-lg font-poppins"><span className="underline text-sky-500">IconKit</span> is a powerful online tool that helps you generate platform-specific app icons like iOS, Android, and Web icons in various sizes and shapes (circle, square, squircle, etc.). It supports customization like background color, padding, badges, and text overlays.
          Now, IconKit also lets you generate AI-based images as icons using Gemini AI image generation, so you can create icons from text prompts too!</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="https://iconkit.vercel.app/" className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg">Link</a>
            <a href="https://github.com/yash700701/iconkit" className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg">Github</a>
          </div>
          </div>
          <div className="mt-16 text-2xl">
          <Image
            src={mimzy}
            alt=""
            className="border-[1px] border-black"
            unoptimized
          />
          <h1 className="mt-2 text-justify text-lg font-poppins"><span className="underline text-amber-600">Mimzy</span> is a fun and engaging social media platform where users can post memes, images, or videos and earn points for every post they make.
          You can like, comment, and interact with any post, search for users, and easily login or logout. Mimzy focuses on reward-based content sharing to make posting and engaging more exciting.</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="https://mimzy.vercel.app/" className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg">Link</a>
            <a href="https://github.com/yash700701/memehub" className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg">Github</a>
          </div>
          </div>
          <div className="mt-16 text-2xl">
          <Image
            src={report}
            alt=""
            className="border-[1px] border-black"
            unoptimized
          />
          <h1 className="mt-2 text-justify text-lg font-poppins"><span className="underline text-blue-600">The Report Management System</span> is a web app built with Next.js and MongoDB that helps organizations track daily employee activities. Employees can submit task reports, while admins can view, filter, and manage all submissions through a centralized dashboard for better transparency and productivity.</h1>
          <div className="flex flex-wrap gap-2 mt-2">
            <a href="https://afj-reports.vercel.app/" className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg">Link</a>
            <a href="https://github.com/yash700701/nextbyte" className="bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-3 font-poppins text-lg">Github</a>
          </div>
          </div>
        </div>

        <Section title="Contributions">
           <GitHubCalendar
            username="yash700701"
            theme={{
              light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'],
              dark: ['#ebedf0', '#6c757d', '#495057', '#343a40', '#212529'],
            }}
            colorScheme="dark" // optional
          />
        </Section>

        <Section title="Leetcode">
         <div className="text-lg font-poppins">
            <p>Easy</p>
            <div style={{ width: '100%' }} className="mt-2">
              <div style={{
                background: '#ebedf0',
                height: '10px',
                maxWidth: '850px'
             
              }}>
                <div style={{
                  width: `${percentageEasy}%`,
                  background: '#000000',
                  height: '100%',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              <p style={{ margin: 0, color: '#aaa', fontSize: '12px' }}>{eS} / {eQ}</p>
            </div>
         </div>
         <div className="text-lg font-poppins">
            <p>Medium</p>
            <div style={{ width: '100%' }} className="mt-2">
              <div style={{
                background: '#ebedf0',
                height: '10px',
                maxWidth: '850px'
             
              }}>
                <div style={{
                  width: `${percentageMedium}%`,
                  background: '#000000',
                  height: '100%',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              <p style={{ margin: 0, color: '#aaa', fontSize: '12px' }}>{mS} / {mQ}</p>
            </div>
         </div>
         <div className="text-lg font-poppins">
            <p>Hard</p>
            <div style={{ width: '100%' }} className="mt-2">
              <div style={{
                background: '#ebedf0',
                height: '10px',
                maxWidth: '850px'
             
              }}>
                <div style={{
                  width: `${percentageHard}%`,
                  background: '#000000',
                  height: '100%',
                  transition: 'width 0.3s ease'
                }} />
              </div>
              <p style={{ margin: 0, color: '#aaa', fontSize: '12px' }}>{hS} / {hQ}</p>
            </div>
         </div>
        </Section>

        <Section title="Education">
         <div className="text-lg font-poppins">
            <p>Bachelor of Technology in <span className="text-sky-600">Computer Science</span> - GPA 8.52</p>
            <p>JSS Academy of Technical Education 2023 - 27</p>
            <p>Class XII (CBSE) - 94%</p>
            <p>Class X (CBSE) - 95%</p>
         </div>
        </Section>

        <Section title="Work Experience">
          <div className="text-lg font-poppins">
            <p>FullStack Developer intern @<a href="https://www.linkedin.com/company/byteedu/posts/?feedView=all" className="text-sky-600">byteEdu</a></p>
            <p>Nov 2024 - Apr 2025</p>
            <a href="https://drive.google.com/file/d/1yC2e_nV5FdCdenWg6GwVKMjoKXIF2MKx/view" className="underline"><p className="text-sky-600">Internship Completion</p></a>
            <a href="https://drive.google.com/file/d/1PNMOx5FjNNmabysvpghFzG3eRsLZTgKC/view" className="underline"><p className="text-sky-600">Letter of Recommendation</p></a>
          </div>
        </Section>

        <Section title="Drop a Message">
          <form className="space-y-4 my-5 font-poppins" onSubmit={handleSubmit}>
            {["name", "email"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
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

            <div className="text-center text-green-400 mt-4">{resultMessage}</div>
            <button type="submit" disabled={isLoading} className="mt-1 py-1 bg-white border border-gray-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-full">
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












//  <div className="text-right w-full h-10 text-lg">{viewCount && ( <div>visitors: {viewCount}</div> ) }</div>

//     <div className="mt-10 grid sm:grid-cols-10 ">
//        {/* <div className=" col-span-2 flex justify-center mt-5">
//          <Image
//         src={smile}
//         alt=""
//         className="w-20 h-20 rounded-full shadow-2xl shadow-white"
//         unoptimized
//       />
//        </div> */}
//        <div className="col-span-8 mt-9 sm:mt-0">
//         <h1 className="">Hi there, i am <span className="font-specialGothicExpandedOne text-6xl text-emerald-400">YASH TIWARI</span></h1>
//         <h1 className=" h-28">i am into  
//           <span className="font-specialGothicExpandedOne">
//             <Typewriter
//               words={[' Web Development', ' Design', ' Programming']}
//               loop={false}
//               cursor
//               cursorStyle=" !"
//               typeSpeed={100}
//               deleteSpeed={50}
//             />
//           </span>
//         </h1>
//        </div>
//     </div>

//     <div className="border-[1px] px-3 w-32 py-1 font-poppins text-lg flex ">
//       <a href="https://drive.google.com/file/d/15TkSm0NkpDLXWrdg1hOLQUzOP4LIu1Yi/view?usp=sharing" >
//       Resume
//       </a>
//       <Image
//         src={open}
//         alt=""
//         className="w-6 h-6 ml-2"
//         unoptimized
//       />
//     </div>
  
//     <div className="mt-10">
//       <h1 className="font-specialGothicExpandedOne">Who Am I</h1>
//       <h1 className="mt-5">Hi! 👋 I’m Yash Tiwari, a MERN developer from Noida. I specialize in creating full-stack web applications using MongoDB, Express.js, React, and Node.js. With expertise in building responsive designs and user-friendly interfaces, I transform ideas into scalable, high-performance solutions. Let’s connect!</h1>
//     </div>
    // <div className="mt-10">
    //   <h1 className="font-specialGothicExpandedOne">Connect With Me</h1>
    //   <div className="mt-5 flex flex-wrap gap-2">
    //      <div className="border-[1px] items-center px-3 py-1 font-poppins text-lg flex ">
    //         <a href="" >
    //         LinkedIn
    //         </a>
    //         <Image
    //           src={linkedin}
    //           alt=""
    //           className="w-6 h-6 ml-2"
    //           unoptimized
    //         />
    //      </div>
    //      <div className="border-[1px] items-center px-3 py-1 font-poppins text-lg flex ">
    //         <a href="" >
    //         Github
    //         </a>
    //         <Image
    //           src={github}
    //           alt=""
    //           className="w-6 h-6 ml-2"
    //           unoptimized
    //         />
    //      </div>
    //      <div className="border-[1px] items-center px-3 py-1 font-poppins text-lg flex ">
    //         <a href="" >
    //         Instagram
    //         </a>
    //         <Image
    //           src={insta}
    //           alt=""
    //           className="w-6 h-6 ml-2"
    //           unoptimized
    //         />
    //      </div>
    //      <div className="border-[1px] items-center px-3 py-1 font-poppins text-lg flex ">
    //         <a href="" >
    //         Leetcode
    //         </a>
    //         <Image
    //           src={leetcode}
    //           alt=""
    //           className="w-6 h-6 ml-2"
    //           unoptimized
    //         />
    //      </div>
    //      <div className="border-[1px] items-center px-3 py-1 font-poppins text-lg flex ">
    //         <a href="" >
    //         Twitter
    //         </a>
    //         <Image
    //           src={twitter}
    //           alt=""
    //           className="w-6 h-6 ml-2"
    //           unoptimized
    //         />
    //      </div>
    //   </div>
    // </div>
//     <div className="mt-10">
//       <h1 className="font-specialGothicExpandedOne">Tech Stack</h1>
//       <div className="mt-5 flex flex-wrap text-2xl gap-2">
//         <p className="font-poppins underline text-blue-400">React</p>
//         <p className="font-poppins underline text-green-400">MongoDB</p>
//         <p className="font-poppins underline text-sky-600">PostgresSQL</p>
//         <p className="font-poppins underline text-zinc-600">Express</p>
//         <p className="font-poppins underline text-green-500">NodeJs</p>
//         <p className="font-poppins underline text-zinc-600">NextJs</p>
//         <p className="font-poppins underline text-yellow-300">JavaScript</p>
//         <p className="font-poppins underline text-sky-400">Tailwind</p>
//         <p className="font-poppins underline text-orange-400">Html</p>
//         <p className="font-poppins underline text-blue-900">C++</p>
//         <p className="font-poppins underline text-orange-400">Figma</p>
//         <p className="font-poppins underline text-red-500">Git</p>
//         <p className="font-poppins underline text-zinc-500">Github</p>
//         <p className="font-poppins underline text-blue-900">C</p>
//         <p className="font-poppins underline text-orange-400">Postman</p>
//         <p className="font-poppins underline text-purple-600">Redux Toolkit</p>
//         <p className="font-poppins underline text-orange-300">Java</p>
//         <p className="font-poppins underline text-yellow-400">Python</p>
//       </div>
//     </div>
    // <div className="mt-10">
    //   <h1 className="font-specialGothicExpandedOne">Things I've Made</h1>
    //   <div className="mt-5 text-2xl">
    //    <Image
    //      src={iconkit}
    //      alt=""
    //      className=""
    //      unoptimized
    //    />
    //    <h1 className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veritatis ratione deleniti, illo quaerat nemo ?</h1>
    //    <div className="flex flex-wrap gap-2 mt-2">
    //     <a href="" className="border-[1px] px-3 font-poppins text-lg">Link</a>
    //     <a href="" className="border-[1px] px-3 font-poppins text-lg">Github</a>
    //    </div>
    //   </div>
    //   <div className="mt-16 text-2xl">
    //    <Image
    //      src={mimzy}
    //      alt=""
    //      className=""
    //      unoptimized
    //    />
    //    <h1 className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veritatis ratione deleniti, illo quaerat nemo </h1>
    //    <div className="flex flex-wrap gap-2 mt-2">
    //     <a href="" className="border-[1px] px-3 font-poppins text-lg">Link</a>
    //     <a href="" className="border-[1px] px-3 font-poppins text-lg">Github</a>
    //    </div>
    //   </div>
    //   <div className="mt-16 text-2xl">
    //    <Image
    //      src={report}
    //      alt=""
    //      className=""
    //      unoptimized
    //    />
    //    <h1 className="mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto veritatis ratione deleniti, illo quaerat nemo </h1>
    //    <div className="flex flex-wrap gap-2 mt-2">
    //     <a href="" className="border-[1px] px-3 font-poppins text-lg">Link</a>
    //     <a href="" className="border-[1px] px-3 font-poppins text-lg">Github</a>
    //    </div>
    //   </div>
    // </div>

//     <div className="mt-10">
//       <h1 className="font-specialGothicExpandedOne">Education</h1>
//       <h1 className="mt-5">Bachelor of Technology in <span className="text-cyan-400">Computer Science</span> - gpa 8.52 </h1>
//       <h1 className="mt-2 text-2xl">JSS Academy of Technical Education 2023 - 27 </h1>
//       <h1 className="mt-5">Class XII (CBSE) - 94%</h1>
//       <h1 className="mt-2">Class X (CBSE) - 95%</h1>
//     </div>

//     <div className="mt-10">
//       <h1 className="font-specialGothicExpandedOne">Work Experience</h1>
//       <h1 className="mt-5">FullStack Developer intern @<span className="text-sky-600">byteEdu</span></h1>
//       <h1 className="mt-2 text-2xl">Nov 2024 - Apr 2025 </h1>
//       <a href="" className="mt-5 underline"><p>Internship Completion</p></a>
//       <a href="" className="mt-5 underline"><p>Letter of Recommendation</p></a>
//     </div>

//     <div className="mt-10">
//       <h1 className="font-specialGothicExpandedOne">Drop a Message</h1>
//        <form className="space-y-4 my-5" onSubmit={handleSubmit}>
//           {/* Name Field */}
//           <div>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               placeholder="Your Name"
//               className="mt-1 py-1 border-b-[1px] w-full "
//             />
//           </div>

//           {/* Email Field */}
//           <div>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               placeholder="Your Email"
//               className="mt-1 py-1 border-b-[1px] w-full "
//             />
//           </div>

//           {/* Message Field */}
//           <div>
//             <textarea
//               id="message"
//               name="message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               rows="4"
//               placeholder="Your Message"
//              className="mt-1 py-1 border-b-[1px] w-full "
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center text-green-400 mt-4">{resultMessage}</div>
//           <button
//             type="submit"
//             disabled={isLoading}
//            className="mt-1 py-1 border-[1px] w-full "
//           >
//             {isLoading ? "Sending..." : "Send"}
//           </button>

//           {/* Result Message */}
//         </form>
//     </div>