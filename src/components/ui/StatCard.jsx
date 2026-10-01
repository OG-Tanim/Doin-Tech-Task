import { cx } from "./cx.js";
import GlassCard from "./GlassCard.jsx";

/**
 * Dark-blue glass stat card used for "Total Revenue" and "Year to Date".
 * Only the revenue card carries a progress bar, hence `withProgress`.
 */
export default function StatCard({
  title,
  subtitle,
  value,
  delta = "+12$",
  withProgress = false,
  trackBg = "bg-[#ffffff]",
  valueClass = "shrink-0",
  tone = "blue",
  className,
  ...rest
}) {
  return (
    <GlassCard tone={tone} className={className} {...rest}>
      <div className="shrink-0 flex flex-col items-start">
        <p className="shrink-0 font-['Satoshi',_sans-serif] text-[length:16px] font-medium leading-[19px] text-[#f5f5f6] whitespace-nowrap">
          {title}
        </p>
        <p className="shrink-0 font-['Satoshi',_sans-serif] text-[length:10px] font-normal leading-[12px] text-[#f5f5f6] whitespace-nowrap">
          {subtitle}
        </p>
      </div>
      {withProgress ? (
        <div className="shrink-0 w-[200px] flex justify-between items-center">
          <p
            className={cx(
              "font-['Poppins',_sans-serif] font-semibold tracking-[0] text-[length:24px] leading-[32px] text-[#f5f5f6] whitespace-nowrap",
              valueClass,
            )}
          >
            {value}
          </p>
          <div className="shrink-0 flex flex-col justify-center items-center py-0.5 px-2 rounded-[24px] bg-[#cbfc01]">
            <p className="shrink-0 font-['Satoshi',_sans-serif] text-[length:10px] font-medium leading-[20px] text-[#242528] text-center whitespace-nowrap">
              {delta}
            </p>
          </div>
        </div>
      ) : (
        <>
          <p
            className={cx(
              "font-['Poppins',_sans-serif] font-semibold tracking-[0] text-[length:24px] leading-[32px] text-[#f5f5f6] whitespace-nowrap",
              valueClass,
            )}
          >
            {value}
          </p>
          <div className="shrink-0 flex flex-col justify-center items-center py-0.5 px-2 rounded-[24px] bg-[#cbfc01]">
            <p className="shrink-0 font-['Satoshi',_sans-serif] text-[length:10px] font-medium leading-[20px] text-[#242528] text-center whitespace-nowrap">
              {delta}
            </p>
          </div>
        </>
      )}
      {withProgress ? (
        <div className="shrink-0 h-2 w-[200px] relative">
          <div className={cx("absolute left-0 top-0 w-[200px] h-2 rounded-[24px]", trackBg)}></div>
          <div className="absolute left-0 top-0 w-28 h-2 rounded-[24px] bg-[#d4fb20]"></div>
        </div>
      ) : null}
    </GlassCard>
  );
}