
//save button variable
var saveButton = $(".saveBtn");
//sets the current date at the top of the page 
date();
colorCode();
persist();
function date() {
    var currentDate = moment().format('MMM DD, YYYY');
    $('.currentDay').text(currentDate);
}
//event listener for the save button to save to local storage
saveButton.on("click", function() {
    var time = $(this).siblings(".time").text();
    var input = $(this).siblings(".description").val();

    localStorage.setItem(time, input);
    console.log(time, input);
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

