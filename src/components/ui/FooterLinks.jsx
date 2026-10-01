import { cx } from "./cx.js";

/**
 * One column of footer links. The middle column has no heading, so `heading`
 * is optional and renders nothing when absent.
 */
export default function FooterLinks({
  heading,
  links,
  wrapperClass,
  headingClass = "font-['Satoshi',_sans-serif] text-[length:16px] font-normal shrink-0 leading-[24px] whitespace-nowrap",
  linkClass = "font-['Satoshi',_sans-serif] text-[length:14px] font-normal leading-[22px] shrink-0 text-[#242528] whitespace-nowrap",
}) {
  return (
    <div className={cx(wrapperClass)}>
      {heading ? <p className={cx(headingClass)}>{heading}</p> : null}
      <div className="shrink-0 flex flex-col items-start gap-4">
        {links.map((link) => (
          <p key={link} className={cx(linkClass)}>
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}