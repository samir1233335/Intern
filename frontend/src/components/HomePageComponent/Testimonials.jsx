const testimonials = [
  {
    name: "John",
    text: "Amazing service! The doctors were very caring and professional.",
  },
  {
    name: "Sarah",
    text: "Very professional doctors. Highly recommended hospital.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-100 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        What Our Patients Say
      </h2>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-300 relative"
          >
            <p className="text-gray-600 italic mb-6">“{t.text}”</p>

            <div className="font-semibold text-blue-600">
              — {t.name}
            </div>

            {/* Decorative quote */}
            <span className="absolute top-4 right-6 text-5xl text-blue-100">
              “
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;