import { CoursePart } from "../types";

export function Part({ coursePart }: { coursePart: CoursePart }) {
  return (
    <p>
      {coursePart.name} {coursePart.exerciseCount}
    </p>
  );
}
