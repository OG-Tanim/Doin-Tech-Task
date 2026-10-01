import GlowBlob from "../ui/GlowBlob.jsx";
import TestimonialCard from "../ui/TestimonialCard.jsx";
import { testimonialsBlobs } from "../../data/artwork.js";
import { testimonials, testimonialsIntro } from "../../data/testimonials.js";
import FlowSection from "../ui/FlowSection.jsx";

export default function TestimonialsSection() {
  return (
    <>
      <FlowSection
        flow="testimonials-section"
        className="absolute left-0 top-[4990px] w-[1440px] h-[784px] overflow-hidden bg-[#fafafa]"
      >
        {testimonialsBlobs.map((blob) => (
          <GlowBlob key={blob.placement} {...blob} />
        ))}
        <div
          data-testimonials-content
          className="absolute left-[118px] top-[74px] w-[1204px] h-[653px] flex flex-col items-start gap-[72px]"
        >
          <div
            data-testimonials-intro
            className="shrink-0 flex items-end gap-[43px]"
          >
            <p className="font-['Poppins',_sans-serif] text-[length:44px] font-semibold leading-[53px] tracking-[0] shrink-0 w-[577px] text-[#000000]">
              {testimonialsIntro.title}
            </p>
            <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[580px] leading-[29px] text-[#4f4f4f]">
              {testimonialsIntro.body}
            </p>
          </div>
          <div
            data-testimonials-list
            className="shrink-0 flex items-start gap-[41px]"
          >
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                titleLeading={index === 0 ? "leading-[24px]" : "leading-[28px]"}
              />
            ))}
          </div>
        </div>
      </FlowSection>
    </>
  );
}