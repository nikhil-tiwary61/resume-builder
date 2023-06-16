export default function Button({ children }) {
  function handlePrint() {
    window.print();
  }
  return <button onClick={handlePrint}>{children}</button>;
}
