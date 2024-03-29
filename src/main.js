const addCourse = document.querySelector(".add-course");
const removeCourse = document.querySelector(".delete-course");
const gpaTable = document.querySelector("#gpa");

const addAssignment = document.querySelector(".add-assignment");
const removeAssignment = document.querySelector(".delete-assignment");
const gradesTable = document.querySelector("#grades");

const calculateGrades = document.querySelector(".calculate-grades")
const calculateGPA = document.querySelector(".calculate-gpa");

calculateGrades.addEventListener("click", () => {
    if(gradesTable.rows.length == 1){
        alert("Enter an Assignment");
    } else {
        const grades = document.getElementsByClassName('grade');
        const weights = document.getElementsByClassName('weight');
        const finalGradeWanted = document.getElementById("final-grade");
        const finalExamWeight = document.getElementById("final-weight");

        if (finalGradeWanted.value == 0 && finalExamWeight.value == 0){
            let sum = 0;
            for(let i = 0; i < weights.length; i++){
                sum += Number(weights[i].value);
                
                if (sum > 100){
                    alert("Make sure weights add up to less than or equal to 100");
                    return;
                }

                if(Number(grades[i].value) < 0 || Number(grades[i].value) > 100){
                    alert("Provide a valid grade between 0-100");
                    return;
                }
            }
            
            let courseGrade = 0;
            let currentWeight = 0;
            for(let i = 0; i < grades.length; i++){
                courseGrade += Number(grades[i].value) * (Number(weights[i].value)/100.0)
                currentWeight += Number(weights[i].value);
            }
            courseGrade = ((courseGrade * 1.0)/currentWeight) * 100
            alert("Your grade is " + courseGrade + "%");
        } else if(finalGradeWanted.value == 0 || finalExamWeight.value == 0){
            alert("Enter both fields to calculate the grade needed on the final exam");
        } else {
            let sum = 0;
            for(let i = 0; i < weights.length; i++){
                sum += Number(weights[i].value);
                if(Number(grades[i].value) < 0 || Number(grades[i].value) > 100){
                    alert("Provide a valid grade between 0-100");
                    return;
                }
            }
            sum += Number(finalExamWeight.value);

            console.log("reached")
            console.log(sum);

            if(sum !== 100){
                alert("Make sure weights add up to 100");
                return;
            }

            let courseGrade = 0;
            for(let i = 0; i < grades.length; i++){
                courseGrade += Number(grades[i].value) * (Number(weights[i].value)/100.0)
            }

            const finalGrade = ((Math.abs(Number(finalGradeWanted.value) - courseGrade))/(Number(finalExamWeight.value) * 1.0)) * 100;

            if(finalGrade > 100){
                alert("It is impossible to get that grade")
            } else {
                alert("The grade you need is " + finalGrade + "%");
            }
        }
    }
});

addAssignment.addEventListener("click", () => {
    const newRow = gradesTable.insertRow();

    const assignmentCell = newRow.insertCell();
    assignmentCell.style.height = '25px'

    const assignmentInput = document.createElement("input");
    assignmentInput.setAttribute("type", "text");
    assignmentInput.setAttribute("placeholder", "Enter Assignment Here");
    assignmentCell.appendChild(assignmentInput);

    const gradeCell = newRow.insertCell();
    gradeCell.style.height = '25px'

    const gradeInput = document.createElement("input");
    gradeInput.setAttribute("type", "number");
    gradeInput.setAttribute("inputmode", "numeric");
    gradeInput.style.width = "125";
    gradeInput.setAttribute("max", "100");
    gradeInput.setAttribute("min", "0");
    gradeInput.setAttribute("placeholder", "Grade As %");
    gradeInput.setAttribute("class", "grade");
    gradeCell.appendChild(gradeInput);

    const weightCell = newRow.insertCell();
    weightCell.style.height = '25px'

    const weightInput = document.createElement("input");
    weightInput.setAttribute("type", "number");
    weightInput.setAttribute("inputmode", "numeric");
    weightInput.style.width = "125";
    weightInput.setAttribute("max", "100");
    weightInput.setAttribute("min", "0");
    weightInput.setAttribute("placeholder", "Weight");
    weightInput.setAttribute("class", "weight");
    weightCell.appendChild(weightInput);
});

removeAssignment.addEventListener("click", () => {
    if(gradesTable.rows.length != 1){
        gradesTable.deleteRow(-1);
    }
});

addCourse.addEventListener("click", () => {
    const newRow = gpaTable.insertRow();

    const courseCell = newRow.insertCell();
    courseCell.style.height = '25px'

    const courseInput = document.createElement("input");
    courseInput.setAttribute("type", "text");
    courseInput.setAttribute("placeholder", "Enter Course Here");
    courseCell.appendChild(courseInput);

    const gradeCell = newRow.insertCell();
    gradeCell.style.height = '25px'
    
    const gradeSelect = document.createElement("select");
    gradeSelect.setAttribute("name", "letter-grades");
    gradeSelect.setAttribute("class", "letter-grades");

    option = document.createElement("option");
    option.setAttribute("value", "4.0");
    option.innerHTML = "A+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "4.0");
    option.innerHTML = "A";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "3.7");
    option.innerHTML = "A-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "3.3");
    option.innerHTML = "B+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "3.0");
    option.innerHTML = "B";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "2.7");
    option.innerHTML = "B-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "2.3");
    option.innerHTML = "C+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "2.0");
    option.innerHTML = "C";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "1.7");
    option.innerHTML = "C-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "1.3");
    option.innerHTML = "D+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "1.0");
    option.innerHTML = "D";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "0.7");
    option.innerHTML = "D-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "0.0");
    option.innerHTML = "F";
    gradeSelect.appendChild(option);

    gradeCell.appendChild(gradeSelect);

    const creditCell = newRow.insertCell();
    creditCell.style.height = '25px'

    const creditSelect = document.createElement("select");
    creditSelect.setAttribute("name", "credits");
    creditSelect.setAttribute("class", "credits");

    option = document.createElement("option");
    option.setAttribute("value", "1.0");
    option.innerHTML = "1.0";
    creditSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "2.0");
    option.innerHTML = "2.0";
    creditSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "3.0");
    option.innerHTML = "3.0";
    creditSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "4.0");
    option.innerHTML = "4.0";
    creditSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "5.0");
    option.innerHTML = "5.0";
    creditSelect.appendChild(option);

    creditCell.appendChild(creditSelect);
});

removeCourse.addEventListener("click", () => {
    if(gpaTable.rows.length != 1){
        gpaTable.deleteRow(-1);
    }
});

calculateGPA.addEventListener("click", () => {
    const letterGrades = document.getElementsByClassName("letter-grades");
    const credits = document.getElementsByClassName("credits");

    if(gpaTable.rows.length == 1){
        alert("Enter a course");
        return;
    }

    let sum = 0;
    let totalCredits = 0;
    for(let i = 0; i < letterGrades.length; i++){
        sum += Number(letterGrades[i].value) * Number(credits[i].value);
        totalCredits += Number(credits[i].value);
    }

    let gpa = sum/totalCredits;

    alert("Your GPA is " + gpa);
});

