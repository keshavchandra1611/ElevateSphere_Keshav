// src/pages/CustomersPage.js
import React from "react";

// Dummy data for sponsors and customers
const sponsors = [
  { id: 1, name: "Sponsor 1", logo: "https://via.placeholder.com/150x100" },
  { id: 2, name: "Sponsor 2", logo: "https://via.placeholder.com/150x100" },
  { id: 3, name: "Sponsor 3", logo: "https://via.placeholder.com/150x100" },
  { id: 4, name: "Sponsor 4", logo: "https://via.placeholder.com/150x100" },
];

const customers = [
  {
    id: 1,
    name: "Customer 1",
    description: "This is a brief description of Customer 1.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    name: "Customer 2",
    description: "This is a brief description of Customer 2.",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    name: "Customer 3",
    description: "This is a brief description of Customer 3.",
    image: "https://via.placeholder.com/300x200",
  },
  // Add more customers as needed
];

const CustomersPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative h-96 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://www.shutterstock.com/image-photo/business-man-using-computer-hand-260nw-2064800414.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">
            Our Valued Customers
          </h1>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {sponsors.map((sponsor) => (
              <div key={sponsor.id} className="flex justify-center">
                <img
                  src="https://media.licdn.com/dms/image/v2/C4D12AQHXY8YZrdYK8w/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1520084305670?e=2147483647&v=beta&t=Qs3yGoIMeYQzEiewW_lX2tC3_wAjWRKfL5CP_R3a7nY"
                  alt={sponsor.name}
                  className="h-24 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Cards Section */}
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Meet Our Customers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customers.map((customer) => (
              <div
                key={customer.id}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <img
                  src={customer.image}
                  alt={customer.name}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2">{customer.name}</h3>
                <p className="text-gray-400 mb-4">{customer.description}</p>
                <a
                  href={`/customers/${customer.id}`}
                  className="text-indigo-400 hover:text-indigo-600 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CustomersPage;
