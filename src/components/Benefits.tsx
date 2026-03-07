import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Increase ROAS by 200-400%",
  "Reduce ad spend waste by 45%",
  "Scale winning campaigns confidently",
  "Automate reporting and insights",
  "Identify high-performing audiences",
  "Optimize creative performance"
];

const useCases = [
  {
    title: "E-commerce Brands",
    description: "Scale your product sales with data-driven insights and automated campaign optimization.",
    image: "https://images.unsplash.com/photo-1585144860131-245d551c77f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMGJ1c2luZXNzfGVufDF8fHx8MTc3MjYzMTE0OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Marketing Agencies",
    description: "Manage multiple client accounts efficiently with unified reporting and white-label solutions.",
    image: "https://images.unsplash.com/photo-1636645096936-fc8704bc8083?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBhZ2VuY3klMjB0ZWFtJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI2MzExNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    title: "Growth Marketers",
    description: "Leverage AI-powered insights to discover opportunities and maximize ad performance at scale.",
    image: "https://images.unsplash.com/photo-1657812670261-7b76ba04525c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwZ3Jvd3RoJTIwY2hhcnR8ZW58MXx8fHwxNzcyNjMxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Benefits() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Drive Real Business Growth
              </h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of brands and agencies using AdInsights to transform 
                their Meta advertising performance and maximize profitability.
              </p>
            </div>

            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {useCases.map((useCase, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col sm:flex-row">
                    <div className="sm:w-1/3">
                      <ImageWithFallback
                        src={useCase.image}
                        alt={useCase.title}
                        className="w-full h-32 sm:h-full object-cover"
                      />
                    </div>
                    <div className="sm:w-2/3 p-6">
                      <h3 className="text-xl mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground">{useCase.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}