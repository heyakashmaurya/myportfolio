
import * as React from "react";

import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & {
  size?: "default" | "sm";
}) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        [
          "group/card relative flex flex-col overflow-hidden",
          "rounded-3xl border border-white/[0.08]",
          "bg-white/[0.035] backdrop-blur-xl",
          "text-sm text-white",
          "shadow-[0_20px_60px_rgba(0,0,0,0.18)]",
          "transition-all duration-300",
          "hover:-translate-y-1",
          "hover:border-blue-400/20",
          "hover:bg-white/[0.05]",
          "hover:shadow-[0_25px_80px_rgba(37,99,235,0.10)]",
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0",
          "before:h-px before:bg-gradient-to-r",
          "before:from-transparent before:via-white/20 before:to-transparent",
          "[--card-spacing:1.5rem]",
          "data-[size=sm]:[--card-spacing:1rem]",
          "has-[>img:first-child]:pt-0",
          "has-data-[slot=card-footer]:pb-0",
          "*:[img:first-child]:rounded-t-3xl",
          "*:[img:last-child]:rounded-b-3xl",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function CardHeader({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        [
          "relative grid auto-rows-min items-start",
          "gap-2 px-[var(--card-spacing)]",
          "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
          "has-data-[slot=card-description]:grid-rows-[auto_auto]",
          "[.border-b]:pb-[var(--card-spacing)]",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function CardTitle({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        [
          "text-lg font-semibold leading-tight",
          "tracking-tight text-white",
          "group-data-[size=sm]/card:text-base",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function CardDescription({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-sm leading-6 text-zinc-400",
        className
      )}
      {...props}
    />
  );
}

function CardAction({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        [
          "col-start-2 row-span-2 row-start-1",
          "self-start justify-self-end",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

function CardContent({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "px-[var(--card-spacing)]",
        className
      )}
      {...props}
    />
  );
}

function CardFooter({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        [
          "mt-auto flex items-center",
          "border-t border-white/[0.06]",
          "bg-white/[0.02]",
          "px-[var(--card-spacing)]",
          "py-4",
        ].join(" "),
        className
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};


// import * as React from "react"

// import { cn } from "@/lib/utils"

// function Card({
//   className,
//   size = "default",
//   ...props
// }: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
//   return (
//     <div
//       data-slot="card"
//       data-size={size}
//       className={cn(
//         "group/card flex flex-col gap-(--card-spacing) overflow-hidden rounded-xl bg-card py-(--card-spacing) text-sm text-card-foreground ring-1 ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-header"
//       className={cn(
//         "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-(--card-spacing) has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-title"
//       className={cn(
//         "text-base leading-snug font-medium group-data-[size=sm]/card:text-sm",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-description"
//       className={cn("text-sm text-muted-foreground", className)}
//       {...props}
//     />
//   )
// }

// function CardAction({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-action"
//       className={cn(
//         "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function CardContent({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-content"
//       className={cn("px-(--card-spacing)", className)}
//       {...props}
//     />
//   )
// }

// function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
//   return (
//     <div
//       data-slot="card-footer"
//       className={cn(
//         "flex items-center rounded-b-xl border-t bg-muted/50 p-(--card-spacing)",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export {
//   Card,
//   CardHeader,
//   CardFooter,
//   CardTitle,
//   CardAction,
//   CardDescription,
//   CardContent,
// }
