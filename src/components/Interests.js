export default function Interests({ interests }) {
  return (
    <>
      <p>Interests</p>
      <ul>
        {interests.map((interest) => {
          return <li>{interest}</li>;
        })}
      </ul>
    </>
  );
}
