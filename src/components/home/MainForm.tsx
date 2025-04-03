import { useEffect } from "react";

const MainForm: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  
  return (
    <div className="w-80 sm:w-[450px] mx-auto h-[610px] p-0 sm:p-2 bg-white rounded-lg shadow-md" >
      <div className="npf_wgts" data-height="600px" data-w="b214bb41b7025009877617366f69b11c"></div>

    </div>
  );
};

export default MainForm;






