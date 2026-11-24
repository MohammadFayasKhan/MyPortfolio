"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Certification } from "@/data/resume";
import { AwardIcon, ExternalLinkIcon, EyeIcon, FileCheckIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { TiltCard } from "@/components/ui/tilt-card";
import { useFileViewer } from "@/components/file-viewer-context";

interface CertificationCardProps {
  certification: Certification;
}

export function CertificationCard({ certification }: CertificationCardProps) {
  const { previewFile } = useFileViewer();

  return (
    <TiltCard maxTilt={5} scale={1.015}>
      <Card className="flex flex-col justify-between h-full rounded-2xl border border-border/80 bg-card p-4 sm:p-5 hover:border-foreground/30 hover:shadow-md transition-all space-y-3">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 text-xs">
            <Badge
              variant="outline"
              className="px-2.5 py-0.5 text-[10px] font-semibold text-primary border-primary/30 bg-primary/5"
            >
              {certification.issuer}
            </Badge>
            <time className="font-mono text-[11px] text-muted-foreground">
              {certification.date}
            </time>
          </div>

          <div className="flex items-start gap-3 pt-1">
            {certification.badgeUrl && (
              <div className="relative size-11 flex-shrink-0 rounded-xl overflow-hidden border border-border/60 bg-muted/20">
                <Image
                  src={certification.badgeUrl}
                  alt={`${certification.title} badge`}
                  fill
                  sizes="44px"
                  className="object-contain p-0.5 rounded-xl"
                />
              </div>
            )}
            <div className="space-y-1 flex-1">
              <h3 className="font-semibold text-xs sm:text-sm text-foreground leading-snug">
                {certification.title}
              </h3>
              {certification.credentialId && (
                <p className="text-[10px] text-muted-foreground font-mono">
                  ID: {certification.credentialId}
                </p>
              )}
              {certification.description && (
                <p className="text-[11px] text-muted-foreground leading-relaxed pt-1">
                  {certification.description}
                </p>
              )}
              {certification.skills && certification.skills.length > 0 && (
                <div className="flex flex-wrap gap-1 pt-1.5">
                  {certification.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="text-[9px] px-1.5 py-0 bg-secondary/80 text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="pt-2.5 border-t border-border/40 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
            <FileCheckIcon className="size-3.5" />
            Verified Credential
          </span>
          {certification.proofUrl ? (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs gap-1 hover:text-primary"
              onClick={() => {
                if (certification.proofUrl) {
                  previewFile({
                    url: certification.proofUrl,
                    title: certification.title,
                    type: "certificate",
                    badge: "Verified Credential",
                    subtitle: `Issuer: ${certification.issuer}`,
                  });
                }
              }}
            >
              <span>View Proof</span>
              <EyeIcon className="size-3 opacity-60" />
            </Button>
          ) : (
            <span className="text-[10px] text-muted-foreground font-mono">
              Academic Record
            </span>
          )}
        </div>
      </Card>
    </TiltCard>
  );
}
