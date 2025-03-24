"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Mail, MapPin, ExternalLink, Linkedin, Instagram, FileText } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-background">
      <div className="netflix-container">
        <h2 className="section-heading">
          Contact Me
          <ChevronRight className="h-8 w-8 text-primary ml-2" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-6">
              I'm interested in UI/UX design opportunities, collaborative projects, and connecting with
              fellow designers. If you're looking for a passionate designer with a fresh perspective,
              I'd love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <a href="mailto:riyakolekar86@gmail.com" className="text-foreground hover:text-primary transition-colors">
                  riyakolekar86@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <span className="text-muted-foreground">
                  Mumbai, India (Available for remote work)
                </span>
              </div>
            </div>

            {/* Resume Link */}
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Resume</h4>
              <a
                href="/Riya_Kolekar_CV.jpg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors flex items-center"
              >
                <FileText className="h-5 w-5 text-primary mr-3" />
                View My Resume
              </a>
            </div>

            {/* Social links */}
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <Link href="https://www.linkedin.com/in/riya-kolekar-a80a1b283/" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </Link>
                <Link href="https://www.instagram.com/riyakolekar.08/" target="_blank" rel="noopener noreferrer" className="bg-card hover:bg-card/80 p-3 rounded-full transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <Card className="bg-card border border-border/50">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>
                <form className="space-y-4 contact-form">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="Project inquiry, collaboration, etc."
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <Button type="submit" className="netflix-button">
                    Send Message
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-2">
                    I am a first-year UI/UX design student, passionate about creating user-centered
                    products that enhance user experiences through intuitive and accessible solutions.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
