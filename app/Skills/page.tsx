import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex justify-center items-center py-12 px-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          My Skills
        </h1>

        <p className="text-gray-700 leading-relaxed mb-8 text-justify">
          Hello! I’m{" "}
          <span className="font-semibold text-blue-600">Aminat Adebayo</span>, a
          Frontend Developer with a strong passion for building modern,
          interactive, and accessible web applications. I enjoy turning complex
          problems into elegant, user-centered solutions. My journey into tech
          started with a deep curiosity about how websites work. Over time, I’ve
          grown into someone who loves coding intuitive interfaces using tools
          like <span className="font-medium">React</span>,{" "}
          <span className="font-medium">Next.js</span>, and{" "}
          <span className="font-medium">Tailwind CSS</span>. I’m also passionate
          about learning and sharing knowledge, collaborating on creative
          projects, and continually improving my craft.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-500 inline-block">
          Technical Skills
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-8 leading-relaxed">
          <li>
            <strong>Frontend:</strong> HTML5, CSS3, JavaScript (ES6+), React,
            Next.js, TypeScript, Tailwind CSS
          </li>
          <li>
            <strong>Backend:</strong> Node.js, Express.js
          </li>
          <li>
            <strong>Tools & Others:</strong> Git, GitHub, VS Code, Figma,
            Postman, Firebase
          </li>
          <li>
            <strong>Soft Skills:</strong> Communication, teamwork, time
            management, adaptability, problem-solving
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mb-3 border-b-2 border-blue-500 inline-block">
          Personal Interests
        </h2>
        <p className="text-gray-700 leading-relaxed">
          When I’m not coding, you’ll probably find me reading, exploring UI
          design inspirations, or learning something new about technology and
          creativity.
        </p>
      </div>
    </section>
  );
};

export default Page;
