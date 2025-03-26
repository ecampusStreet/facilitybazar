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
import coimbatore from "../../assets/coimbatore.png";
import hyderabad from "../../assets/hyderabad.png";
import mumbai from "../../assets/mumbai.png";
import pune from "../../assets/pune.png";
import ncr from "../../assets/ncr.png";
import jaipur from "../../assets/jaipur.png";
import indore from "../../assets/indore.png";
import goa from "../../assets/goa.png";
import kolkata from "../../assets/kolkata.png";
import bhubaneswar from "../../assets/bhubaneswar.png";

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
    title: "Chennai",
    category: "Category Two",
    description: "Content about the place",
  },
  {
    image: coimbatore,

    date: { day: 12, month: "October" },
    title: "Coimbatore",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: hyderabad,
    date: { day: 12, month: "October" },
    title: "Hyderabad",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: mumbai,
    date: { day: 12, month: "October" },
    title: "Mumbai",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: pune,
    date: { day: 12, month: "October" },
    title: "Pune",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: ncr,
    date: { day: 12, month: "October" },
    title: "NCR",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: jaipur,
    date: { day: 12, month: "October" },
    title: "Jaipur",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: indore,
    date: { day: 12, month: "October" },
    title: "Indore",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: goa,
    date: { day: 12, month: "October" },
    title: "GOA",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: kolkata,
    date: { day: 12, month: "October" },
    title: "Kolkata",
    category: "Category Three",
    description: "Description of the place",
  },
  {
    image: bhubaneswar,
    date: { day: 12, month: "October" },
    title: "Bhubaneswar",
    category: "Category Three",
    description: "Description of the place",
  },
];

export default function FeaturedPlaces() {
  return (
    <div className="max-w-screen-xl mx-auto py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mt-2">Regions We Serve</h2>
      </div>
      <Carousel className="">
        <CarouselContent className="flex gap-5">
          {places.map((place, index) => (
            <CarouselItem
              key={index}
              className="flex-[0_0_80%] md:flex-[0_0_30%]"
            >
              <Card className="group overflow-hidden shadow-lg transition-transform transform hover:scale-105 relative">
                <CardContent className="p-0">
                  <div className="relative">
                    <img
                      src={place.image}
                      alt={`Image ${place.title + index}`}
                      className="w-full h-full object-cover"
                    />

                    {/* Button appears on hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button className="bg-white text-black px-4 py-2 hover:bg-white">
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <div className="">
          <CarouselPrevious className="w-10 h-10 bg-cyan-600 text-white hover:bg-gray-300 hover:text-cyan-600 rounded-full flex" />
          <CarouselNext className="w-10 h-10 bg-cyan-600 text-white hover:bg-gray-300 hover:text-cyan-600 rounded-full flex" />
        </div>
      </Carousel>
    </div>
  );
}
