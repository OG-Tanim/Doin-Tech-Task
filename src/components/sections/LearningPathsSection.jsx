import CategoryCard from "../ui/CategoryCard.jsx";
import { featuredCategories, PATH_LABEL_CLASS } from "../../data/categories.js";
import FlowSection from "../ui/FlowSection.jsx";

export default function LearningPathsSection() {
  return (
    <>
      <FlowSection
        flow="learning-paths"
        className="absolute left-[119px] top-[2755px] w-[1202px] h-[167px] flex items-start flex-wrap content-start gap-10"
      >
        {featuredCategories.map((category) => (
          <CategoryCard
            key={category.label}
            label={category.label}
            icon={category.icon}
            iconClass={category.iconClass}
            innerClass={category.innerClass}
            labelClass={PATH_LABEL_CLASS}
          />
        ))}
      </FlowSection>
    </>
  );
}
