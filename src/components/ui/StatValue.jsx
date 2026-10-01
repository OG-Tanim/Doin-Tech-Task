import { cx } from "./cx.js";

/**
 * A labelled metric used in the Growth stats row (12K Students, 70+ Courses…).
 */
export default function StatValue({ value, label, className }) {
  return (
    <div className={cx("shrink-0 flex flex-col items-start", className)}>
      <p className="font-['Poppins',_sans-serif] text-[length:36px] font-medium leading-[44px] tracking-[0] shrink-0 text-[#003be2] whitespace-nowrap">
        {value}
      </p>
      <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-normal shrink-0 leading-[29px] text-[#4b4c53] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}