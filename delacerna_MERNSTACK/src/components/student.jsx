function student({ name, age, section, studentnumber, course }) {
  return (
    <div>
      <h2>Student Information</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Section: {section}</p>
      <p>Student Number: {studentnumber}</p>
      <p>Course: {course}</p>
    </div>
  );
}

export default student;
