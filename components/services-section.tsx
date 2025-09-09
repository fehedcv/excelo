import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Megaphone, Cog, ShoppingCart, BarChart3, ArrowRight, Sparkles } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Megaphone,
      title: "Digital Marketing & Strategy",
      description:
        "Comprehensive digital marketing solutions including SEO, social media, content marketing, and paid advertising to amplify your brand reach.",
      features: ["SEO Optimization", "Social Media Management", "Content Strategy", "PPC Campaigns"],
      color: "from-secondary/20 to-secondary/10",
    },
    {
      icon: Cog,
      title: "Business Automation Solutions",
      description:
        "Streamline operations with custom automation tools, workflow optimization, and integration solutions that save time and reduce costs.",
      features: ["Workflow Automation", "CRM Integration", "Process Optimization", "Custom Tools"],
      color: "from-accent/20 to-accent/10",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Development",
      description:
        "Build powerful online stores with seamless user experiences, secure payment processing, and scalable architecture for growth.",
      features: ["Custom E-commerce", "Payment Integration", "Inventory Management", "Mobile Optimization"],
      color: "from-chart-3/20 to-chart-3/10",
    },
    {
      icon: BarChart3,
      title: "Data Analytics & Insights",
      description:
        "Transform raw data into actionable insights with advanced analytics, reporting dashboards, and business intelligence solutions.",
      features: ["Custom Dashboards", "Performance Tracking", "Predictive Analytics", "ROI Measurement"],
      color: "from-chart-4/20 to-chart-4/10",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Digital Solutions for <span className="text-secondary">Modern Entrepreneurs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              From strategy to execution, we provide end-to-end digital services that drive growth, enhance efficiency,
              and create competitive advantages for your business.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                <CardHeader className="pb-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}
                    >
                      <service.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-secondary transition-colors">
                      {service.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-pretty">{service.description}</p>

                  {/* Features List */}
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-secondary/10 transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-secondary/10 via-accent/10 to-secondary/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Let's discuss how our digital solutions can accelerate your growth and give you a competitive edge.
              </p>
              <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
