import GlowBlob from "../ui/GlowBlob.jsx";
import MaskedImage from "../ui/MaskedImage.jsx";
import ElevatedImage from "../ui/ElevatedImage.jsx";
import CourseCard from "../ui/CourseCard.jsx";
import ProgressCard from "../ui/ProgressCard.jsx";
import StatCard from "../ui/StatCard.jsx";
import StatValue from "../ui/StatValue.jsx";
import StudentCard from "../ui/StudentCard.jsx";
import FeatureRow from "../ui/FeatureRow.jsx";
import FlowSection from "../ui/FlowSection.jsx";
import { growthArtwork, growthBlobs, growthOuterBlob } from "../../data/artwork.js";
import { growthCourse } from "../../data/catalog.js";
import {
  stats,
  heroIntro,
  creatorIntro,
  creatorFeatures,
  progressCard,
  revenueCards,
  studentCard,
  studentAvatars,
} from "../../data/growth.js";

export default function GrowthSection() {
  return (
    <>
      <FlowSection
        flow="growth-section"
        className="absolute left-0 top-[3042px] w-[1440px] h-[1460px] overflow-hidden bg-[#fafafa]"
      >
        <div className="absolute left-[-508px] top-[-466px] w-[2456px] h-[2391px]">
          {growthBlobs.map((blob) => (
            <GlowBlob key={blob.placement} {...blob} />
          ))}
        </div>
        <GlowBlob {...growthOuterBlob} />
        <div
          data-growth-content
          className="absolute left-[121px] top-[120px] w-[1258px] h-[1220px] flex flex-col items-start gap-[72px]"
        >
          <div className="shrink-0 flex items-center gap-[63px]">
            <div
              data-growth-copy
              className="shrink-0 w-[574px] flex flex-col items-start gap-10"
            >
              <p className="font-['Poppins',_sans-serif] text-[length:44px] font-semibold leading-[53px] tracking-[0] shrink-0 w-[577px] text-[#242528]">
                {heroIntro.title}
              </p>
              <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[477px] leading-[29px] text-[#4b4c53]">
                {heroIntro.body}
              </p>
              <div className="shrink-0 flex items-end gap-14">
                {stats.map((stat) => (
                  <StatValue key={stat.label} {...stat} />
                ))}
              </div>
            </div>
            <div
              data-growth-artwork
              className="shrink-0 w-[621px] h-[552px] relative"
            >
              <CourseCard {...growthCourse} />
              <ElevatedImage
                className="absolute left-0 top-3 w-[577px] h-[540px]"
                src="/assets/image.webp"
                loading="lazy"
              />
              <ProgressCard {...progressCard} className="absolute left-[345px] top-[213px] w-[232px] h-[138px]" />
              <MaskedImage
                src={growthArtwork[0].src}
                mask={growthArtwork[0].mask}
                className={growthArtwork[0].wrapper}
                imageClass={growthArtwork[0].image}
                maskClass={growthArtwork[0].image}
                imageLoading="lazy"
                maskLoading="lazy"
              />
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-[79px]">
            <div
              data-growth-artwork
              className="shrink-0 w-[541px] h-[596px] relative"
            >
              <StatCard tone="blue" {...revenueCards.first} />
              <StatCard tone="blue" {...revenueCards.second} />
              <ElevatedImage
                className="absolute left-7 top-0 w-[435px] h-[596px]"
                src="/assets/image-4.webp"
                loading="lazy"
              />
              <StudentCard {...studentCard} avatars={studentAvatars} />
              <MaskedImage
                src={growthArtwork[1].src}
                mask={growthArtwork[1].mask}
                className={growthArtwork[1].wrapper}
                imageClass={growthArtwork[1].image}
                maskClass={growthArtwork[1].image}
                imageLoading="lazy"
                maskLoading="lazy"
              />
            </div>
            <div
              data-growth-copy
              className="shrink-0 w-[580px] flex flex-col items-start gap-10"
            >
              <p className="font-['Poppins',_sans-serif] text-[length:44px] font-semibold leading-[53px] tracking-[0] shrink-0 w-[391px] text-[#242528]">
                {creatorIntro.title}
              </p>
              <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[574px] leading-[29px] text-[#4b4c53]">
                <span className="font-bold leading-[28px] text-[#242528]">
                  {creatorIntro.brand}
                </span>
                <span className="leading-[28px]"> </span>
                {creatorIntro.body}
              </p>
              <div className="shrink-0 flex flex-col items-start gap-4">
                {creatorFeatures.map((feature) => (
                  <FeatureRow key={feature.label} {...feature} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </FlowSection>
    </>
  );
}