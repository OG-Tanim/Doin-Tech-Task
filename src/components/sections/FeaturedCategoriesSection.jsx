import FlowSection from "../ui/FlowSection.jsx";

export default function FeaturedCategoriesSection() {
  return (
    <>
      <FlowSection
        tag="img"
        flow="featured-divider"
        className="absolute left-0 top-[1024px] w-[1440px] h-[202px] bg-[#f5f5f6]"
        src="/assets/frame-2.svg"
        alt=""
        loading="lazy"
        decoding="async"
      />

      <FlowSection
        flow="discover-intro"
        className="absolute left-[261px] top-[1298px] w-[917px] h-[180px] flex flex-col items-center gap-4"
      >
        <p className="font-['Poppins',_sans-serif] text-[length:44px] font-semibold leading-[53px] tracking-[0] shrink-0 w-[588px] text-[#040819] text-center">
          Discover Your Passion, Build Your Skills
        </p>
        <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[917px] leading-[29px] text-[#82868e] text-center">
          At Bytespace Courses, we bring you closer to life-changing knowledge.
          Explore a variety of courses across different fields, from technology
          to the arts, and make a difference in your career and life.
        </p>
      </FlowSection>
      <FlowSection
        flow="paths-intro"
        className="absolute left-[261px] top-[2570px] w-[917px] h-[117px] flex flex-col items-center gap-4"
      >
        <p className="font-['Poppins',_sans-serif] font-semibold tracking-[0] shrink-0 text-[length:36px] leading-[43px] text-[#040819] text-center whitespace-nowrap">
          Explore Diverse Learning Paths at Bytespace
        </p>
        <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[917px] leading-[29px] text-[#82868e] text-center">
          At Bytespace, we believe in empowering individuals through knowledge.
          Our diverse range of courses spans various fields, ensuring there's
          something for everyone. Unleash your potential and explore our
          carefully curated categories.
        </p>
      </FlowSection>
    </>
  );
}
