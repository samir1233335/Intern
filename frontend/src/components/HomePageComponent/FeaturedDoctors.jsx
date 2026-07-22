const doctors = [
  {
    name: "Dr. Anita Rai",
    specialization: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2",
  },
  {
    name: "Dr. Mukesh Yadav",
    specialization: "Dentist",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d",
  },
  {
    name: "Dr. Sarah Limbu",
    specialization: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f",
  },
];

const FeaturedDoctors = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Featured Doctors
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map((doc, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={`${doc.image}?auto=format&fit=crop&w=600&q=80`}
                alt={doc.name}
                className="w-full h-72 object-cover object-top transition duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="p-5 text-center bg-white">
              <h3 className="text-lg font-semibold text-gray-900">
                {doc.name}
              </h3>
              <p className="text-blue-600">{doc.specialization}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedDoctors;