import { cx } from "./cx.js";

const tones = {
  white: "bg-[#ffffff]",
  blue: "bg-[#003be2]",
};

/**
 * Frosted "glass" card used for the floating stat panels over artwork.
 *
 * Positioning, size and the vertical alignment (`justify-center` only on the
 * Hero cards) are caller-supplied; the padding, radius, backdrop blur and
 * background tone are what the component owns.
 */
export default function GlassCard({
  tone = "white",
  centered = false,
  hook = null,
  className,
  children,
  ...rest
}) {
  return (
    <div
      {...(hook ? { [hook]: true } : {})}
      className={cx(
        "flex flex-col items-start gap-2",
        centered && "justify-center",
        "p-4",
        "rounded-[16px]",
        "[-webkit-backdrop-filter:blur(10px)]",
        "[backdrop-filter:blur(10px)]",
        tones[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}