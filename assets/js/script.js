
//save button variable
var saveButton = $(".saveBtn");
//sets the current date at the top of the page 
date();

function date() {
    var currentDate = moment().format('MMM dd, YYYY');
    $('.currentDay').text(currentDate);
}
//event listener for the save button to save to local storage
saveButton.on("click", function() {
    var time = $(this).siblings(".time").text();
    var input = $(this).siblings(".description").val();

    localStorage.setItem(time, input);
    console.log(time, input);
})

