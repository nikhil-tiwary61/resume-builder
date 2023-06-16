import "./App.css";
import Section from "./components/Section";
import List from "./components/List";
import Button from "./components/Button";
import Border from "./components/Border";
import { user } from "./components/data/data";

function App() {
  return (
    <>
      <h1>Resume</h1>
      <h2>{user.name}</h2>
      <hr />
      <Section sectionHead="Interests" itemsCount={user.interests.length}>
        <List items={user.interests} />
      </Section>
      <Border>
        <Section sectionHead="Skills" itemsCount={user.skills.length}>
          <List items={user.skills} />
        </Section>
      </Border>
      <Section sectionHead="Education" itemsCount={user.education.length}>
        <List items={user.education} />
      </Section>
      <Section sectionHead="Experience" itemsCount={user.experience.length}>
        <List items={user.experience} />
      </Section>
      <Section
        sectionHead="Extracurriculars"
        itemsCount={user.extracurriculars.length}
      >
        <List layout="numbered" items={user.extracurriculars} />
      </Section>
      <Button>Print</Button>
    </>
  );
}

export default App;
