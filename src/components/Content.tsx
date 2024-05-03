interface CourseData {
  name: string;
  exerciseCount: number;
}

export function Content(props: CourseData) {
  return (
    <p>
      {props.name} {props.exerciseCount}
    </p>
  );
}
