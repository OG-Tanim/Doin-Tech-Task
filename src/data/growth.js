/**
 * The Growth section's copy, card data and avatar lists.
 *
 * Field names map 1:1 to the props of `ui/GlowBlob`, `ui/StatValue`,
 * `ui/StatCard`, `ui/FeatureRow` and `ui/StudentCard` so the shapes stay
 * legible and are spread straight into those components.
 */

export const stats = [
  { value: "12K", label: "Students" },
  { value: "70+", label: "Courses" },
  { value: "16", label: "Creators" },
];

export const heroIntro = {
  title: "Your Path to Professional Growth Starts Here!",
  body: "Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.",
};

export const creatorIntro = {
  title: "Create & Manage Courses Easily.",
  brand: "ByteSpace",
  body:
    "supports individuals or entities in the creation, publication, and administration of educational courses. ",
};

export const creatorFeatures = [
  { icon: "/assets/style-filled-3.svg", iconAlt: "Style=Filled", label: "Share Your Expertise" },
  { icon: "/assets/style-filled-4.svg", iconAlt: "Style=Filled", label: "Monetize Your Passion" },
  { icon: "/assets/style-filled-5.svg", iconAlt: "Style=Filled", label: "Flexibility and Autonomy" },
  { icon: "/assets/style-filled-6.svg", iconAlt: "Style=Filled", label: "Build a Community" },
];

export const progressCard = {
  label: "Learning Progress",
  labelClass: "leading-[24px]",
  value: "55%",
};

export const revenueCards = {
  first: {
    title: "Total Revenue",
    subtitle: "July 1-28",
    value: "$120.29",
    delta: "+12$",
    withProgress: true,
    valueClass: "shrink-0",
    className: "absolute left-0 top-11 w-[232px] h-[119px]",
  },
  second: {
    title: "Year to Date",
    subtitle: "2023",
    value: "$1,200.38",
    delta: "+12$",
    valueClass: "shrink-0",
    className: "absolute left-0 top-[194px] w-[134px] h-[135px]",
  },
};

export const studentCard = {
  loading: "lazy",
  titleClass: "shrink-0 leading-[24px] whitespace-nowrap",
  ratingValueClass: "text-[length:10px] leading-[15px]",
  ratingHighlightClass: "font-bold text-[#242528]",
  star: "/assets/star-2.svg",
  className: "absolute left-[283px] top-[413px] w-[258px] h-[123px]",
};

export const studentAvatars = [
  "/assets/ellipse.webp",
  "/assets/ellipse-2.webp",
  "/assets/ellipse-3.webp",
  "/assets/ellipse-4.webp",
  "/assets/ellipse-5.webp",
  "/assets/ellipse-6.webp",
  "/assets/ellipse-7.webp",
];