import "./App.css";
import Interests from "./components/Interests";

function App() {
  const user = {
    name: "Nikhil",
    interests: [
      "Drawing",
      "Photography",
      " Design",
      "Programming",
      "Computer Science",
    ],
  };
  return (
    <>
      <h1>Resume</h1>
      <h2>{user.name}</h2>
      <hr />
      <Interests interests={user.interests} />
    </>
  );
}

export default App;
