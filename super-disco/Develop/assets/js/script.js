// Defining variables for later
const task1 = document.getElementById("task1");
const task2 = document.getElementById("task2");
const task3 = document.getElementById("task3");
const task4 = document.getElementById("task4");
const task5 = document.getElementById("task5");
const task6 = document.getElementById("task6");
const task7 = document.getElementById("task7");
const task8 = document.getElementById("task8");
const task9 = document.getElementById("task9");
// The task variables are stored in an array so that they can be called for in the for loop later
let tasks = [task1,task2,task3,task4,task5,task6,task7,task8,task9];

const block1 = document.getElementById("block-1");
const block2 = document.getElementById("block-2");
const block3 = document.getElementById("block-3");
const block4 = document.getElementById("block-4");
const block5 = document.getElementById("block-5");
const block6 = document.getElementById("block-6");
const block7 = document.getElementById("block-7");
const block8 = document.getElementById("block-8");
const block9 = document.getElementById("block-9");
// The block variables are stored in an array so that they can be called for in the for loop later
let blocks = [block1,block2,block3,block4,block5,block6,block7,block8,block9];

let timeDisplay = document.getElementById("currentDay");

let timeSuffixes = ["9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm"];


// Sets the clock at the top of the page
let setTime = function() {
    let currentDay = moment();
    timeDisplay.append(currentDay);
}

// Pulls text data from local storage and adds it to the page
let setUpHandler = function() {
    for (i = 0; i < 9; i++) {
        let setUpTask = tasks[i];
        let savedTask = "block-"+[i+1];
        let loadTask = localStorage.getItem(savedTask)
        if (loadTask) {
            setUpTask.textContent = loadTask
        }
    }
}

// Turns the task area into a text area when it's clicked
// The event listener is on the container instead of the tasks to simplify the code 
$("#container").on("click", "p", function(){
    let text = $(this)
        .text()
        .trim();
    let textInput = $("<textarea>")
        .addClass("textarea time-block col-8")
        .val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// Turns the text area into a task area when the button is clicked
$("#container").on("click", "button", function(event) {
    let block = event.target.parentElement.id;
    console.log(block);
    var text = $("textarea")
    .val()
    .trim();
    // set local storage
    localStorage.setItem(block, text);
});

// Assigns colors to the task areas based on the time of day
let taskColorHandler = function() {
    let currentTime = moment().hour();
    console.log(currentTime);
    let T = currentTime % 12;
  
    for (let i = 1; i < 10; i++) {  
        let taskId = "task" + [i];
        let text = tasks[i-1].textContent;
        if (currentTime == 8+i) {
            blocks[i-1].innerHTML = "<h3 class=\"hour col-2\">" + timeSuffixes[i-1] + "</h3> <p class=\"time-block present col-8\" id=" + taskId +">" + text + "</p> <button class=\"saveBtn col-2\" id=\"saveBtn\">Save Task</button>";
        } else if (currentTime > 8+i) {
            blocks[i-1].innerHTML = "<h3 class=\"hour col-2\">" + timeSuffixes[i-1] + "</h3> <p class=\"time-block past col-8\" id=" + taskId + ">" + text + "</p> <button class=\"saveBtn col-2\" id=\"saveBtn\">Save Task</button>";
        }
    }
}

// Calls the functions
setTime();
setUpHandler();
taskColorHandler();