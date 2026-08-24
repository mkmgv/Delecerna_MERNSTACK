import Student from './components/student.jsx';
import Subject from './components/subject.jsx';

function App() {
  return (
    <div>
      <Student
        name="Kim Delacerna"
        age="20"
        section="BSIT-3-1"
        studentnumber="2024001990"
        course="Information Technology"
      />

      <Student
        name="Mj Melendrez"
        age="20"
        section="BSIT-3-1"
        studentnumber="2024001990"
        course="Information Technology"
      />

      <Subject
        subjectCode="CCL305"
        subjectName="Web Development"
        instructor="Mr. Delacerna"
        schedule="Monday 8:00 AM - 10:00 AM"
        units="3"
      />
    </div>
  );
}

export default App;
