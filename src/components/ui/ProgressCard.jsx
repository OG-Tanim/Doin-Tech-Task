import { cx } from "./cx.js";
import GlassCard from "./GlassCard.jsx";

/**
 * The "Learning Progress" glass card: label, big percentage, progress track.
 * The Hero and Growth copies differ only in the card height and the label's
 * line-height.
 */
export default function ProgressCard({
  label = "Learning Progress",
  labelClass = "leading-[17px]",
  value = "55%",
  trackBg = "bg-[#f6f6f6]",
  hook = null,
  className,
  ...rest
}) {
  return (
    <GlassCard hook={hook} className={className} {...rest}>
      <p
        className={cx(
          "shrink-0 font-['Satoshi',_sans-serif] text-[length:14px] font-medium text-[#242528] whitespace-nowrap",
          labelClass,
        )}
      >
        {label}
      </p>
      <div className="shrink-0 w-[200px] flex flex-col items-start gap-2">
        <p className="shrink-0 font-['Poppins',_sans-serif] text-[length:48px] font-semibold leading-[58px] tracking-[0] text-[#242528] whitespace-nowrap">
          {value}
        </p>
      </div>
      <div className="shrink-0 h-2 w-[200px] relative">
        <div
          className={cx(
            "absolute left-0 top-0 w-[200px] h-2 rounded-[24px]",
            trackBg,
          )}
        ></div>
        <div className="absolute left-0 top-0 w-28 h-2 rounded-[24px] bg-[#d4fb20]"></div>
      </div>
    </GlassCard>
  );
}