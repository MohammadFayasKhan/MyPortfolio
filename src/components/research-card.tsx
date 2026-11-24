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
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpenIcon,
  ChevronDownIcon,
  DownloadIcon,
  ExternalLinkIcon,
  EyeIcon,
  FileTextIcon,
  LayersIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { TiltCard } from "@/components/ui/tilt-card";
import { useFileViewer } from "@/components/file-viewer-context";

interface ResearchCardProps {
  title: string;
  authors: string;
  institution: string;
  course?: string;
  date: string;
  status: string;
  pdfUrl: string;
  abstract: string;
  keywords: readonly string[];
  contributions?: readonly string[];
  className?: string;
}

export function ResearchCard({
  title,
  authors,
  institution,
  course,
  date,
  status,
  pdfUrl,
  abstract,
  keywords,
  contributions,
  className,
}: ResearchCardProps) {
  const { previewFile, downloadFile } = useFileViewer();
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <TiltCard maxTilt={4} scale={1.008} className={className}>
      <Card
        className="flex flex-col justify-between border border-border/80 bg-card hover:border-foreground/30 hover:shadow-lg transition-all duration-300 rounded-2xl h-full p-4 sm:p-5 space-y-4"
      >
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge
              variant="outline"
              className="flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-medium border-primary/30 text-primary bg-primary/5"
            >
              <FileTextIcon className="size-3" />
              {status}
            </Badge>
            <time className="font-mono text-xs text-muted-foreground">{date}</time>
          </div>

          <h3 className="text-lg sm:text-xl font-bold leading-snug tracking-tight text-foreground">
            {title}
          </h3>

          <div className="text-xs sm:text-sm text-muted-foreground space-y-1">
            <div className="font-medium text-foreground/80">
              Author: <span className="text-foreground">{authors}</span>
            </div>
            <div>{institution}</div>
            {course && <div className="text-muted-foreground/80">{course}</div>}
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm flex-1">
          {contributions && contributions.length > 0 && (
            <div className="space-y-1.5 rounded-xl border border-border/60 bg-muted/40 p-3">
              <div className="flex items-center gap-1.5 font-semibold text-xs text-foreground uppercase tracking-wider">
                <LayersIcon className="size-3.5 text-primary" />
                Core Research Contributions
              </div>
              <ul className="space-y-1 text-xs text-muted-foreground list-disc list-inside">
                {contributions.map((item, idx) => (
                  <li key={idx} className="leading-relaxed">
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="space-y-2">
            <button
              onClick={() => setShowAbstract(!showAbstract)}
              className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline focus:outline-none"
              aria-expanded={showAbstract}
            >
              <BookOpenIcon className="size-3.5" />
              <span>{showAbstract ? "Hide Paper Abstract" : "Read Paper Abstract"}</span>
              <ChevronDownIcon
                className={cn(
                  "size-3.5 transition-transform duration-200",
                  showAbstract ? "rotate-180" : "rotate-0"
                )}
              />
            </button>

            <AnimatePresence>
              {showAbstract && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="rounded-xl border border-border/60 bg-background/80 p-3 text-xs leading-relaxed text-muted-foreground">
                    <p className="font-semibold text-foreground mb-1">Abstract:</p>
                    <p>{abstract}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {keywords && keywords.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {keywords.map((kw) => (
                <Badge
                  key={kw}
                  variant="secondary"
                  className="px-2 py-0.5 text-[10px] font-normal"
                >
                  {kw}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="pt-2 flex flex-wrap gap-2 border-t border-border/40">
          <Button
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={() =>
              previewFile({
                url: pdfUrl,
                title,
                type: "research",
                badge: status,
                subtitle: `${institution} • ${course || ""}`,
              })
            }
          >
            <EyeIcon className="size-3.5" />
            Preview Paper (PDF)
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={() =>
              downloadFile({
                url: pdfUrl,
                filename: `${title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`,
                title,
              })
            }
          >
            <DownloadIcon className="size-3.5" />
            Download PDF
          </Button>
        </div>
      </Card>
    </TiltCard>
  );
}
