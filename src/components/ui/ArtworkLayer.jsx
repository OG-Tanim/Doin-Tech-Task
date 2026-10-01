import MaskedImage from "./MaskedImage.jsx";

/**
 * A cluster of masked images positioned inside a single absolutely-positioned
 * wrapper. `items` come from `src/data/artwork.js`.
 */
export default function ArtworkLayer({ wrapper, items, loading, ...rest }) {
  return (
    <div className={wrapper} {...rest}>
      {items.map((item) => (
        <MaskedImage
          key={item.mask}
          src={item.src}
          mask={item.mask}
          alt={item.alt ?? ""}
          className={item.wrapper}
          imageClass={item.image}
          maskClass={item.maskOffset ?? item.image}
          imageLoading={loading}
          maskLoading={loading}
        />
      ))}
    </div>
  );
}