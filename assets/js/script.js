//set variables
var moment = moment();
var button = document.querySelectorAll('button');
var textarea = document.querySelectorAll('textarea');

//moment.js variable to grab military time 
var currentHour = moment.format('k');
//console log current hour
console.log(currentHour);
// add current day to header element using moment.js
$("#currentDay").text(moment.format("dddd, MMMM DD"));

//function to change textarea class depending on time of day
function textareaStyle() {
    //loop through each text area and compare value to current time
    for (var i = 0 ; i < textarea.length ; i++) {
        //create variable to match time on each div as i increments up
        var timeVar = i+6;
        //remove any existing classes
        $(textarea).removeClass(".present .past .future");
        // apply new class if task is present/past/future
        if (currentHour > timeVar) {
            $(textarea[i]).addClass("past");
        } else if (currentHour < timeVar) {
            $(textarea[i]).addClass("future");
            } else if (currentHour == timeVar) {
                $(textarea[i]).addClass("present");
                $(textarea[i]).text("Current Time");
            }
    }
};