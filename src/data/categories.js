/**
 * The six categories rendered by the outlined Learning Paths grid.
 *
 * `icon`/`innerClass` are the per-item icon and offset strings from the design
 * markup, which vary card to card and therefore cannot be collapsed into a
 * preset. `iconClass` is the shared tile-sized wrapper the icon is inset into.
 */

export const featuredCategories = [
  {
    label: "Design",
    icon: "/assets/frame-4.svg",
    iconClass: "shrink-0",
    innerClass: "left-[52px] top-9 w-[63px] h-24",
  },
  {
    label: "Development",
    icon: "/assets/frame-4-2.svg",
    iconClass: "shrink-0",
    innerClass: "left-[23px] top-9 w-[120px] h-24",
  },
  {
    label: "IT & Software",
    icon: "/assets/frame-4-3.svg",
    iconClass: "shrink-0",
    innerClass: "left-6 top-[35px] w-[120px] h-24",
  },
  {
    label: "Business",
    icon: "/assets/frame-4-4.svg",
    iconClass: "shrink-0",
    innerClass: "left-[45px] top-[35px] w-[78px] h-24",
  },
  {
    label: "Marketing",
    icon: "/assets/frame-4-5.svg",
    iconClass: "shrink-0",
    innerClass: "left-[39px] top-[35px] w-[91px] h-24",
  },
  {
    label: "Photography",
    icon: "/assets/frame-4-6.svg",
    iconClass: "shrink-0",
    innerClass: "left-[26px] top-[35px] w-[117px] h-24",
  },
];

export const PATH_LABEL_CLASS =
  "text-[length:20px] font-medium leading-[24px] text-[#242528]";
