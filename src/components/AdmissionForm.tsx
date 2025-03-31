import React from "react";
import MainForm from "./MainForm";

const AdmissionForm = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div 
      ref={ref} 
      className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-white p-2 md:p-8"
    >
      {/* Left Side - Image with Overlay */}
      <div className="relative w-full lg:w-1/2 h-[500px] md:h-[700px] mb-6 md:mb-0 md:mr-4">
        <img
          src="./images/campus.jpg"
          alt="Background"
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
      <span className="text-yellow-400">CampusKhojo</span> – Your Dream College Awaits!
    </h1>
    <p className="text-lg md:text-xl text-center mb-6 font-medium">
      Get admission in <span className="text-yellow-400">top-ranked colleges</span> for 
      Engineering, Medical, MBA, Arts & more! 
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