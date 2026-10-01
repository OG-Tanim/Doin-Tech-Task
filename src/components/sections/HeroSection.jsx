import SiteHeader from "../layout/SiteHeader.jsx";
import ArtworkLayer from "../ui/ArtworkLayer.jsx";
import ElevatedImage from "../ui/ElevatedImage.jsx";
import FlowSection from "../ui/FlowSection.jsx";
import NewsletterForm from "../ui/NewsletterForm.jsx";
import ProgressCard from "../ui/ProgressCard.jsx";
import StudentCard from "../ui/StudentCard.jsx";
import { heroArtwork } from "../../data/artwork.js";
import { studentAvatars } from "../../data/growth.js";

export default function HeroSection() {
  return (
<FlowSection
        flow="hero"
        className="absolute left-0 top-0 w-[1440px] h-[1024px] overflow-hidden bg-[#003be2]"
      >
      <img
        data-hero-background
        className="absolute left-0 top-0 w-[1440px] h-[1024px]"
        src="/assets/group-4.svg"
        alt=""
        decoding="async"
      />
      <div
        data-hero-ring
        className="absolute left-[145px] top-[582px] w-[1149px] h-[1149px] rounded-full [outline:320px_solid_#cbfc01] [outline-offset:-320px]"
      ></div>
      <div
        data-hero-copy
        className="absolute left-[120px] top-[169px] w-[1200px] h-[345px] flex flex-col items-center gap-[60px]"
      >
        <div className="shrink-0 flex flex-col items-center gap-8">
          <p className="shrink-0 w-[935px] font-['Poppins',_sans-serif] text-[length:72px] font-semibold leading-[86px] tracking-[-1px] text-[#ffffff] text-center">
            Get Access to Hundreds Courses Available
          </p>
          <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 leading-[29px] text-[#e5e6e8] text-center whitespace-nowrap">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>
        <NewsletterForm
          type="search"
          name="q"
          placeholder="Course, topic, creator"
          action="Search"
          icon="/assets/Style-sreach-outlined.svg"
          fieldWidth="flex-1 min-w-0"
          wrapperClass="w-[581px] max-w-full"
        />
      </div>
      <SiteHeader />
      <ElevatedImage
        hook="data-hero-feature-image"
        className="absolute left-[431px] top-[512px] w-[578px] h-[541px]"
        src="/assets/image.webp"
        fetchPriority="high"
      />
      <ProgressCard
        hook="data-hero-progress"
        className="absolute left-[842px] top-[651px] w-[232px] h-[131px]"
      />
      <StudentCard
        hook="data-hero-community"
        className="absolute left-[328px] top-[837px] w-[258px] h-[121px]"
        avatars={studentAvatars}
      />
      <ArtworkLayer
        data-hero-artwork
        wrapper={heroArtwork.wrapper}
        items={heroArtwork.items}
      />
      <div
        data-hero-category
        className="absolute left-[404px] top-[639px] w-52 h-[70px] flex flex-col justify-center items-start gap-2 p-4 rounded-[16px] bg-[#ffffff] [-webkit-backdrop-filter:blur(10px)] [backdrop-filter:blur(10px)]"
      >
        <div className="shrink-0 flex flex-col items-start">
          <p className="font-['Satoshi',_sans-serif] text-[length:16px] font-medium shrink-0 leading-[19px] text-[#242528] whitespace-nowrap">
            UI/UX Design
          </p>
          <div className="shrink-0 flex items-start gap-2">
            <p className="font-['Satoshi',_sans-serif] text-[length:12px] font-normal shrink-0 leading-[19px] text-[#82868e] whitespace-nowrap">
              200 Courses
            </p>
            <p className="shrink-0 font-['Satoshi',_sans-serif] text-[length:10px] font-normal leading-[15px] text-[#82868e] whitespace-nowrap">
              •
            </p>
            <p className="font-['Satoshi',_sans-serif] text-[length:12px] font-normal shrink-0 leading-[19px] text-[#82868e] whitespace-nowrap">
              1000+ Students
            </p>
          </div>
        </div>
      </div>
    </FlowSection>
  );
}
