import { FaUserMd, FaLaptopMedical, FaHeadset } from "react-icons/fa";

const features = [
  {
    title: "Experienced Doctors",
    desc: "Highly qualified and certified professionals.",
    icon: <FaUserMd size={30} />,
  },
  {
    title: "Modern Equipment",
    desc: "Latest healthcare technologies available.",
    icon: <FaLaptopMedical size={30} />,
  },
  {
    title: "24/7 Support",
    desc: "Always available when you need us.",
    icon: <FaHeadset size={30} />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl text-center shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              {item.title}
            </h3>

            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;