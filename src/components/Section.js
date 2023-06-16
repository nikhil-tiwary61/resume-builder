export default function Section({ sectionHead, children, items }) {
  if (items.length === 0) {
    return;
  } else {
    return (
      <>
        <p>{sectionHead}</p>
        {children}
      </>
    );
  }
}
