import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-muted/30 to-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary font-medium text-sm mb-8 animate-fade-in-up">
            <Zap className="w-4 h-4 mr-2" />
            Empowering entrepreneurs, digitally.
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up text-balance">
            Transform Your Business with{" "}
            <span className="text-transparent bg-gradient-to-r from-secondary to-accent bg-clip-text">
              Digital Excellence
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in-up text-pretty">
            We empower entrepreneurs to scale their businesses through innovative digital solutions, cutting-edge
            technology, and strategic growth partnerships.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-4">
              Schedule Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
              Learn More
            </Button>
          </div>

          {/* Stats */}
          {/*<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 animate-fade-in-up">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-muted-foreground">Businesses Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">95%</div>
              <div className="text-muted-foreground">Client Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">$50M+</div>
              <div className="text-muted-foreground">Revenue Generated</div>
            </div>
          </div>*/}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <TrendingUp className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
