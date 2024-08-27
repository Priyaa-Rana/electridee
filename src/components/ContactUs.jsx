import React from 'react';
import './ContactUs.css'

function ContactUs() {
  return (
    <section id="contact">
      <div className="contact flex flex-wrap justify-center items-center w-full h-full p-4 shadow-xl rounded-xl ">
        {/* First div for the map */}
        <div className="map-container w-full md:w-1/2 h-11/12 mb-8 md:mb-0 py-10 px-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3431.1188986759785!2d76.6648404!3d30.68693060000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef154b91a85b%3A0x4d8b9df97e986631!2sChandigarh%20Group%20of%20Colleges%20(CGC)%20-%20Landran!5e0!3m2!1sen!2sin!4v1651179075685!5m2!1sen!2sin"
            width="100%"
            height="700"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Second div for the contact form */}
        <div className="form-container w-full md:w-1/2 h-11/12  bg-white rounded-lg shadow-xl  px-8 py-8">
          <h1 className="text-4xl font-medium mb-10 text-center">Contact Us</h1>
          <form action="" id="contactForm" className="flex flex-col">
            <p className="text-gray-700 mb-4 text-left ">Name</p>
            <input
              type="text"
              id="name"
              placeholder=""
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500 bg-[#eeeeee]"
              required=""
            />

            <p className="text-gray-700 mb-4 text-left">Mobile No</p>
            <input
              type="text"
              id="mobile"
              placeholder=""
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500 bg-[#eeeeee]"
              required=""
            />

            <p className="text-gray-700 mb-4 text-left">Email</p>
            <input
              type="text"
              id="email"
              placeholder=""
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:border-sky-500 bg-[#eeeeee]"
              required=""
            />

            <p className="text-gray-700 mb-4 text-left">Enquiry</p>
            <textarea
              placeholder=""
              id="msgContent"
              className="border border-gray-300 rounded px-4 py-2 h-32 resize-vertical w-full focus:outline-none focus:border-sky-500 bg-[#eeeeee]"
            ></textarea>

            <input
              type="submit"
              id="submit"
              name="SUBMIT"
              className="bg-green-500 hover:bg-green-700 text-white font-medium  block rounded py-2 px-4 mt-8 focus:outline-none "
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;