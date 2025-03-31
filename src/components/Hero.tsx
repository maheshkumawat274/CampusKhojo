import React from 'react';

type CategoryLinkProps = {
  name: string;
  path: string;
  isUnderlined?: boolean;
};

const CategoryLink: React.FC<CategoryLinkProps> = ({ name, path, isUnderlined }) => (
  <a
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
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 md:mb-8 leading-tight">
          Admissions Open 2025: Apply Now!
        </h1>
        
        <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-2 mb-8 sm:mb-10">
          <div>
            <CategoryLink name="Undergraduate" path="/admissions/undergraduate" />
            <CategoryLink name="Postgraduate" path="/admissions/postgraduate" />
            <CategoryLink name="Diploma" path="/admissions/diploma" />
          </div>
          <div>
            <CategoryLink name="PhD" path="/admissions/phd" />
            <CategoryLink name="Online Courses" path="/admissions/online" isUnderlined />
            <CategoryLink name="Scholarships" path="/admissions/scholarships" />
          </div>
        </div>

        <a
          href="/apply"
          className="bg-blue-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Apply Now
        </a>

        {/* Mobile image - only shown on small screens */}
        <div className="block md:hidden mt-8">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/images/campus-students.jpg"
              alt="Students walking on campus"
              className="w-full h-auto object-cover"
            />

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
            <img
              src="/images/campus-students.jpg"
              alt="Students walking on campus"
              className="w-full h-auto object-cover"
            />

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
