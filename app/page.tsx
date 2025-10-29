"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Text */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="max-w-3xl flex flex-col items-center"
      >
        <img
          className="w-[300px] my-10 rounded-3xl shadow-lg object-cover"
          src={"/images/me.jpg"}
          alt="Aminat Adebayo"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight italic">
          Hi, I’m <span className="text-blue-600">Aminat Adebayo</span>
        </h1>
        <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
          A passionate <span className="text-pink-600">Frontend Developer</span>
        </p>
        <h3 className="mt-3 text-lg text-gray-600 font-medium">
          Welcome to My Portfolio Website 🌸
        </h3>
      </motion.div>

      {/* Short Intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.3 }}
        className="mt-10 max-w-2xl text-gray-600 leading-relaxed text-lg"
      >
        <p className="mb-5">
          I'm glad you're here🥰. This is a space where I share my projects,
          experiences, and creative journey in the world of web development.
          Feel free to explore and learn more about my skills, background, and
          the work I do.
        </p>

        <p className="mb-5">
          I specialize in building beautiful, responsive, and user-friendly web
          applications that merge functionality with design. My focus is on
          writing clean, maintainable code and delivering delightful user
          experiences.
        </p>

        <p>
          Whether you’re looking to connect, collaborate, or simply explore my
          work, you’re absolutely in the right place. Let’s build something
          amazing together 🚀.
        </p>
      </motion.div>

      {/* Call-to-Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        className="mt-10 flex flex-wrap justify-center gap-4 mb-20"
      >
        <a
          href="/Projects"
          className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          View My Projects
        </a>
        <a
          href={"/Contact"}
          className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Decorative Footer Note */}
      <footer className="absolute bottom-4 text-gray-400 text-sm text-center w-full">
        © {new Date().getFullYear()} Aminat Adebayo — Crafted with 💙 using
        Next.js & Tailwind CSS
      </footer>
    </section>
  );
};

export default Page;

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const Page = () => {
//   return (
//     <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50">
//       {/* Hero Text */}
//       <motion.div
//         initial={{ opacity: 0, y: -40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2 }}
//         className="max-w-3xl flex flex-col items-center"
//       >
//         <img
//           className="w-[300px] my-10 rounded-4xl shadow-lg object-cover"
//           src={"/images/me.jpg"}
//         ></img>
//         <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight italic">
//           Hi, I’m <span className="text-blue-600">Aminat Adebayo</span>
//         </h1>
//         <p className="mt-4 text-2xl md:text-3xl font-semibold text-gray-700">
//           A passionate <span className="text-pink-600">Frontend Developer</span>
//         </p>
//         <h3 className="mt-3 text-lg text-gray-600 font-medium">
//           Welcome to My Portfolio Website 🌸
//         </h3>
//       </motion.div>

//       {/* Short Intro */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.4, delay: 0.3 }}
//         className="mt-10 max-w-2xl text-gray-600 leading-relaxed text-lg"
//       >
//         <p className="mb-5">
//           I'm glad you're here🥰. This is a space where I share my projects,
//           experiences, and creative journey in the world of web development.
//           Feel free to explore and learn more about my skills, background, and
//           the work I do.
//         </p>

//         <p className="mb-5">
//           I specialize in building beautiful, responsive, and user-friendly web
//           applications that merge functionality with design. My focus is on
//           writing clean, maintainable code and delivering delightful user
//           experiences.
//         </p>

//         <p>
//           Whether you’re looking to connect, collaborate, or simply explore my
//           work, you’re absolutely in the right place. Let’s build something
//           amazing together 🚀.
//         </p>
//       </motion.div>

//       {/* Call-to-Action Buttons */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1.2, delay: 0.6 }}
//         className="mt-10 flex flex-wrap justify-center gap-4 mb-20"
//       >
//         <a
//           href="/Projects"
//           className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
//         >
//           View My Projects
//         </a>
//         <a
//           href={"/Contact"}
//           className="border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
//         >
//           Contact Me
//         </a>
//       </motion.div>

//       {/* Decorative Footer Note */}
//       <footer className="absolute bottom-4 text-gray-400 text-sm  text-center w-full">
//         © {new Date().getFullYear()} Aminat Adebayo — Crafted with 💙 using
//         Next.js & Tailwind CSS
//       </footer>
//     </section>
//   );
// };

// export default Page;
