import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Preparing for the Atlantic Challenge",
      excerpt: "The rigorous training and preparation required for crossing the Atlantic on a paddle board.",
      date: "2023-05-15",
    },
    {
      title: "Day 1: Setting Off from the Coast",
      excerpt: "The excitement and nerves as we begin our journey across the Atlantic.",
      date: "2023-06-01",
    },
    {
      title: "Navigating Through a Storm",
      excerpt: "Facing our first major challenge: a unexpected storm in the middle of the Atlantic.",
      date: "2023-06-15",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{post.excerpt}</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Read More</Button>
                <span className="text-sm text-gray-500">{post.date}</span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;