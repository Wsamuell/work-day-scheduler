$(document).ready(function () {

    // Script to always display today's date and time

    var DateTime = moment().format("dddd, MMMM Do YYYY");
    $("#currentDay").html(DateTime);
    console.log(DateTime)



    // adding listeners for the click button on the saveBtn
    $(".saveBtn").on("click", function () {
        var descrip = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        // Saving the typed task into local storage 

        localStorage.setItem(hour, descrip);

    })

    // color coding the time on the blocks
    function colorCode() {
        // current hour of the day 
        var currentHour = moment().hour();

        // getting the time we set in our calendar using Jquery
        $(".time-block").each(function () {
            var calendarHour = parseInt($(this).attr("id"));
            console.log(calendarHour, currentHour);

            // if statement to see if current time is in past, present, or future state
            if (calendarHour > currentHour) {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            }
            else if (calendarHour === currentHour) {
                $(this).removeClass("future");
                $(this).addClass("present");
                $(this).removeClass("past");

            }
            else {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
        })

    }

    // retrieving data hour and description from localStorage

    
    $("#8am .description").text((localStorage.getItem("8am")))
    $("#9am .description").text((localStorage.getItem("9am")))
    $("#10am .description").text((localStorage.getItem("10am")))
    $("#11am .description").text((localStorage.getItem("11am")))
    $("#12pm .description").text((localStorage.getItem("12pm")))
    $("#13pm .description").text((localStorage.getItem("13pm")))
    $("#14pm .description").text((localStorage.getItem("14pm")))
    $("#15pm .description").text((localStorage.getItem("15pm")))
    $("#16pm .description").text((localStorage.getItem("16pm")))
    $("#17pm .description").text((localStorage.getItem("17pm")))


    colorCode();
})