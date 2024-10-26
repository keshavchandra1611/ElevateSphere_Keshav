// src/pages/BlogPage.js
import React from "react";
import CarouselComponent from "../components/CarouselComponent";

const blogPosts = [
  {
    id: 1,
    title: "The Rise of Open Innovation",
    description:
      "An overview of how open innovation is transforming industries by encouraging collaborative creativity.",
    author: "John Doe",
    date: "October 15, 2024",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 2,
    title: "Collaborative Innovation Success Stories",
    description:
      "Learn about real-world examples where open innovation has led to breakthrough success.",
    author: "Jane Smith",
    date: "October 18, 2024",
    image: "https://via.placeholder.com/300x200",
  },
  {
    id: 3,
    title: "Future of Open Innovation",
    description:
      "Exploring the future trends in open innovation and their implications.",
    author: "Alice Brown",
    date: "October 20, 2024",
    image: "https://via.placeholder.com/300x200",
  },
  // Add more blog posts here
];

const BlogPage = () => {
  return (
    <div className="bg-gray-900 min-h-screen p-6 text-white">
      <div className="container mx-auto">
        {/* Carousel Section */}
        <section className="mb-12">
          <CarouselComponent />
        </section>

        {/* Grid Section */}
        <section className="mb-12 bg-gray-700">
          <header className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-4">Explore Our Categories</h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Category 1</h3>
              <p className="text-gray-300">
                Explore articles related to open innovation and technology.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Category 2</h3>
              <p className="text-gray-300">
                Discover success stories in collaborative innovation.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Category 3</h3>
              <p className="text-gray-300">
                Learn about future trends and insights.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Category 4</h3>
              <p className="text-gray-300">
                Get inspired by innovative projects and initiatives.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Category 2</h3>
              <p className="text-gray-300">
                Discover success stories in collaborative innovation.
              </p>
            </div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">Category 2</h3>
              <p className="text-gray-300">
                Discover success stories in collaborative innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Section */}
        <section>
          <header className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Open Innovation Blog</h1>
            <p className="text-xl">
              Exploring new ways of collaborating to solve industry challenges.
            </p>
          </header>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-gray-800 p-5 rounded-lg shadow-lg"
              >
                <img
                  className="w-full h-48 object-cover mb-4 rounded"
                  src={post.image}
                  alt={post.title}
                />
                <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-400 mb-4">
                  By {post.author} on {post.date}
                </p>
                <p className="text-gray-300 mb-4">{post.description}</p>
                <a
                  href={`/blog/${post.id}`}
                  className="text-indigo-400 hover:text-indigo-600 transition-colors"
                >
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
