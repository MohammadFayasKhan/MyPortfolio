"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";
import { TiltCard } from "@/components/ui/tilt-card";

function renderIcon(IconComp: any, className: string = "size-3") {
  if (!IconComp) return null;
  if (React.isValidElement(IconComp)) return IconComp;
  if (
    typeof IconComp === "function" ||
    (typeof IconComp === "object" && IconComp !== null)
  ) {
    return React.createElement(IconComp, { className });
  }
  return null;
}

interface Props {
  title: string;
  subtitle?: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  category?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: any;
    type: string;
    href: string;
  }[];
  onOpenOverview?: () => void;
  className?: string;
}

export function ProjectCard({
  title,
  subtitle,
  href,
  description,
  dates,
  tags,
  category,
  image,
  video,
  links,
  onOpenOverview,
  className,
}: Props) {
  return (
    <TiltCard className={className} maxTilt={5} scale={1.012}>
      <Card
        className="flex flex-col border border-border/80 hover:border-foreground/30 hover:shadow-xl transition-all duration-300 ease-out h-full bg-card rounded-2xl p-4 sm:p-5 space-y-4"
      >
        {/* Inset Clickable Image / Media Area */}
        <div
          onClick={onOpenOverview}
          className="block cursor-pointer overflow-hidden relative rounded-xl border border-border/60 bg-muted/30 shadow-xs group/media"
          role="button"
          tabIndex={0}
          aria-label={`Open interactive overview for ${title}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onOpenOverview?.();
            }
          }}
        >
          {video && (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="pointer-events-none mx-auto h-48 sm:h-52 w-full object-cover object-top rounded-xl"
            />
          )}
          {image && (
            <div className="relative h-48 sm:h-52 w-full overflow-hidden rounded-xl">
              <Image
                src={image}
                alt={`${title} interface preview`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-top group-hover/media:scale-[1.04] transition-transform duration-500 ease-out rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover/media:opacity-100 transition-opacity duration-300 flex items-end p-3 rounded-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 text-black px-2.5 py-1 text-xs font-semibold shadow-md backdrop-blur-sm">
                  <EyeIcon className="size-3.5" />
                  Interactive Overview
                </span>
              </div>
            </div>
          )}
        </div>

        <CardHeader className="p-0 space-y-2">
          <div className="flex items-center justify-between gap-2">
            {category && (
              <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                {category}
              </span>
            )}
            <time className="font-mono text-[11px] text-muted-foreground ml-auto">
              {dates}
            </time>
          </div>

          <CardTitle className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug">
            <button
              onClick={onOpenOverview}
              className="text-left hover:text-primary transition-colors focus:outline-none"
            >
              {title}
            </button>
          </CardTitle>

          {subtitle && (
            <p className="text-xs text-muted-foreground/90 font-medium">
              {subtitle}
            </p>
          )}

          <Markdown className="prose max-w-full text-pretty font-sans text-xs leading-relaxed text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </CardHeader>

        <CardContent className="p-0 mt-auto flex flex-col">
          {tags && tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Badge
                  className="px-1.5 py-0.5 text-[10px] font-medium bg-secondary text-secondary-foreground"
                  variant="secondary"
                  key={tag}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </CardContent>

        <CardFooter className="p-0 pt-3 flex flex-col gap-2">
          <div className="flex flex-row flex-wrap items-center justify-between gap-1.5 pt-2 border-t border-border/50 w-full">
            <Button
              onClick={onOpenOverview}
              variant="secondary"
              size="sm"
              className="h-7 px-2.5 text-[11px] gap-1 font-medium"
            >
              <EyeIcon className="size-3 text-primary" />
              <span>Interactive Overview</span>
            </Button>

            <div className="flex flex-wrap items-center gap-1.5">
              {links?.map((item, idx) => {
                return (
                  <Link
                    href={item.href}
                    key={idx}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex"
                    aria-label={`${item.type} for ${title}`}
                  >
                    <Badge
                      variant="outline"
                      className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
                    >
                      <span className="size-3 flex items-center justify-center">
                        {renderIcon(item.icon, "size-3")}
                      </span>
                      <span>{item.type}</span>
                      <ExternalLinkIcon className="size-2.5 opacity-50" />
                    </Badge>
                  </Link>
                );
              })}
            </div>
          </div>
        </CardFooter>
      </Card>
    </TiltCard>
  );
}
