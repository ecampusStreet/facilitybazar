import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PenTool, FileText, BoxSelect, Leaf } from "lucide-react";

const categories = [
  {
    icon: PenTool,
    title: "Writing Instruments",
    description:
      "Premium pens, pencils, markers, and highlighters for every writing need.",
    items: ["Pens", "Pencils", "Markers", "Highlighters"],
  },
  {
    icon: FileText,
    title: "Paper Products",
    description:
      "High-quality paper supplies for all your documentation needs.",
    items: ["Copier Paper", "Notepads", "Notebooks", "Business Cards"],
  },
  {
    icon: BoxSelect,
    title: "Organization",
    description: "Keep your workspace tidy with our organization essentials.",
    items: ["Binders", "File Folders", "Desktop Organizers", "Storage Boxes"],
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Options",
    description:
      "Sustainable stationery products for environmentally conscious offices.",
    items: ["Recycled Paper", "Biodegradable Pens", "Eco-friendly Notebooks"],
  },
];

export default function StationaryPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px] bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="absolute officeBackground inset-0" />
          <div className="relative container mx-auto h-full flex items-center">
            <div className="text-white max-w-2xl px-10">
              <h1 className="text-4xl font-bold mb-4">
                Stationery, Office Supplies & Cleaning Products
              </h1>
              <p className="text-lg">
                Complete range of high-quality stationery and cleaning supplies
                for your business
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-gray-50 px-10">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our comprehensive range of office supplies designed to
                meet all your business needs while maintaining professional
                standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
              {categories.map((category, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <category.icon className="w-12 h-12 mb-4 text-primary" />
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <ul className="space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white px-20">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Why Choose Our Supplies?
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      1
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">Quality Assured</h3>
                      <p className="text-gray-600">
                        Premium products from trusted manufacturers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      2
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">Competitive Pricing</h3>
                      <p className="text-gray-600">
                        Best value for bulk orders and regular supplies
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center">
                      3
                    </span>
                    <div>
                      <h3 className="font-bold mb-1">Fast Delivery</h3>
                      <p className="text-gray-600">
                        Efficient delivery service to your office
                      </p>
                    </div>
                  </li>
                </ul>
                <Button size="lg" className="mt-8">
                  Request Catalog
                </Button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Office Supplies"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
