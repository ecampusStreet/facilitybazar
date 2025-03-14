import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowBigLeft, Plus } from "lucide-react";
import FBImg from "../../assets/F&B.jpg";
import packedFoods from "../../assets/packedFoods.png";
import B2B from "../../assets/B2B.png";
import froots from "../../assets/froots.jpg";
import supplies from "../../assets/supplies.png";
import facilitymanagement from "../../assets/facilitymanagement.png";
import { Link } from "wouter";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1626216378161-3d95b26775e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "F&B Solution",
    goToLink: "/services/cafeteria",
  },
  {
    image:
      "https://images.unsplash.com/photo-1735138580230-ff15367d13cf?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Tea/Coffee Vending",
    goToLink: "/services/vending/coffee",
  },
  {
    // image: packedFoods,
    image:
      "https://images.unsplash.com/photo-1575224526797-5730d09d781d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Snacks Vending",
    goToLink: "/services/vending/snacks",
  },
  {
    // image: facilitymanagement,
    image:
      "https://plus.unsplash.com/premium_photo-1726662888316-99f7cd75f34d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "B2B/Housekeeping",
    goToLink: "/services/housekeeping",
  },
  {
    // image: supplies,
    image:
      "https://images.unsplash.com/photo-1653946402569-a493931970c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
                    className="w-full h-48 object-cover"
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
