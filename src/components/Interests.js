export default function Interests({ interests }) {
  return (
    <>
      <p>Interests</p>
      <ul>
        {interests.map((interest, index) => {
          return <li key={index}>{interest}</li>;
        })}
      </ul>
    </>
  );
}
