/**
 * Artwork layer data: the masked image clusters and background glow blobs.
 *
 * Placement values are arbitrary pixel strings copied verbatim from the design
 * markup. `imageLoading` is omitted for the Hero cluster because those images
 * originally carried no `loading` attribute.
 */

const heroCluster = [
  {
    src: "/assets/image-2.webp",
    mask: "/assets/mask-group.png",
    wrapper: "absolute left-[1245px] top-[451px] w-[330px] h-[330px]",
    image: "absolute left-[-3px] top-0 w-[332px] h-[332px]",
  },
  {
    src: "/assets/image-3.webp",
    mask: "/assets/mask-group-2.png",
    wrapper: "absolute left-0 top-0 w-[385px] h-[385px]",
    image: "absolute left-[-4px] top-0 w-[387px] h-[387px]",
  },
  {
    src: "/assets/image-3.webp",
    mask: "/assets/mask-group-3.png",
    wrapper:
      "absolute left-[476px] top-64 w-[175px] h-[175px] [transform-origin:0_0] [transform:matrix(-1,_0,_0,_1,_0,_0)]",
    image: "absolute left-[-2px] top-0 w-44 h-44",
    maskOffset: "absolute left-[174px] top-0 w-44 h-44",
    alt: "",
  },
  {
    src: "/assets/cone-01-2.webp",
    mask: "/assets/mask-group-4.png",
    wrapper: "absolute left-[136px] top-[461px] w-[342px] h-[342px]",
    image: "absolute left-[-4px] top-[-1px] w-[344px] h-[344px]",
    alt: "Cone_01 2",
  },
  {
    src: "/assets/cone-01-2-2.webp",
    mask: "/assets/mask-group-5.png",
    wrapper: "absolute left-[1349px] top-0 w-[370px] h-[370px]",
    image: "absolute left-[-4px] top-[-1px] w-[372px] h-[372px]",
    alt: "Cone_01 2",
  },
  {
    src: "/assets/cone-01-2-3.webp",
    mask: "/assets/mask-group-6.png",
    wrapper: "absolute left-[1224px] top-[243px] w-[188px] h-[188px]",
    image: "absolute left-[-2px] top-0 w-[189px] h-[189px]",
    alt: "Cone_01 2",
  },
];

export const heroArtwork = {
  wrapper: "absolute left-[-118px] top-[221px] w-[1719px] h-[803px]",
  items: heroCluster,
};

export const creatorCtaArtwork = {
  wrapper: "absolute left-[-118px] top-[-162px] w-[1714px] h-[803px]",
  items: [
    {
      src: "/assets/cone-01-2-3.webp",
      mask: "/assets/mask-group-9.png",
      wrapper: "absolute left-[1198px] top-[162px] w-[188px] h-[188px]",
      image: "absolute left-[-2px] top-0 w-[189px] h-[189px]",
      alt: "Cone_01 2",
    },
    {
      src: "/assets/image-2.webp",
      mask: "/assets/mask-group-10.png",
      wrapper: "absolute left-[1228px] top-[451px] w-[330px] h-[330px]",
      image: "absolute left-[-3px] top-0 w-[332px] h-[332px]",
    },
    {
      src: "/assets/image-3.webp",
      mask: "/assets/mask-group-11.png",
      wrapper: "absolute left-0 top-0 w-[385px] h-[385px]",
      image: "absolute left-[-4px] top-0 w-[387px] h-[387px]",
    },
    {
      src: "/assets/image-3.webp",
      mask: "/assets/mask-group-12.png",
      wrapper:
        "absolute left-[471px] top-[167px] w-[175px] h-[175px] [transform-origin:0_0] [transform:matrix(-1,_0,_0,_1,_0,_0)]",
      image: "absolute left-[-2px] top-0 w-44 h-44",
      maskOffset: "absolute left-[174px] top-0 w-44 h-44",
    },
    {
      src: "/assets/cone-01-2-4.webp",
      mask: "/assets/mask-group-13.png",
      wrapper: "absolute left-[70px] top-[387px] w-[188px] h-[188px]",
      image: "absolute left-[-2px] top-0 w-[189px] h-[189px]",
      alt: "Cone_01 2",
    },
    {
      src: "/assets/cone-01-2.webp",
      mask: "/assets/mask-group-14.png",
      wrapper: "absolute left-[138px] top-[461px] w-[342px] h-[342px]",
      image: "absolute left-[-4px] top-[-1px] w-[344px] h-[344px]",
      alt: "Cone_01 2",
    },
    {
      src: "/assets/cone-01-2-2.webp",
      mask: "/assets/mask-group-15.png",
      wrapper: "absolute left-[1344px] top-[168px] w-[370px] h-[370px]",
      image: "absolute left-[-4px] top-[-1px] w-[372px] h-[372px]",
      alt: "Cone_01 2",
    },
  ],
};

/** Single-image masked clusters embedded inside Growth's artwork rows. */
export const growthArtwork = [
  {
    src: "/assets/image-2.webp",
    mask: "/assets/mask-group-7.png",
    wrapper: "absolute left-[406px] top-[67px] w-[215px] h-[215px]",
    image: "absolute left-[-2px] top-0 w-[216px] h-[216px]",
  },
  {
    src: "/assets/image-3.webp",
    mask: "/assets/mask-group-8.png",
    wrapper: "absolute left-[305px] top-[114px] w-[215px] h-[215px]",
    image: "absolute left-[-2px] top-0 w-[216px] h-[216px]",
  },
];

const BLUE = "0,_59,_226";
const LIME = "203,_252,_1";

/** Blobs nested inside the oversized, clipped backdrop wrapper. */
export const growthBlobs = [
  {
    placement: "left-[1230px] top-[1254px] w-[1137px] h-[1137px]",
    size: 1137,
    rgb: BLUE,
    alphas: ["0.24", "0.06", "0.01", "0"],
  },
  {
    placement: "left-[356px] top-0 w-[1137px] h-[1137px]",
    size: 1137,
    rgb: LIME,
    alphas: ["0.4", "0.09", "0.02", "0"],
  },
  {
    placement: "left-0 top-[649px] w-[1137px] h-[1137px]",
    size: 1137,
    rgb: BLUE,
    alphas: ["0.16", "0.04", "0.01", "0"],
  },
  {
    placement: "left-[1319px] top-2 w-[1137px] h-[1137px]",
    size: 1137,
    rgb: BLUE,
    alphas: ["0.08", "0.02", "0", "0"],
  },
];

/** The lime blob that sits beside the backdrop wrapper. */
export const growthOuterBlob = {
  placement: "left-[-287px] top-[946px] w-[672px] h-[672px]",
  size: 672,
  rgb: LIME,
  alphas: ["0.6", "0.14", "0.04", "0"],
};

export const testimonialsBlobs = [
  {
    placement: "left-[842px] top-[-241px] w-[1137px] h-[1137px]",
    size: 1137,
    rgb: LIME,
    alphas: ["0.4", "0.09", "0.02", "0"],
  },
  {
    placement: "left-[395px] top-[-138px] w-[672px] h-[672px]",
    size: 672,
    rgb: LIME,
    alphas: ["0.6", "0.14", "0.04", "0"],
  },
  {
    placement: "left-[-442px] top-[149px] w-[1137px] h-[1137px]",
    size: 1137,
    rgb: BLUE,
    alphas: ["0.24", "0.06", "0.01", "0"],
  },
];