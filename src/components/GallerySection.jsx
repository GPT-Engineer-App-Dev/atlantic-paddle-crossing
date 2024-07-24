const GallerySection = () => {
  const images = [
    { src: "/placeholder.svg", alt: "Paddle board preparation" },
    { src: "/placeholder.svg", alt: "Sunset on the Atlantic" },
    { src: "/placeholder.svg", alt: "Navigating rough waters" },
    { src: "/placeholder.svg", alt: "Marine life encounter" },
    { src: "/placeholder.svg", alt: "Team celebration" },
    { src: "/placeholder.svg", alt: "Atlantic horizon" },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;