import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-4">
            <Input type="text" placeholder="Name" />
            <Input type="email" placeholder="Email" />
            <Input type="text" placeholder="Subject" />
            <Textarea placeholder="Your message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Facebook size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-400">
              <Twitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-pink-600">
              <Instagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600">
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;