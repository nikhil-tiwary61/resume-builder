export default function List({ layout, items }) {
  return (
    <>
      <ul style={{ listStyleType: layout }}>
        {items.map((item, index) => {
          return <li key="index">{item}</li>;
        })}
      </ul>
    </>
  );
}
