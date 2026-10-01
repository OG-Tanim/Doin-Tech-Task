import { cx } from "./cx.js";

/**
 * The image + PNG-mask pair used throughout the artwork layers.
 *
 * `imageClass` and `maskClass` stay caller-supplied because several usages
 * differ in offset (the mirrored variant offsets the mask, not the image) and
 * because sizes are all distinct arbitrary values. `alt` applies to the photo;
 * the mask always carries its fixed alt text.
 */
export default function MaskedImage({
  src,
  mask,
  className,
  imageClass,
  maskClass,
  alt = "",
  imageLoading,
  maskLoading,
}) {
  return (
    <div className={cx(className)}>
      <img
        className={cx(imageClass, "object-cover")}
        src={src}
        alt={alt}
        loading={imageLoading}
        decoding="async"
      />
      <img
        className={cx(maskClass)}
        src={mask}
        alt="Mask Group"
        loading={maskLoading}
        decoding="async"
      />
    </div>
  );
}