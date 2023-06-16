import "./App.css";
import Section from "./components/Section";
import List from "./components/List";
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
      <Section sectionHead="Interests">
        <List items={user.interests} />
      </Section>
      <Border>
        <Section sectionHead="Skills">
          <List items={user.skills} />
        </Section>
      </Border>
      <Section sectionHead="Education">
        <List items={user.education} />
      </Section>
      <Section sectionHead="Experience">
        <List items={user.experience} />
      </Section>
      <Section sectionHead="Extracurriculars">
        <List layout="numbered" items={user.extracurriculars} />
      </Section>
      <Button>Print</Button>
    </>
  );
}

export default App;
