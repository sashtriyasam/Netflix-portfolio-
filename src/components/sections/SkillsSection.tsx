"use client";

import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: {
    name: string;
    proficiency: number; // 0-10
    description?: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Design Skills",
    skills: [
      { name: "Wireframing", proficiency: 9, description: "Creating low-fidelity mockups" },
      { name: "Prototyping", proficiency: 8.5, description: "Interactive designs" },
      { name: "Figma", proficiency: 9, description: "UI/UX design tool" },
      { name: "Illustrator", proficiency: 8, description: "Vector graphics" },
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", proficiency: 9, description: "Finding creative solutions" },
      { name: "Communication", proficiency: 8.5, description: "Clear and effective" },
      { name: "Empathy", proficiency: 9, description: "Understanding user needs" },
      { name: "Critical Thinking", proficiency: 8.5, description: "Analytical approach" },
    ]
  },
  {
    title: "Event Management",
    skills: [
      { name: "Event Planning", proficiency: 8.5, description: "Organization and coordination" },
      { name: "Social Media Management", proficiency: 9, description: "Content creation & strategy" },
      { name: "Team Leadership", proficiency: 8, description: "Managing groups" },
      { name: "Time Management", proficiency: 8.5, description: "Meeting deadlines" },
    ]
  }
];

// Additional skills without ratings
const additionalSkills = [
  "Accessibility Design",
  "User Research",
  "Design Thinking",
  "Visual Design",
  "Creative Direction",
  "Content Strategy",
  "Project Management",
  "Photography",
  "Adaptability",
  "Storytelling",
  "Team Collaboration",
  "Presentation Skills"
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-card">
      <div className="netflix-container">
        <h2 className="section-heading">
          My Skills
          <ChevronRight className="h-8 w-8 text-primary ml-2" />
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.title} className="mb-8">
              <h3 className="text-xl font-bold mb-6">{category.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}

          {/* Additional skills without ratings */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Additional Skills</h3>

            <div className="flex flex-wrap gap-3">
              {additionalSkills.map((skill) => (
                <span
                  key={skill}
                  className="bg-card/50 border border-border/30 px-3 py-1.5 rounded-sm text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Awards and Achievements */}
          <div className="mt-12">
            <h3 className="text-xl font-bold mb-6">Awards & Achievements</h3>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Achieved First Rank in Class 10 Board Examinations (2022)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Actively participated and managed Malhar Fest (2022 & 2023)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Coordinated Dance Class Event (2023)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>Founded the Being Conscious club at college</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: { name: string; proficiency: number; description?: string } }) {
  // Convert proficiency (0-10) to percentage
  const percentage = Math.min(100, Math.max(0, skill.proficiency * 10));

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <h4 className="text-sm font-medium">{skill.name}</h4>
        <span className="text-xs text-muted-foreground">{skill.proficiency}/10</span>
      </div>

      <div className="skill-bar">
        <div
          className="skill-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      {skill.description && (
        <p className="mt-1 text-xs text-muted-foreground">{skill.description}</p>
      )}
    </div>
  );
}
