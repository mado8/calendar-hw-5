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

//create variables to store values typed in calendar textareas
var textarea0 = textarea[0];
var textarea1 = textarea[1];
var textarea2 = textarea[2];
var textarea3 = textarea[3];
var textarea4 = textarea[4];
var textarea5 = textarea[5];
var textarea6 = textarea[6];
var textarea7 = textarea[7];
var textarea8 = textarea[8];
var textarea9 = textarea[9];
var textarea10 = textarea[10];
var textarea11 = textarea[11];
var textarea12 = textarea[12];

console.log(textarea0, textarea1, textarea2, textarea3);

// grab each button element to assign a event listener
var button0 = document.getElementById('button-0');
var button1 = document.getElementById('button-1');
var button2 = document.getElementById('button-2');
var button3 = document.getElementById('button-3');
var button4 = document.getElementById('button-4');
var button5 = document.getElementById('button-5');
var button6 = document.getElementById('button-6');
var button7 = document.getElementById('button-7');
var button8 = document.getElementById('button-8');
var button9 = document.getElementById('button-9');
var button10 = document.getElementById('button-10');
var button11 = document.getElementById('button-11');
var button12 = document.getElementById('button-12');


// create event listeners for each button to save designated textarea only
button0.addEventListener("click", function() {
    localStorage.setItem('text0', textarea0.value);
});

button1.addEventListener("click", function() {
    localStorage.setItem('text1', textarea1.value);
});

button2.addEventListener("click", function() {
    localStorage.setItem('text2', textarea2.value);
});

button3.addEventListener("click", function() {
    localStorage.setItem('text3', textarea3.value);
});

button4.addEventListener("click", function() {
    localStorage.setItem('text4', textarea4.value);
});

button5.addEventListener("click", function() {
    localStorage.setItem('text5', textarea5.value);
});

button6.addEventListener("click", function() {
    localStorage.setItem('text6', textarea6.value);
});

button7.addEventListener("click", function() {
    localStorage.setItem('text7', textarea7.value);
});

button8.addEventListener("click", function() {
    localStorage.setItem('text8', textarea8.value);
});

button9.addEventListener("click", function() {
    localStorage.setItem('text9', textarea9.value);
});

button10.addEventListener("click", function() {
    localStorage.setItem('text10', textarea1.value);
});

button11.addEventListener("click", function() {
    localStorage.setItem('text11', textarea1.value);
});

button12.addEventListener("click", function() {
    localStorage.setItem('text12', textarea1.value);
});

// set text to locally stored text
textarea0.value = localStorage.getItem("text0");
textarea1.value = localStorage.getItem("text1");
textarea2.value = localStorage.getItem("text2");
textarea3.value = localStorage.getItem("text3");
textarea4.value = localStorage.getItem("text4");
textarea5.value = localStorage.getItem("text5");
textarea6.value = localStorage.getItem("text6");
textarea7.value = localStorage.getItem("text7");
textarea8.value = localStorage.getItem("text8");
textarea9.value = localStorage.getItem("text9");
textarea10.value = localStorage.getItem("text10");
textarea11.value = localStorage.getItem("text11");
textarea12.value = localStorage.getItem("text12");

// check time every minute
setInterval(textareaStyle(), 60000);















// attempt to dynamically create key name and assign value :( //


// function saveFunction() {
//     for(var i = 0; i < textarea.length; i++) {
//     function saveEvent(event){
//         event.preventDefault();

//         var values = [
//             textarea[0], 
//             textarea[1], 
//             textarea[2], 
//             textarea[3], 
//             textarea[4],
//             textarea[5],
//             textarea[6],
//             textarea[7],
//             textarea[8],
//             textarea[9],
//             textarea[10],
//             textarea[11],
//             textarea[12],
//         ];

//         console.log(value[0]);

//         keyName = $('body').append(localStorage.getItem(localStorage.key(i)));
//         localStorage.setItem(keyName, values[i].value);
//     };

//         button.addEventListener('click', saveEvent);
//     }
// }

// saveFunction()