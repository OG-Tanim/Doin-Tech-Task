import { cx } from "./cx.js";

/**
 * A row of overlapping (or plain) circular avatars.
 *
 * The trailing "+N" bubble differs enough between the 43px and 32px variants
 * (different wrapper, positioning and weight) that callers pass it in as
 * `children` rather than being forced through a prop.
 */
export default function AvatarStack({
  images,
  size = 43,
  overlap = false,
  loading = "lazy",
  className,
  imgClass,
  children,
}) {
  const base =
    size === 43
      ? "w-[43px] h-[43px]"
      : size === 32
        ? "w-8 h-8"
        : `w-[${size}px] h-[${size}px]`;

  return (
    <div className={cx("shrink-0 flex items-start", className)}>
      {images.map((src, index) => (
        <img
          key={src}
          className={cx(
            "shrink-0",
            base,
            "rounded-full object-cover",
            overlap && index > 0 && "-ml-[17px]",
            imgClass,
          )}
          src={src}
          alt=""
          loading={loading}
          decoding="async"
        />
      ))}
      {children}
    </div>
  );
}