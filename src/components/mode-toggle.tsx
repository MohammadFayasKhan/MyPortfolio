"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className={cn(
        "group/item relative flex flex-col items-center justify-center h-full w-full py-1 text-muted-foreground hover:text-foreground transition-colors",
        className
      )}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle dark and light theme"
    >
      <div className="size-8 sm:size-9 rounded-xl sm:rounded-full flex items-center justify-center hover:bg-muted/80 transition-all duration-200 group-hover/item:-translate-y-1.5">
        <SunIcon className="size-4 text-neutral-800 dark:hidden dark:text-neutral-200" />
        <MoonIcon className="hidden size-4 text-neutral-800 dark:block dark:text-neutral-200" />
      </div>
      <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight leading-none text-foreground whitespace-nowrap opacity-0 group-hover/item:opacity-100 translate-y-1 group-hover/item:translate-y-0 transition-all duration-200 pointer-events-none select-none absolute bottom-1">
        Theme
      </span>
    </button>
  );
}
