"use client";

import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-background border-t border-border/30">
      <div className="netflix-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center">
              <span className="text-primary font-extrabold text-2xl">RIYA KOLEKAR</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              UI/UX Student passionate about creating user-centered products that enhance
              user experiences through intuitive and accessible solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:riyakolekar86@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  riyakolekar86@gmail.com
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                Mumbai, India
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">Social & Resume</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/in/riya-kolekar-a80a1b283/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/riyakolekar.08/" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="/Riya_Kolekar_CV.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Netflix-style horizontal line */}
        <div className="border-t border-border/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Riya Kolekar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <p className="text-xs text-muted-foreground">
                UI/UX Student | Event Manager | Visual Storyteller
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
