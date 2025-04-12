import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormSelect } from "../ui/FormSelect";

const formSchema = z.object({
  name: z.string().min(2),
  mobile: z.string().min(10),
  email: z.string().email(),
  city: z.string().min(2),
  services: z.string(),
  requirement: z.string().min(2),
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

export default function Banner() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
      services: "",
      requirement: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="banner relative min-h-screen bg-gray-900 text-white flex flex-col justify-between">
      {/* Hero Section */}
      <div className="container mx-auto flex flex-col items-center text-center py-18">
        <h2 className="text-5xl font-extrabold mb-4 text-[#fff]">
          Facility Bazar
        </h2>
        <p className="text-lg max-w-3xl text-gray-300">
          Modern Corporate Cafeteria – A Perfect Blend of Comfort & Convenience
        </p>
      </div>

      {/* Form Section */}
      <div className="bg-white text-black border-b-4 border-[#4775FF] py-6 mb-5 mt-5">
        <div className="container mx-auto max-w-4xl px-2">
          <h3 className="text-2xl font-semibold text-center mb-4">
            Get in Touch
          </h3>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Mobile" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Email" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="City" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="requirement"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Requirement" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormSelect
                    label="Select the Service"
                    options={options}
                    placeholder="Choose a Service"
                    {...field}
                  />
                )}
              />

              <Button type="submit" className="h-10">
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
