import React from 'react'
import img from "../../assets/Idea.jpeg"

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img})` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Experience the Future of Innovation Today!</h1>
          <p className="text-lg text-gray-300">Ideate. Innovate. Elevate.</p>
          <button className="mt-6 px-8 py-3 bg-orange-700 text-white font-semibold rounded hover:bg-red-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection