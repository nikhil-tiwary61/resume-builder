import "./App.css";
import Interests from "./components/Interests";
import Skills from "./components/Skills";

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
    skills: ["React JS", "Node JS"],
  };
  return (
    <>
      <h1>Resume</h1>
      <h2>{user.name}</h2>
      <hr />
      <Interests interests={user.interests} />
      <Skills skills={user.skills} />
    </>
  );
}

export default App;
