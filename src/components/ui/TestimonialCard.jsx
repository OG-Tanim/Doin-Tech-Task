import { cx } from "./cx.js";

/**
 * Avatar + name/role + quote card used in the testimonials row.
 *
 * The first card's name sits on a 24px line-height while the other two use
 * 28px, so `titleLeading` stays caller-supplied.
 */
export default function TestimonialCard({
  avatar,
  name,
  role,
  quote,
  titleLeading = "leading-[24px]",
}) {
  return (
    <div className="shrink-0 flex flex-col items-start gap-6 p-6 rounded-[24px] bg-[#ffffff]">
      <img
        className={cx("shrink-0 h-20 w-20 rounded-full object-cover")}
        src={avatar}
        alt=""
      />
      <div className="shrink-0 flex flex-col items-start">
        <p
          className={cx(
            "font-['Poppins',_sans-serif] text-[length:20px] font-semibold tracking-[0] shrink-0",
            titleLeading,
            "text-[#000000] whitespace-nowrap",
          )}
        >
          {name}
        </p>
        <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 leading-[29px] text-[#003be2] whitespace-nowrap">
          {role}
        </p>
      </div>
      <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 w-[326px] leading-[29px] text-[#4f4f4f]">
        {quote}
      </p>
    </div>
  );
}