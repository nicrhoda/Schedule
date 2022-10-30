//function for updating the current time
//function for the saveBtn click event
//function for updating to the current hour
//save items to users local storage
date();
function date() {
    var currentDate = moment().format('MMM d, YYYY');
    $('#currentDay').text(currentDate);
}

console.log(date());