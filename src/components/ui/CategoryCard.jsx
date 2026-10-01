import { cx } from "./cx.js";

/**
 * A single outlined category tile in the Learning Paths grid.
 *
 * The design shipped a second, filled variant of this tile, but no section
 * renders it, so only the outlined tile survives here. `innerClass` and
 * `iconClass` carry the per-card icon geometry from the design markup, which
 * differs for every item and so cannot move into a preset.
 */
export default function CategoryCard({
  label,
  icon,
  iconClass = "shrink-0 h-[72px] w-[72px]",
  innerClass,
  labelClass = "text-[length:18px] font-normal leading-[28px] text-[#242528]",
}) {
  return (
    <div className="shrink-0 w-[167px] h-[167px] flex items-start gap-2 rounded-[24px] [outline:1px_solid_#ced0d3] [outline-offset:-1px] relative">
      <div
        className={cx(
          "absolute flex flex-col items-center gap-3",
          innerClass,
        )}
      >
        <img
          className={cx(iconClass)}
          src={icon}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <p
          className={cx(
            "font-['Satoshi',_sans-serif] shrink-0 whitespace-nowrap",
            labelClass,
          )}
        >
          {label}
        </p>
      </div>
    </div>
  );
}
