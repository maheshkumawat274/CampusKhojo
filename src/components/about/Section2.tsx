import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const CollegeInfo = () => {
  return (
    <section className=" py-10 px-2 sm:px-6 md:px-12 text-center">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          More Information About Colleges
        </h2>
        <p className="text-gray-600 mt-3">
          Get detailed insights about top colleges, admission process, and
          eligibility criteria. Contact us now for personalized guidance!
        </p>

        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4">
          <button className="relative py-2 px-8 text-black text-base font-bold nded-full overflow-hidden bg-white border-2 border-blue-500 rounded-full transition-all duration-400 ease-in-out shadow-md hover:scale-105 hover:text-white hover:shadow-lg active:scale-90 before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-blue-500 before:to-purple-500 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-full hover:before:left-0">
          <a
              href="https://wa.me/916239180723"
              target="_blank"
              rel="noopener noreferrer"
            > Contact Now</a>
          </button>

          <div className="flex items-center gap-4">
            <a
              href="tel:+916239180723"
              className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaPhoneAlt className="text-2xl" />
            </a>
            <a
              href="https://wa.me/916239180723"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
            >
              <FaWhatsapp className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegeInfo;
