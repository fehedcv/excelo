import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Twitter, Mail } from "lucide-react"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Fahad Mohammed Kabeer",
      title: "Chief Executive Officer & Founder",
      bio: "I am Fahad, a passionate and curious learner from Malappuram, Kerala. I’m currently a first-year Computer Engineering diploma student, eager to explore technology and cybersecurity. I enjoy building projects, experimenting with new tools, and improving my skills every day. My goal is to grow into an expert and contribute meaningfully to the tech world.",
      image: "/testimonial-sarah-mitchell.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Diyan",
      title: "Chief Technology Officer",
      bio: "Hi, my name is Muhammad Diyan, and I am someone who is always eager to learn and improve myself. I enjoy taking on challenges because they help me grow and discover new strengths. I believe in working hard and staying consistent in everything I do, whether it’s in academics or personal goals. I consider myself curious and open-minded, which allows me to adapt and learn from different experiences. ",
      image: "/professional-headshot-of-david-chen--cto--asian-te.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Suhair KK",
      title: "Head of Digital Strategy",
      bio: "Suhair KK is a motivated and enthusiastic student from Kerala. He is passionate about learning new technologies and developing practical skills. Always curious and hardworking, he aims to explore opportunities that challenge and enhance his knowledge.",
      image: "/professional-headshot-of-maria-rodriguez--marketin.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#",
      },
    },
    {
      name: "Aditya Narayanan",
      title: "Social Media Manager",
      bio: "Adithyanarayanan is a dedicated and ambitious individual from Kerala, interested in technology and creative solutions. He enjoys working on projects that challenge him and help him develop new skills, aiming to contribute meaningfully to his field.",
      image: "/professional-headshot-of-james-thompson--software-.jpg",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "james@excelo.com",
      },
    },
  ]

  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Meet the Visionaries Behind <span className="text-secondary">Your Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Our diverse team of experts brings together decades of experience in technology, strategy, and
              entrepreneurship to drive your digital transformation.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <CardContent className="p-0">
                  {/* Profile Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Social Links */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={member.social.linkedin}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                    <p className="text-secondary font-medium mb-3">{member.title}</p>
                    <p className="text-sm text-muted-foreground text-pretty">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Join Team CTA */}
          {/*<div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Join Our Growing Team</h3>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                We're always looking for talented individuals who share our passion for empowering entrepreneurs through
                digital innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-colors font-medium"
                >
                  View Open Positions
                </a>
                <a
                  href="mailto:careers@excelo.com"
                  className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium"
                >
                  Send Your Resume
                </a>
              </div>
            </div>
          </div>*/}
        </div>
      </div>
    </section>
  )
}
