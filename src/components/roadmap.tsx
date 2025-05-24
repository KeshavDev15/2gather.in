import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  CheckCircle, 
  Clock, 
  Rocket, 
  Sparkles 
} from "lucide-react";

const roadmapItems = [
  {
    quarter: "Q1 2025",
    status: "completed" as const,
    icon: CheckCircle,
    title: "Core Platform Launch",
    description: "Basic event creation, discovery, and RSVP functionality with user profiles and messaging.",
    features: ["Event Management", "User Profiles", "Basic Messaging", "Location Services"]
  },
  {
    quarter: "Q2 2025",
    status: "in-progress" as const,
    icon: Clock,
    title: "Enhanced Community Features",
    description: "Advanced community tools, group management, and improved discovery algorithms.",
    features: ["Group Management", "Smart Recommendations", "Advanced Filters", "Community Analytics"]
  },
  {
    quarter: "Q3 2025",
    status: "planned" as const,
    icon: Rocket,
    title: "Mobile App & Integrations",
    description: "Native mobile applications and third-party integrations for seamless event management.",
    features: ["iOS/Android Apps", "Calendar Integration", "Payment Processing", "API Platform"]
  },
  {
    quarter: "Q4 2025",
    status: "future" as const,
    icon: Sparkles,
    title: "AI-Powered Features",
    description: "Smart event suggestions, automated scheduling, and personalized community recommendations.",
    features: ["AI Recommendations", "Smart Scheduling", "Content Moderation", "Predictive Analytics"]
  }
];

const statusConfig = {
  completed: {
    badge: "Completed",
    variant: "default" as const,
    bgColor: "bg-green-500/10",
    iconColor: "text-green-600"
  },
  "in-progress": {
    badge: "In Progress",
    variant: "secondary" as const,
    bgColor: "bg-blue-500/10",
    iconColor: "text-blue-600"
  },
  planned: {
    badge: "Planned",
    variant: "outline" as const,
    bgColor: "bg-orange-500/10",
    iconColor: "text-orange-600"
  },
  future: {
    badge: "Future",
    variant: "outline" as const,
    bgColor: "bg-purple-500/10",
    iconColor: "text-purple-600"
  }
};

export function Roadmap() {
  return (
    <section id="roadmap" className="py-10 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mx-auto">
            Our Roadmap
          </h2>
          <p className="mt-4 text-lg text-muted-foreground mx-auto text-center">
            See what we&apos;re building and what&apos;s coming next. We&apos;re constantly evolving to serve our community better.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 lg:grid-cols-2 place-items-center lg:place-items-stretch">
          {roadmapItems.map((item) => {
            const config = statusConfig[item.status];
            return (
              <Card key={item.quarter} className="relative overflow-hidden group hover:shadow-lg transition-all duration-300 w-full max-w-md lg:max-w-none mx-auto">
                <CardHeader className="pb-4 text-center lg:text-left">
                  <div className="flex items-center justify-between">
                    <Badge variant={config.variant}>{config.badge}</Badge>
                    <span className="text-sm font-medium text-muted-foreground">{item.quarter}</span>
                  </div>
                  <div className="flex items-center space-x-3 mt-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${config.bgColor}`}>
                      <item.icon className={`h-5 w-5 ${config.iconColor}`} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-base">
                    {item.description}
                  </CardDescription>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
