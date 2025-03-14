import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Corporate Tuck Shop",
    description:
      "Our corporate tuck shop solutions redefine convenience by offering a thoughtfully curated selection of snacks, beverages, and quick bites tailored to diverse preferences.",
    image:
      "https://plus.unsplash.com/premium_photo-1664910905021-fd519ebcded5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Tailored Catering Solutions",
    description:
      "Elevate your corporate events with our bespoke catering services, designed to leave a lasting impression. From delightful breakfasts to elaborate multi-course meals.",
    image:
      "https://plus.unsplash.com/premium_photo-1663090925863-248813831d5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Interactive Live Counters",
    description:
      "Engage and delight your guests with our live food counters, where culinary artistry meets interactivity. Watch our chefs prepare dishes live, adding a dynamic element.",
    image:
      "https://plus.unsplash.com/premium_photo-1664301187629-8ba030b64337?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CafeteriaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-primary/90 to-primary">
          <div className="absolute cafeteriaBackground inset-0 " />
          <div className="relative container mx-auto h-full flex items-center max-w-screen-xl">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Corporate Food and Beverage Solutions
              </h1>
              <p className="text-lg">
                Redefining Workplace Dining Experiences with Quality and
                Innovation
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50 px-10">
          <div className="container mx-auto max-w-screen-xl">
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
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
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
              <h2 className="text-3xl font-bold mb-8">
                Transform Your Workplace Dining
              </h2>
              <p className="text-gray-600 mb-8">
                Whether you're looking for a convenient tuck shop, premium
                catering, or engaging live counters, we deliver a perfect blend
                of quality, innovation, and professionalism to create
                unforgettable experiences.
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
