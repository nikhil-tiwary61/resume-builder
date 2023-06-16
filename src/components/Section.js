export default function Section({ sectionHead, children, itemsCount }) {
  if (itemsCount === 0) {
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
