import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Building2, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Building2,
    title: "Professional Excellence",
    description: "We maintain the highest standards in facility management and corporate services."
  },
  {
    icon: Target,
    title: "Customer Focus",
    description: "Understanding and exceeding our clients' expectations is our top priority."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Our strength lies in working together to deliver comprehensive solutions."
  },
  {
    icon: Award,
    title: "Innovation",
    description: "We continuously evolve and adopt new technologies to enhance our services."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative container mx-auto h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">About Facility Bazar</h1>
              <p className="text-lg">
                Your trusted partner in comprehensive facility management and corporate services
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                Facility Bazar was founded with a vision to transform corporate facility management
                through innovative solutions and exceptional service. We understand the unique
                challenges businesses face in maintaining efficient workspaces and have developed
                comprehensive solutions to address these needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                  src="/img/about-1.jpg"
                  alt="Our Office"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="/img/about-2.jpg"
                  alt="Our Team"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                To provide innovative and sustainable facility management solutions that enable
                businesses to focus on their core operations while we handle their workspace needs
                with excellence and reliability.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
