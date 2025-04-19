import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    // Set visible after component mounts for animation
    setVisible(true);
    
    // Add keyframe animation to head when component mounts
    const style = document.createElement('style');
    style.textContent = `
      @keyframes borderAnimation {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      .animate-border {
        background: linear-gradient(90deg, #8b5cf6, #3b82f6, #8b5cf6);
        background-size: 200% 100%;
        animation: borderAnimation 3s ease infinite;
      }
      .glow-effect {
        filter: blur(4px);
      }
    `;
    document.head.appendChild(style);
    
    // Cleanup function to remove style when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className='w-full items-center min-h-screen flex flex-col px-10 py-20'>
      <section className='text-2xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl'>
        <h1>Welcome to <span className='text-purple-400'>Micro Tools</span> Where You Find Every Tools That Make Your Life Easy</h1>
      </section>
      
      <section className='mt-4 lg:mt-8'>
        <Link to={'/menu'}>
          <div className="relative">
            {/* Animated border container */}
            <div className="absolute inset-0 animate-border rounded-3xl glow-effect opacity-75 hover:opacity-100 transition-opacity duration-300"></div>
            {/* Button with transparent background to show the border */}
            <h1 className='relative z-10 text-xl hover:bg-blue-600 sm:text-3xl md:text-4xl lg:text-5xl bg-blue-500 text-white rounded-3xl px-4 py-2 transition-all duration-300 hover:shadow-lg'>Explore Tools</h1>
          </div>
        </Link>
      </section>
      
      <section className='mt-5 md:mt-10 lg:mt-14'>
        <img className='rounded-2xl shadow-xl' src="./hero2.png" alt="Hero image" />
      </section>
      
      <section className={`mt-10 md:mt-16 lg:mt-20 px-4 transition-all duration-700 transform ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-3xl mx-auto text-center bg-gray-800 rounded-xl p-6 shadow-lg border border-purple-400">
          <p className="text-gray-200 text-lg md:text-xl lg:text-2xl leading-relaxed">
            ⏳ Save your precious time with our collection of micro tools! From generating <span className="text-purple-400 font-semibold">strong passwords</span> 🔒 to creating <span className="text-blue-400 font-semibold">QR codes</span> 📲 and tracking time with a <span className="text-green-400 font-semibold">stopwatch</span> ⏱️, our tools are designed to make your everyday tasks faster and easier. <span className="text-yellow-400 font-bold">🚀</span>
          </p>
          
          <div className="mt-6 flex justify-center gap-4">
            <Link to={'/menu'}>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300">
                Popular Tools
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage