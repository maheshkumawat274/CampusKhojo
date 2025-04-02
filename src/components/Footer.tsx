import React from "react";

interface ApplyNowButtonProps {
  scrollToTarget: () => void;
}

const ApplyBtn: React.FC<ApplyNowButtonProps> = ({ scrollToTarget }) => {
  return (
    <button
      onClick={scrollToTarget}
      className="fixed bottom-0 left-0 w-full text-center bg-green-500 text-white py-3 rounded-none hover:bg-pink-500 transition-all z-50"
    >
      Apply Now
    </button>
  );
};

export default ApplyBtn;
