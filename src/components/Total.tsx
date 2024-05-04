interface Total {
  totalExercises: number;
}

export function Total(props: Total) {
  return <h2>Total of exercises {props.totalExercises}</h2>;
}
