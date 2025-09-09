import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Alex Johnson",
      company: "TechStart Solutions",
      role: "CEO & Founder",
      content:
        "Excelo transformed our entire digital presence. Their strategic approach to automation increased our efficiency by 400% and reduced operational costs by 60%. The ROI has been incredible.",
      rating: 5,
      image: "/professional-headshot-of-alex-johnson--ceo--confid.jpg",
    },
    {
      name: "Lisa Chen",
      company: "EcoGreen Marketplace",
      role: "Co-Founder",
      content:
        "The e-commerce platform Excelo built for us exceeded all expectations. We saw a 250% increase in online sales within the first quarter. Their attention to user experience is unmatched.",
      rating: 5,
      image: "/professional-headshot-of-lisa-chen--entrepreneur--.jpg",
    },
    {
      name: "Michael Rodriguez",
      company: "Fitness Forward",
      role: "Marketing Director",
      content:
        "Working with Excelo's digital marketing team was a game-changer. They helped us scale from 10K to 100K followers and increased our conversion rate by 180%. Truly exceptional results.",
      rating: 5,
      image: "/professional-headshot-of-michael-rodriguez--market.jpg",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Success Stories from <span className="text-secondary">Empowered Entrepreneurs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Don't just take our word for it. Here's what our clients say about their digital transformation journey
              with Excelo.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-secondary" />
                </div>

                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Testimonial Content */}
                  <blockquote className="text-muted-foreground mb-6 text-pretty">"{testimonial.content}"</blockquote>

                  {/* Author Info */}
                  <div className="flex items-center space-x-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Results Summary */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">400%</div>
              <div className="text-muted-foreground">Average Efficiency Increase</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">250%</div>
              <div className="text-muted-foreground">Average Sales Growth</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">180%</div>
              <div className="text-muted-foreground">Conversion Rate Improvement</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">60%</div>
              <div className="text-muted-foreground">Cost Reduction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
