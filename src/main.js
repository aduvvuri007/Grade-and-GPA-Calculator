const addCourse = document.querySelector(".add-course");
const remove = document.querySelector(".delete-course");
const gpaTable = document.querySelector("#gpa");

const addAssignment = document.querySelector(".add-assignment");
const removeAssignment = document.querySelector(".delete-assignment");
const gradesTable = document.querySelector("#grades");

const calculateGrades = document.querySelector(".calculate-grades")

calculateGrades.addEventListener("click", () => {
    if(gradesTable.rows.length == 1){
        alert("Enter an Assignment");
    } else {
        const grades = document.getElementsByClassName('grade');
        const weights = document.getElementsByClassName('weight');

        console.log(grades);
        console.log(weights);

        let sum = 0;
        for(let i = 0; i < weights.length; i++){
            sum += Number(weights[i].value);
            
            if (sum > 100){
                alert("Make sure weights add up to less than or equal to 100");
                return;
            }
        }

        if(sum !== 100){
            alert("Make sure weights add up to 100");
            return;
        }
        
        let courseGrade = 0;
        for(let i = 0; i < grades.length; i++){
            courseGrade += Number(grades[i].value) * (Number(weights[i].value)/100.0)
        }
        alert("Your grade is " + courseGrade);
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
    gradeSelect.setAttribute("id", "letter-grades");

    option = document.createElement("option");
    option.setAttribute("value", "A+");
    option.innerHTML = "A+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "A");
    option.innerHTML = "A";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "A-");
    option.innerHTML = "A-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "B+");
    option.innerHTML = "B+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "B");
    option.innerHTML = "B";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "B-");
    option.innerHTML = "B-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "C+");
    option.innerHTML = "C+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "C");
    option.innerHTML = "C";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "C-");
    option.innerHTML = "C-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "D+");
    option.innerHTML = "D+";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "D");
    option.innerHTML = "D";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "D-");
    option.innerHTML = "D-";
    gradeSelect.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "F");
    option.innerHTML = "F";
    gradeSelect.appendChild(option);

    gradeCell.appendChild(gradeSelect);

    const creditCell = newRow.insertCell();
    creditCell.style.height = '25px'
    const creditSelect = document.createElement("select");
    creditSelect.setAttribute("name", "credits");
    creditSelect.setAttribute("id", "credits");

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

remove.addEventListener("click", () => {
    if(gpaTable.rows.length != 1){
        gpaTable.deleteRow(-1);
    }
})

