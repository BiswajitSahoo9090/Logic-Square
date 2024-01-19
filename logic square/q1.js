function generateStudentMarkSheets(students, Details) {
  const markSheets = [];

  students.forEach(student => {
    const studentDetails = Details.find(detail => detail.Roll === student.Roll);

    if (studentDetails) {
      const { name, Roll } = student;
      const subjects = studentDetails.subjects;

      // Calculate total marks and average
      const totalMarks = Object.values(subjects).reduce((sum, mark) => sum + mark, 0);
      const average = totalMarks / Object.keys(subjects).length;

      // Generate the mark sheet
      const markSheet = {
        name,
        Roll,
        subjects,
        totalMarks,
        average
      };

      markSheets.push(markSheet);
    }
  });

  return markSheets;
}

// Test the function with the provided data
const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 }
];

const Details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } }
];

const result = generateStudentMarkSheets(students, Details);
console.log(result);
