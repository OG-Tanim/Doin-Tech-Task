import { cx } from "./cx.js";
import Pill from "./Pill.jsx";

/**
 * The outlined field plus the lime submit pill, shared by the hero search and
 * the footer newsletter.
 *
 * The design draws the field as a pill-shaped `div` wrapping a text run, so the
 * `div` stays as the chrome and carries the geometry, background and outline,
 * while the text run becomes a real `<input>` layered over it. That keeps the
 * design's exact look without giving up focus, typing, or a label association.
 *
 * `icon` places a leading glyph inside the field, which is what the hero search
 * needs. `fieldWidth` carries the field's sizing as literal Tailwind tokens
 * rather than a number, because an arbitrary value only gets generated if it
 * appears verbatim in the source: the footer keeps the design's fixed
 * `w-[376px]` while the hero passes `flex-1 min-w-0` so the field absorbs
 * whatever the pill leaves of its own 581px row. Mutually exclusive with a fixed
 * width, hence the single prop holding both tokens.
 */
export default function NewsletterForm({
  placeholder,
  action,
  icon = null,
  fieldWidth = "w-[376px] shrink-0",
  wrapperClass,
  fieldClass,
  inputClass,
  type = "text",
  name,
  label,
  onSubmit,
  ...rest
}) {
  const submit = (event) => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form
      data-newsletter-form
      onSubmit={submit}
      className={cx("shrink-0 flex items-start gap-6", wrapperClass)}
      {...rest}
    >
      <div
        data-newsletter-field
        className={cx(
          "h-[52px] flex items-center gap-2 py-[18px] px-6 rounded-[100px] bg-[#ffffff] [outline:1px_solid_#ced0d3] [outline-offset:-1px]",
          fieldWidth,
          fieldClass,
        )}
      >
        {icon ? (
          <img
            className="shrink-0 h-6 w-6"
            src={icon}
            alt=""
            decoding="async"
          />
        ) : null}
        <input
          className={cx(
            "min-w-0 flex-1 shrink-0 bg-transparent border-0 outline-none p-0 font-['Satoshi',_sans-serif] text-[length:16px] font-normal leading-[26px] text-[#242528] placeholder:text-[#82868e] placeholder:opacity-100",
            inputClass,
          )}
          type={type}
          name={name}
          aria-label={label ?? placeholder}
          placeholder={placeholder}
        />
      </div>
      {action ? (
        <Pill
          preset="action"
          wrapperTag="button"
          wrapperClass="cursor-pointer"
          label={action}
          labelTag="span"
          type="submit"
        />
      ) : null}
    </form>
  );
}