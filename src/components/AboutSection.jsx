const AboutSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About the Journey</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/placeholder.svg"
              alt="Paddle boarding journey"
              className="rounded-lg shadow-lg w-full h-[300px] object-cover"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4">
              Embarking on an unprecedented adventure, we're setting out to cross the Atlantic Ocean on a paddle board. This journey will push the limits of human endurance, testing our physical and mental strength against the vast expanse of the ocean.
            </p>
            <p className="text-lg">
              Our goal is not just to achieve a world record, but to raise awareness about ocean conservation and the impact of climate change on our planet's waters. Join us as we navigate through challenges, discover the beauty of the open sea, and inspire others to pursue their own extraordinary dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;