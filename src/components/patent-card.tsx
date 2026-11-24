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
import { PatentItem } from "@/data/resume";
import {
  DownloadIcon,
  ExternalLinkIcon,
  FileTextIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { TiltCard } from "@/components/ui/tilt-card";

interface PatentCardProps {
  patent: PatentItem;
}

export function PatentCard({ patent }: PatentCardProps) {
  return (
    <TiltCard maxTilt={4} scale={1.008}>
      <Card className="flex flex-col justify-between border border-border/80 bg-card hover:border-foreground/30 hover:shadow-lg transition-all duration-300 rounded-2xl h-full p-4 sm:p-5 space-y-3.5">
        <div className="space-y-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge
              variant="outline"
              className="flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-medium border-primary/40 text-primary bg-primary/5"
            >
              <ShieldCheckIcon className="size-3.5" />
              {patent.type}
            </Badge>
            <time className="font-mono text-xs text-muted-foreground">{patent.date}</time>
          </div>

          <h3 className="text-base sm:text-lg font-bold tracking-tight text-foreground leading-snug">
            {patent.title}
          </h3>

          <div className="text-xs text-muted-foreground space-y-0.5">
            <div>
              <span className="font-medium text-foreground">Inventors:</span>{" "}
              {patent.inventors}
            </div>
            <div>
              <span className="font-medium text-foreground">Applicant:</span>{" "}
              {patent.applicant}
            </div>
          </div>
        </div>

        <div className="space-y-3 text-xs leading-relaxed text-muted-foreground flex-1">
          <p className="rounded-xl bg-muted/40 p-3 border border-border/40 text-foreground/90">
            {patent.summary}
          </p>

          {patent.badges && patent.badges.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {patent.badges.map((b) => (
                <Badge key={b} variant="secondary" className="px-2 py-0.5 text-[10px]">
                  {b}
                </Badge>
              ))}
            </div>
          )}
        </div>

        <div className="pt-2 flex flex-wrap gap-2 border-t border-border/40">
          <Button asChild size="sm" className="h-8 gap-1.5 text-xs">
            <Link href={patent.pdfUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLinkIcon className="size-3.5" />
              View Patent Filing (PDF)
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="h-8 gap-1.5 text-xs">
            <a href={patent.pdfUrl} download>
              <DownloadIcon className="size-3.5" />
              Download PDF
            </a>
          </Button>
        </div>
      </Card>
    </TiltCard>
  );
}
