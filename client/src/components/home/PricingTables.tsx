import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Plan",
    price: 25,
    features: [
      "100 Suspendisse dapibus",
      "10x Paleo celiac enamel",
      "Williamsburg organic post ironic",
      "Helvetica pinterest yuccie",
      "Plaid shabby chic godard"
    ]
  },
  {
    name: "Premium Plan",
    price: 45,
    features: [
      "200 Suspendisse dapibus",
      "20x Paleo celiac enamel",
      "Williamsburg organic post ironic",
      "Helvetica pinterest yuccie",
      "Plaid shabby chic godard"
    ]
  },
  {
    name: "Advanced Plan",
    price: 85,
    features: [
      "400 Suspendisse dapibus",
      "40x Paleo celiac enamel",
      "Williamsburg organic post ironic",
      "Helvetica pinterest yuccie",
      "Plaid shabby chic godard"
    ]
  }
];

export default function PricingTables() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Pricing Tables</span>
          <h2 className="text-3xl font-bold mt-2">Payment Plans Designed for you.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="text-center p-6 border-b">
                  <h4 className="text-xl font-bold mb-4">{plan.name}</h4>
                  <div className="text-4xl font-bold mb-2">${plan.price}</div>
                  <span className="text-gray-600">/monthly</span>
                </div>

                <ul className="my-6 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="w-full">Buy It Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
