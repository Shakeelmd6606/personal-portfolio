import React from "react";

function About() {
  return (
    <div className="bg-black text-white py-20" id="about">
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
            <div className="space-y-4">
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                  HTML & CSS 
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-11/12"></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                 JavaScript
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>

              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                react Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-10/12"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label htmlFor="htmlandcss" className="w-2/12">
                 Node Js
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transfrom transition-transform duration-300 hover:scale-105 w-9/12"></div>
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
