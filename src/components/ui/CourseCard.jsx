import { cx } from "./cx.js";
import AvatarStack from "./AvatarStack.jsx";
import StarRating from "./StarRating.jsx";

const COURSE_AVATARS = [
  "/assets/ellipse-2.webp",
  "/assets/ellipse-8.webp",
  "/assets/ellipse-9.webp",
  "/assets/ellipse-10.webp",
];

const BADGE =
  "shrink-0 flex flex-col justify-center items-center py-1.5 px-3 rounded-[24px] bg-[rgba(246,_246,_246,_0.6)] [-webkit-backdrop-filter:blur(4px)] [backdrop-filter:blur(4px)]";

const BADGE_LABEL =
  "font-['Satoshi',_sans-serif] text-[length:12px] font-medium shrink-0 text-[#4f4f4f] text-center whitespace-nowrap";

/**
 * The course card used six times in the catalog and once in the Growth artwork.
 *
 * Structure is fixed (thumbnail + frosted meta badges, title/author, level +
 * student avatars, price, rating chip). Everything that varied between the
 * seven copies — image, badge copy, title, the two badge/icon asset families,
 * the body-block and rating-box dimensions, and the Growth variant's dark
 * avatar bubble and `$` weight — arrives through props.
 */
export default function CourseCard({
  image,
  imagePadding = "pr-3.5 pb-[19px] pl-3",
  badges,
  badgeLabelClass = "leading-[14px]",
  title,
  titleClass = "leading-[24px] whitespace-nowrap",
  bodyClass = "w-[237px] h-[131px]",
  author = "purepearl studio",
  authorClass = "shrink-0 leading-[19px]",
  levelIcon,
  level = "Beginner",
  levelLabelClass = "leading-[14px]",
  studentAvatars = COURSE_AVATARS,
  studentCount = "26+",
  bubbleTone = "bg-[#d4fb20]",
  bubbleText = "text-[#242528]",
  bubbleLabelClass = "left-[5px] top-1.5 leading-[20px]",
  priceClass = "leading-[24px]",
  priceWeightSign = false,
  priceChildren,
  priceSuffix = "/lifetime",
  priceSuffixClass = "shrink-0 leading-[19px]",
  rating,
  ratingIcon,
  ratingBoxClass = "w-[50px] h-[29px]",
  ratingValueClass = "font-normal leading-[29px]",
  stretched = true,
  shrink = true,
  className,
  style,
}) {
  return (
    <div
      className={cx(
        "w-[373px] h-96 rounded-[24px] overflow-hidden bg-[#ffffff] [outline:1px_solid_#ced0d3] [outline-offset:-1px]",
        shrink && "shrink-0",
        stretched && "relative",
        className,
      )}
      style={style}
    >
      <div
        className={cx(
          "absolute left-4 top-4 w-[341px] h-[195px] flex justify-center items-center pt-[150px]",
          imagePadding,
          "rounded-[12px] overflow-hidden",
        )}
        style={{
          background: `url("${image}") center / cover no-repeat, #443131`,
        }}
      >
        <div className="shrink-0 w-[315px] self-stretch flex items-start gap-3">
          {badges.map((badge) => (
            <div key={badge} className={cx(BADGE)}>
              <p className={cx(BADGE_LABEL, badgeLabelClass)}>{badge}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={cx("absolute left-4 top-[232px] flex flex-col items-start gap-3", bodyClass)}>
        <div className="shrink-0 flex flex-col items-start">
          <p
            className={cx(
              "font-['Poppins',_sans-serif] text-[length:20px] font-semibold tracking-[0] shrink-0 text-[#000000]",
              titleClass,
            )}
          >
            {title}
          </p>
          <p
            className={cx(
              "font-['Satoshi',_sans-serif] text-[length:12px] font-normal text-[#003be2] whitespace-nowrap",
              authorClass,
            )}
          >
            <span className="text-[#4f4f4f]">by </span>
            {author}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-3">
          <div className="shrink-0 flex justify-center items-center gap-1 py-1.5 px-3 rounded-[24px] bg-[#f5f5f6]">
            <img
              className="w-5 h-5 shrink-0"
              src={levelIcon}
              alt="signal_cellular_alt"
              loading="lazy"
              decoding="async"
            />
            <p
              className={cx(
                "font-['Satoshi',_sans-serif] text-[length:12px] font-medium shrink-0 text-[#4b4c53] text-center whitespace-nowrap",
                levelLabelClass,
              )}
            >
              {level}
            </p>
          </div>
          <AvatarStack images={studentAvatars} size={32}>
            <div className="shrink-0 flex items-start gap-2 relative">
              <div className={cx("shrink-0 w-8 h-8 rounded-full", bubbleTone)}></div>
              <p
                className={cx(
                  "font-['Satoshi',_sans-serif] text-[length:12px] font-medium absolute text-center whitespace-nowrap",
                  bubbleText,
                  bubbleLabelClass,
                )}
              >
                {studentCount}
              </p>
            </div>
          </AvatarStack>
        </div>

        <div className="shrink-0 flex items-end">
          <p
            className={cx(
              "font-['Poppins',_sans-serif] text-[length:20px] font-semibold tracking-[0] shrink-0 w-9 h-6 text-[#003be2] flex flex-col justify-center",
              priceClass,
            )}
          >
            {priceChildren ?? (
              <span>
                {priceWeightSign ? (
                  <>
                    <span className="font-medium">$</span>25
                  </>
                ) : (
                  "$25"
                )}
              </span>
            )}
          </p>
          <p
            className={cx(
              "font-['Satoshi',_sans-serif] text-[length:12px] font-normal text-[#4f4f4f] whitespace-nowrap",
              priceSuffixClass,
            )}
          >
            {priceSuffix}
          </p>
        </div>
      </div>

      <StarRating
        value={rating}
        icon={ratingIcon}
        iconAlt="Style=Outlined"
        loading="lazy"
        className={cx("absolute left-[306px] top-[232px]", ratingBoxClass)}
        valueClass={cx(
          "font-['Satoshi',_sans-serif] text-[length:18px] text-[#4f4f4f]",
          ratingValueClass,
        )}
        iconClass="w-6 h-6 shrink-0"
      />
    </div>
  );
}