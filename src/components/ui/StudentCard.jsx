import { cx } from "./cx.js";
import GlassCard from "./GlassCard.jsx";

/**
 * The "Happy Students" glass card with an avatar stack and a rating.
 *
 * The Hero and Growth copies differ only in the title's width, the rating's font
 * size/leading/weight, the star asset, and whether the avatars lazy-load — so
 * those arrive as props. The overlap is applied to every avatar after the first,
 * which is what keeps the row inside the card's content box.
 */
export default function StudentCard({
  title = "Happy Students",
  titleClass = "shrink-0 w-[115px] leading-[19px]",
  ratingValue = "4.5",
  ratingCount = "(240)",
  ratingHighlightClass = "text-[#242528]",
  ratingValueClass = "text-[length:12px] leading-[19px]",
  star = "/assets/star.svg",
  avatars,
  studentCount = "2K+",
  bubbleClass = "-ml-[17px] w-[43px] h-[43px] relative",
  bubbleBg = "bg-[#d4fb20]",
  bubbleLabelClass = "left-3 top-[13px] font-bold leading-[18px]",
  loading,
  hook = null,
  className,
  ...rest
}) {
  return (
    <GlassCard hook={hook} centered className={className} {...rest}>
      <div className="shrink-0 flex flex-col items-start">
        <p
          className={cx(
            "font-['Satoshi',_sans-serif] text-[length:16px] font-medium text-[#242528]",
            titleClass,
          )}
        >
          {title}
        </p>
        <div className="shrink-0 flex items-center">
          <p
            className={cx(
              "font-['Satoshi',_sans-serif] font-normal shrink-0 text-[#82868e] whitespace-nowrap",
              ratingValueClass,
            )}
          >
            <span className={cx(ratingHighlightClass)}>{ratingValue} </span>
            {ratingCount}
          </p>
          <img
            className="shrink-0 w-4 h-4"
            src={star}
            alt=""
            loading={loading}
            decoding="async"
          />
        </div>
      </div>
      <div className="shrink-0 flex items-start">
        {avatars.map((src, index) => (
          <img
            key={src}
            className={cx(
              "shrink-0 w-[43px] h-[43px] rounded-full object-cover",
              index > 0 && "-ml-[17px]",
            )}
            src={src}
            alt=""
            loading={loading}
            decoding="async"
          />
        ))}
        <div className={cx("shrink-0", bubbleClass)}>
          <div className={cx("absolute left-0 top-0 w-[43px] h-[43px] rounded-full", bubbleBg)}></div>
          <p
            className={cx(
              "absolute font-['Satoshi',_sans-serif] text-[length:12px] text-[#242528] whitespace-nowrap",
              bubbleLabelClass,
            )}
          >
            {studentCount}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}