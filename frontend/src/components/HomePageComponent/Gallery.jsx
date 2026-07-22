const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    "https://images.unsplash.com/photo-1581595219315-a187dd40c322",
  ];

  return (
    <section className="py-16 px-4 md:px-10 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Clinic Gallery
      </h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, i) => (
          <img
            key={i}
            src={`${img}?auto=format&fit=crop&w=500&q=80`}
            className="rounded-xl shadow-md hover:scale-105 transition"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;