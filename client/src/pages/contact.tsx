import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FormSelect } from "@/components/ui/FormSelect";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  services: z.string(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const options = [
  {
    value: "Cafeteria Management Solutions",
    label: "Cafeteria Management Solutions",
  },
  { value: "Tea/Coffee Vending", label: "Tea/Coffee Vending" },
  { value: "Snacks Vending", label: "Snacks Vending" },
  { value: "Corporate Services", label: "Corporate Services" },
  { value: "Stationary Supply", label: "Stationary Supply" },
];

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7022 993 388"],
    href: "tel:+917022993388",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@facilitybazar.com"],
    href: "mailto:info@facilitybazar.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: [
      "17th Cross Rd, near Orion Mall, Rajajinagar, Bengaluru, Karnataka 560010",
    ],
    href: "https://maps.app.goo.gl/pJCkuu95r8zbEP1J9",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9 AM - 6 PM", "Sat: 10 AM - 2 PM"],
    href: null,
  },
];

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      services: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Banner */}
      <div className="relative h-[380px] ContactBackground bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-6xl font-bold mb-2">Get in Touch</h1>
          <p>
            Reach out to us for more information about our products and
            services.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="bg-gray-50 -mt-20 pb-6 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden md:flex relative z-10">
            {/* Contact Info */}
            <div className="bg-blue-600 text-white p-8 md:w-1/2">
              <h2 className="text-2xl font-semibold mb-6">Contact</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <item.icon className="w-6 h-6 mt-1 text-white" />
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="text-sm">
                          {item.href ? (
                            <a
                              href={item.href}
                              className="hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div className="mt-6 flex space-x-4 text-xl">
                <FaFacebookF className="text-white text-xl" />
                <a href="#" className="hover:text-white">
                  <FaLinkedinIn className="text-white text-xl" />
                </a>
                <a href="#" className="hover:text-white">
                  <FaInstagram className="text-white text-xl" />
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:w-1/2 bg-white">
              <h2 className="text-2xl font-semibold mb-6">Send us a message</h2>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="services"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select the Service</FormLabel>
                        <FormSelect
                          label="Select the Service"
                          options={options}
                          placeholder="Choose a Service"
                          {...field}
                        />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter subject" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="mt-4">
                    Send
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
