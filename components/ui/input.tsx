
import {
  forwardRef,
  InputHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId =
      id ?? `input-${label.toLowerCase().replace(/\s+/g, "-")}`;

    return (
      <div className="space-y-2.5">
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-zinc-300"
        >
          {label}
        </label>

        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${inputId}-error` : undefined
          }
          className={cn(
            // Base
            "w-full rounded-2xl border px-4 py-3.5",
            "bg-white/3 text-sm text-white",
            "border-white/10",
            "placeholder:text-zinc-600",
            "outline-none",

            // Animation
            "transition-all duration-300",

            // Hover
            "hover:border-white/15",
            "hover:bg-white/4",

            // Focus
            "focus:border-blue-500/60",
            "focus:bg-white/5",
            "focus:ring-4 focus:ring-blue-500/10",

            // Error
            error &&
              "border-red-500/50 bg-red-500/3 focus:border-red-500/70 focus:ring-red-500/10",

            // Disabled
            "disabled:cursor-not-allowed disabled:opacity-50",

            className
          )}
          {...props}
        />

        {error && (
          <p
            id={`${inputId}-error`}
            className="flex items-center gap-1.5 text-xs font-medium text-red-400"
          >
            <span
              aria-hidden
              className="size-1.5 rounded-full bg-red-400"
            />

            {error}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;



// import { forwardRef, InputHTMLAttributes } from "react";
// import { cn } from "@/lib/utils";

// interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
//   label: string;
//   error?: string;
// }

// const Input = forwardRef<HTMLInputElement, InputProps>(
//   ({ label, error, className, ...props }, ref) => {
//     return (
//       <div className="space-y-2">
//         <label className="text-sm font-medium text-zinc-300">
//           {label}
//         </label>

//         <input
//           ref={ref}
//           className={cn(
//             "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition-all duration-200 placeholder:text-zinc-500",
//             "focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20",
//             error && "border-red-500 focus:border-red-500 focus:ring-red-500/20",
//             className
//           )}
//           {...props}
//         />

//         {error && (
//           <p className="text-sm text-red-400">
//             {error}
//           </p>
//         )}
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

// export default Input;