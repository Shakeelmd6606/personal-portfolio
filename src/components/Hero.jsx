import React from 'react'
import resume from '../assets/resume.pdf'



function Hero() {
  const whatsappNumber = '7330796606'; 
  return (
    <div className='bg-black text-white text-center py-16'>
      <h1 className='text-4xl font-bold'>
        I'm{" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Mohammad Shakeel</span>
        , Frontend developer
      </h1>
      <p className='mt-4 text-lg text-gray-300 '>i specialize in biulding modern and responsive web applications.</p>

      <div className='mt-8 space-x-4'>
      <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                >
                    Contact With Me
                </a>        <a 
                href={resume}
                download 
                className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
            >
                Resume
            </a>

       </div>
    </div>

  )
}

export default Hero
