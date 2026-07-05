import { forwardRef, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-300">
          {label}
        </label>

        <textarea
          ref={ref}
          className={cn(
            "min-h-[170px] w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-zinc-500",
            "focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
            className
          )}
          {...props}
        />

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;