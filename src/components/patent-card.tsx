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
  EyeIcon,
  FileTextIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { TiltCard } from "@/components/ui/tilt-card";
import { useFileViewer } from "@/components/file-viewer-context";

interface PatentCardProps {
  patent: PatentItem;
}

export function PatentCard({ patent }: PatentCardProps) {
  const { previewFile, downloadFile } = useFileViewer();

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
          <Button
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={() =>
              previewFile({
                url: patent.pdfUrl,
                title: patent.title,
                type: "patent",
                badge: patent.type,
                subtitle: `Applicant: ${patent.applicant}`,
              })
            }
          >
            <EyeIcon className="size-3.5" />
            Preview Patent (PDF)
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="h-8 gap-1.5 text-xs"
            onClick={() =>
              downloadFile({
                url: patent.pdfUrl,
                filename: `${patent.title.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`,
                title: patent.title,
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
