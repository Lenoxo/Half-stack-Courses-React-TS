import { CoursePart } from "../types";

export function Part({ coursePart }: { coursePart: CoursePart }) {
  /**
   * Helper function for exhaustive type checking
   */
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`,
    );
  };

  switch (coursePart.kind) {
    case "basic":
      return (
        <article>
          <h3>{coursePart.name}</h3>
          <p>Exercises: {coursePart.exerciseCount}</p>
          <p>{coursePart.description}</p>
        </article>
      );

    case "group":
      return (
        <article>
          <h3>{coursePart.name}</h3>
          <p>Exercises: {coursePart.exerciseCount}</p>
          <p>Group Projects: {coursePart.groupProjectCount}</p>
        </article>
      );

    case "background":
      return (
        <article>
          <h3>{coursePart.name}</h3>
          <p>Exercises: {coursePart.exerciseCount}</p>
          <p>{coursePart.description}</p>
          <p>Material: {coursePart.backgroundMaterial}</p>
        </article>
      );

    default:
      return assertNever(coursePart);
  }
}
