"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="netflix-container">
        <h2 className="section-heading">
          About Me
          <ChevronRight className="h-8 w-8 text-primary ml-2" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">
              UI/UX Student
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am a first-year UI/UX design student, passionate about creating
                user-centered products that enhance user experiences through
                intuitive and accessible solutions.
              </p>
              <p>
                My journey in design combines my passion for visual aesthetics with a
                deep interest in user behavior and psychology. I strive to create
                interfaces that not only look appealing but also provide seamless
                experiences for users of all backgrounds.
              </p>
              <p>
                As a student at Avantika University pursuing B.Des in UX, I'm constantly
                learning and exploring new concepts while applying them to practical projects.
              </p>
            </div>

            {/* Education and Location cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <Card className="bg-card/50 border border-border/50">
                <CardContent className="p-4">
                  <h4 className="text-lg font-medium mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">B.Des in UX</p>
                  <p className="text-sm text-muted-foreground">Avantika University, Ujjain (2024-2028)</p>
                </CardContent>
              </Card>
              <Card className="bg-card/50 border border-border/50">
                <CardContent className="p-4">
                  <h4 className="text-lg font-medium mb-2">Location</h4>
                  <p className="text-sm text-muted-foreground">Mumbai, India</p>
                  <p className="text-sm text-muted-foreground">Available for remote work</p>
                </CardContent>
              </Card>
            </div>

            {/* Core skills */}
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-3">Core Skills</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Wireframing & Prototyping",
                  "Figma & Illustrator",
                  "Problem-Solving",
                  "Accessibility Design",
                  "Empathy in Design",
                  "Communication Skills",
                  "Critical Thinking"
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-card/50 border border-border/30 px-3 py-1 rounded-sm text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center items-start">
            <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-md">
              {/* Riya's profile image - using background image instead of Next.js Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/images/profile-riya-kolekar.jpg')" }}
              ></div>

              {/* Netflix-style info overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                <h3 className="text-xl font-bold text-white">Riya Kolekar</h3>
                <p className="text-white/70">UI/UX Student</p>
                <div className="flex items-center space-x-2 mt-2">
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">DESIGNER</span>
                  <span className="text-white/70 text-xs">Mumbai, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
