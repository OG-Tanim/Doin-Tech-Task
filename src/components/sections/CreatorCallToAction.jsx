import ArtworkLayer from "../ui/ArtworkLayer.jsx";
import Pill from "../ui/Pill.jsx";
import { creatorCtaArtwork } from "../../data/artwork.js";
import FlowSection from "../ui/FlowSection.jsx";

export default function CreatorCallToAction() {
  return (
    <>
      <FlowSection
        tag="button"
        flow="creator-cta"
        className="absolute left-0 top-[4502px] w-[1440px] h-[488px] overflow-hidden bg-[#003be2]"
        type="button"
      >
        <img
          data-cta-background
          className="absolute left-0 top-0 w-[1440px] h-[1024px]"
          src="/assets/group-4-2.svg"
          alt=""
        loading="lazy"
        decoding="async"
      />
        <div
          data-cta-copy
          className="absolute left-[238px] top-[85px] w-[964px] h-[319px] flex flex-col items-center gap-10"
        >
          <span className="font-['Poppins',_sans-serif] text-[length:44px] font-semibold leading-[53px] tracking-[0] shrink-0 w-[710px] text-[#f5f5f6] text-center">
            Unlock Your Potential as a Creator with ByteSpace
          </span>
          <span className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[964px] leading-[29px] text-[#f5f5f6] text-center">
            Experience the collaboration of numerous creators and an expanding
            selection of courses. Register now and become a part of a community
            comprising over 10,000 local and international creators. Utilize our
            Course Editor, and showcase your expertise by publishing your finest
            course on the ByteSpace Course Library.
          </span>
          <Pill preset="action" labelTag="span" label="Join as Creator" />
        </div>
        <ArtworkLayer
          data-cta-artwork
          wrapper={creatorCtaArtwork.wrapper}
          items={creatorCtaArtwork.items}
          loading="lazy"
        />
      </FlowSection>
    </>
  );
}