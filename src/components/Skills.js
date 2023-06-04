export default function Skills({ skills }) {
  return (
    <>
      <p>Skills</p>
      <ul>
        {skills.map((skill, index) => {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </>
  );
}
