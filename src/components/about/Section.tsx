import React, { useState } from "react";
import { motion } from "framer-motion";

interface University {
  name: string;
  description: string;
  videoUrl: string;
}

const universities: University[] = [
  {
    name: "K.R. Mangalam University",
    description: "Located in Gurugram, Haryana, K.R. Mangalam University offers multidisciplinary programs with a focus on innovation and intellectual discovery.",
    videoUrl: "https://www.youtube.com/embed/VMA6IGZMPkQ?si=NuMs5XhOEPtaUb48",
  },
  {
    name: "Roorkee Institute of Technology (RIT), Roorkee",
    description: "RIT Roorkee is recognized for its engineering, management, and agricultural programs, holding a NAAC A++ rating.",
    videoUrl: "https://www.youtube.com/embed/Vb8ooXBjgY4?si=5q34fgQudbNoQUBX",
  },
  {
    name: "GN Group of Institutes",
    description: "Based in Greater Noida, GN Group of Institutes provides quality education across multiple disciplines with a vibrant campus life.",
    videoUrl: "https://www.youtube.com/embed/ZZZZZZ",
  },
  {
    name: "Tula's Institute, Dehradun",
    description: "Established in 2006, Tula's Institute offers engineering and management courses and is among the top private engineering colleges in North India.",
    videoUrl: "https://www.youtube.com/embed/jKItoWrAD-g?si=vZVIfjbHm8RH4W8h",
  },
  {
    name: "IILM University, Gurugram",
    description: "IILM University offers a PGDM program designed to balance theoretical knowledge and practical application for future business leaders.",
    videoUrl: "https://www.youtube.com/embed/db6bG8LJG74?si=awCwXOY6WnyBsbm1",
  },
  {
    name: "Quantum University, Roorkee",
    description: "Quantum University emphasizes interdisciplinary learning with industry collaborations to enhance student employability.",
    videoUrl: "https://www.youtube.com/embed/Zul-aNQFWHk?si=fGpc_NYfLEEOtBQs",
  },
  {
    name: "Lloyd Business School",
    description: "Located in Greater Noida, Lloyd Business School offers AICTE-approved management programs focusing on industry-relevant skills.",
    videoUrl: "https://www.youtube.com/embed/lB4aEj_D5to?si=CYZqhNrqKdnx8O9c",
  },
  {
    name: "Bennett University",
    description: "Founded by the Times Group, Bennett University provides quality education with a strong focus on research and innovation.",
    videoUrl: "https://www.youtube.com/embed/XD5vRiCUoZ8?si=QYCD1MV3UVs-z3hJ",
  },
  {
    name: "Galgotias University",
    description: "Situated on the Yamuna Expressway, Galgotias University is NAAC A+ accredited and known for academic excellence.",
    videoUrl: "https://www.youtube.com/embed/XHskMqoFXkY?si=fQWkkBo_x_3SS81P",
  },
];

const UniversityCards: React.FC = () => {

  const [popupVideo, setPopupVideo] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">🏫 Top Universities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="group min-h-[400px] bg-gray-200 rounded-lg flex flex-col gap-2 relative after:absolute after:h-full after:bg-[#abd373] z-20 shadow-lg after:-z-20 after:w-full after:inset-0 after:rounded-lg transition-all duration-300 hover:transition-all hover:duration-300 after:transition-all after:duration-500 after:hover:transition-all after:hover:duration-500 overflow-hidden cursor-pointer after:-translate-y-full after:hover:translate-y-0 [&_p]:delay-200 [&_p]:transition-all"
          >
            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-2xl font-semibold">{uni.name}</h3>
                <p className="text-gray-600 mt-2">{uni.description}</p>
              </div>
              <div className="mt-4">
                <iframe
                  className="w-full h-[200px] cursor-pointer"
                  src={uni.videoUrl}
                  title={uni.name}
                  allowFullScreen
                  onClick={() => setPopupVideo(uni.videoUrl)}
                ></iframe>
                <button
                  className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold py-2 px-4 rounded-lg hover:bg-opacity-70 transition"
                  onClick={() => setPopupVideo(uni.videoUrl)}
                >
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {popupVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
        <div className="bg-white p-4 rounded-lg relative w-full max-w-md md:max-w-lg lg:max-w-2xl">
          <button
            className="absolute top-2 right-4 text-white hover:scale-110 text-3xl"
            onClick={() => setPopupVideo(null)}
          >
            &times;
          </button>
          <div className="w-full aspect-video">
            <iframe
              className="w-full h-full sm:h-[400px] rounded-md"
              src={popupVideo}
              title="Video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
      
      )}
    </div>

  );
};

export default UniversityCards;
