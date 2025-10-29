import React from "react";

const Page = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 py-16 px-6"
    >
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-2xl p-10 md:p-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800">
          Get in Touch ✨
        </h2>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          Feel free to reach out with any questions, collaborations, or project
          opportunities. I'm always open to connecting and bringing ideas to
          life!
        </p>

        <form className="grid grid-cols-1 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="text-gray-700 font-semibold mb-2 text-sm"
            >
              Full Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your full name"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-gray-700 font-semibold mb-2 text-sm"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="example@email.com"
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-gray-700 font-semibold mb-2 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              placeholder="Write your message here..."
              className="p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none transition resize-none"
            ></textarea>
          </div>

          {/* Button */}
          <div className="text-center mt-6">
            <button
              type="submit"
              className="bg-linear-to-r from-blue-500 to-indigo-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
            >
              Send Message 🚀
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Page;
