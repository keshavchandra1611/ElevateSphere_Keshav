// src/pages/PricingPage.js
import React from "react";

const PricingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/1248705489/vector/blue-gradient-wall-studio-empty-room-abstract-background-with-lighting-and-space-for-your.jpg?s=612x612&w=0&k=20&c=zQvuCkeoscxUbU0jMT82j58kw4eJD6U-_9jABDqzlCo=")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-orange-500">
            Our Pricing Plans
          </h1>
        </div>
      </section>

      {/* Licensing Options Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Licensing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Business Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Business</h3>
              <p className="text-gray-400 mb-6">
                For small to medium businesses.
              </p>
              <p className="text-4xl font-bold mb-6">$49/mo</p>
              <ul className="text-gray-400 mb-6">
                <li className="mb-2">5 User Licenses</li>
                <li className="mb-2">Basic Analytics</li>
                <li className="mb-2">Email Support</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-400 mb-6">For large organizations.</p>
              <p className="text-4xl font-bold mb-6">$199/mo</p>
              <ul className="text-gray-400 mb-6">
                <li className="mb-2">Unlimited Licenses</li>
                <li className="mb-2">Advanced Analytics</li>
                <li className="mb-2">24/7 Support</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>

            {/* Flex Plan */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Flex</h3>
              <p className="text-gray-400 mb-6">
                For custom and flexible needs.
              </p>
              <p className="text-4xl font-bold mb-6">$99/mo</p>
              <ul className="text-gray-400 mb-6">
                <li className="mb-2">10 User Licenses</li>
                <li className="mb-2">Custom Analytics</li>
                <li className="mb-2">Priority Support</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Plans Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Success and Support Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Support */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Basic</h3>
              <p className="text-gray-400 mb-6">
                Essential support for small teams.
              </p>
              <p className="text-4xl font-bold mb-6">$20/mo</p>
              <ul className="text-gray-400 mb-6">
                <li className="mb-2">Email Support</li>
                <li className="mb-2">Response Time: 48 hours</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>

            {/* Premium Support */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Premium</h3>
              <p className="text-gray-400 mb-6">
                Priority support for growing teams.
              </p>
              <p className="text-4xl font-bold mb-6">$75/mo</p>
              <ul className="text-gray-400 mb-6">
                <li className="mb-2">Priority Email & Chat Support</li>
                <li className="mb-2">Response Time: 24 hours</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>

            {/* Enterprise Support */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
              <p className="text-gray-400 mb-6">
                Full support for mission-critical teams.
              </p>
              <p className="text-4xl font-bold mb-6">$150/mo</p>
              <ul className="text-gray-400 mb-6">
                <li className="mb-2">24/7 Phone, Chat, & Email Support</li>
                <li className="mb-2">Response Time: 1 hour</li>
              </ul>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg">
                Choose Plan
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;
