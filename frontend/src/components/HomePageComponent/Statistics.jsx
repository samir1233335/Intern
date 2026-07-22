const Statistics = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Our Achievements
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-4xl font-bold">500+</h3>
          <p className="mt-2">Doctors</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">10K+</h3>
          <p className="mt-2">Patients</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold">50+</h3>
          <p className="mt-2">Clinics</p>
        </div>
      </div>
    </section>
  );
};

export default Statistics;