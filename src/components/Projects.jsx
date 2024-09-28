import React from 'react'

import Ecom from '../assets/ecom.jpg'
import cal from '../assets/cal.webp'
import simon from '../assets/simon.png'
import spotify from '../assets/spotify.png'

const projects=[
    {
        id:1,
        name:"Ecom Market Hub",
        technologies:"HTML ,CSS ,Js ,React Js",
        images:Ecom,
        github:"https://github.com/Shakeelmd6606/EcomMarketHub"

    },
    {
        id:2,
        name:"simon-says-game",
        technologies:"HTML ,CSS ,Js",
        images:simon,
        github:"https://github.com/Shakeelmd6606/simon-says-game"
    },
    {
        id:3,
        name:"calculator",
        technologies:"HTML ,CSS ,Js",
        images:cal,
        github:"https://github.com/Shakeelmd6606/small-calculator"
    },
    {
        id:4,
        name:"spotify-clone",
        technologies:"HTML ,CSS",
        images:spotify,
        github:"https://github.com/Shakeelmd6606/spotify-clone"
    }
   

]

function Projects() {
  return (
    <div className='bg-black text-white py-20' id='projects'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className=' text-4xl font-bold text-center mb-12'>Projects</h2>
            <div
            className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project=>(
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.images} alt="" className='rounded-lg mb-4 w-full h-48 object-cover'/>
                       <h3 className='text-2xl font-bold mb-2'>{project.name}</h3> 
                       <p className='text-gray-400 mb-4'>{project.technologies}</p>
                       <a className='inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full' target='_black' rel='noopener noreferrer' href={project.github}>GitHub</a>
                    </div>

                ))}

            </div>

        </div>
      
    </div>
  )
}

export default Projects
