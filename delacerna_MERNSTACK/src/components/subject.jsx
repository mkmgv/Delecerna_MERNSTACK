function Subject({ subjectCode, subjectName, instructor, schedule, units }) {
  return (
    <div>
      <h2>Subject Information</h2>

      <p>Subject Code: {subjectCode}</p>
      <p>Subject Name: {subjectName}</p>
      <p>Instructor: {instructor}</p>
      <p>Schedule: {schedule}</p>
      <p>Units: {units}</p>
    </div>
  );
}

export default Subject;
