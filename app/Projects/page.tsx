import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6 flex justify-center">
      <div className="max-w-5xl w-full">
        {/* Page Header */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          My Projects
        </h1>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
          Here are some of the projects I've worked on recently. Each one
          reflects my passion for learning, problem-solving, and creativity in
          web development.
        </p>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Project 1 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              TasteSphere – Restaurant Website
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              A responsive restaurant web application built with React, Next.js,
              and Tailwind CSS. It features a dynamic menu, online reservation
              system, and an elegant layout designed to enhance user experience.
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Key Features:</strong> Responsive design, menu filtering,
              smooth animations, reservation form
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Tech Stack:</strong> Next.js, Tailwind CSS, React Hooks
            </p>
          </div>

          {/* Project 2 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              TravelEase – Travel Agency Landing Page
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              A clean and modern landing page for a fictional travel agency. It
              showcases beautiful destinations, travel packages, and contact
              sections that invite users to plan their next trip.
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Key Features:</strong> Smooth scrolling, interactive
              destination cards, responsive grid layout
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Tech Stack:</strong> Next.js, Bootstrap, Framer Motion
            </p>
          </div>

          {/* Project 3 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Form Page
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Created a fully functional HTML contact form with input validation
              and styling to collect user feedback.
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Tech Stack:</strong> HTML, CSS, JavaScript
            </p>
          </div>

          {/* Project 4 */}
          <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              TaskMate – Todo App with Redux
            </h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              A simple yet powerful task management application that allows
              users to add, edit, and remove tasks efficiently. Built with Redux
              Toolkit for state management and Next.js for a smooth experience.
            </p>
            <p className="text-gray-600 text-sm mb-2">
              <strong>Key Features:</strong> CRUD operations, Redux global
              state, persistent data storage
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Tech Stack:</strong> Next.js, Redux Toolkit, CSS Modules
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
