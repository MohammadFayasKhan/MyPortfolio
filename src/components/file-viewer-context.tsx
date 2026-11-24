"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2Icon,
  DownloadIcon,
  ExternalLinkIcon,
  FileCheckIcon,
  FileTextIcon,
  Loader2Icon,
  ShieldCheckIcon,
  SparklesIcon,
  XIcon,
} from "lucide-react";
import React, { createContext, useContext, useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PreviewFilePayload {
  url: string;
  title: string;
  type?: "pdf" | "patent" | "research" | "certificate" | "resume";
  badge?: string;
  subtitle?: string;
}

export interface DownloadFilePayload {
  url: string;
  filename?: string;
  title?: string;
}

interface ToastState {
  id: number;
  title: string;
  subtitle?: string;
  status: "loading" | "success";
  type?: "download" | "preview";
}

interface FileViewerContextType {
  previewFile: (payload: PreviewFilePayload) => void;
  downloadFile: (payload: DownloadFilePayload) => void;
  closePreview: () => void;
  activePreview: PreviewFilePayload | null;
}

const FileViewerContext = createContext<FileViewerContextType | null>(null);

export function useFileViewer() {
  const context = useContext(FileViewerContext);
  if (!context) {
    throw new Error("useFileViewer must be used within a FileViewerProvider");
  }
  return context;
}

export function FileViewerProvider({ children }: { children: React.ReactNode }) {
  const [activePreview, setActivePreview] = useState<PreviewFilePayload | null>(null);
  const [toast, setToast] = useState<ToastState | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const showToast = (
    title: string,
    subtitle: string,
    status: "loading" | "success",
    type: "download" | "preview",
    duration: number = 2400
  ) => {
    const toastId = Date.now();
    setToast({ id: toastId, title, subtitle, status, type });
    setTimeout(() => {
      setToast((current) => (current?.id === toastId ? null : current));
    }, duration);
  };

  const previewFile = (payload: PreviewFilePayload) => {
    showToast(`Opening ${payload.title}`, "Rendering interactive document preview...", "loading", "preview", 1400);
    setActivePreview(payload);
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  const downloadFile = ({ url, filename, title }: DownloadFilePayload) => {
    const docName = title || filename || "document";
    showToast(`Preparing download`, `Fetching ${docName}...`, "loading", "download", 1200);

    setTimeout(() => {
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = filename || url.split("/").pop() || "document.pdf";
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);

      showToast(`Download started`, `${docName} saved to your device`, "success", "download", 2600);
    }, 400);
  };

  // Keyboard shortcut to close preview on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activePreview) {
        closePreview();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePreview]);

  return (
    <FileViewerContext.Provider
      value={{
        previewFile,
        downloadFile,
        closePreview,
        activePreview,
      }}
    >
      {children}

      {/* Render Toast & Modal into Portal */}
      {mounted && typeof document !== "undefined" && createPortal(
        <>
          {/* Action Toast Card */}
          <AnimatePresence>
            {toast && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -16, scale: 0.95 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-5 inset-x-0 z-[100] mx-auto w-fit max-w-[92vw] pointer-events-auto"
              >
                <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/95 px-4 py-2.5 shadow-2xl backdrop-blur-xl dark:bg-card/95 dark:border-border/60">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    {toast.status === "loading" ? (
                      <Loader2Icon className="size-4 animate-spin text-primary" />
                    ) : (
                      <CheckCircle2Icon className="size-4 text-emerald-500" />
                    )}
                  </div>
                  <div className="pr-1 text-left">
                    <p className="text-xs font-semibold text-foreground line-clamp-1">
                      {toast.title}
                    </p>
                    {toast.subtitle && (
                      <p className="text-[11px] text-muted-foreground line-clamp-1">
                        {toast.subtitle}
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => setToast(null)}
                    className="ml-2 rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    aria-label="Dismiss notification"
                  >
                    <XIcon className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Interactive Document Preview Modal */}
          <AnimatePresence>
            {activePreview && (
              <div
                className="fixed inset-0 z-[95] flex items-center justify-center p-3 sm:p-6"
                role="dialog"
                aria-modal="true"
                aria-label={activePreview.title}
              >
                {/* Backdrop Blur */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  onClick={closePreview}
                  className="fixed inset-0 bg-black/60 backdrop-blur-md -z-10"
                />

                {/* Modal Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 14 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col w-full max-w-4xl h-[88vh] max-h-[920px] rounded-3xl border border-border/80 bg-background/95 dark:bg-card/95 shadow-2xl overflow-hidden backdrop-blur-2xl"
                >
                  {/* Header Bar */}
                  <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-border/60 bg-muted/30 shrink-0 gap-3">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="size-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {activePreview.type === "patent" ? (
                          <ShieldCheckIcon className="size-4" />
                        ) : activePreview.type === "certificate" ? (
                          <FileCheckIcon className="size-4" />
                        ) : (
                          <FileTextIcon className="size-4" />
                        )}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h2 className="text-sm sm:text-base font-bold text-foreground truncate">
                            {activePreview.title}
                          </h2>
                          {activePreview.badge && (
                            <span className="hidden sm:inline-flex items-center rounded-full bg-primary/10 text-primary px-2 py-0.5 text-[10px] font-medium border border-primary/20 shrink-0">
                              {activePreview.badge}
                            </span>
                          )}
                        </div>
                        {activePreview.subtitle && (
                          <p className="text-xs text-muted-foreground truncate">
                            {activePreview.subtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Action Controls */}
                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() =>
                          downloadFile({
                            url: activePreview.url,
                            filename: activePreview.url.split("/").pop(),
                            title: activePreview.title,
                          })
                        }
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors shadow-xs"
                      >
                        <DownloadIcon className="size-3.5" />
                        <span className="hidden sm:inline">Download</span>
                      </button>

                      <a
                        href={activePreview.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-border/70 bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-muted transition-colors shadow-xs"
                        aria-label="Open in new window"
                      >
                        <ExternalLinkIcon className="size-3.5" />
                        <span className="hidden sm:inline">New Tab</span>
                      </a>

                      <button
                        onClick={closePreview}
                        className="size-8 rounded-xl flex items-center justify-center text-muted-foreground hover:bg-muted hover:text-foreground transition-colors ml-1"
                        aria-label="Close document preview"
                      >
                        <XIcon className="size-4" />
                      </button>
                    </div>
                  </div>

                  {/* Document Viewport */}
                  <div className="relative flex-1 w-full bg-muted/20 overflow-hidden flex items-center justify-center">
                    {activePreview.url.match(/\.(jpeg|jpg|png|webp|avif)$/i) ? (
                      <div className="size-full overflow-auto p-4 flex items-center justify-center bg-black/20">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={activePreview.url}
                          alt={activePreview.title}
                          className="max-h-full max-w-full object-contain rounded-xl shadow-lg"
                        />
                      </div>
                    ) : (
                      <iframe
                        src={`${activePreview.url}#toolbar=1&navpanes=0`}
                        title={activePreview.title}
                        className="size-full border-0"
                      />
                    )}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>,
        document.body
      )}
    </FileViewerContext.Provider>
  );
}
