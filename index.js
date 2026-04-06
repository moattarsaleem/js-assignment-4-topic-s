// Use for loop, objects, arrays, and if-else statements
// solution 

let students = [
    { name: "Manaheel", marks: 78 },
    { name: "Moattar", marks: 92 },
    { name: "zohra", marks: 45 },
    { name: "anosha", marks: 60 }
];

let totalMarksA = 0;
let countA = 0;

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let grade;

    if (student.marks >= 78) {
        grade = "A";
    } else if (student.marks >= 50) {
        grade = "B";
    } else {
        grade = "Fail";
    }

    if (grade === "A") {
        console.log(student.name + " - " + grade);
        totalMarksA += student.marks;
        countA++;
    }
}

if (countA > 0) {
    let average = totalMarksA / countA;
    console.log("Average Marks of A grade students:", average);
} else {
    console.log("No A grade students");
}