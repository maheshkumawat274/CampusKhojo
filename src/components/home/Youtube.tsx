
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface VideoCardProps {
  videoUrl: string;
  onVideoClick: () => void; 
}

const VideoCard: React.FC<VideoCardProps> = ({ videoUrl, onVideoClick }) => {
  return (
    <div className="p-5 pb-8" onClick={onVideoClick}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          style={{ objectFit: 'contain' }}
          src={videoUrl}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      </div>
    </div>
  );
};

const Youtube: React.FC = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); 

  const videos = [
    { videoUrl: "https://www.youtube.com/embed/fiUvXihFeNE?si=oNeMNhwRNaRlPR6N" },
    { videoUrl: "https://www.youtube.com/embed/db6bG8LJG74?si=holrDMqtHl70KKw9" },
    { videoUrl: "https://www.youtube.com/embed/md-GeL8qz_Q?si=LgtPsMKkvcWJ2Taz" },
    { videoUrl: "https://www.youtube.com/embed/jKItoWrAD-g?si=9I6_oj3If83fw8WO" },
    { videoUrl: "https://www.youtube.com/embed/VMA6IGZMPkQ?si=VJPYipT05_UJunq8" }
  ];

  const sliderSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: !isPlaying,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: true,
    arrows: false,

    
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-4">
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handleVideoClick = () => {
    setIsPlaying(true); 
  };


  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault(); // Prevent default link behavior
    const url = event.currentTarget.href; // Extract the href
    const newTab = window.open(url, "_blank", "noopener,noreferrer");
    if (newTab) {
      newTab.opener = null;
    }
  };
  return (
    <section className="py-6 bg-white relative text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-poppins mb-6 text-2xl sm:text-4xl font-bold text-gray-700">
          YouTube Videos
        </h2>
        <Slider ref={sliderRef} {...sliderSettings}>
          {videos.map((video, index) => (
            <VideoCard key={index} videoUrl={video.videoUrl} onVideoClick={handleVideoClick} />
          ))}
        </Slider>
      </div>
      <button
         className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white border-2 border-purple-700 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-purple-700 before:to-purple-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0 mt-8"
       >
         <a onClick={handleClick} href="https://www.youtube.com/@campuskhoj">
         WATCH MORE VIDEOS!
         </a>
       </button>
    </section>
  );
};

export default Youtube;