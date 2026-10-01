import CourseCard from "../ui/CourseCard.jsx";
import Pill from "../ui/Pill.jsx";
import { courses, chipRows } from "../../data/catalog.js";
import FlowSection from "../ui/FlowSection.jsx";

function Chip({ label, active, link }) {
  if (link) {
    return (
      <p className="font-['Satoshi',_sans-serif] text-[length:16px] font-medium shrink-0 leading-[19px] text-[#003be2] text-center whitespace-nowrap">
        {label}
      </p>
    );
  }
  return (
    <Pill
      preset="filter"
      tone={active ? "on" : "off"}
      label={label}
      labelClass="text-center"
    />
  );
}

export default function CourseCatalogSection() {
  return (
    <>
      <FlowSection
        flow="course-catalog"
        className="absolute left-[120px] top-[1690px] w-[1199px] h-[808px] flex items-start flex-wrap content-start gap-10"
      >
        {courses.map((course) => (
          <CourseCard key={course.title} {...course} />
        ))}
      </FlowSection>
      {chipRows.map((row) => (
        <div key={row.className} data-flow-item="filters" className={row.className}>
          {row.items.map((item) => (
            <Chip key={typeof item === "string" ? item : item.label} {...(typeof item === "string" ? { label: item } : item)} />
          ))}
        </div>
      ))}
    </>
  );
}