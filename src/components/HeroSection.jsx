import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-[600px] flex items-center justify-center text-center text-white">
      <img
        src="/placeholder.svg"
        alt="Atlantic Ocean"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-4">Crossing the Atlantic on a Paddle Board</h1>
        <p className="text-xl mb-8">Join the adventure of a lifetime</p>
        <Button size="lg">Read the Blog</Button>
      </div>
    </section>
  );
};

export default HeroSection;