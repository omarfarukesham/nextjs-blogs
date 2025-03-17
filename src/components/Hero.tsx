'use client';
import Image from 'next/image';
import profileImg from '@/assets/removebg.png'

const Hero = () => {
  return (
    <section className=" w-full mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6 bg-gray-50">
      {/* Left Side: Text */}
      <div className="md:w-1/3 space-y-6 lg:ml-20">
        <h1 className="text-4xl font-bold text-gray-900">
          Assalamu Alaikum, I am Mohammad Anas
        </h1>
        <p className="text-lg text-gray-600">
        Experienced Administrator with 4+ Years in SAP and Procurement
        Streamlining administrative operations, managing vendor registration,
         and ensuring compliance with company policies. Skilled in SAP support,
         troubleshooting, and improving system efficiency to enhance workflow and operational success.
        </p>
        <button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Resume.pdf'; 
                link.download = 'anasResume.pdf'; 
                link.click();
              }}
            >
          View Resume
        </button>
      </div>

  
      <div className="relative lg:w-96 lg:h-96 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg lg:mr-20">
      
        {/* Image */}
        <div className="absolute inset-3 transform hover:scale-105 duration-300 -rotate-6 overflow-hidden rounded-lg border-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-gray-100">
        <Image
          src={profileImg} 
          alt="Your Name"
          width={400}
          height={350}
          className="rounded-lg shadow-lg"
        />
        </div>
    </div>
    </section>
  );
};

export default Hero;