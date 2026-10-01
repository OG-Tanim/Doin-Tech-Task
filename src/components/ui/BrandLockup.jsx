import { cx } from "./cx.js";

/**
 * The ByteSpace logo + wordmark.
 *
 * Header and Footer ship the same glyph as two separate exports
 * (`vector.svg` / `vector-2.svg`) differing only in the wordmark colour, so the
 * logo path and tone are props. The element name differs too (the Header's
 * brand slot is itself a `<header>`), hence `as`. The Footer copy carried
 * `loading`/`decoding` while the Header copy did not, hence `lazy`.
 */
export default function BrandLockup({
  as: Tag = "div",
  logo,
  tone = "light",
  lazy = true,
  hook = null,
  className,
}) {
  return (
    <Tag
      {...(hook ? { [hook]: true } : {})}
      className={cx("shrink-0 relative", className)}
    >
      <img
        className="absolute left-0 top-0 w-[29px] h-8"
        src={logo}
        alt=""
        loading={lazy ? "lazy" : undefined}
        decoding={lazy ? "async" : undefined}
      />
      <p
        className={cx(
          "absolute left-[37px] top-[7px] font-['Clash_Display',_sans-serif] text-[length:24px] font-bold whitespace-nowrap",
          tone === "light" ? "text-[#f5f5f6]" : "text-[#242528]",
        )}
      >
        ByteSpace
      </p>
    </Tag>
  );
}