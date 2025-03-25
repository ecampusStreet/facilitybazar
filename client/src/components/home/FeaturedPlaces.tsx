import useEmblaCarousel from "embla-carousel-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import bengaluru from "../../assets/bengaluru.png";
import chennai from "../../assets/chennai.png";

const places = [
  {
    image: bengaluru,
    date: { day: 28, month: "August" },
    title: "Bengaluru",
    category: "Category One",
    description: "Description about the place",
  },
  {
    image: chennai,
    date: { day: 20, month: "September" },
    title: "Mysore",
    category: "Category Two",
    description: "Content about the place",
  },
  {
    image: chennai,

    date: { day: 12, month: "October" },
    title: "Chennai",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: chennai,
    date: { day: 12, month: "October" },
    title: "Chennai",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: chennai,
    date: { day: 12, month: "October" },
    title: "Chennai",
    category: "Category Three",
    description: "Description of the place",
  },
];

export default function FeaturedPlaces() {
  return (
    <div className="max-w-screen-xl mx-auto py-20 relative">
      <Carousel className="overflow-hidden">
        <CarouselContent className="flex gap-5">
          {places.map((place, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_80%] md:flex-[0_0_30%]"
            >
              <Card className="overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={place.image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="p-4 text-center">
                    <Button className="w-full">View</Button>
                  </div> */}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
