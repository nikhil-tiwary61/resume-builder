export default function Education({ experience }) {
  return (
    <>
      <p>Experience</p>
      <ul>
        {experience.map((job, index) => {
          return <li key={index}>{job}</li>;
        })}
      </ul>
    </>
  );
}
