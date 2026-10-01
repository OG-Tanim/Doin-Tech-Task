import { cx } from "./cx.js";

export const ELEVATED_SHADOW =
  "shadow-[51px_73px_72px_0_rgba(0,_0,_0,_0.13),_37px_53px_56px_0_rgba(0,_0,_0,_0.11),_26px_37px_36px_0_rgba(0,_0,_0,_0.1),_17px_24px_24px_0_rgba(0,_0,_0,_0.09),_10px_15px_16px_0_rgba(0,_0,_0,_0.08),_5px_8px_10px_0_rgba(0,_0,_0,_0.07),_2px_3px_6px_0_rgba(0,_0,_0,_0.06),_1px_1px_3px_0_rgba(0,_0,_0,_0.04)]";

/**
 * A photo with the project's multi-stop drop shadow. The shadow token is ~230
 * characters and was duplicated verbatim three times.
 */
export default function ElevatedImage({
  src,
  alt = "",
  hook = null,
  className,
  shadow = ELEVATED_SHADOW,
  loading,
  fetchPriority,
}) {
  return (
    <img
      {...(hook ? { [hook]: true } : {})}
      className={cx("object-cover", shadow, className)}
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding="async"
    />
  );
}