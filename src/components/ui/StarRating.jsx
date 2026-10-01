import { cx } from "./cx.js";

/**
 * Star + numeric rating.
 *
 * Two shapes exist and they are genuinely different: the small `4.5 (240)`
 * pair (count as a sibling text node, 12–16px, alt="") and the larger card
 * rating (value only, 18px, absolutely positioned, alt="Style=Outlined").
 * Passing `count` switches between them; everything else is caller-supplied
 * because the values are all distinct arbitrary classes.
 */
export default function StarRating({
  value,
  count,
  icon,
  iconAlt = "",
  loading,
  valueClass,
  highlightClass,
  iconClass,
  className,
}) {
  return (
    <div className={cx("flex items-center", className)}>
      <p
        className={cx(
          "font-['Satoshi',_sans-serif] shrink-0 whitespace-nowrap",
          valueClass,
        )}
      >
        {count ? (
          <>
            <span className={cx(highlightClass)}>{value} </span>
            {count}
          </>
        ) : (
          <>{value} </>
        )}
      </p>
      <img
        className={cx(iconClass)}
        src={icon}
        alt={iconAlt}
        loading={loading}
        decoding="async"
      />
    </div>
  );
}