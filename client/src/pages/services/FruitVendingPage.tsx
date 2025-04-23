import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Apple, ShoppingBasket, PackageCheck, Truck } from "lucide-react";
import fruitsbg from "../../assets/fruitBoul.jpg";

const fruitsSupplies = [
  {
    icon: Apple,
    title: "Fresh Fruits",
    description:
      "Premium selection of fruits sourced daily for vending machines.",
    items: ["Apples", "Bananas", "Oranges", "Grapes", "Berries"],
  },
  {
    icon: ShoppingBasket,
    title: "Snack Packs",
    description: "Pre-packed healthy fruit mixes, ready for instant vending.",
    items: ["Fruit Cups", "Mixed Fruit Bowls", "Fruit Snack Pouches"],
  },
  {
    icon: PackageCheck,
    title: "Packaging Supplies",
    description:
      "High-quality, hygienic packaging to keep fruits fresh and appealing.",
    items: ["Sealed Containers", "Eco-friendly Packs", "Labelled Boxes"],
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Reliable refrigerated delivery services for freshness assurance.",
    items: ["Daily Refill Services", "Temperature-Controlled Logistics"],
  },
];

export default function FruitVendingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <div className="absolute inset-0 fruitsBackground bg-opacity-20 backdrop-blur-sm" />
          <div className="relative container mx-auto h-full flex items-center max-w-screen-xl">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Fresh Fruit Vending Machine Supplies
              </h1>
              <p className="text-lg">
                Nutritious, fresh, and conveniently packaged fruits for healthy
                vending solutions.
              </p>
            </div>
          </div>
        </div>

        {/* Supplies Categories */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Supplies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Everything you need to maintain a fresh and healthy vending
                machine experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {fruitsSupplies.map((supply, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <supply.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{supply.title}</h3>
                    <p className="text-gray-600 mb-4">{supply.description}</p>
                    <ul className="space-y-2">
                      {supply.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-white px-6 md:px-20">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose Our Fruits?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">Farm Fresh Quality</h3>
                      <p className="text-gray-600">
                        Handpicked fruits sourced directly from trusted farms.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">Hygienic Packaging</h3>
                      <p className="text-gray-600">
                        Fruits are carefully packed for ultimate freshness and
                        hygiene.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">Reliable Delivery</h3>
                      <p className="text-gray-600">
                        Guaranteed on-time delivery with temperature control.
                      </p>
                    </div>
                  </li>
                </ul>
                <Button size="lg" className="mt-8">
                  Get a Quote
                </Button>
              </div>

              <img
                src={fruitsbg}
                alt="Fresh Fruits"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
