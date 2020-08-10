'use strict';
var tasks=[];
function Task(task, date , urgency , done){
    this.task= task;
    this.date=date;
    this.urgency=urgency;
    this.done=done;
    tasks.push(this);


}
new Task(document.getElementById('task').value, document.getElementById('date').value, document.getElementById('urgency').value, )


let heads= ["Task", "Date", "Urgency", "Done"];

table();
function table(){
   var div=document.getElementById('theTable');
 var   table = document.createElement('table');
 div.appendChild(table);
var row1 = document.createElement('tr');
table.appendChild(row1);
var headsRow = document.createElement('th');

    headsRow.textContent= ["Task", "Date", "Urgency", "Done"];
    row1.appendChild(headsRow);

    let cell1=document.createElement('td')
     cell1.textContent= localStorage.getItem("task");
    row1.appendChild(cell1);
    let cell2 =document.createElement('td')
    cell2.textContent= localStorage.getItem("date");;
    row1.appendChild(cell2);

    let cell3 =document.createElement('td')
    cell3.textContent= localStorage.getItem("urgency");;
    row1.appendChild(cell2);
    let cell4 =document.createElement('td');

    


}
document.getElementById("submit").addEventListener("click", submitFunc);

function submitFunc() {
    var mytask= JSON.stringify(document.getElementById("task").value);
    var myTask= localStorage.setItem("task", mytask);
    var mydate= JSON.stringify(document.getElementById("date").value);
    var myDate= localStorage.setItem("date", mydate);
    var myurgency= JSON.stringify(document.getElementById("task").value);
    var myUrgency= localStorage.setItem("task", myurgency);
}
submitFunc();
function localstorageGet() {
    let ourTask = JSON.parse(localStorage.getItem('task'));
    
}
// function loaded() {
//     document.getElementById("submit").addEventListener("submit",   submit(event) {
//                 event.preventDefault();}

// }
    