
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import emailjs from 'emailjs-com';
import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState(''); 
  const [isSuccess, setIsSuccess] = useState(null);


  const handleSubmit = (e) => {
      e.preventDefault(); 

      const templateParams = {
          name,
          email,
          message,
      };

      emailjs.send('service_cg3r7wd', 'template_qje847u', templateParams, '_6smi6hQ16y83CAwT')
          .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
              setStatusMessage('Your message has been sent successfully!');
        setIsSuccess(true);
             
              setName('');
              setEmail('');
              setMessage('');
          }, (err) => {
              console.log('FAILED...', err);
              setStatusMessage('Failed to send your message. Please try again later.'); 
        setIsSuccess(false); 
          });
  };
  return (
    <div className="bg-black text-white py-20" id="contact">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
      <div className="flex flex-col md:flex-row items-center md:space-x-12">
        <div className="flex-1">
          <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
          from-green-400 to-blue-500 mb-4'>Let's Talk</h3>
          <p>I'm open to discussing web development prjectgs or partnership opportunities.</p>
          <div className='mb-4 mt-8'>
              <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
              <a href="mailto:youremail@example.com" className='hover:underline'>
                  shakeelmd6606@gmail.com
              </a>
          </div>
          <div className='mb-4'>
              <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
              <span>+91 7330796606</span>
          </div>
          <div className='mb-4'>
              <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
              <span>hyderabad</span>
          </div>
        </div>
        <div className='flex-1 w-full'>
            <form className='space-y-4' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input 
                        type="text" 
                        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input 
                        type="email" 
                        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea 
                        className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400'
                        rows="5"
                        placeholder='Enter Your Message'
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>
                    Send
                </button>
            </form>

            {statusMessage && (
              <p className={`mt-4 text-center ${isSuccess ? 'text-green-500' : 'text-red-500'}`}>
                {statusMessage}
              </p>
            )}
            
        </div>
      </div>
    </div>
  </div>
  )
}

export default Contact
