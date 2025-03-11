import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const places = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661962736569-58a67b0a2469?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: { day: 28, month: "August" },
    title: "Bengaluru",
    category: "Category One",
    description: "Description about the place",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661962736569-58a67b0a2469?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: { day: 20, month: "September" },
    title: "Mysore",
    category: "Category Two",
    description: "Content about the place",
  },
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661962736569-58a67b0a2469?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: { day: 12, month: "October" },
    title: "Chennai",
    category: "Category Three",
    description: "Description of the place",
  },
];

export default function FeaturedPlaces() {
  return (
    <section className="py-16 bg-gray-50 px-10">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Featured Places</span>
          <h2 className="text-3xl font-bold mt-2">Lists of places</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg text-center">
                    <div className="text-2xl font-bold">{place.date.day}</div>
                    <div className="text-sm">{place.date.month}</div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{place.title}</h4>
                  <span className="text-primary">{place.category}</span>
                  <p className="mt-4 text-gray-600">{place.description}</p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <Button variant="outline">Add to favorites</Button>
                    <Button>Continue Reading</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
