
let size = 16;
let counter = 0;
let columnName;
let rowName;
const container = document.querySelector(".container");

for (i=0;i<size;i++){
    columnName = i.toString();
    columnName = document.createElement("div");
    columnName.classList.add("col");
    columnName.textContent = "Does this work";
    for (j=0;j<size-1;j++){
        rowName = i.toString()+ j.toString();
        rowName = document.createElement("div");
        rowName.classList.add("row");
        rowName.textContent = "Does this work Row";
        columnName.appendChild(rowName);
    }
    container.appendChild(columnName);

}

// EOF comment




/*    creates text input box
const x = document.createElement("INPUT");
x.setAttribute("type","text");
container.appendChild(x);

 */

/*   This is how to add the element and add the comment class
const column = document.createElement("div");
column.classList.add("col")
column.textContent = "Test"
container.appendChild(column);
 */
