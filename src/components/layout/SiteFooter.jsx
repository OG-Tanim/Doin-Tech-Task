import NewsletterForm from "../ui/NewsletterForm.jsx";
import FooterLinks from "../ui/FooterLinks.jsx";
import BrandLockup from "../ui/BrandLockup.jsx";
import { footerLinkGroups, newsletter, footerLegal } from "../../data/site.js";
import FlowSection from "../ui/FlowSection.jsx";

const legalLinkClass =
  "font-['Satoshi',_sans-serif] text-[length:12px] font-normal shrink-0 leading-[19px] text-[#242528] whitespace-nowrap";

export default function SiteFooter() {
  return (
    <>
      <FlowSection
        tag="footer"
        flow="site-footer"
        className="absolute left-0 top-[5774px] w-[1440px] h-[525px] flex flex-col items-center gap-[70px] pt-[1px] pr-0 pb-12 pl-0 overflow-hidden bg-[#ffffff]"
      >
        <div className="shrink-0 h-0 w-[1440px]"></div>
        <div
          data-footer-content
          className="shrink-0 h-[406px] self-stretch flex flex-col items-center gap-[130px]"
        >
          <footer data-footer-main className="shrink-0 flex items-start gap-[92px]">
            <div className="shrink-0 flex flex-col items-start gap-[45px]">
              <div className="shrink-0 flex flex-col items-start gap-4">
                <BrandLockup
                  logo="/assets/vector-2.svg"
                  tone="dark"
                  className="h-[37px] w-[171px]"
                />
                <p className="font-['Satoshi',_sans-serif] text-[length:14px] font-normal leading-[22px] shrink-0 w-[528px] text-[#242528]">
                  {newsletter.blurb}
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start gap-6">
                <NewsletterForm
                  type="email"
                  name="email"
                  label="Email address"
                  placeholder={newsletter.placeholder}
                  action={newsletter.action}
                />
                <p className="font-['Satoshi',_sans-serif] text-[length:12px] font-normal shrink-0 w-[504px] leading-[19px] text-[#242528]">
                  {newsletter.consent}
                </p>
              </div>
            </div>
            <div
              data-footer-links
              className="shrink-0 w-[580px] flex items-end gap-10"
            >
              <FooterLinks
                heading="Browse"
                links={footerLinkGroups.browse}
                wrapperClass="shrink-0 w-[167px] flex flex-col items-start gap-6"
              />
              <FooterLinks
                links={footerLinkGroups.more}
                wrapperClass="shrink-0 w-[167px] flex flex-col items-start gap-6"
              />
              <FooterLinks
                heading="Platform"
                links={footerLinkGroups.platform}
                wrapperClass="shrink-0 w-[167px] flex flex-col items-start gap-6"
              />
            </div>
          </footer>
          <div
            data-footer-legal
            className="shrink-0 h-[42px] w-[1200px] flex flex-col justify-between items-start"
          >
            <img
              className="shrink-0 h-[1px] w-[1200px]"
              src="/assets/line.svg"
              alt=""
              loading="lazy"
              decoding="async"
            />
            <div className="shrink-0 w-[1200px] flex justify-between items-start">
              <p className="font-['Satoshi',_sans-serif] text-[length:12px] font-normal shrink-0 w-[460px] leading-[19px] text-[#242528]">
                {footerLegal.copyright}
              </p>
              <div className="shrink-0 flex items-start gap-6">
                {footerLegal.links.map((link) => (
                  <p key={link} className={legalLinkClass}>
                    {link}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FlowSection>
    </>
  );
}