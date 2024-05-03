interface Total {
  totalExercises: number;
}

export function Total(props: Total) {
  return <p>Number of exercises {props.totalExercises}</p>;
}
