const add = document.querySelector(".add");
const remove = document.querySelector(".delete");
const table = document.querySelector("#grades");

add.addEventListener("click", () => {
    const newRow = table.insertRow();
    const newCell = newRow.insertCell();
    newCell.appendChild("something");
});

remove.addEventListener("click", () => {
    if(table.rows.length != 1){
        table.deleteRow(-1);
    }
})

