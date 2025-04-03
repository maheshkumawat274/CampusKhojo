import React from "react";

function About() {
  return (
    <section className="container mx-auto py-12 flex flex-col md:flex-row items-center">
      {/* Left Side Content */}
      <div className="md:w-1/2 md:text-left px-2 sm:px-4">
        <h2 className="text-3xl sm:text-3xl md:text-4xl lg:text-7xl font-bold text-gray-900">Welcome to Campus Khojo</h2>
        <p className="mt-4 text-gray-700 text-lg">
          Campus Khojo is a platform that provides real experiences of colleges and universities
          through video tours. We help students and parents get authentic insights, making it easier 
          to choose the right educational institution.
        </p>
        <p className="mt-2 text-gray-700 text-lg">
          If you want to explore your dream college without visiting in person, Campus Khojo is the 
          perfect solution for you! 🎓✨
        </p>
      </div>

      {/* Right Side Image */}
      <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src="./images/about.jpg" // Replace with your actual image URL
          alt="Campus Tour"
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}

export default About;
