/**
 * Course catalog content.
 *
 * `courses` drives the six cards in the catalog grid; `growthCourse` drives the
 * single dark variant inside the Growth artwork row. The field names map 1:1 to
 * `ui/CourseCard` props so the shape stays legible.
 */

export const DEFAULT_BADGES = ["17 Lessons", "2 hours 16 mins", "59 Comments"];

export const courses = [
  {
    image: "/assets/frame.jpg",
    imagePadding: "pr-[13px] pb-[19px] pl-[13px]",
    badges: DEFAULT_BADGES,
    title: "Learn Figma from Basic",
    levelIcon: "/assets/signal-cellular-alt.svg",
    rating: "4.5",
    ratingIcon: "/assets/style-outlined-5.svg",
  },
  {
    image: "/assets/frame-2.jpg",
    badges: DEFAULT_BADGES,
    title: "Build Digital Asset",
    levelIcon: "/assets/signal-cellular-alt-2.svg",
    rating: "4.5",
    ratingIcon: "/assets/style-outlined-6.svg",
  },
  {
    image: "/assets/frame-3.jpg",
    imagePadding: "pr-[13px] pb-[19px] pl-[13px]",
    badges: DEFAULT_BADGES,
    title: "the Power of Big Data",
    bodyClass: "w-[275px] h-[131px]",
    titleClass:
      "w-[275px] leading-[24px] line-clamp-2",
    levelIcon: "/assets/signal-cellular-alt-3.svg",
    bubbleLabelClass: "left-[5px] top-[9px] leading-[14px]",
    rating: "4.5",
    ratingBoxClass: "w-[51px] h-7",
    ratingValueClass: "font-medium leading-[28px]",
    ratingIcon: "/assets/style-outlined-7.svg",
  },
  {
    image: "/assets/frame-4.jpg",
    badges: DEFAULT_BADGES,
    title: "Balancing Productivity and Self-Care",
    bodyClass: "w-[280px] h-[131px]",
    titleClass:
      "w-[280px] leading-[24px] line-clamp-2",
    levelIcon: "/assets/signal-cellular-alt-4.svg",
    bubbleLabelClass: "left-[5px] top-[9px] leading-[14px]",
    rating: "4.5",
    ratingIcon: "/assets/style-outlined-8.svg",
  },
  {
    image: "/assets/frame-5.jpg",
    badges: DEFAULT_BADGES,
    title: "Mastering Money Management",
    bodyClass: "w-[280px] h-[131px]",
    titleClass:
      "w-[280px] leading-[24px] line-clamp-2",
    levelIcon: "/assets/signal-cellular-alt-5.svg",
    bubbleLabelClass: "left-[5px] top-[9px] leading-[14px]",
    rating: "4.5",
    ratingBoxClass: "w-[50px] h-[27px]",
    ratingIcon: "/assets/style-outlined-9.svg",
  },
  {
    image: "/assets/frame-6.jpg",
    badges: DEFAULT_BADGES,
    title: "From Idea to Startup Success",
    bodyClass: "w-[280px] h-[131px]",
    titleClass:
      "w-[280px] leading-[24px] line-clamp-2",
    levelIcon: "/assets/signal-cellular-alt-6.svg",
    bubbleLabelClass: "left-[5px] top-[9px] leading-[14px]",
    rating: "4.5",
    ratingBoxClass: "w-[50px] h-[27px]",
    ratingIcon: "/assets/style-outlined-10.svg",
  },
];

export const growthCourse = {
  image: "/assets/frame.jpg",
  imagePadding: "pr-3.5 pb-[13px] pl-3",
  badges: DEFAULT_BADGES,
  badgeLabelClass: "leading-[20px]",
  title: "Learn Figma from Basic",
  bodyClass: "w-[237px] h-[136px]",
  titleClass: "leading-[28px] whitespace-nowrap",
  authorClass: "shrink-0 leading-[20px]",
  levelIcon: "/assets/signal-cellular-alt-7.svg",
  levelLabelClass: "leading-[20px]",
  bubbleTone: "bg-[#000000]",
  bubbleText: "text-[#ffffff]",
  bubbleLabelClass: "left-[5px] top-1.5 leading-[20px]",
  priceClass: "leading-[28px]",
  priceWeightSign: true,
  priceSuffixClass: "shrink-0 leading-[20px]",
  rating: "4.5",
  ratingBoxClass: "w-[51px] h-7",
  ratingValueClass: "font-medium leading-[28px]",
  ratingIcon: "/assets/style-outlined-11.svg",
  stretched: false,
  shrink: false,
  className: "absolute left-0 top-0",
};

/** Filter chips, grouped into the three absolutely-positioned rows. */
export const chipRows = [
  {
    className: "absolute left-[175px] top-[1480px] w-[1086px] h-[43px] flex items-start gap-4",
    items: [
      { label: "Featured", active: true },
      "Music",
      "Drawing & Painting",
      "Marketing",
      "Animation",
      "Social Media",
      "UI/UX Design",
      "Creative Marketing",
    ],
  },
  {
    className: "absolute left-[243px] top-[1544px] w-[952px] h-[43px] flex items-start gap-4",
    items: [
      "Digital Illustration",
      "Film & Video",
      "Crafts",
      "Freelance & Entrepreneurship",
      "Graphic Design",
      "Photography",
    ],
  },
  {
    className: "absolute left-[408px] top-[1608px] w-[622px] h-[43px] flex items-center gap-4",
    items: [
      "Productivity",
      "Web Development",
      "Data Science",
      "Cooking",
      { label: "+ More", link: true },
    ],
  },
];