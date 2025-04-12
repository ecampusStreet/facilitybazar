import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Building2, Target, Users, Award } from "lucide-react";

const values = [
  {
    icon: Building2,
    title: "Professional Excellence",
    description:
      "We maintain the highest standards in facility management and corporate services.",
  },
  {
    icon: Target,
    title: "Customer Focus",
    description:
      "Understanding and exceeding our clients' expectations is our top priority.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Our strength lies in working together to deliver comprehensive solutions.",
  },
  {
    icon: Award,
    title: "Innovation",
    description:
      "We continuously evolve and adopt new technologies to enhance our services.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-primary to-primary/80">
          <div className="absolute inset-0 aboutBackground bg-black/50" />
          <div className="relative container mx-auto h-full flex items-center justify-center text-center max-w-screen-xl">
            <div className="text-white max-w-2xl">
              <h1 className="text-4xl font-bold mb-4">About Facility Bazar</h1>
            </div>
          </div>
        </div>

        <section className="py-6 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Your trusted partner in comprehensive facility management and
                corporate services
              </h2>

              <p className="text-gray-600">
                In today’s fast-paced world, businesses and individuals face
                increasing challenges in managing their facilities efficiently.
                The need for reliable, cost-effective, and professional facility
                management services has never been more critical. FacilityBazar
                was founded with a vision to bridge the gap between service
                providers and consumers, offering a one-stop solution for all
                facility-related needs.
              </p>
            </div>
          </div>
        </section>
        <section className="py-3 bg-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">
                At FacilityBazar, our mission is to simplify facility management
                by offering a seamless, technology-driven marketplace where
                businesses and individuals can find reliable services with ease.
                We aim to enhance efficiency, reduce operational costs, and
                ensure top-notch quality across all facility management needs.
              </p>
            </div>
          </div>
        </section>
        <section className="py-3 bg-white">
          <div className="container mx-auto max-w-screen-xl">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                FacilityBazar was born out of a simple yet powerful idea: to
                revolutionize the way facility management services are accessed
                and delivered. The founders, with extensive experience in
                facility management, real estate, and technology, recognized the
                industry’s fragmented nature. Service seekers often struggled
                with inconsistent quality, lack of transparency, and unverified
                vendors. FacilityBazar set out to change this by creating a
                structured, tech-driven platform that connects customers with
                trusted service providers.
              </p>
              <p className="text-gray-600 mb-8">
                Starting as a small initiative, FacilityBazar rapidly expanded
                its offerings, integrating AI-driven analytics, real-time
                tracking, and verified professional networks. Today, we cater to
                a wide range of industries, including Corporate Offices,
                Residential Complexes, Retail Spaces, and Industrial units.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                  src="https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Office"
                  className="rounded-lg shadow-lg"
                />
                <img
                  src="https://images.unsplash.com/photo-1531498352491-042fbae4cf57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Our Team"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 px-10">
          <div className="container mx-auto max-w-screen-xl">
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
      </main>
      <Footer />
    </div>
  );
}
