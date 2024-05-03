interface CourseName {
  courseName: string;
}

export function Header(props: CourseName) {
  return <h1>{props.courseName}</h1>;
}
