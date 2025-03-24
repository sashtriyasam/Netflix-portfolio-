"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="netflix-navbar w-full py-4 px-4 md:px-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-primary font-extrabold text-2xl md:text-3xl">RIYA KOLEKAR</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/#about" className="text-foreground/80 hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/#projects" className="text-foreground/80 hover:text-foreground transition-colors">
            Projects
          </Link>
          <Link href="/#skills" className="text-foreground/80 hover:text-foreground transition-colors">
            Skills
          </Link>
          <Link href="/#experience" className="text-foreground/80 hover:text-foreground transition-colors">
            Experience
          </Link>
          <Link href="/#contact" className="text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <ThemeToggle />
          <Button className="netflix-button" asChild>
            <a href="/Riya_Kolekar_CV.jpg" target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-foreground">
                <Menu />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card/95 backdrop-blur-md border-l border-border/30">
              <nav className="flex flex-col gap-6 mt-8">
                <Link
                  href="/#about"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/#projects"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/#skills"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Skills
                </Link>
                <Link
                  href="/#experience"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Experience
                </Link>
                <Link
                  href="/#contact"
                  className="text-lg font-medium text-foreground/80 hover:text-foreground transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button className="netflix-button mt-4 w-full" asChild>
                  <a href="/Riya_Kolekar_CV.jpg" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    Resume
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
