import "./App.css";
import Button from "./components/Button";
import Border from "./components/Border";
import Interests from "./components/Interests";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Extracurriculars from "./components/Extracurriculars";

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
    extracurriculars: ["Recycling Club", "Gardening Club", "Book Club"],
  };
  return (
    <>
      <h1>Resume</h1>
      <h2>{user.name}</h2>
      <hr />
      <Interests interests={user.interests} />
      <Border>
        <Skills skills={user.skills} />
      </Border>
      <Education education={user.education} />
      <Experience experience={user.experience} />
      <Extracurriculars extracurriculars={user.extracurriculars} />
      <Button>Print</Button>
    </>
  );
}

export default App;
