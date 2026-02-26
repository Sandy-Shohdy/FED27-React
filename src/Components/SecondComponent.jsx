// SecondComponent is a child component that takes the age prop from the FirstComponent component
export function SecondComponent({ age }) {
  return (
    <>
      <h2>This is a child to first component</h2>
      <p>user age is {age}</p>
    </>
  );
}
