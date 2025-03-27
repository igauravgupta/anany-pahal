import React from "react";

const News = () => {
  return (
    <>
      {/* Header */}
      <div className="w-full bg-blue-500 py-8 mt-16 flex justify-center items-center text-center">
        <h1 className="text-white text-4xl font-bold w-full">Latest Updates</h1>
      </div>

      {/* News Section */}
      <section className="bg-white py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 text-center md:text-left">
            Stay Updated with Our Recent Activities
          </h1>
          <p className="text-gray-700 text-lg mb-8 text-center md:text-left">
            Get insights into our latest events, activities, and initiatives that are making a difference. 
            Follow our journey as we strive towards creating a better society through continuous efforts.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Text Section */}
            <div className="order-2 md:order-1">
              <h1 className="text-blue-500 text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
                #Community Outreach Program
              </h1>
              <p className="text-gray-700 text-lg mb-2 text-center md:text-left">
                <strong>Date:</strong> March 20, 2025
              </p>
              <p className="text-gray-700 text-lg mb-2 text-center md:text-left">
                <strong>Day:</strong> Wednesday
              </p>
              <p className="text-gray-700 text-lg mb-6 text-center md:text-left">
                Our recent community outreach program focused on educating underprivileged children, 
                providing them with necessary study materials and interactive learning sessions. 
                Volunteers conducted engaging activities to encourage learning in a fun and creative way.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition">
                  Read More
                </button>
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="grid grid-cols-2 gap-4 order-1 md:order-2">
              <img src="/images/news1.jpg" alt="Volunteers with children" className="rounded-lg shadow-md w-full" />
              <img src="/images/news2.jpg" alt="Educational activity" className="rounded-lg shadow-md w-full" />
              <img src="/images/news3.jpg" alt="Group discussion" className="rounded-lg shadow-md col-span-2 w-full" />
            </div>
          </div>
        </div>

        {/* Second News */}
        <div className="max-w-6xl mx-auto pt-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image Grid on Top for Mobile */}
            <div className="grid grid-cols-2 gap-4 md:order-1">
              <img src="/images/news1.jpg" alt="Volunteers with children" className="rounded-lg shadow-md w-full" />
              <img src="/images/news2.jpg" alt="Educational activity" className="rounded-lg shadow-md w-full" />
              <img src="/images/news3.jpg" alt="Group discussion" className="rounded-lg shadow-md col-span-2 w-full" />
            </div>

            {/* Text Section */}
            <div className="md:order-2">
              <h1 className="text-blue-500 text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
                #Community Outreach Program
              </h1>
              <p className="text-gray-700 text-lg mb-2 text-center md:text-left">
                <strong>Date:</strong> March 20, 2025
              </p>
              <p className="text-gray-700 text-lg mb-2 text-center md:text-left">
                <strong>Day:</strong> Wednesday
              </p>
              <p className="text-gray-700 text-lg mb-6 text-center md:text-left">
                Our recent community outreach program focused on educating underprivileged children, 
                providing them with necessary study materials and interactive learning sessions. 
                Volunteers conducted engaging activities to encourage learning in a fun and creative way.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="bg-yellow-500 text-black px-6 py-3 rounded-full shadow-md hover:bg-yellow-600 transition">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
