"use client";

import { useRef, useState } from "react";
import { Paperclip, Mic, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/utils/cn";

export interface BannerProps {
  /** Badge text shown above the heading */
  badgeText?: string;
  /** Main heading (plain text) */
  heading?: string;
  /** Italic sub-heading rendered below the heading */
  subHeading?: string;
  /** Descriptive paragraph under the headings */
  description?: string;
  /** Placeholder text for the prompt input */
  inputPlaceholder?: string;
  /** CTA button label */
  ctaLabel?: string;
  /** Handler called with the prompt text when CTA is clicked */
  onSubmit?: (prompt: string) => void;
  /** Extra class names for the outer section */
  className?: string;
}

export function Banner({
  badgeText = "New: Drag & drop workflow builder",
  heading = "Design, Plan, Furniture get",
  subHeading = "All in One Platform.",
  description = "NOOI makes stunning 2D/3D visuals, accurate floor plans, and seamless logistics simple for architects, designers, and developers.",
  inputPlaceholder = "Describing your design ideas and see what magic happens",
  ctaLabel = "Build Now",
  onSubmit,
  className,
}: BannerProps) {
  const [prompt, setPrompt] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (prompt.trim()) {
      onSubmit?.(prompt.trim());
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  // Auto-grow textarea
  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(e.target.value);
    const el = e.target;
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  return (
    <section
      className={cn(
        "w-full bg-[#e8ecf4] px-4 py-20 flex flex-col items-center text-center",
        className,
      )}
    >
      {/* Badge */}
      <div className="mb-6">
        <span className="inline-flex items-center gap-1.5 border border-yellow-400/60 bg-white/70 text-gray-700 text-xs font-medium px-3.5 py-1.5 rounded-full">
          <span className="text-yellow-500">✦</span>
          <span>
            <span className="text-yellow-600 font-semibold">New:</span>{" "}
            {badgeText}
          </span>
          <ChevronDown size={12} className="text-gray-400" />
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-2">
        {heading}
      </h1>

      {/* Italic sub-heading */}
      <p className="text-4xl sm:text-5xl italic font-light text-gray-800 leading-snug mb-5 font-serif">
        {subHeading}
      </p>

      {/* Description */}
      <p className="max-w-xl text-gray-500 text-base leading-relaxed mb-10">
        {description}
      </p>

      {/* Prompt card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 px-5 pt-4 pb-3">
        <textarea
          ref={textareaRef}
          rows={2}
          value={prompt}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder={inputPlaceholder}
          className="w-full resize-none text-sm text-gray-700 placeholder-gray-400 outline-none leading-relaxed min-h-[52px]"
          aria-label="Design prompt"
        />

        {/* Bottom toolbar */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Attach file"
              className="p-2 text-gray-400 hover:text-gray-600 border border-gray-200 rounded-lg transition-colors"
            >
              <Paperclip size={15} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Voice input"
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Mic size={16} />
            </button>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={!prompt.trim()}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-white bg-[#1a4731] hover:bg-[#15392a] disabled:opacity-50 rounded-full transition-colors"
            >
              {ctaLabel}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
