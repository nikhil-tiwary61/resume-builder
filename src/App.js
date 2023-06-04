import "./App.css";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";

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
    education: [
      "Wiltron High School",
      "Silvermine School of Arts",
      "Codeacademy",
    ],
    experience: [
      "Student Technology Intern for Wilton School District",
      "Babysitter",
    ],
  };
  return (
    <>
      <h1>Resume</h1>
      <h2>{user.name}</h2>
      <hr />
      <Interests interests={user.interests} />
      <Skills skills={user.skills} />
      <Education institutes={user.institutes} />
      <Experience experience={user.experience} />
    </>
  );
}

export default App;
