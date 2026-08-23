
"use client";

import * as React from "react";
import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import {
  CheckIcon,
  ChevronRightIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
  return (
    <MenuPrimitive.Root
      data-slot="dropdown-menu"
      {...props}
    />
  );
}

function DropdownMenuPortal({
  ...props
}: MenuPrimitive.Portal.Props) {
  return (
    <MenuPrimitive.Portal
      data-slot="dropdown-menu-portal"
      {...props}
    />
  );
}

function DropdownMenuTrigger({
  ...props
}: MenuPrimitive.Trigger.Props) {
  return (
    <MenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  );
}

function DropdownMenuContent({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 8,
  className,
  ...props
}: MenuPrimitive.Popup.Props &
  Pick<
    MenuPrimitive.Positioner.Props,
    "align" | "alignOffset" | "side" | "sideOffset"
  >) {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            `
            z-50
            min-w-48
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-[#0b0c12]/95
            p-1.5
            text-white
            shadow-2xl
            shadow-black/40
            ring-1
            ring-white/5
            backdrop-blur-2xl
            backdrop-saturate-150
            outline-none
            `,

            `
            data-open:animate-in
            data-open:fade-in-0
            data-open:zoom-in-95
            data-closed:animate-out
            data-closed:fade-out-0
            data-closed:zoom-out-95
            data-[side=bottom]:slide-in-from-top-2
            data-[side=top]:slide-in-from-bottom-2
            data-[side=left]:slide-in-from-right-2
            data-[side=right]:slide-in-from-left-2
            `,

            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function DropdownMenuGroup({
  ...props
}: MenuPrimitive.Group.Props) {
  return (
    <MenuPrimitive.Group
      data-slot="dropdown-menu-group"
      {...props}
    />
  );
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        "px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-zinc-500",
        inset && "pl-8",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}: MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "destructive";
}) {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        `
        group/dropdown-menu-item
        relative
        flex
        cursor-default
        items-center
        gap-2.5
        rounded-xl
        px-3
        py-2.5
        text-sm
        font-medium
        outline-none
        select-none
        transition-all
        duration-200
        `,

        variant === "default" && `
          text-zinc-300
          hover:bg-white/5
          hover:text-white
          focus:bg-white/6
          focus:text-white
        `,

        variant === "destructive" && `
          text-red-400
          hover:bg-red-500/10
          focus:bg-red-500/10
          focus:text-red-300
        `,

        inset && "pl-9",

        `
        data-disabled:pointer-events-none
        data-disabled:opacity-40
        [&_svg]:pointer-events-none
        [&_svg]:shrink-0
        [&_svg]:transition-colors
        [&_svg:not([class*='size-'])]:size-4
        `,

        className
      )}
      {...props}
    />
  );
}

function DropdownMenuSub({
  ...props
}: MenuPrimitive.SubmenuRoot.Props) {
  return (
    <MenuPrimitive.SubmenuRoot
      data-slot="dropdown-menu-sub"
      {...props}
    />
  );
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        `
        flex
        cursor-default
        items-center
        gap-2.5
        rounded-xl
        px-3
        py-2.5
        text-sm
        font-medium
        text-zinc-300
        outline-none
        select-none
        transition-all
        duration-200
        hover:bg-white/5
        hover:text-white
        focus:bg-white/6
        focus:text-white
        data-popup-open:bg-white/6
        data-popup-open:text-white
        data-open:bg-white/6
        data-open:text-white
        `,

        inset && "pl-9",

        "[&_svg]:pointer-events-none",
        "[&_svg]:shrink-0",
        "[&_svg:not([class*='size-'])]:size-4",

        className
      )}
      {...props}
    >
      {children}

      <ChevronRightIcon
        className="ml-auto size-4 text-zinc-500 transition-transform duration-200 group-data-[open=true]/dropdown-menu-item:translate-x-0.5"
      />
    </MenuPrimitive.SubmenuTrigger>
  );
}

function DropdownMenuSubContent({
  align = "start",
  alignOffset = -4,
  side = "right",
  sideOffset = 6,
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      className={cn(
        "min-w-44",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  inset,
  ...props
}: MenuPrimitive.CheckboxItem.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      data-inset={inset}
      checked={checked}
      className={cn(
        `
        relative
        flex
        cursor-default
        items-center
        gap-2.5
        rounded-xl
        py-2.5
        pr-9
        pl-3
        text-sm
        text-zinc-300
        outline-none
        select-none
        transition-colors
        hover:bg-white/5
        hover:text-white
        focus:bg-white/6
        focus:text-white
        data-disabled:pointer-events-none
        data-disabled:opacity-40
        `,

        inset && "pl-9",

        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-3 flex size-4 items-center justify-center">
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className="size-4 text-blue-400" />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>

      {children}
    </MenuPrimitive.CheckboxItem>
  );
}

function DropdownMenuRadioGroup({
  ...props
}: MenuPrimitive.RadioGroup.Props) {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  );
}

function DropdownMenuRadioItem({
  className,
  children,
  inset,
  ...props
}: MenuPrimitive.RadioItem.Props & {
  inset?: boolean;
}) {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      data-inset={inset}
      className={cn(
        `
        relative
        flex
        cursor-default
        items-center
        gap-2.5
        rounded-xl
        py-2.5
        pr-9
        pl-3
        text-sm
        text-zinc-300
        outline-none
        select-none
        transition-colors
        hover:bg-white/5
        hover:text-white
        focus:bg-white/6
        focus:text-white
        data-disabled:pointer-events-none
        data-disabled:opacity-40
        `,

        inset && "pl-9",

        className
      )}
      {...props}
    >
      <span className="pointer-events-none absolute right-3 flex size-4 items-center justify-center">
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon className="size-4 text-blue-400" />
        </MenuPrimitive.RadioItemIndicator>
      </span>

      {children}
    </MenuPrimitive.RadioItem>
  );
}

function DropdownMenuSeparator({
  className,
  ...props
}: MenuPrimitive.Separator.Props) {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn(
        "my-1.5 h-px bg-white/8",
        className
      )}
      {...props}
    />
  );
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "ml-auto text-[11px] font-medium tracking-wider text-zinc-600",
        className
      )}
      {...props}
    />
  );
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
};



// "use client"

// import * as React from "react"
// import { Menu as MenuPrimitive } from "@base-ui/react/menu"

// import { cn } from "@/lib/utils"
// import { ChevronRightIcon, CheckIcon } from "lucide-react"

// function DropdownMenu({ ...props }: MenuPrimitive.Root.Props) {
//   return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />
// }

// function DropdownMenuPortal({ ...props }: MenuPrimitive.Portal.Props) {
//   return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
// }

// function DropdownMenuTrigger({ ...props }: MenuPrimitive.Trigger.Props) {
//   return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />
// }

// function DropdownMenuContent({
//   align = "start",
//   alignOffset = 0,
//   side = "bottom",
//   sideOffset = 4,
//   className,
//   ...props
// }: MenuPrimitive.Popup.Props &
//   Pick<
//     MenuPrimitive.Positioner.Props,
//     "align" | "alignOffset" | "side" | "sideOffset"
//   >) {
//   return (
//     <MenuPrimitive.Portal>
//       <MenuPrimitive.Positioner
//         className="isolate z-50 outline-none"
//         align={align}
//         alignOffset={alignOffset}
//         side={side}
//         sideOffset={sideOffset}
//       >
//         <MenuPrimitive.Popup
//           data-slot="dropdown-menu-content"
//           className={cn("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-lg bg-popover p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className )}
//           {...props}
//         />
//       </MenuPrimitive.Positioner>
//     </MenuPrimitive.Portal>
//   )
// }

// function DropdownMenuGroup({ ...props }: MenuPrimitive.Group.Props) {
//   return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
// }

// function DropdownMenuLabel({
//   className,
//   inset,
//   ...props
// }: MenuPrimitive.GroupLabel.Props & {
//   inset?: boolean
// }) {
//   return (
//     <MenuPrimitive.GroupLabel
//       data-slot="dropdown-menu-label"
//       data-inset={inset}
//       className={cn(
//         "px-1.5 py-1 text-xs font-medium text-muted-foreground data-inset:pl-7",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function DropdownMenuItem({
//   className,
//   inset,
//   variant = "default",
//   ...props
// }: MenuPrimitive.Item.Props & {
//   inset?: boolean
//   variant?: "default" | "destructive"
// }) {
//   return (
//     <MenuPrimitive.Item
//       data-slot="dropdown-menu-item"
//       data-inset={inset}
//       data-variant={variant}
//       className={cn(
//         "group/dropdown-menu-item relative flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// function DropdownMenuSub({ ...props }: MenuPrimitive.SubmenuRoot.Props) {
//   return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />
// }

// function DropdownMenuSubTrigger({
//   className,
//   inset,
//   children,
//   ...props
// }: MenuPrimitive.SubmenuTrigger.Props & {
//   inset?: boolean
// }) {
//   return (
//     <MenuPrimitive.SubmenuTrigger
//       data-slot="dropdown-menu-sub-trigger"
//       data-inset={inset}
//       className={cn(
//         "flex cursor-default items-center gap-1.5 rounded-md px-1.5 py-1 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}
//     >
//       {children}
//       <ChevronRightIcon className="ml-auto" />
//     </MenuPrimitive.SubmenuTrigger>
//   )
// }

// function DropdownMenuSubContent({
//   align = "start",
//   alignOffset = -3,
//   side = "right",
//   sideOffset = 0,
//   className,
//   ...props
// }: React.ComponentProps<typeof DropdownMenuContent>) {
//   return (
//     <DropdownMenuContent
//       data-slot="dropdown-menu-sub-content"
//       className={cn("w-auto min-w-[96px] rounded-lg bg-popover p-1 text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className )}
//       align={align}
//       alignOffset={alignOffset}
//       side={side}
//       sideOffset={sideOffset}
//       {...props}
//     />
//   )
// }

// function DropdownMenuCheckboxItem({
//   className,
//   children,
//   checked,
//   inset,
//   ...props
// }: MenuPrimitive.CheckboxItem.Props & {
//   inset?: boolean
// }) {
//   return (
//     <MenuPrimitive.CheckboxItem
//       data-slot="dropdown-menu-checkbox-item"
//       data-inset={inset}
//       className={cn(
//         "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       checked={checked}
//       {...props}
//     >
//       <span
//         className="pointer-events-none absolute right-2 flex items-center justify-center"
//         data-slot="dropdown-menu-checkbox-item-indicator"
//       >
//         <MenuPrimitive.CheckboxItemIndicator>
//           <CheckIcon
//           />
//         </MenuPrimitive.CheckboxItemIndicator>
//       </span>
//       {children}
//     </MenuPrimitive.CheckboxItem>
//   )
// }

// function DropdownMenuRadioGroup({ ...props }: MenuPrimitive.RadioGroup.Props) {
//   return (
//     <MenuPrimitive.RadioGroup
//       data-slot="dropdown-menu-radio-group"
//       {...props}
//     />
//   )
// }

// function DropdownMenuRadioItem({
//   className,
//   children,
//   inset,
//   ...props
// }: MenuPrimitive.RadioItem.Props & {
//   inset?: boolean
// }) {
//   return (
//     <MenuPrimitive.RadioItem
//       data-slot="dropdown-menu-radio-item"
//       data-inset={inset}
//       className={cn(
//         "relative flex cursor-default items-center gap-1.5 rounded-md py-1 pr-8 pl-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
//         className
//       )}
//       {...props}
//     >
//       <span
//         className="pointer-events-none absolute right-2 flex items-center justify-center"
//         data-slot="dropdown-menu-radio-item-indicator"
//       >
//         <MenuPrimitive.RadioItemIndicator>
//           <CheckIcon
//           />
//         </MenuPrimitive.RadioItemIndicator>
//       </span>
//       {children}
//     </MenuPrimitive.RadioItem>
//   )
// }

// function DropdownMenuSeparator({
//   className,
//   ...props
// }: MenuPrimitive.Separator.Props) {
//   return (
//     <MenuPrimitive.Separator
//       data-slot="dropdown-menu-separator"
//       className={cn("-mx-1 my-1 h-px bg-border", className)}
//       {...props}
//     />
//   )
// }

// function DropdownMenuShortcut({
//   className,
//   ...props
// }: React.ComponentProps<"span">) {
//   return (
//     <span
//       data-slot="dropdown-menu-shortcut"
//       className={cn(
//         "ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground",
//         className
//       )}
//       {...props}
//     />
//   )
// }

// export {
//   DropdownMenu,
//   DropdownMenuPortal,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuGroup,
//   DropdownMenuLabel,
//   DropdownMenuItem,
//   DropdownMenuCheckboxItem,
//   DropdownMenuRadioGroup,
//   DropdownMenuRadioItem,
//   DropdownMenuSeparator,
//   DropdownMenuShortcut,
//   DropdownMenuSub,
//   DropdownMenuSubTrigger,
//   DropdownMenuSubContent,
// }
