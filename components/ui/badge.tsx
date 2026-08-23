

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center",
    "gap-1.5 overflow-hidden rounded-full border px-2.5",
    "text-xs font-medium whitespace-nowrap",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-blue-500/40",
    "[&>svg]:pointer-events-none [&>svg]:size-3.5",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-blue-400/20",
          "bg-blue-500/10",
          "text-blue-300",
          "hover:border-blue-400/30",
          "hover:bg-blue-500/15",
        ],

        secondary: [
          "border-white/10",
          "bg-white/[0.05]",
          "text-zinc-300",
          "hover:border-white/15",
          "hover:bg-white/[0.08]",
        ],

        outline: [
          "border-white/10",
          "bg-transparent",
          "text-zinc-300",
          "hover:border-blue-400/30",
          "hover:bg-blue-500/5",
          "hover:text-white",
        ],

        success: [
          "border-emerald-400/20",
          "bg-emerald-500/10",
          "text-emerald-300",
          "hover:bg-emerald-500/15",
        ],

        warning: [
          "border-amber-400/20",
          "bg-amber-500/10",
          "text-amber-300",
          "hover:bg-amber-500/15",
        ],

        destructive: [
          "border-red-400/20",
          "bg-red-500/10",
          "text-red-300",
          "hover:bg-red-500/15",
        ],

        ghost: [
          "border-transparent",
          "bg-transparent",
          "text-zinc-400",
          "hover:bg-white/[0.05]",
          "hover:text-white",
        ],

        gradient: [
          "border-blue-400/20",
          "bg-gradient-to-r from-blue-500/15 via-indigo-500/10 to-cyan-400/15",
          "text-blue-200",
          "hover:border-blue-400/30",
          "hover:from-blue-500/20",
          "hover:to-cyan-400/20",
        ],

        link: [
          "border-transparent",
          "bg-transparent",
          "px-0",
          "text-blue-400",
          "underline-offset-4",
          "hover:text-blue-300",
          "hover:underline",
        ],
      },

      defaultVariants: {
        variant: "default",
      },
    },
  }
);

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",

    props: mergeProps<"span">(
      {
        className: cn(
          badgeVariants({
            variant,
          }),
          className
        ),
      },
      props
    ),

    render,

    state: {
      slot: "badge",
      variant,
    },
  });
}

export { Badge, badgeVariants };


// import { mergeProps } from "@base-ui/react/merge-props"
// import { useRender } from "@base-ui/react/use-render"
// import { cva, type VariantProps } from "class-variance-authority"

// import { cn } from "@/lib/utils"

// const badgeVariants = cva(
//   "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
//         secondary:
//           "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
//         destructive:
//           "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
//         outline:
//           "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
//         ghost:
//           "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//     },
//   }
// )

// function Badge({
//   className,
//   variant = "default",
//   render,
//   ...props
// }: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
//   return useRender({
//     defaultTagName: "span",
//     props: mergeProps<"span">(
//       {
//         className: cn(badgeVariants({ variant }), className),
//       },
//       props
//     ),
//     render,
//     state: {
//       slot: "badge",
//       variant,
//     },
//   })
// }

// export { Badge, badgeVariants }
