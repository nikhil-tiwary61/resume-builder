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
