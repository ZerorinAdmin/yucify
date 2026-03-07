import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { 
  TrendingUp, 
  Target, 
  DollarSign, 
  Eye, 
  Zap, 
  BarChart3,
  Users,
  LineChart,
  AlertCircle,
  Sparkles,
  Split,
  Globe
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Real-Time Campaign Analytics",
    description: "Monitor all your Meta ad campaigns with real-time performance data and instant insights across Facebook and Instagram.",
  },
  {
    icon: Target,
    title: "Audience Intelligence",
    description: "Deep dive into audience behavior, demographics, and engagement patterns to optimize your targeting strategies.",
  },
  {
    icon: DollarSign,
    title: "ROAS Optimization",
    description: "AI-powered recommendations to maximize your Return on Ad Spend with automated budget allocation suggestions.",
  },
  {
    icon: Eye,
    title: "Creative Performance Analysis",
    description: "Track which ad creatives perform best and get AI-driven recommendations for design improvements.",
  },
  // {
  //   icon: Split,
  //   title: "A/B Testing Insights",
  //   description: "Automatically analyze your split tests and identify winning variations with statistical significance.",
  // },
  {
    icon: Zap,
    title: "Automated Alerts",
    description: "Get instant notifications when campaigns underperform or opportunities arise to scale winning ads.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast campaign performance and budget requirements using advanced machine learning models.",
  },
  {
    icon: Users,
    title: "Multi-Account Management",
    description: "Manage unlimited ad accounts from a single dashboard with cross-account reporting and insights.",
  },
  {
    icon: Globe,
    title: "Competitor Benchmarking",
    description: "Compare your performance against industry benchmarks and stay ahead of the competition.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl">
            Everything You Need to Master Meta Ads
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform provides comprehensive analytics and automation to help you 
            optimize every aspect of your Facebook and Instagram advertising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-border/50 hover:border-border transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}