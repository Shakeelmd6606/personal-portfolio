import React from "react";

function About() {
  return (
    <div className="bg-black text-white " id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="text-lg mb-8">
            <p>
              I am a skilled Frontend Developer with a strong focus on building
              responsive, high-performance web applications using modern
              technologies such as HTML, CSS, JavaScript, and React. With a
              commitment to clean code, cross-browser compatibility, and
              exceptional user experience, I continuously strive to stay at the
              forefront of industry trends and best practices. My goal is to
              deliver seamless, scalable solutions that align with both
              technical and business objectives.
            </p>
            <br />
           <div className="bg-black text-white py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Skills</h2>
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <label htmlFor="html-css" className="w-1/3 md:w-1/4">HTML & CSS</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12"></div>
            </div>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center mb-1">
            <label htmlFor="javascript" className="w-1/3 md:w-1/4">JavaScript</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-10/12"></div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-1">
            <label htmlFor="react" className="w-1/3 md:w-1/4">React JS</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12"></div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex items-center mb-1">
            <label htmlFor="node" className="w-1/3 md:w-1/4">Node JS</label>
            <div className="grow bg-gray-800 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
            <div className="mt-12 flex justify-between text-center">
                <div>
                    <h3></h3>
                </div>

            </div>



          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
