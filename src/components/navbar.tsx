"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { DATA } from "@/data/resume";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const targetId = href.replace(/^\/?#/, "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

  const getNavLabel = (label: string) => {
    switch (label) {
      case "Certifications":
        return "Certs";
      default:
        return label;
    }
  };

  return (
    <nav
      aria-label="Bottom Navigation Bar"
      className="pointer-events-none fixed inset-x-0 bottom-4 sm:bottom-6 z-40 mx-auto flex justify-center px-3"
    >
      <div className="fixed bottom-0 inset-x-0 h-24 w-full bg-gradient-to-t from-background via-background/60 to-transparent pointer-events-none -z-10" />
      <Dock className="z-50 pointer-events-auto relative mx-auto flex items-center px-2 sm:px-3.5 bg-background/90 dark:bg-card/90 [box-shadow:0_0_0_1px_rgba(0,0,0,.08),0_4px_12px_rgba(0,0,0,.08),0_16px_32px_rgba(0,0,0,.12)] backdrop-blur-xl transform-gpu dark:[border:1px_solid_rgba(255,255,255,.14)] dark:[box-shadow:0_-10px_40px_-10px_#ffffff15_inset,0_12px_32px_rgba(0,0,0,.5)] max-w-full overflow-visible">
        {DATA.navbar.map((item) => (
          <DockIcon
            key={item.href}
            className={item.mobile === false ? "hidden sm:flex" : "flex"}
          >
            <Link
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="group/item relative flex flex-col items-center justify-center h-full w-full py-1 text-muted-foreground hover:text-foreground transition-colors"
              aria-label={item.label}
            >
              <div className="size-8 sm:size-9 rounded-xl sm:rounded-full flex items-center justify-center hover:bg-muted/80 transition-all duration-200 group-hover/item:-translate-y-1.5">
                <item.icon className="size-4" />
              </div>
              <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight leading-none text-foreground whitespace-nowrap opacity-0 group-hover/item:opacity-100 translate-y-1 group-hover/item:translate-y-0 transition-all duration-200 pointer-events-none select-none absolute bottom-1">
                {getNavLabel(item.label)}
              </span>
            </Link>
          </DockIcon>
        ))}

        <Separator orientation="vertical" className="h-6 mx-0.5 sm:mx-1 opacity-70" />

        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => {
            const isExternal =
              social.url.startsWith("http") || social.url.endsWith(".pdf");
            const isAlwaysVisible = name === "Resume" || name === "Email";
            return (
              <DockIcon
                key={name}
                className={isAlwaysVisible ? "flex" : "hidden sm:flex"}
              >
                <Link
                  href={social.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group/item relative flex flex-col items-center justify-center h-full w-full py-1 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={name}
                >
                  <div className="size-8 sm:size-9 rounded-xl sm:rounded-full flex items-center justify-center hover:bg-muted/80 transition-all duration-200 group-hover/item:-translate-y-1.5">
                    <social.icon className="size-4" />
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight leading-none text-foreground whitespace-nowrap opacity-0 group-hover/item:opacity-100 translate-y-1 group-hover/item:translate-y-0 transition-all duration-200 pointer-events-none select-none absolute bottom-1">
                    {name}
                  </span>
                </Link>
              </DockIcon>
            );
          })}

        <Separator orientation="vertical" className="h-6 mx-0.5 sm:mx-1 opacity-70" />

        <DockIcon>
          <ModeToggle />
        </DockIcon>
      </Dock>
    </nav>
  );
}
