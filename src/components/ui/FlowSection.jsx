import { cx } from "./cx.js";

/**
 * Top-level page band.
 *
 * Renders the `data-flow-item` hook that `src/styles.css` keys its responsive
 * layout off, so this must stay on the outermost element of every section and
 * the `flow` value must not change. `tag` exists because not every band is a
 * `<div>` in the design markup: `hero` and `discover-intro` are divs, while
 * `featured-divider` is an `<img>`, `creator-cta` a `<button>` and `site-footer`
 * a `<footer>`.
 */
export default function FlowSection({
  flow,
  tag: Tag = "div",
  className,
  children,
  ...rest
}) {
  return (
    <Tag data-flow-item={flow} className={cx(className)} {...rest}>
      {children}
    </Tag>
  );
}