"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ResumeCardProps {
  logoUrl?: string;
  icon?: React.ReactNode;
  altText?: string;
  title: string;
  subtitle?: string;
  href?: string;
  proofUrl?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
}

export const ResumeCard = ({
  logoUrl,
  icon,
  altText = "Logo",
  title,
  subtitle,
  href,
  proofUrl,
  badges,
  period,
  description,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = (e: React.MouseEvent) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  const cardContent = (
    <Card className="flex border border-border/70 hover:border-foreground/20 hover:shadow-sm transition-all duration-200 bg-card p-3 sm:p-4 rounded-xl">
      <div className="flex-none">
        <Avatar
          className={cn(
            "border border-border/50 size-11 sm:size-12 m-auto rounded-xl shadow-xs overflow-hidden flex items-center justify-center shrink-0",
            logoUrl ? "bg-white dark:bg-white" : "bg-muted/60 dark:bg-muted/30"
          )}
        >
          {logoUrl ? (
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-contain p-1 w-full h-full"
            />
          ) : null}
          <AvatarFallback className="text-xs font-semibold rounded-xl">
            {icon ? icon : altText ? altText[0] : "•"}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-grow ml-3 sm:ml-4 flex-col group">
        <CardHeader className="p-0 space-y-1">
          <div className="flex items-start justify-between gap-x-2 text-sm sm:text-base">
            <h3 className="inline-flex flex-wrap items-center gap-1.5 font-semibold text-sm sm:text-base text-foreground leading-snug">
              <span>{title}</span>
              {badges && (
                <span className="inline-flex flex-wrap gap-1">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-1.5 py-0"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              {description && (
                <ChevronRightIcon
                  className={cn(
                    "size-3.5 text-muted-foreground transition-transform duration-200",
                    isExpanded ? "rotate-90 text-primary" : "rotate-0"
                  )}
                />
              )}
            </h3>
            <div className="text-[11px] sm:text-xs tabular-nums text-muted-foreground whitespace-nowrap font-mono">
              {period}
            </div>
          </div>
          {subtitle && (
            <div className="text-xs text-muted-foreground leading-relaxed">
              {subtitle}
            </div>
          )}
        </CardHeader>

        {proofUrl && (
          <div className="mt-1">
            <Link
              href={proofUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-[11px] font-medium text-primary hover:underline"
            >
              <span>View Verification Proof</span>
              <ExternalLinkIcon className="size-2.5" />
            </Link>
          </div>
        )}

        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="mt-2 pt-2 border-t border-border/40 text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {description}
            </div>
          </motion.div>
        )}
      </div>
    </Card>
  );

  if (href && !description) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block cursor-pointer focus:outline-none"
      >
        {cardContent}
      </Link>
    );
  }

  return (
    <div
      onClick={description ? toggleExpand : undefined}
      className={cn("block", description && "cursor-pointer select-none")}
      role={description ? "button" : undefined}
      tabIndex={description ? 0 : undefined}
      onKeyDown={(e) => {
        if (description && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      {cardContent}
    </div>
  );
};
