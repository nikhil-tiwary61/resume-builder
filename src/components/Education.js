export default function Education({ institutes }) {
  return (
    <>
      <p>Education</p>
      <ul>
        {institutes.map((institute, index) => {
          return <li key={index}>{institute}</li>;
        })}
      </ul>
    </>
  );
}
