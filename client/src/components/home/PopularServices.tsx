import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import FBImg from "../../assets/F&B.jpg";
import packedFoods from "../../assets/packedFoods.png";
import B2B from "../../assets/B2B.png";
import froots from "../../assets/froots.jpg";
import supplies from "../../assets/supplies.png";
import facilitymanagement from "../../assets/facilitymanagement.png";

const services = [
  {
    image: FBImg,
    title: "F&B Solution",
    listings: 76,
  },
  {
    image: packedFoods,
    title: "Pre Cooked Meals",
    listings: 18,
  },
  {
    image: B2B,
    title: "B2B",
    listings: 55,
  },
  {
    image: supplies,
    title: "Office Supplies",
    listings: 66,
  },
  {
    image: facilitymanagement,
    title: "Facility Management",
    listings: 82,
  },
  {
    image: froots,
    title: "Fresh Fruits",
    listings: 76,
  },
];

export default function PopularServices() {
  return (
    <section className="py-16 bg-white px-20">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Popular Services</span>
          <h2 className="text-3xl font-bold mt-2">Selected Services</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {services.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4">
                <Card className="relative overflow-hidden">
                  <CardContent className="p-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                      <div className="text-center text-white">
                        <h4 className="text-xl font-bold">{service.title}</h4>
                        <span>{service.listings} listings</span>
                      </div>
                    </div>
                    <button className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-lg">
                      <Plus className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
