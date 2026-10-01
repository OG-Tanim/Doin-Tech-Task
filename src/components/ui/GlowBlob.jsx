import { cx } from "./cx.js";

/**
 * A blurred radial "glow" blob used as section background decoration.
 *
 * Placement and size arrive as an already-built arbitrary-value class string
 * (`left-[1230px] top-[1254px] w-[1137px] h-[1137px]`) because the source
 * markup mixes computed forms like `top-2` with arbitrary ones like
 * `top-[1254px]`, and both must survive verbatim. Alpha stops are passed
 * explicitly rather than derived, because the source gradients do not follow a
 * single multiplier.
 */
export default function GlowBlob({
  placement,
  size,
  rgb,
  alphas,
  className,
  ...rest
}) {
  const half = Math.round(size / 2);
  const stop = (alpha, pct) => `_rgba(${rgb},_${alpha})_${pct}%`;
  const gradient =
    `[background:radial-gradient(${half}px_${half}px_at_50%_50%,` +
    [
      stop(alphas[0], 0),
      stop(alphas[1], 53),
      stop(alphas[2], 75),
      stop(alphas[3], 100),
    ].join(",") +
    ")]";

  return (
    <div
      className={cx(
        "absolute rounded-full",
        gradient,
        "[filter:blur(20px)]",
        placement,
        className,
      )}
      {...rest}
    />
  );
}