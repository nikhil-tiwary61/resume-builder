export default function Education({ education }) {
  return (
    <>
      <p>Education</p>
      <ul>
        {education.map((institute, index) => {
          return <li key={index}>{institute}</li>;
        })}
      </ul>
    </>
  );
}
