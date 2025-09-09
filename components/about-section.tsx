import { Card, CardContent } from "@/components/ui/card"
import { Target, Users, Lightbulb, Award } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description:
        "We align digital solutions with your business objectives for maximum impact and sustainable growth.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships based on trust and measurable results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description:
        "We leverage cutting-edge technologies and creative strategies to keep you ahead of the competition.",
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Our track record speaks for itself with hundreds of successful digital transformations.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Empowering Entrepreneurs Through <span className="text-secondary">Digital Innovation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              At Excelo, we believe every entrepreneur deserves access to world-class digital solutions. Our mission is
              to democratize technology and make digital transformation accessible to businesses of all sizes.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12 mb-16">
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty">
                To empower entrepreneurs with innovative digital solutions that drive growth, enhance efficiency, and
                create lasting competitive advantages in an increasingly digital world.
              </p>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-pretty">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">99%</div>
              <div className="text-muted-foreground">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
