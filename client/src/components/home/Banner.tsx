import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(2),
  mobile: z.string().min(10),
  email: z.string().email(),
  city: z.string().min(2),
  requirement: z.string().min(2)
});

export default function Banner() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      city: "",
      requirement: ""
    }
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <section className="banner relative min-h-[600px] bg-gray-100">
      <div className="container mx-auto pt-20 pb-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-black mb-4">
            Facility Bazar
          </h2>
          <p className="text-xl text-black">
            Modern Corporate Cafeteria – A Perfect Blend of Comfort & Convenience
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
