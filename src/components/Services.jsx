import React from 'react';
import './Services.css'

function Services() {
  return (
    <section id="services">
      <div className="service container mx-auto px-4 py-8">
        <h1 className="text-6xl text-center mb-8 ">Services</h1>

        {/* First Row with car image on the right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
          <div className="w-full md:w-1/2 bg-[#EBEAEA] p-4 ser1">
            <h2 className="text-3xl font-bold mb-4 text-[#70D476]">Ride with Electride</h2>
            <p className="text-lg text-gray-700 p-4">
              We offer door-to-door booking choices to our customers. Our rikshaw rides are simple, secure, economical, and environmentally beneficial. We are currently available in Chandigarh City, and we are growing and providing 24/7 customer assistance.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/car.png" alt="car image" className="w-9/12 h-auto object-cover" />
          </div>
        </div>

        {/* Dashed line image */}
        <img src="/dash_line.png" alt="dash" className="w-6/12 h-8/12 object-cover mt-8 mb-8 ml-10 md:h-4/5 md:w-7/12 md:ml-48" />

        {/* Second Row with product image on the left */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 ">
          <div className="w-full md:w-1/2 ">
            <img src="/deliver.png" alt="product deliver" className="w-9/12 h-auto object-cover" />
          </div>
          <div className="w-full md:w-1/2 bg-[#EBEAEA] p-4 ser2">
            <h2 className="text-3xl font-bold mb-4 text-[#70D476]">Ride with Electride</h2>
            <p className="text-lg text-gray-700 p-4">
              We offer door-to-door booking choices to our customers. Our rikshaw rides are simple, secure, economical, and environmentally beneficial. We are currently available in Chandigarh City, and we are growing and providing 24/7 customer assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;