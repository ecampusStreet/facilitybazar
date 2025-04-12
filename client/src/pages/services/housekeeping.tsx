import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ShieldCheck, Recycle, Users } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Pantry Supplies",
    description:
      "Comprehensive selection of eco-friendly cleaning agents for various surfaces, ensuring a pristine workspace.",
  },
  {
    icon: ShieldCheck,
    title: "Housekeeping",
    description:
      "Advanced Housekeeping products for maintaining a healthy workspace with protection against harmful bacteria.",
  },
  {
    icon: Recycle,
    title: "Stationary & office supplies",
    description:
      "Complete Stationary & office supplies solutions including bins, recycling containers, and efficient segregation systems.",
  },
  {
    icon: Users,
    title: "Fresh Fruit Supply",
    description:
      "Professional Corporate Services staff and support for maintaining clean and organized workspaces.",
  },
];

const features = [
  {
    title: "Building Maintenance",
    description:
      "Comprehensive maintenance of core building systems including HVAC, electrical, and plumbing.",
    image:
      "https://plus.unsplash.com/premium_photo-1667520474224-5c4864b690e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Space Management",
    description:
      "Efficient space planning and utilization to optimize workplace functionality.",
    image:
      "https://plus.unsplash.com/premium_photo-1667520474224-5c4864b690e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Safety Compliance",
    description:
      "Ensuring adherence to health and safety standards with regular monitoring.",
    image:
      "https://plus.unsplash.com/premium_photo-1667520474224-5c4864b690e0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HousekeepingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-green-600 to-green-800">
          <div className="absolute houseBackground inset-0" />
          <div className="relative container mx-auto h-full flex items-center max-w-screen-xl">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">
                Professional Corporate Services
              </h1>
              <p className="text-lg">
                Comprehensive facility management and Corporate Services
                solutions for corporate environments
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50 px-10">
          <div className="container mx-auto max-w-screen-xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Corporate Services</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                . At FacilityBazar, we provide businesses with a seamless,
                cost-effective, and reliable solution for their corporate supply
                needs. Whether you require office essentials, hygiene and
                sanitation products, pantry supplies, or technology peripherals,
                our comprehensive procurement platform ensures efficiency,
                quality, and timely delivery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6 text-center">
                    <service.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-10">
          <div className="container mx-auto max-w-screen-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {feature.description}
                      </p>
                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">
                Ready to Transform Your Workplace?
              </h2>
              <p className="text-gray-600 mb-8">
                Contact us today to discuss how our professional corporate
                services services can benefit your organization.
              </p>
              <Button size="lg">Get a Quote</Button>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
