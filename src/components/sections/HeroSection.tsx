"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle video loaded state
  useEffect(() => {
    const timer = setTimeout(() => {
      setVideoLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      {/* Video Background */}
      <div className="hero-backdrop">
        {/* Fallback image before video loads */}
        {!videoLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://ext.same-assets.com/3355155872/2787227035.jpeg')" }}
          ></div>
        )}

        {/* Video background - using a Netflix-like abstract visualization video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ${
            videoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoadedData={() => setVideoLoaded(true)}
        >
          <source
            src="https://cdn.pixabay.com/vimeo/328726955/abstract-25546.mp4?width=1280&hash=0921e7dd8fb0aa19a9f74eb8de02c10410cff41e"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/10"></div>
      </div>

      {/* Content */}
      <div className="netflix-container relative z-10 flex flex-col items-start justify-center text-foreground pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-primary">Hello, I'm</span><br />
            Riya Kolekar
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            UI/UX Student | Event Manager | Visual Storyteller
          </h2>
          <p className="text-foreground/80 text-lg mb-8 max-w-xl">
            I am a first-year UI/UX design student, passionate about creating
            user-centered products that enhance user experiences through
            intuitive and accessible solutions.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="netflix-button" asChild size="lg">
              <Link href="/#projects">
                View My Work
              </Link>
            </Button>
            <Button className="netflix-button-secondary" asChild size="lg">
              <a href="https://drive.google.com/file/d/1GOgDwv7_8LNwn2rBjBPlRKAn1-CHPFLu/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </Button>
          </div>

          {/* Netflix-style classification marker */}
          <div className="flex items-center mt-8 space-x-3">
            <span className="bg-foreground/20 text-foreground px-2 py-0.5 text-xs font-medium rounded">UI/UX STUDENT</span>
            <span className="bg-foreground/20 text-foreground px-2 py-0.5 text-xs font-medium rounded">EVENT MANAGER</span>
            <span className="border border-foreground/40 text-foreground/90 px-2 py-0.5 text-xs rounded">2024</span>
          </div>
        </div>
      </div>
    </section>
  );
}
