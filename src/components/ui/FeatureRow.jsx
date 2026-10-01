import { cx } from "./cx.js";

/**
 * Icon + label row from the creator feature list.
 */
export default function FeatureRow({ icon, iconAlt, label }) {
  return (
    <div className="shrink-0 flex items-end gap-2">
      <img
        className={cx("w-6 h-6 shrink-0")}
        src={icon}
        alt={iconAlt}
        loading="lazy"
        decoding="async"
      />
      <p className="font-['Satoshi',_sans-serif] text-[length:18px] font-medium shrink-0 leading-[22px] text-[#242528] whitespace-nowrap">
        {label}
      </p>
    </div>
  );
}