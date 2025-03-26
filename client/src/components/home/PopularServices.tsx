import { Link } from "wouter";

import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigLeft, Plus } from "lucide-react";
import FBSolution from "../../assets/F&B.avif";
import tea from "../../assets/Tea-Coffee.avif";
import snacksVending from "../../assets/snacksVending.jpeg";
import Stationary from "../../assets/Stationary.avif";
import B2B from "../../assets/B2B.png";

const services = [
  {
    image: FBSolution,
    title: "F&B Solution",
    goToLink: "/services/cafeteria",
  },
  {
    image: tea,
    title: "Tea/Coffee Vending",
    goToLink: "/services/vending/coffee",
  },
  {
    image: snacksVending,
    title: "Snacks Vending",
    goToLink: "/services/vending/snacks",
  },
  {
    image: B2B,
    title: "B2B/Housekeeping",
    goToLink: "/services/housekeeping",
  },
  {
    image: Stationary,
    title: "Stationary Supply",
    goToLink: "/services/stationary",
  },
];

export default function PopularServices() {
  return (
    <section className="py-16 bg-white px-20">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mt-2">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.slice(0, 5).map((service, index) => (
            <Card key={index} className="relative overflow-hidden">
              <Link href={service?.goToLink}>
                <CardContent className="p-0">
                  {/* Service Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <div className="text-center text-white">
                      <h4 className="text-xl font-bold">{service.title}</h4>
                      <button className="btn bg-blue-600 text-xs p-2">
                        Know More
                      </button>
                    </div>
                  </div>

                  {/* Floating Plus Button */}
                  {/* <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg">
                  <Plus className="h-4 w-4" />
                </button> */}
                </CardContent>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
