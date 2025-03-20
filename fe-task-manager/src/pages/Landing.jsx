import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
function Landing() {
  const navigate = useNavigate();
  function pageroute(){
    navigate("/alltask")
  }
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      
      <header className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-lg text-gray-300 mb-6">Discover the best solutions for your needs</p>
        <button onClick={pageroute} className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold">
          Get Started
        </button>
      </header>
      
      
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-3">Feature One</h2>
          <p className="text-gray-400">Amazing functionality to boost productivity.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-3">Feature Two</h2>
          <p className="text-gray-400">Seamless integration with your existing tools.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-3">Feature Three</h2>
          <p className="text-gray-400">Secure, reliable, and easy to use.</p>
        </div>
      </section>
    </div>
  );
}

export default Landing;