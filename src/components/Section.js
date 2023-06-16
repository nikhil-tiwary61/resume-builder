export default function Section({ sectionHead, children }) {
  return (
    <>
      <p>{sectionHead}</p>
      {children}
    </>
  );
}
