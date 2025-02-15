import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Corporate Tuck Shop",
    description: "Our corporate tuck shop solutions redefine convenience by offering a thoughtfully curated selection of snacks, beverages, and quick bites tailored to diverse preferences.",
    image: "/img/tuck-shop.jpg"
  },
  {
    title: "Tailored Catering Solutions",
    description: "Elevate your corporate events with our bespoke catering services, designed to leave a lasting impression. From delightful breakfasts to elaborate multi-course meals.",
    image: "/img/catering.jpg"
  },
  {
    title: "Interactive Live Counters",
    description: "Engage and delight your guests with our live food counters, where culinary artistry meets interactivity. Watch our chefs prepare dishes live, adding a dynamic element.",
    image: "/img/live-counter.jpg"
  }
];

export default function CafeteriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Corporate Food and Beverage Solutions
              </h1>
              <p className="text-lg">
                Redefining Workplace Dining Experiences with Quality and Innovation
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-600 mb-4">{feature.description}</p>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Transform Your Workplace Dining</h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking for a convenient tuck shop, premium catering, or engaging live counters, 
                we deliver a perfect blend of quality, innovation, and professionalism to create unforgettable experiences.
              </p>
              <Button size="lg">Contact Us Today</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
