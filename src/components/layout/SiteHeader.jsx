import BrandLockup from "../ui/BrandLockup.jsx";
import { headerNav } from "../../data/site.js";

const NAV_LINK_CLASS =
  "font-['Satoshi',_sans-serif] text-[length:16px] font-normal shrink-0 leading-[26px] text-[#f5f5f6] whitespace-nowrap";


export default function SiteHeader() {
  return (
    <header
      data-home-header
      className="absolute left-0 top-0 w-[1440px] h-[120px] flex justify-center items-end gap-[322px] pt-[35px] pr-[120px] pb-[47px] pl-[122px] overflow-hidden"
    >
      <BrandLockup
        as="header"
        logo="/assets/vector.svg"
        lazy={false}
        className="w-[171px] self-stretch"
        hook="data-header-brand"
      />
      <header
        data-header-navigation
        className="shrink-0 w-[210px] self-stretch flex items-start gap-6"
      >
        {headerNav.navigation.map((item) => (
          <p key={item} className={NAV_LINK_CLASS}>
            {item}
          </p>
        ))}
      </header>
      <header
        data-header-actions
        className="shrink-0 w-[174px] self-stretch flex justify-end items-start gap-6"
      >
        {headerNav.actions.map((item) => (
          <p
            key={item}
            className="font-['Satoshi',_sans-serif] text-[length:16px] font-normal shrink-0 leading-[24px] text-[#f5f5f6] whitespace-nowrap"
          >
            {item}
          </p>
        ))}
        <img
          className="shrink-0 w-6 h-6"
          src={headerNav.actionIcon.src}
          alt={headerNav.actionIcon.alt}
        />
      </header>
    </header>
  );
}
