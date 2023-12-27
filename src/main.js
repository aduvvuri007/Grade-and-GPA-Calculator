const add = document.querySelector(".add");
const remove = document.querySelector(".delete");
const table = document.querySelector("#grades");

add.addEventListener("click", () => {
    const newRow = table.insertRow();

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
    if(table.rows.length != 1){
        table.deleteRow(-1);
    }
})

