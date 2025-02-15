import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coffee, Settings, Shield } from "lucide-react";

const features = [
  {
    icon: Coffee,
    title: "Premium Coffee Experience",
    description: "Customizable options for coffee type, strength, temperature, and milk preference. From espresso to cappuccino, enjoy high-quality beverages with consistency and speed."
  },
  {
    icon: Settings,
    title: "Smart Technology",
    description: "State-of-the-art technology with touchless payment, temperature control, and real-time inventory tracking for a seamless experience."
  },
  {
    icon: Shield,
    title: "Hygiene & Maintenance",
    description: "Regular maintenance and cleaning ensure optimal hygiene standards and consistent quality in every cup."
  }
];

export default function CoffeeVendingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-[#6F4E37] to-[#8B4513]">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Smart Coffee Vending Solutions
              </h1>
              <p className="text-lg">
                Experience premium coffee on demand with our state-of-the-art vending machines
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((Feature, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <Feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{Feature.title}</h3>
                    <p className="text-gray-600">{Feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Why Choose Our Vending Solutions?</h2>
                <p className="text-gray-600">
                  Our coffee vending machines deliver premium beverages with consistency and convenience,
                  perfect for offices, institutions, and public spaces.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                  src="/img/coffee-vending.jpg"
                  alt="Coffee Vending Machine"
                  className="w-full h-[300px] object-cover rounded-lg"
                />
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Features & Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Coffee className="h-5 w-5 text-primary" />
                      <span>Multiple drink options and customizations</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Settings className="h-5 w-5 text-primary" />
                      <span>Smart payment and inventory management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-primary" />
                      <span>Regular maintenance and cleaning service</span>
                    </li>
                  </ul>
                  <Button size="lg" className="mt-4">Request a Quote</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
