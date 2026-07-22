const services = [
  {
    title: "General Checkup",
    desc: "Routine health checkups for all ages.",
    icon: "🩺",
  },
  {
    title: "Dental Care",
    desc: "Complete dental treatments and cleaning.",
    icon: "🦷",
  },
  {
    title: "Cardiology",
    desc: "Heart-related diagnosis and treatment.",
    icon: "❤️",
  },
  {
    title: "Pediatrics",
    desc: "Healthcare services for children.",
    icon: "👶",
  },
];

const Services = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
          >
            <div className="text-4xl mb-4">{service.icon}</div>

            <h3 className="text-lg font-semibold mb-2">
              {service.title}
            </h3>

            <p className="text-gray-500 text-sm">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;