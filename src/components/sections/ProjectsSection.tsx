"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight, ExternalLink, FileText } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  year: string;
  skills: string[];
  linkUrl?: string;
  detailedDescription?: string;
}

const projects: Project[] = [
  {
    id: "proj1",
    title: "Mobile App UI Design",
    description: "User interface design for a mobile meditation app",
    imageUrl: "https://media.gettyimages.com/id/1454818286/vector/user-interface-elements-for-finance-mobile-app-new-trendy-neumorphic-design.jpg?s=612x612&w=gi&k=20&c=ggSDRu-rmVtmcRtnFdsZvLd8uwH3jh_XnP2DdcyC12A=",
    category: "UI/UX DESIGN",
    year: "2024",
    skills: ["UI Design", "Figma", "Prototyping", "Mobile Design"],
    linkUrl: "/#projects",
    detailedDescription: "Designed a mobile meditation app interface with focus on user experience and accessibility. Created a clean, intuitive flow to help users navigate between different meditation sessions and track their progress."
  },
  {
    id: "proj2",
    title: "Brand Identity Design",
    description: "Visual identity system for a sustainable fashion brand",
    imageUrl: "https://media.istockphoto.com/id/1299122459/photo/designer-team-drawing-website-ux-app-development-application-for-mobile-phone.jpg?s=612x612&w=0&k=20&c=VsvaujAvgiTa853zJQR3KDEr0X9KDKMSbgguQpOWn7o=",
    category: "BRANDING",
    year: "2023",
    skills: ["Logo Design", "Brand Guidelines", "Typography", "Color Theory"],
    linkUrl: "/#projects",
    detailedDescription: "Created a comprehensive brand identity for a sustainable fashion brand, including logo design, color palette, typography, and brand guidelines. The design reflects the brand's eco-friendly values and modern aesthetic."
  },
  {
    id: "proj3",
    title: "Website Redesign",
    description: "UI overhaul for an educational platform",
    imageUrl: "https://c8.alamy.com/comp/2J03BMJ/web-design-project-concept-top-view-image-of-web-ux-designer-working-at-desk-with-numerous-website-wireframe-sketches-banner-style-2J03BMJ.jpg",
    category: "UI/UX DESIGN",
    year: "2023",
    skills: ["Web Design", "Wireframing", "User Research", "Responsive Design"],
    linkUrl: "/#projects",
    detailedDescription: "Redesigned an educational platform's website interface to improve user experience and accessibility. Conducted user research to identify pain points and created solutions that enhanced navigation and content discovery."
  },
  {
    id: "proj4",
    title: "Event Branding",
    description: "Visual identity for a college cultural festival",
    imageUrl: "https://static.vecteezy.com/system/resources/previews/055/799/235/non_2x/a-man-and-woman-are-working-on-a-design-project-free-photo.jpg",
    category: "GRAPHIC DESIGN",
    year: "2024",
    skills: ["Brand Design", "Event Graphics", "Social Media Assets", "Print Design"],
    linkUrl: "/#projects",
    detailedDescription: "Developed complete branding for a college cultural festival, including logo, posters, social media assets, and event materials. Created a cohesive visual language that captured the festival's energetic and creative spirit."
  },
  {
    id: "proj5",
    title: "User Experience Research",
    description: "Improving accessibility for an e-commerce platform",
    imageUrl: "https://thumbs.dreamstime.com/b/website-designer-development-ui-ux-desing-sketched-notes-wireframe-layout-mobile-application-project-user-experience-concept-143258847.jpg",
    category: "UX RESEARCH",
    year: "2023",
    skills: ["User Interviews", "Usability Testing", "Accessibility", "Analysis"],
    linkUrl: "/#projects",
    detailedDescription: "Conducted comprehensive user experience research for an e-commerce platform with a focus on accessibility. Identified barriers for users with disabilities and proposed design improvements to enhance the shopping experience for all users."
  },
];

const categories = ["UI/UX Design", "Branding", "Graphic Design", "UX Research", "Event Design"];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-card">
      <div className="netflix-container">
        <h2 className="section-heading">
          My Projects
          <ChevronRight className="h-8 w-8 text-primary ml-2" />
        </h2>

        {/* Featured Projects Row */}
        <div className="content-row">
          <h3 className="content-title">Design Portfolio</h3>
          <div className="card-group px-4">
            {projects.slice(0, 5).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Categorized Projects */}
        {categories.map((category) => {
          const categoryProjects = projects.filter(
            (project) => project.category.toUpperCase() === category.toUpperCase().replace(/ /g, " ")
          );

          if (categoryProjects.length === 0) return null;

          return (
            <div key={category} className="content-row">
              <h3 className="content-title">{category} Projects</h3>
              <div className="card-group px-4">
                {categoryProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </div>
          );
        })}

        {/* Resume Link */}
        <div className="flex justify-center mt-12">
          <Button className="netflix-button" asChild size="lg">
            <a href="/Riya_Kolekar_CV.jpg" target="_blank" rel="noopener noreferrer" className="flex items-center">
              View My Resume <FileText className="h-4 w-4 ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="netflix-card bg-transparent border-0 cursor-pointer">
          <CardContent className="p-0 overflow-hidden">
            <div className="relative aspect-video overflow-hidden rounded-md">
              {/* Using background image instead of Next.js Image */}
              <div
                className="netflix-card-image absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.imageUrl})` }}
              ></div>
              <div className="netflix-card-overlay"></div>
              <div className="netflix-card-content">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">{project.category}</span>
                  <span className="text-white/70 text-xs">{project.year}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl bg-card text-card-foreground">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="flex items-center space-x-2 mt-1">
            <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">{project.category}</span>
            <span className="text-muted-foreground text-xs">{project.year}</span>
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative aspect-video overflow-hidden rounded-md">
            {/* Using background image instead of Next.js Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.imageUrl})` }}
            ></div>
          </div>
          <div>
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">About this project</h4>
              <p className="text-muted-foreground">
                {project.detailedDescription || project.description}
              </p>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-medium mb-2">Skills Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex space-x-3 mt-6">
              {project.linkUrl && (
                <Button className="netflix-button" asChild>
                  <Link href={project.linkUrl}>
                    View in Portfolio <ExternalLink className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
