const FAQs = () => {
  return (
    <section className="py-12 px-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">FAQs</h2>

      <div className="space-y-4">
        <details className="bg-gray-100 p-4 rounded-lg">
          <summary className="font-semibold cursor-pointer">
            How to book appointment?
          </summary>
          <p className="mt-2 text-gray-600">
            Click on Book Appointment button.
          </p>
        </details>

        <details className="bg-gray-100 p-4 rounded-lg">
          <summary className="font-semibold cursor-pointer">
            Do you provide emergency services?
          </summary>
          <p className="mt-2 text-gray-600">
            Yes, 24/7 support available.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQs;