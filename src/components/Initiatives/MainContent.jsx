const MainContent = () => {
  return (
    <>
      {/* Main Content */}
      <div className="flex-1 px-4 md:px-8">
        <img
          src="/cta2.jpg"
          alt="Header Image"
          className="w-full rounded-lg shadow-md mb-6"
        />

        {/* Anany Pathshala Section */}
        <div className="mb-12">
          <h1 className="text-blue-500 text-xl font-bold mb-2">#Anany Pathshala</h1>
          <h2 className="text-3xl font-semibold mt-2 mb-4">
            Providing Free Education to Underprivileged Children
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Anany Pathshala is dedicated to offering free education to underprivileged children,
            ensuring they get access to quality learning resources, mentorship, and academic support.
            Our mission is to empower children with the knowledge and skills needed for a brighter future.
          </p>

          <h3 className="text-lg text-gray-600 font-semibold mt-6">Our Key Objectives</h3>
          <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
            <li>Providing quality education to students from economically weaker sections.</li>
            <li>Offering free academic and residential coaching for Jawahar Navodaya Vidyalaya, Atal Awasiya Vidyalaya, and more.</li>
            <li>Conducting workshops, digital education initiatives, and interactive learning sessions.</li>
          </ul>
        </div>

        {/* Self-Study Room & Anany Pathshala Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Self-Study Room */}
          <div>
            <h1 className="text-blue-500 text-xl font-bold mb-2">#Self Study Room</h1>
            <img src="/cta2.jpg" alt="Self-Study Room" className="w-full rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold mt-3 text-gray-800">Self-Study Room</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              The Self-Study Room provides a quiet and well-equipped space for students to focus on their studies without distractions.
              It is open to students from economically weaker backgrounds, helping them prepare for exams in a conducive learning environment.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 hidden md:block">
              <li>Peaceful study environment with minimal distractions.</li>
              <li>Well-lit rooms with comfortable seating arrangements.</li>
              <li>Availability of academic resources and study materials.</li>
            </ul>
          </div>

          {/* Anany Digitalshala */}
          <div>
            <h1 className="text-blue-500 text-xl font-bold mb-2">#Anany Digitalshala</h1>
            <img src="/cta2.jpg" alt="Anany Digitalshala" className="w-full rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold mt-3 text-gray-800">Empowering Students with Digital Education</h3>
            <p className="text-gray-700 leading-relaxed mt-2">
              Anany Digitalshala provides free digital education to students up to class 12, helping bridge the digital divide.
              Our initiative ensures that underprivileged students gain access to essential computer skills and online learning resources.
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 hidden md:block">
              <li>Free computer literacy programs for school students.</li>
              <li>Guidance on online education tools and e-learning platforms.</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
