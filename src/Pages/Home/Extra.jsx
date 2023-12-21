const Extra = () => {
  const targetAudiences = [
    {
      title: "Developers",
      icon: "💻",
      description:
        "Optimize your coding projects with efficient task management.",
    },
    {
      title: "Corporate Professionals",
      icon: "👔",
      description: "Stay organized in your corporate tasks and meetings.",
    },
    {
      title: "Bankers",
      icon: "🏦",
      description: "Manage financial tasks and deadlines with ease.",
    },
    {
      title: "Students",
      icon: "🎓",
      description:
        "Keep track of assignments and deadlines for academic success.",
    },
    {
      title: "Entrepreneurs",
      icon: "🚀",
      description:
        "Efficiently handle tasks and projects to fuel your entrepreneurial journey.",
    },
    // Add more target audiences as needed
  ];
  return (
    <div>
      <section className=" text-white py-16 px-5">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl text-gray-700 font-bold mb-8">
            Who Can Benefit from Our Website?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudiences.map((audience, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-lg shadow-md">
                <span className="text-4xl mb-4 block">{audience.icon}</span>
                <h3 className="text-xl font-semibold mb-4">{audience.title}</h3>
                <p>{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extra;
