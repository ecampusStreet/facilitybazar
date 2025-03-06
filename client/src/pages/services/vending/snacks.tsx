import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingBag, Zap, RefreshCw } from "lucide-react";
import snacksVending from "../../../assets/snacksVending.jpeg";
import drink from "../../../assets/drink.jpg";

const features = [
  {
    icon: ShoppingBag,
    title: "Diverse Product Selection",
    description:
      "Wide variety of nutritious snacks, fresh foods, and beverages to cater to different dietary preferences and needs.",
  },
  {
    icon: Zap,
    title: "Smart Features",
    description:
      "Advanced features including touchless payment, temperature control, and real-time inventory monitoring.",
  },
  {
    icon: RefreshCw,
    title: "Regular Restocking",
    description:
      "Automated inventory management ensures products are always fresh and available when needed.",
  },
];

const products = [
  {
    name: "Healthy Snacks",
    description:
      "Nutritious options including nuts, dried fruits, and protein bars",
    image: snacksVending,
  },
  {
    name: "Fresh Beverages",
    description: "Wide selection of refreshing drinks and water",
    image: drink,
  },
  {
    name: "Quick Meals",
    description: "Ready-to-eat meals and sandwiches for busy professionals",
    image: snacksVending,
  },
];

export default function SnacksVendingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="absolute inset-0 snackBackground" />
          <div className="relative container mx-auto h-full flex items-center">
            <div className="text-white max-w-2xl px-10">
              <h1 className="text-4xl font-bold mb-4">
                Smart Snacks & Beverages Vending
              </h1>
              <p className="text-lg">
                Modern vending solutions offering fresh, healthy options for
                your workspace
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50 px-10">
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
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Products</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our vending machines offer a carefully curated selection of
                snacks and beverages to meet diverse preferences and dietary
                requirements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
              {products.map((product, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-gray-600 mb-4">
                        {product.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg">Request Installation</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
