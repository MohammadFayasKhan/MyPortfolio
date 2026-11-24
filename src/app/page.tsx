"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { CertificationCard } from "@/components/certification-card";
import { useFileViewer } from "@/components/file-viewer-context";
import { PatentCard } from "@/components/patent-card";
import { ProjectCard } from "@/components/project-card";
import { ProjectModal } from "@/components/project-modal";
import { ResearchCard } from "@/components/research-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TiltCard } from "@/components/ui/tilt-card";
import { DATA, Project } from "@/data/resume";
import {
  AwardIcon,
  BookOpenIcon,
  BriefcaseIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CpuIcon,
  DownloadIcon,
  ExternalLinkIcon,
  EyeIcon,
  FileTextIcon,
  GraduationCapIcon,
  LayersIcon,
  MailIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SparklesIcon,
  TrophyIcon,
} from "lucide-react";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const RESUME_VARIANTS = {
  specialised: {
    label: "Specialised CV",
    url: "/Mohammad_Fayas_Khan_Specialised_CV.pdf",
    filename: "Mohammad_Fayas_Khan_Specialised_CV.pdf",
    title: "Mohammad Fayas Khan Specialised CV",
    badge: "Specialised CV",
    subtitle: "AI Systems Engineering, LLMs, Computer Vision and Edge Robotics",
  },
  general: {
    label: "General CV",
    url: "/Mohammad_Fayas_Khan_General_CV.pdf",
    filename: "Mohammad_Fayas_Khan_General_CV.pdf",
    title: "Mohammad Fayas Khan General CV",
    badge: "General CV",
    subtitle: "Core Computer Science, Full-Stack Engineering and Systems Architecture",
  },
};

export default function Page() {
  const { previewFile, downloadFile } = useFileViewer();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);
  const [isDownloadMenuOpen, setIsDownloadMenuOpen] = useState(false);
  const [menuAlignment, setMenuAlignment] = useState<"left" | "right">("left");
  const downloadBtnRef = useRef<HTMLDivElement>(null);

  const toggleDownloadMenu = () => {
    if (!isDownloadMenuOpen && downloadBtnRef.current && typeof window !== "undefined") {
      const rect = downloadBtnRef.current.getBoundingClientRect();
      const dropdownWidth = 270;
      const padding = 16;
      setMenuAlignment(rect.left + dropdownWidth > window.innerWidth - padding ? "right" : "left");
    }
    setIsDownloadMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (!isDownloadMenuOpen) return;
    const handleResize = () => {
      if (downloadBtnRef.current && typeof window !== "undefined") {
        const rect = downloadBtnRef.current.getBoundingClientRect();
        const dropdownWidth = 270;
        const padding = 16;
        setMenuAlignment(rect.left + dropdownWidth > window.innerWidth - padding ? "right" : "left");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDownloadMenuOpen]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    const elem = document.getElementById(sectionId);
    if (elem) {
      const smoother = (window as any).ScrollSmoother?.get?.();
      if (smoother) {
        smoother.scrollTo(elem, true, "top 60px");
      } else {
        elem.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      if (typeof window !== "undefined") {
        window.history.pushState(null, "", `#${sectionId}`);
      }
    }
  };

  return (
    <main className="flex flex-col min-h-screen space-y-14 sm:space-y-16 pb-16">
      {/* Background Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] size-[500px] rounded-full bg-primary/[0.03] blur-[120px] dark:bg-primary/[0.04]" />
        <div className="absolute top-[35%] right-[-10%] size-[450px] rounded-full bg-emerald-500/[0.025] blur-[110px] dark:bg-emerald-500/[0.03]" />
        <div className="absolute bottom-[-10%] left-[20%] size-[600px] rounded-full bg-blue-500/[0.02] blur-[140px] dark:bg-blue-500/[0.03]" />
      </div>

      {/* ===================== HERO SECTION ===================== */}
      <section id="hero" className="relative z-30 pt-0 scroll-mt-12">
        <div className="space-y-6">
          {/* Availability Badge */}
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500"></span>
              </span>
              Available for AI Systems Engineering and SDE Roles
            </div>
          </BlurFade>

          {/* Name & Headline & Avatar */}
          <div className="flex flex-col-reverse sm:flex-row sm:items-start justify-between gap-6">
            <div className="flex flex-col space-y-2 flex-1">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground"
                yOffset={8}
                text={`Hi, I'm ${DATA.name} 👋`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 3}>
                <p className="text-base sm:text-lg font-medium text-primary">
                  {DATA.headline}
                </p>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 4}>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
                  {DATA.description}
                </p>
              </BlurFade>

              {/* Quick Location & Academic Pill */}
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPinIcon className="size-3.5 text-muted-foreground/80" />
                    {DATA.location}
                  </span>
                  <span className="text-muted-foreground/40">•</span>
                  <span className="inline-flex items-center gap-1 font-medium text-foreground/90">
                    <AwardIcon className="size-3.5 text-amber-500" />
                    CGPA: 9.66 / 10 (LPU Honor Roll 2025)
                  </span>
                </div>
              </BlurFade>

              {/* Action Buttons */}
              <BlurFade delay={BLUR_FADE_DELAY * 6} className="relative z-30">
                <div className="flex flex-wrap items-center gap-2.5 pt-2">
                  <Button
                    size="sm"
                    className="h-9 gap-1.5 px-3.5 text-xs font-medium shadow-sm"
                    onClick={() =>
                      previewFile({
                        url: RESUME_VARIANTS.specialised.url,
                        title: RESUME_VARIANTS.specialised.title,
                        type: "resume",
                        badge: "Official CV",
                        subtitle: RESUME_VARIANTS.specialised.subtitle,
                        defaultVariantIndex: 0,
                        variants: [
                          {
                            label: "Specialised CV",
                            url: RESUME_VARIANTS.specialised.url,
                            title: RESUME_VARIANTS.specialised.title,
                            badge: RESUME_VARIANTS.specialised.badge,
                            subtitle: RESUME_VARIANTS.specialised.subtitle,
                            filename: RESUME_VARIANTS.specialised.filename,
                          },
                          {
                            label: "General CV",
                            url: RESUME_VARIANTS.general.url,
                            title: RESUME_VARIANTS.general.title,
                            badge: RESUME_VARIANTS.general.badge,
                            subtitle: RESUME_VARIANTS.general.subtitle,
                            filename: RESUME_VARIANTS.general.filename,
                          },
                        ],
                      })
                    }
                  >
                    <EyeIcon className="size-3.5" />
                    Preview Resume
                  </Button>

                  {/* Download Button with Dropdown Menu */}
                  <div ref={downloadBtnRef} className="relative inline-flex items-center z-40">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-9 gap-1.5 px-3.5 text-xs font-medium shadow-sm"
                      onClick={toggleDownloadMenu}
                      aria-expanded={isDownloadMenuOpen}
                      aria-haspopup="true"
                    >
                      <DownloadIcon className="size-3.5" />
                      Download CV
                      <ChevronDownIcon
                        className={cn(
                          "size-3.5 transition-transform duration-200",
                          isDownloadMenuOpen && "rotate-180"
                        )}
                      />
                    </Button>

                    <AnimatePresence>
                      {isDownloadMenuOpen && (
                        <>
                          <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsDownloadMenuOpen(false)}
                          />
                          <motion.div
                            initial={{ opacity: 0, y: 6, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 6, scale: 0.96 }}
                            transition={{ duration: 0.15, ease: "easeOut" }}
                            className={cn(
                              "absolute top-full mt-2 z-50 w-[270px] sm:w-72 max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-popover text-popover-foreground p-2 shadow-2xl backdrop-blur-xl dark:bg-card dark:border-border/80",
                              menuAlignment === "right" ? "right-0" : "left-0"
                            )}
                          >
                            <div className="px-2 py-1 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
                              Select CV to Download
                            </div>
                            <button
                              onClick={() => {
                                downloadFile({
                                  url: RESUME_VARIANTS.specialised.url,
                                  filename: RESUME_VARIANTS.specialised.filename,
                                  title: RESUME_VARIANTS.specialised.title,
                                });
                                setIsDownloadMenuOpen(false);
                              }}
                              className="w-full text-left rounded-xl p-2.5 hover:bg-muted transition-colors flex items-start gap-2.5 group"
                            >
                              <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                <SparklesIcon className="size-3.5 text-amber-500" />
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-foreground">
                                  Specialised CV
                                </p>
                                <p className="text-[11px] text-muted-foreground leading-tight">
                                  AI Systems Engineering, LLMs, Computer Vision and Edge Robotics
                                </p>
                              </div>
                            </button>

                            <button
                              onClick={() => {
                                downloadFile({
                                  url: RESUME_VARIANTS.general.url,
                                  filename: RESUME_VARIANTS.general.filename,
                                  title: RESUME_VARIANTS.general.title,
                                });
                                setIsDownloadMenuOpen(false);
                              }}
                              className="w-full text-left rounded-xl p-2.5 hover:bg-muted transition-colors flex items-start gap-2.5 mt-1 group"
                            >
                              <div className="size-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                                <FileTextIcon className="size-3.5" />
                              </div>
                              <div>
                                <p className="text-xs font-semibold text-foreground">
                                  General CV
                                </p>
                                <p className="text-[11px] text-muted-foreground leading-tight">
                                  Core Computer Science, Full-Stack and Software Engineering
                                </p>
                              </div>
                            </button>
                          </motion.div>
                        </>
                      )}
                    </AnimatePresence>
                  </div>

                  <Button asChild variant="outline" size="sm" className="h-9 gap-1.5 px-3.5 text-xs font-medium">
                    <Link href="#projects" onClick={(e) => scrollToSection(e, "projects")}>
                      <BriefcaseIcon className="size-3.5" />
                      Featured Projects
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="h-9 gap-1.5 px-3.5 text-xs font-medium">
                    <Link href="#patents" onClick={(e) => scrollToSection(e, "patents")}>
                      <ShieldCheckIcon className="size-3.5" />
                      View Patents
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="h-9 gap-1.5 px-3.5 text-xs font-medium">
                    <Link href="#research" onClick={(e) => scrollToSection(e, "research")}>
                      <BookOpenIcon className="size-3.5" />
                      Research Paper
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm" className="h-9 gap-1.5 px-3 text-xs font-medium">
                    <Link href="#contact" onClick={(e) => scrollToSection(e, "contact")}>
                      <MailIcon className="size-3.5" />
                      Contact
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>

            {/* Profile Avatar */}
            <BlurFade delay={BLUR_FADE_DELAY * 3} className="flex-shrink-0">
              <TiltCard maxTilt={8} scale={1.03} className="w-fit">
                <div className="relative size-36 sm:size-44 md:size-48 lg:size-52 rounded-3xl border-2 border-border/80 p-2 sm:p-2.5 shadow-xl bg-card">
                  <div className="relative size-full rounded-2xl overflow-hidden shadow-inner bg-muted">
                    <Image
                      alt={DATA.name}
                      src={DATA.avatarUrl}
                      fill
                      priority
                      sizes="(max-width: 640px) 144px, (max-width: 768px) 176px, 208px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-2xl"
                    />
                  </div>
                </div>
              </TiltCard>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* ===================== ABOUT SECTION ===================== */}
      <section id="about" className="relative z-10 space-y-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex items-center gap-2">
            <SparklesIcon className="size-4 text-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              About and Engineering Philosophy
            </h2>
          </div>
        </BlurFade>
        <BlurFade delay={0.04}>
          <div className="rounded-2xl border border-border/70 bg-card/60 p-5 sm:p-6 shadow-sm">
            <Markdown className="prose max-w-full text-pretty font-sans text-xs sm:text-sm leading-relaxed text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </div>
        </BlurFade>
      </section>

      {/* ===================== SKILLS SECTION ===================== */}
      <section id="skills" className="space-y-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex items-center gap-2">
            <CpuIcon className="size-4 text-primary" />
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Technical Capabilities
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Technologies, frameworks, and engineering disciplines supported by practical implementations.
          </p>
        </BlurFade>

        <BlurFade delay={0.04}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            {Object.entries(DATA.skillsCategorized).map(([category, skillList]) => (
              <div
                key={category}
                className="rounded-xl border border-border/70 bg-card p-4 space-y-2.5 hover:border-foreground/20 transition-all hover:shadow-sm"
              >
                <h3 className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {skillList.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-2 py-0.5 text-xs font-normal"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </section>

      {/* ===================== FEATURED PROJECTS ===================== */}
      <section id="projects" className="space-y-6 pt-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-2">
              <BriefcaseIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Featured Engineering Projects
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Pinned public repositories evaluated on computer vision depth, edge robotics integration, and agentic autonomy.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={0.04 + (id % 2) * 0.04}
            >
              <ProjectCard
                title={project.title}
                subtitle={project.subtitle}
                href={project.href}
                description={project.description}
                dates={project.dates}
                category={project.category}
                tags={project.technologies}
                image={project.image}
                links={project.links}
                onOpenOverview={() => handleOpenProject(project)}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===================== PATENTS SECTION ===================== */}
      <section id="patents" className="space-y-5 pt-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Patents and Invention Disclosures
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Official patent filings developed at Lovely Professional University combining robotics, computer vision, and IoT sensor telemetry.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 gap-4">
          {DATA.patents.map((patent, id) => (
            <BlurFade
              key={patent.title}
              delay={0.04 + id * 0.03}
            >
              <PatentCard patent={patent} />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===================== RESEARCH & PUBLICATIONS ===================== */}
      <section id="research" className="space-y-4 pt-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-2">
              <BookOpenIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Research and Academic Contributions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Empirical socio-technical investigations and framework designs in distributed software engineering.
            </p>
          </div>
        </BlurFade>

        {DATA.research.map((paper, id) => (
          <BlurFade
            key={paper.title}
            delay={0.04 + id * 0.03}
          >
            <ResearchCard
              title={paper.title}
              authors={paper.authors}
              institution={paper.institution}
              course={paper.course}
              date={paper.date}
              status={paper.status}
              pdfUrl={paper.pdfUrl}
              abstract={paper.abstract}
              keywords={paper.keywords}
              contributions={paper.contributions}
            />
          </BlurFade>
        ))}
      </section>

      {/* ===================== CERTIFICATIONS WITH PROOF ===================== */}
      <section id="certifications" className="space-y-4 pt-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1.5">
            <div className="flex items-center gap-2">
              <AwardIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Verified Certifications and Proofs
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Official credentials in Agentic AI, Cloud Infrastructure, Operating Systems, and Core CS with verified attachments.
            </p>
          </div>
        </BlurFade>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {(showAllCertificates
            ? DATA.certifications
            : DATA.certifications.filter((c) => c.pinned)
          ).map((cert, id) => (
            <BlurFade
              key={cert.title}
              delay={0.03 + (id % 2) * 0.03}
            >
              <CertificationCard certification={cert} />
            </BlurFade>
          ))}
        </div>

        {DATA.certifications.length > 4 && (
          <div className="flex justify-center pt-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowAllCertificates(!showAllCertificates)}
              className="h-9 px-4 gap-2 text-xs font-medium rounded-xl hover:bg-muted transition-all shadow-xs"
            >
              {showAllCertificates ? (
                <>
                  <span>Show Featured Only</span>
                  <ChevronUpIcon className="size-3.5" />
                </>
              ) : (
                <>
                  <span>View All Certifications ({DATA.certifications.length - 4} More)</span>
                  <ChevronDownIcon className="size-3.5" />
                </>
              )}
            </Button>
          </div>
        )}
      </section>

      {/* ===================== ACHIEVEMENTS & COMPETITIONS ===================== */}
      <section id="achievements" className="space-y-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <TrophyIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Honors and Competitions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Competitive hardware innovation distinctions and university honor roll recognition.
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-3">
          {DATA.achievements.map((item, id) => (
            <BlurFade
              key={item.title}
              delay={0.04 + id * 0.03}
            >
              <ResumeCard
                title={item.title}
                subtitle={item.organization}
                period={item.period}
                badges={item.badges}
                description={item.description}
                icon={<TrophyIcon className="size-4 text-amber-500" />}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===================== ADVANCED TRAINING ===================== */}
      <section id="training" className="space-y-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <LayersIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Specialized Engineering Training
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Intensive, project-driven academic programs in Generative AI and system design.
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-3">
          {DATA.training.map((item, id) => (
            <BlurFade
              key={item.title}
              delay={0.04 + id * 0.03}
            >
              <ResumeCard
                title={item.title}
                subtitle={item.organization}
                period={item.period}
                badges={item.badges}
                description={item.description}
                proofUrl={item.proofUrl}
                icon={<LayersIcon className="size-4 text-primary" />}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===================== EDUCATION ===================== */}
      <section id="education" className="space-y-4 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col space-y-1">
            <div className="flex items-center gap-2">
              <GraduationCapIcon className="size-4 text-primary" />
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                Education
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Academic background and verified course performance.
            </p>
          </div>
        </BlurFade>

        <div className="flex flex-col gap-3">
          {DATA.education.map((edu, id) => (
            <BlurFade
              key={edu.school}
              delay={0.04 + id * 0.03}
            >
              <ResumeCard
                logoUrl={edu.logoUrl}
                altText={edu.school}
                title={edu.school}
                subtitle={edu.degree}
                period={`${edu.start} to ${edu.end}`}
                description={edu.description}
                href={edu.href}
                proofUrl={edu.proofUrl}
                badges={edu.badges}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ===================== CONTACT SECTION ===================== */}
      <section id="contact" className="space-y-6 pt-6 border-t border-border/60 scroll-mt-20">
        <BlurFade delay={0.02}>
          <div className="flex flex-col items-center text-center space-y-3 max-w-xl mx-auto">
            <div className="inline-block rounded-lg bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
              Get in Touch
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Let&apos;s Build Something Resilient
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              I am open to software engineering roles, applied machine learning opportunities, research collaborations, and open-source systems development.
            </p>
          </div>
        </BlurFade>

        {/* Contact Links Grid */}
        <BlurFade delay={0.04}>
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 max-w-2xl mx-auto pt-2">
            <Button asChild size="lg" className="h-11 gap-2.5 px-4 text-xs sm:text-sm font-semibold shadow-sm w-full sm:w-auto shrink-0">
              <a href={`mailto:${DATA.contact.email}`} aria-label={`Email ${DATA.name} at ${DATA.contact.email}`} title={DATA.contact.email}>
                <MailIcon className="size-4 shrink-0" />
                <span className="font-mono select-all tracking-tight">{DATA.contact.email}</span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-4 text-xs font-medium w-full sm:w-auto">
              <a href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noopener noreferrer">
                <DATA.contact.social.LinkedIn.icon className="size-4 text-[#0A66C2]" />
                <span>LinkedIn</span>
                <ExternalLinkIcon className="size-3 ml-1 opacity-50" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-4 text-xs font-medium w-full sm:w-auto">
              <a href={DATA.contact.social.GitHub.url} target="_blank" rel="noopener noreferrer">
                <DATA.contact.social.GitHub.icon className="size-4" />
                <span>GitHub</span>
                <ExternalLinkIcon className="size-3 ml-1 opacity-50" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 gap-2 px-4 text-xs font-medium w-full sm:w-auto">
              <a href="/Mohammad_Fayas_Khan_Resume.pdf" target="_blank" rel="noopener noreferrer">
                <DownloadIcon className="size-4 text-emerald-500" />
                <span>Resume (PDF)</span>
              </a>
            </Button>
          </div>
        </BlurFade>

        {/* Footer */}
        <BlurFade delay={0.06}>
          <footer className="pt-8 text-center text-xs text-muted-foreground/70 border-t border-border/40 space-y-1">
            <p>© {new Date().getFullYear()} Mohammad Fayas Khan. Built with Next.js, TypeScript, and Tailwind CSS.</p>
            <p className="text-[11px] text-muted-foreground/50">
              Verified portfolio data derived from academic records, patent filings, certified credentials, and authenticated repositories.
            </p>
          </footer>
        </BlurFade>
      </section>

      {/* ===================== INTERACTIVE PROJECT MODAL ===================== */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
