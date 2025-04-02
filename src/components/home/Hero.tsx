import React from 'react';

type CategoryLinkProps = {
  name: string;
  path: string;
  isUnderlined?: boolean;
};

const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
  event.preventDefault(); // Prevent default link behavior
  const url = event.currentTarget.href; // Extract the href
  const newTab = window.open(url, "_blank", "noopener,noreferrer");
  if (newTab) {
    newTab.opener = null;
  }
};

const CategoryLink: React.FC<CategoryLinkProps> = ({ name, path, isUnderlined }) => (
  <a
    onClick={handleClick}
    href={path}
    className={`block py-2 ${isUnderlined ? 'border-b border-blue-500' : ''} hover:text-blue-500 transition-colors`}
  >
    {name}
  </a>
);

const Hero: React.FC = () => {
  // Generate an array of dots with pre-computed positions
  const dots = React.useMemo(() => {
    return Array.from({ length: 200 }).map((_, i) => ({
      id: `dot-${i}-${Math.random().toString(36).substring(2, 9)}`,
    }));
  }, []);

  // Generate overlay dots with unique IDs
  const overlayDots = React.useMemo(() => {
    return Array.from({ length: 36 }).map(() => ({
      id: `overlay-dot-${Math.random().toString(36).substring(2, 9)}`,
    }));
  }, []);

  

  return (
    <div className="relative pt-6 sm:pt-10 pb-8 px-4 sm:px-6 md:px-10 lg:px-14 flex flex-col md:flex-row">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="grid grid-cols-10 grid-rows-[repeat(20,1fr)] gap-2 opacity-30">
          {dots.map((dot) => (
            <div key={dot.id} className="w-1 h-1 bg-gray-300 rounded-full" />
          ))}
        </div>
      </div>

      {/* Left column with text and categories */}
      <div className="w-full md:w-1/2 lg:w-2/5 z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-6 md:mb-8 leading-tight">
       <span className='text-yellow-400'>CampusKhojo</span> – Your Dream College Awaits!
        </h1>
        
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 mb-8 sm:mb-10">
          <div>
            <CategoryLink name="Undergraduate" path="https://guidance.campuskhojo.in/?utm_source=CampusKhojo&utm_medium=Undergraduate&utm_campaign=landingpage" isUnderlined/>
            <CategoryLink name="Postgraduate" path="https://guidance.campuskhojo.in/?utm_source=CampusKhojo&utm_medium=Postgraduate&utm_campaign=landingpage" isUnderlined/>
            <CategoryLink name="Diploma" path="https://guidance.campuskhojo.in/?utm_source=CampusKhojo&utm_medium=Diploma&utm_campaign=landingpage" isUnderlined/>
          </div>
          <div>
            <CategoryLink name="PhD" path="/admissions/phd" isUnderlined/>
            <CategoryLink name="Online Courses" path="https://guidance.campuskhojo.in/?utm_source=CampusKhojo&utm_medium=Online&utm_campaign=landingpage" isUnderlined />
            <CategoryLink name="Scholarships" path="https://guidance.campuskhojo.in/?utm_source=CampusKhojo&utm_medium=Scholarships&utm_campaign=landingpage" isUnderlined/>
          </div>
        </div>

        <button
          
          
          className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white border-2 border-blue-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0"
        >
          <a onClick={handleClick} href="https://guidance.campuskhojo.in/?utm_source=CampusKhojo&utm_medium=Apply_now&utm_campaign=landingpage">Apply now</a>
        </button>

        {/* Mobile image - only shown on small screens */}
        <div className="block md:hidden mt-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            
            src="https://www.youtube.com/embed/fiUvXihFeNE?si=oNeMNhwRNaRlPR6N"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[300px] object-cover"
          ></iframe>

            {/* Overlay dots pattern */}
            <div className="absolute right-0 top-0">
              <div className="grid grid-cols-6 grid-rows-6 gap-1">
                {overlayDots.slice(0, 24).map((dot) => (
                  <div key={dot.id} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>
            </div>

            {/* Blue circle accent */}
            <div className="absolute -right-10 -bottom-10 w-16 h-16 bg-blue-500 rounded-full opacity-60" />
          </div>
        </div>
      </div>

      {/* Right column with image - only shown on medium screens and up */}
      <div className="hidden md:block md:w-1/2 lg:w-3/5 relative mt-8 md:mt-0">
        <div className="relative ml-auto max-w-md">
          {/* Background decorative elements */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500 rounded-full opacity-20" />
          <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-blue-500 rounded-full opacity-20" />

          {/* Image container with shadow and rounded corners */}
          <div className="relative overflow-hidden rounded-lg shadow-xl">
          <iframe
            
            src="https://www.youtube.com/embed/fiUvXihFeNE?si=oNeMNhwRNaRlPR6N"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-[300px] object-cover"
          ></iframe>

            {/* Overlay dots pattern */}
            <div className="absolute right-0 top-0">
              <div className="grid grid-cols-6 grid-rows-6 gap-2">
                {overlayDots.map((dot) => (
                  <div key={dot.id} className="w-1 h-1 bg-white rounded-full" />
                ))}
              </div>
            </div>

            {/* Blue circle accent */}
            <div className="absolute -right-10 -bottom-10 w-20 h-20 bg-blue-500 rounded-full opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
