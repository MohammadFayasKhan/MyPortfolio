"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Project } from "@/data/resume";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircleIcon,
  CheckCircle2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CpuIcon,
  ExternalLinkIcon,
  GaugeIcon,
  LayersIcon,
  LightbulbIcon,
  SparklesIcon,
  WrenchIcon,
  XIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function renderIcon(IconComp: any, className: string = "size-3.5") {
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

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const gallery =
    project?.gallery && project.gallery.length > 0
      ? project.gallery
      : project ? [project.image] : [];

  useEffect(() => {
    setActiveImageIdx(0);
    setIsAutoPlaying(true);
  }, [project]);

  useEffect(() => {
    if (!isOpen || !isAutoPlaying || gallery.length <= 1) return;
    const interval = setInterval(() => {
      setActiveImageIdx((prev) => (prev + 1) % gallery.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [isOpen, isAutoPlaying, gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
      const smoother = (window as any).ScrollSmoother?.get?.();
      if (smoother) {
        smoother.paused(true);
      }
    } else {
      document.body.style.overflow = "unset";
      const smoother = (window as any).ScrollSmoother?.get?.();
      if (smoother) {
        smoother.paused(false);
        (window as any).ScrollTrigger?.refresh?.();
      }
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
      const smoother = (window as any).ScrollSmoother?.get?.();
      if (smoother) {
        smoother.paused(false);
        (window as any).ScrollTrigger?.refresh?.();
      }
    };
  }, [isOpen, onClose]);

  if (!project || !mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-hidden overscroll-contain"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{
              type: "spring",
              damping: 26,
              stiffness: 280,
            }}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[88vh] overflow-y-auto overscroll-contain rounded-2xl border border-border/80 bg-background/95 p-5 sm:p-7 shadow-2xl backdrop-blur-xl"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 pb-3.5 border-b border-border/50">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge
                    variant="outline"
                    className="text-[11px] font-semibold uppercase tracking-wider text-primary border-primary/30 bg-primary/5"
                  >
                    {project.category}
                  </Badge>
                  <span className="font-mono text-xs text-muted-foreground">
                    {project.dates}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground font-medium">
                  {project.subtitle}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors focus:outline-none"
                aria-label="Close dialog"
              >
                <XIcon className="size-5" />
              </button>
            </div>

            {/* Gallery Viewer with Auto Smooth Blur Crossfade */}
            <div className="mt-4 space-y-2.5">
              <div
                className="relative aspect-video w-full rounded-xl overflow-hidden border border-border/60 bg-muted/40 shadow-inner group/viewer"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageIdx}
                    initial={{ opacity: 0, filter: "blur(10px)", scale: 0.985 }}
                    animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                    exit={{ opacity: 0, filter: "blur(10px)", scale: 1.015 }}
                    transition={{
                      duration: 0.45,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="relative size-full"
                  >
                    <Image
                      src={gallery[activeImageIdx]}
                      alt={`${project.title} interface capture ${activeImageIdx + 1}`}
                      fill
                      sizes="(max-width: 900px) 100vw, 900px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Auto-scroll Status Badge */}
                {gallery.length > 1 && (
                  <div className="absolute top-3 left-3 z-20 flex items-center gap-1.5 rounded-full bg-black/70 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md border border-white/10 shadow-sm pointer-events-none">
                    <span className="relative flex size-2">
                      {isAutoPlaying && (
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      )}
                      <span
                        className={`relative inline-flex size-2 rounded-full ${
                          isAutoPlaying ? "bg-emerald-500" : "bg-amber-500"
                        }`}
                      ></span>
                    </span>
                    <span>
                      {isAutoPlaying ? "Auto-scrolling" : "Paused on Hover"} •{" "}
                      {activeImageIdx + 1} of {gallery.length}
                    </span>
                  </div>
                )}

                {gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveImageIdx((prev) =>
                          prev === 0 ? gallery.length - 1 : prev - 1
                        );
                      }}
                      className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm hover:bg-black/85 transition-colors"
                      aria-label="Previous capture"
                    >
                      <ChevronLeftIcon className="size-4" />
                    </button>
                    <button
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setActiveImageIdx((prev) =>
                          prev === gallery.length - 1 ? 0 : prev + 1
                        );
                      }}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm hover:bg-black/85 transition-colors"
                      aria-label="Next capture"
                    >
                      <ChevronRightIcon className="size-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-1.5 pt-0.5 no-scrollbar">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIdx(idx)}
                      className={`relative size-14 sm:size-16 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        activeImageIdx === idx
                          ? "border-primary shadow-sm scale-105"
                          : "border-border/60 opacity-60 hover:opacity-100"
                      }`}
                      aria-label={`Select capture ${idx + 1}`}
                    >
                      <Image
                        src={img}
                        alt={`Capture thumbnail ${idx + 1}`}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quantitative Metrics Bar */}
            {project.quantitativeMetrics && project.quantitativeMetrics.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 p-3 rounded-xl bg-primary/5 border border-primary/20">
                {project.quantitativeMetrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground px-2.5 py-1 rounded-md bg-background/80 border border-border/50 shadow-xs"
                  >
                    <GaugeIcon className="size-3.5 text-primary" />
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Problem & Solution Grid */}
            {(project.problemStatement || project.solutionArchitecture) && (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {project.problemStatement && (
                  <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 space-y-1.5">
                    <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-destructive">
                      <AlertCircleIcon className="size-3.5" />
                      Problem Statement
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {project.problemStatement}
                    </p>
                  </div>
                )}
                {project.solutionArchitecture && (
                  <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 space-y-1.5">
                    <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                      <LightbulbIcon className="size-3.5" />
                      Engineering Solution
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                      {project.solutionArchitecture}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Hardware & Electronics Specifications */}
            {project.hardwareComponents && project.hardwareComponents.length > 0 && (
              <div className="mt-4 space-y-2 rounded-xl border border-border/60 bg-muted/20 p-4">
                <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                  <CpuIcon className="size-3.5" />
                  Hardware, Sensors, and Actuators Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {project.hardwareComponents.map((hw, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 p-2 rounded-lg bg-background/70 border border-border/40"
                    >
                      <WrenchIcon className="size-3.5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-foreground leading-snug">{hw}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Details */}
            <div className="mt-4 space-y-2">
              <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                <LayersIcon className="size-3.5" />
                Technical Architecture and Execution Flow
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.architectureDetails.map((item, idx) => (
                  <li
                    key={idx}
                    className="rounded-xl bg-muted/40 p-3 border border-border/50 text-foreground"
                  >
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Highlights */}
            <div className="mt-4 space-y-2">
              <h3 className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                <SparklesIcon className="size-3.5" />
                Key Outcomes and Verified Decisions
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {project.keyHighlights.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 rounded-lg bg-emerald-500/5 border border-emerald-500/20 p-2.5"
                  >
                    <CheckCircle2Icon className="size-3.5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mt-4 space-y-1.5 pt-1">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Stack, Protocols, and Tools
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="px-2 py-0.5 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-4 border-t border-border/50">
              {project.links.map((link, idx) => {
                return (
                  <Button
                    asChild
                    key={idx}
                    size="sm"
                    className="h-9 gap-1.5 text-xs font-medium"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="size-3.5 flex items-center justify-center">
                        {renderIcon(link.icon, "size-3.5")}
                      </span>
                      <span>{link.type}</span>
                      <ExternalLinkIcon className="size-3 opacity-60 ml-0.5" />
                    </Link>
                  </Button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
