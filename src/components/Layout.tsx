import type React from 'react';
import Header from './Header';
import ApplyBtn from './Footer';
import { useRef } from 'react';
import AdmissionForm from './AdmissionForm';
import Process from '../../../../admissionportal/src/componets/Process';
import Youtube from './Youtube';
import GuidanceCard from './Contact';
import Contactus from './Contact';

type LayoutProps = {
  children: React.ReactNode;
};



const Layout: React.FC<LayoutProps> = ({ children }) => {

  const firstComponentRef = useRef<HTMLDivElement>(null);

  const handleScrollToFirstComponent = () => {
    if (firstComponentRef.current) {
      firstComponentRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white mb-14">
      <div className="relative overflow-hidden">
        {/* Top-right blue decoration */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500 rounded-full opacity-20 z-0"
        />

        {/* Large blue blob in the top-right corner */}
        <div
          className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-blue-600 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-50 z-0 transform rotate-45"
        />

        {/* Blue circle in top right */}
        <div
          className="absolute top-40 right-10 w-24 h-24 bg-blue-500 rounded-full opacity-20 z-0"
        />

        {/* Main content */}
        <div className="relative z-10">
          <Header />
          <main>{children}</main>
        </div>
      </div>
      <AdmissionForm ref = {firstComponentRef}/>
      <Process/>
      <Contactus title="Free Guidance Call"
        description="Get expert advice on your admission process. Contact us now!"
        phoneNumber="+916239180723"
        whatsappNumber="+916239180723"
        imageUrl="./images/49053.jpg"/>
      <Youtube/>
      <ApplyBtn scrollToTarget={handleScrollToFirstComponent}/>
    </div>
  );
};

export default Layout;
