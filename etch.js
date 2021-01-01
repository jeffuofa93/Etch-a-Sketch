

let size = 16;
let columnName;
let rowName;
let grid;
const container = document.querySelector(".container");
const button = document.createElement("button");
let color;
// Create button object
button.classList.add("button");
button.textContent = "Reset Grid"
button.style.backgroundColor = "grey";
button.style.borderColor = "black";

function getRndInteger(max) {
    return Math.floor((Math.random() * max)+1);
}

function generateRGBStr(val=256) {
    return 'rgb(' + getRndInteger(256) + ',' + getRndInteger(256) + ',' + getRndInteger(256) + ')';
}

function buildGrid(size,columnName,rowName,container,button) {
    for (i=0;i<size;i++){
        columnName = document.createElement("div");
        columnName.classList.add("col");
        for (j=0;j<size;j++){
            rowName = document.createElement("div");
            rowName.classList.add("row");
            rowName.style.minHeight = (1/size)*100 + "vh";

            /* THIS IS WHAT I DON'T UNDERSTAND WHY IT DOESNT WORK
            rowName.addEventListener("mouseover",() => {
                rowName.style.backgroundColor = generateRGBStr();
                //row.style.opacity = "black";
            });
             */
            columnName.appendChild(rowName);

            if (i===(Math.floor(size/2))&& (j===0)){
                rowName.appendChild(button);
            }
        }
        //append column to container
        container.appendChild(columnName);
    }
    // add event to each item in the grid

    /*THIS IS THE ONE THAT WORKS BUT I HAVE TO RELOOP OVER THE OBJECTS */
    grid = document.querySelectorAll(".row");
    grid.forEach((row) => {
        row.addEventListener("mouseover",() => {
            row.style.backgroundColor = generateRGBStr();
            //row.style.opacity = "black";
        });
    });
}

function eraseGrid(size,columnName,rowName,button,container){
    while (container.firstChild){
        container.removeChild(container.firstChild)
    }
    buildGrid(size,columnName,rowName,container,button)
}

function buttonEvent (size,columnName,rowName,button,container,grid) {
    button.addEventListener("click",() => {
        grid.forEach((row) => {
            if (row.style.backgroundColor !== "white") {
                row.style.backgroundColor = "white";

            }
        });
        size = prompt("Enter the size of the new grid");
        size = parseInt(size);
        if (size > 100) size = 100;
        eraseGrid(size,columnName,rowName,button,container);
    });
}


buildGrid(size,columnName,rowName,container,button)
buttonEvent(size,columnName,rowName,button,container,grid);




/*
grid.forEach((row) => {
    row.addEventListener("mouseover",() => {
        //row.style.backgroundColor = "black";
        rowName.classList.remove("row");
        rowName.classList.add("rowDark");
    });
});

 */

/*
button.addEventListener("click",() => {
    grid.forEach((row) => {
        if (row.style.backgroundColor === "black"){
            row.style.backgroundColor = "white"
        }



    });
    size = prompt("Enter the size of the new grid");
    size = parseInt(size);

    buildGrid(size,columnName,rowName,container,button);

});


/*
            rowName.addEventListener("mouseover",()=>{
                rowName.classList.remove("row");
                rowName.classList.add("rowDark");
            });
             */


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
