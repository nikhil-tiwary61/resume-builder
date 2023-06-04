export default function Extracurriculars({ extracurriculars }) {
  return (
    <>
      <p>Extracurriculars</p>
      <ul>
        {extracurriculars.map((extracurricular, index) => {
          return <li key={index}>{extracurricular}</li>;
        })}
      </ul>
    </>
  );
}
