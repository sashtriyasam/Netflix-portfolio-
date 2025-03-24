"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

interface Experience {
  id: string;
  position: string;
  organization: string;
  period: string;
  description: string[];
  tags: string[];
}

const experiences: Experience[] = [
  {
    id: "exp1",
    position: "Event Management and Support",
    organization: "Malhar Fest",
    period: "2022 & 2023",
    description: [
      "Participated in Malhar Fest, supporting event coordination",
      "Assisted with logistics and attendee experience",
      "Helped manage various cultural performances",
      "Gained hands-on experience in event organization"
    ],
    tags: ["Event Planning", "Team Coordination", "Cultural Events"]
  },
  {
    id: "exp2",
    position: "Social Media Department",
    organization: "IRMUN",
    period: "2023-2024",
    description: [
      "Worked in IRMUN's Social Media Department",
      "Managed content creation and publishing",
      "Increased engagement through strategic content planning",
      "Collaborated with team to maintain consistent brand messaging"
    ],
    tags: ["Social Media", "Content Creation", "Digital Marketing"]
  },
  {
    id: "exp3",
    position: "Management Department Contributor",
    organization: "ADI Avantika",
    period: "2024",
    description: [
      "Contributed to the Management Department of ADI Avantika",
      "Assisted with organizational initiatives and projects",
      "Collaborated with team members on design-related tasks",
      "Gained valuable experience in design community operations"
    ],
    tags: ["Management", "Organization", "Design Community"]
  },
  {
    id: "exp4",
    position: "Participant",
    organization: "Aaroha Fest",
    period: "2025",
    description: [
      "Participated in Aaroha Fest 2025",
      "Engaged in various cultural and creative activities",
      "Collaborated with fellow students on event presentations",
      "Enhanced skills in team coordination and creative execution"
    ],
    tags: ["Cultural Events", "Teamwork", "Creative Arts"]
  },
  {
    id: "exp5",
    position: "Founder",
    organization: "Being Conscious Club",
    period: "2024",
    description: [
      "Founded the Being Conscious club at college",
      "Developed club mission, vision, and activities",
      "Organized meetings and events for members",
      "Created opportunities for awareness and personal growth"
    ],
    tags: ["Leadership", "Organization", "Community Building"]
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-background">
      <div className="netflix-container">
        <h2 className="section-heading">
          Experience & Education
          <ChevronRight className="h-8 w-8 text-primary ml-2" />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Extracurricular Activities</h3>
            <div className="space-y-6">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.id} experience={exp} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Educational History</h3>

            <div className="space-y-8">
              <div className="experience-card">
                <h4 className="text-lg font-bold">College</h4>
                <p className="text-primary font-medium mt-1">B.Des in UX</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Avantika University, Ujjain, Madhya Pradesh (2024-2028)</span>
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h4 className="text-lg font-bold">School and Junior College</h4>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>People's Education Society English Medium High School and Junior college, Thane (east) (2022)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>St. Xavier's college, Mumbai (2024)</span>
                  </li>
                </ul>
              </div>

              <div className="experience-card">
                <h4 className="text-lg font-bold">Contact Information</h4>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Email: riyakolekar86@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a
                      href="/Riya_Kolekar_CV.jpg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors"
                    >
                      View Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <div className="experience-card">
      <h4 className="text-lg font-bold">{experience.organization}</h4>
      <p className="text-primary font-medium mt-1">{experience.position}</p>
      <p className="text-sm text-muted-foreground mt-1">{experience.period}</p>

      <ul className="mt-3 space-y-2">
        {experience.description.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-primary mr-2">•</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2 mt-4">
        {experience.tags.map((tag) => (
          <span key={tag} className="bg-card/50 border border-border/30 px-2 py-0.5 rounded-sm text-xs">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
