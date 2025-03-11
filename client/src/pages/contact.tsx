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

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+917022993388"],
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
      "17th Cross Rd, near Orion Mall, A Block, Milk Colony, 2nd Stage, Rajajinagar, Bengaluru, Karnataka 560010",
    ],
    href: "https://maps.app.goo.gl/pJCkuu95r8zbEP1J9",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Friday: 9 AM - 6 PM", "Saturday: 10 AM - 2 PM"],
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
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="relative h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.432561451216!2d77.55238987454712!3d13.00810331407798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17bbc051f1ab%3A0x5b567d40d77191c6!2sWebspruce!5e0!3m2!1sen!2sin!4v1741684220838!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          />
        </div>

        <section className="py-16 bg-white">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                <p className="text-gray-600">
                  Get in touch with us for any questions about our services or
                  to request a quote
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your name" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="Your email" {...field} />
                            </FormControl>
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
                              <Input placeholder="Message subject" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Your message"
                                className="min-h-[150px]"
                                {...field}
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <Button type="submit">Send Message</Button>
                    </form>
                  </Form>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h2>
                  <div className="grid gap-6">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <item.icon className="w-6 h-6 text-primary mt-1" />
                        <div>
                          <h3 className="font-bold mb-2">{item.title}</h3>
                          {item.details.map((detail, i) => (
                            <p key={i} className="text-gray-600">
                              {item.href ? (
                                <a
                                  href={item.href}
                                  className="hover:text-primary transition-colors"
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
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
