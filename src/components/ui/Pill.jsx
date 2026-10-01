import { cx } from "./cx.js";

/**
 * Small rounded label used for the catalog filter chips and the section call
 * to action buttons.
 *
 * There are only a handful of distinct pill appearances in the design, so they
 * are named presets rather than a matrix of tone/size/padding props. Each preset
 * carries the wrapper padding, the background and the label typography; `label`
 * holds the text.
 *
 * The Filter preset's labels are centred (`text-center`) while the button
 * presets' are not, which is why `text-center` lives on the chip call site rather
 * than on the shared label base.
 *
 * `wrapperTag` stays a `div` by default: the Filter chips are not interactive in
 * the design, and the creator CTA renders this inside a `<button>` that must not
 * gain a nested one. Only the newsletter/search forms opt into a real
 * `wrapperTag="button"`, where it carries the `type` for submission.
 */
const PRESETS = {
  filter: {
    wrapper: "shrink-0 flex flex-col justify-center items-center py-3 px-4 rounded-[24px]",
    tones: {
      off: "bg-[#f5f5f6]",
      on: "bg-[#d4fb20]",
    },
    label: "text-[length:16px] leading-[19px]",
    labelTones: {
      off: "text-[#4b4c53]",
      on: "text-[#242528]",
    },
  },
  action: {
    wrapper: "shrink-0 flex justify-center items-center gap-2 py-3 px-6 rounded-[24px]",
    tones: { default: "bg-[#d4fb20]" },
    label: "text-[length:18px] leading-[22px]",
    labelTones: { default: "text-[#242528]" },
  },
};

export default function Pill({
  preset = "action",
  tone = "default",
  label,
  labelTag = "p",
  wrapperTag: WrapperTag = "div",
  wrapperClass,
  labelClass,
  ...rest
}) {
  const { wrapper, tones, label: labelSize, labelTones } = PRESETS[preset];
  const Tag = labelTag;

  return (
    <WrapperTag className={cx(wrapper, tones[tone], wrapperClass)} {...rest}>
      <Tag
        className={cx(
          "font-['Satoshi',_sans-serif] font-medium shrink-0 whitespace-nowrap",
          labelSize,
          labelTones[tone],
          labelClass,
        )}
      >
        {label}
      </Tag>
    </WrapperTag>
  );
}