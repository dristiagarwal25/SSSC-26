// STUDENT RESULT CALCULATOR

// Student Name
let studentName = prompt("Enter Student Name:");

// marks of 5 subjects
let marks = [];
let total = 0;
for (let i = 0; i < 5; i++) {
    let mark = Number(prompt("Enter marks of Subject " + (i + 1) + " (0-100):"));
    // Validation
    while (mark < 0 || mark > 100) {
        mark = Number(prompt("Invalid! Enter marks between 0 and 100:"));
    }

    marks[i] = mark;
    total += mark;
}

// Calculate Average and Percentage
let average = total / 5;
let percentage = (total / 500) * 100;

// Finding Highest and Lowest Marks
let highest = Math.max(...marks);
let lowest = Math.min(...marks);

// Assign Grade
let grade;

if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 33) {
    grade = "D";
}
else {
    grade = "Fail";
}

// Day Message
let day = prompt("Enter Day (Monday to Sunday)");

let message;

switch (day) {
    case "Monday":
        message = "Start your week with confidence!";
        break;

    case "Tuesday":
        message = "Keep learning!";
        break;

    case "Wednesday":
        message = "Halfway there!";
        break;

    case "Thursday":
        message = "Stay focused!";
        break;

    case "Friday":
        message = "Finish strong!";
        break;

    case "Saturday":
        message = "Practice makes perfect!";
        break;

    case "Sunday":
        message = "Rest and recharge!";
        break;

    default:
        message = "Invalid Day";
}

// Displaying Result

document.write("<h1>STUDENT RESULT CALCULATOR</h1>");

document.write("<h2>Student Name: " + studentName + "</h2>");

document.write("<h3>Subject Marks</h3>");

for (let i = 0; i < 5; i++) {
    document.write("Subject " + (i + 1) + " : " + marks[i] + "<br>");
}

document.write("<br><b>Total Marks:</b> " + total + "/500");
document.write("<br><b>Average:</b> " + average);
document.write("<br><b>Percentage:</b> " + percentage + "%");
document.write("<br><b>Highest Marks:</b> " + highest);
document.write("<br><b>Lowest Marks:</b> " + lowest);
document.write("<br><b>Grade:</b> " + grade);

document.write("<br><br><b>Motivational Message:</b> " + message);