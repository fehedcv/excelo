"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "+91 8289848173",
      link: "tel:+918289848173",
    },
    {
      icon: Mail,
      title: "Email",
      details: "excelo4444@gmail.com",
      link: "mailto:excelo4444@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: "Seethi Sahib Memorial Polytechnic College, Kerala, India",
      link: "https://maps.app.goo.gl/vyLndLQMgmF8qgAQ6",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 9AM-6PM PST",
      link: "#",
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1GshwMqCpE/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/Excelo213310", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/excelo-4-6b4880384", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/excelo.cps?igsh=eXBtcGFkeXUyczIw", label: "Instagram" },
  ]

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Ready to Transform <span className="text-secondary">Your Business?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              Let's discuss how we can help you achieve your digital transformation goals. Get in touch for a free
              consultation and discover the possibilities.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                          Company Name
                        </label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project and how we can help..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-secondary hover:bg-secondary/90">
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Details */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.title}</div>
                        <a
                          href={info.link}
                          className="text-muted-foreground hover:text-secondary transition-colors text-sm"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center hover:bg-secondary/20 transition-colors"
                        aria-label={social.label}
                      >
                        <social.icon className="w-5 h-5 text-secondary" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              {/*<Card>
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-secondary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Interactive Map</div>
                      <div className="text-xs text-muted-foreground">Coming Soon</div>
                    </div>
                  </div>
                </CardContent>
              </Card>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
