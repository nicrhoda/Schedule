date();
timeBlockColor();
persist();


//sets the current date at the top of the page 
function date() {
    var currentDate = moment().format('MMM DD, YYYY');
    $('.currentDay').text(currentDate);
}

//save button variable
var saveButton = $(".saveBtn");

//event listener for the save button to save to local storage
saveButton.on("click", function() {
    //selects all of the time and description elements and stores them in key value pairs
    var time = $(this).siblings(".time").text();
    var input = $(this).siblings(".description").val();

    localStorage.setItem(time, input);
    console.log(time, input);

    //gives an alert that the input has been saved to local storage
    alert("saved to local storage");
})

//load save data so the text persists on the screen after refresh
function persist() {
    const nineDescription = localStorage.getItem("9AM");
    const tenDescription = localStorage.getItem("10AM");
    const elevenDescription = localStorage.getItem("11AM");
    const twelveDecsription = localStorage.getItem("12PM");
    const oneDescription = localStorage.getItem("1PM");
    const twoDescription = localStorage.getItem("2PM");
    const threeDescription = localStorage.getItem("3PM");
    const fourDescription = localStorage.getItem("4PM");
    const fiveDescription = localStorage.getItem("5PM");
    $("#9am .description").append(nineDescription);
    $("#10am .description").append(tenDescription);
    $("#11am .description").append(elevenDescription);
    $("#12pm .description").append(twelveDecsription);
    $("#1pm .description").append(oneDescription);
    $("#2pm .description").append(twoDescription);
    $("#3pm .description").append(threeDescription);
    $("#4pm .description").append(fourDescription);
    $("#5pm .description").append(fiveDescription);
}

//color coding the time blocks

//maybe find better solution if time allows!

function timeBlockColor () {
    var currentTime = moment().hours();
    //9 am
    if (currentTime === 9) {
        $("#9am").addClass("present");
    } else if (currentTime > 9) {
        $("#9am").addClass("past");
    } else {
        $("#9am").addClass("future");
    }
    //10 am
    if (currentTime === 10) {
        $("#10am").addClass("present");
    } else if (currentTime > 10) {
        $("#10am").addClass("past");
    } else {
        $("#10am").addClass("future");
    }
    //11 am
    if (currentTime ===11) {
        $("#11am").addClass("present");
    } else if (currentTime > 11) {
        $("#11am").addClass("past");
    } else {
        $("#11am").addClass("future");
    }
    //12 pm
    if (currentTime === 12) {
        $("#12pm").addClass("present");
    } else if (currentTime > 12) {
        $("#12pm").addClass("past");
    } else {
        $("#12pm").addClass("future");
    }
    //1 pm
    if (currentTime === 13) {
        $("#1pm").addClass("present");
    } else if (currentTime > 13) {
        $("#1pm").addClass("past");
    } else {
        $("#1pm").addClass("future");
    }
    //2 pm
    if (currentTime === 14) {
        $("#2pm").addClass("present");
    } else if (currentTime > 14) {
        $("#2pm").addClass("past");
    } else {
        $("#2pm").addClass("future");
    }
    //3 pm
    if (currentTime === 15) {
        $("#3pm").addClass("present");
    } else if (currentTime > 15) {
        $("#3pm").addClass("past");
    } else {
        $("#3pm").addClass("future");
    }
    //4 pm
    if (currentTime === 16) {
        $("#4pm").addClass("present");
    } else if (currentTime > 16) {
        $("#4pm").addClass("past");
    } else {
        $("#4pm").addClass("future");
    }
    //5 pm
    if (currentTime === 17) {
        $("#5pm").addClass("present");
    } else if (currentTime > 17) {
        $("#5pm").addClass("past");
    } else {
        $("#5pm").addClass("future");
    }

}
