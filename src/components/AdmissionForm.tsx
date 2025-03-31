import React from "react";
import MainForm from "./MainForm";

const AdmissionForm = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div 
      ref={ref} 
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gray-100 p-2 md:p-8"
    >
      {/* Left Side - Image with Overlay */}
      <div className="relative w-full lg:w-1/2 h-[500px] md:h-[700px] mb-6 md:mb-0 md:mr-4">
        <img
          src="./images/campus.jpg"
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-3">Welcome to Our Platform</h1>
          <p className="text-md md:text-lg text-center">
          Enroll in our prestigious programs and take the next step towards a bright future. 
          Explore a wide range of courses and secure your seat today!
        
          </p>
        </div>
      </div>
      
      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 p-0 md:p-8 rounded-lg shadow-lg mx-4">
        <h1 className="text-xl md:text-2xl font-bold text-gray-700 mb-4 text-center">Apply here</h1>
        <MainForm/>
      </div>
    </div>
  );
});

export default AdmissionForm;