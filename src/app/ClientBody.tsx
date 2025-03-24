"use client";

import { useEffect } from "react";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Handle navbar style on scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.netflix-navbar');
      if (navbar) {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <body className="antialiased min-h-screen bg-background text-foreground" suppressHydrationWarning>
      {children}
    </body>
  );
}
