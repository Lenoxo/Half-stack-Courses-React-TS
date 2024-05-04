import { CoursePart } from "../types";
import { Part } from "./Part";

interface CourseParts {
  courseParts: CoursePart[];
}

export function Content(props: CourseParts) {
  return (
    <>
      <h2>Course Parts:</h2>
      {props.courseParts.map((coursePart) => {
        return <Part coursePart={coursePart} />;
      })}
    </>
  );
}
