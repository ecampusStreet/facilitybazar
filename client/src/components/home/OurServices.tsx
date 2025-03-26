import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import S1 from "../../assets/packedFoods.png";
import snacksVending from "../../assets/snacksVending.jpeg";
import S4 from "../../assets/s4.jpeg";

const services = [
  {
    icon: S1,
    title: "High Quality Packed Food",
    description:
      "Etiam viverra nibh at lorem hendrerit porta non nec ligula. Donec hendrerit porttitor pretium.",
  },
  {
    icon: snacksVending,
    title: "Fully Customizable",
    description:
      "Vivamus nec vehicula felis, sit amet convallis ex. Aenean dolor risus, rutrum at tincidunt eget.",
  },
  {
    icon: S4,
    title: "Best Cleaning Solutions supplies",
    description:
      "Praesent nec dui sed urna pharetra dapibus at ac elit. Aenean hendrerit metus leo.",
  },
];

export default function OurServices() {
  return (
    <section className="py-16 bg-white px-10">
      <div className="container mx-auto max-w-screen-xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mt-2">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6 text-center">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-56 h-56 mx-auto mb-4"
                />
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gray-50 rounded-lg">
            <h4 className="text-2xl font-bold mb-4">FB Blog</h4>
            <p className="text-gray-600 mb-6">Content of the Blog.</p>
            <Button>Discover More</Button>
          </div>

          <div className="p-8 bg-gray-50 rounded-lg">
            <Accordion type="single" collapsible>
              <AccordionItem value="summer">
                <AccordionTrigger>Summer Protein</AccordionTrigger>
                <AccordionContent>Contents about the protein.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="winter">
                <AccordionTrigger>Winter Protein</AccordionTrigger>
                <AccordionContent>Contents about the protein.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="featured">
                <AccordionTrigger>Featured Protein</AccordionTrigger>
                <AccordionContent>Contents about the protein.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
