// $("#currentDay").text(moment());
// setInterval(function () {
//     $("#currentDay").text(moment());
// }, 1000);

var date = moment().format("MMMM / DD / YYYY")

console.log(date)
//This function executes the hour and color coordinator referencing what time it is
function hoursUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".timeBlock").each(function () {
        var blockValue = $(this).attr("id")
        var blockHour = parseInt($(this).attr('id').split("-")[1])
        var blockResult = localStorage.getItem(blockValue)
        $(this).children('textarea').text(blockResult)
        console.log(blockValue)
        if (blockHour < currentHour) {
            $(this).children("textarea").addClass("past")
        } else if (blockHour === currentHour) {
            $(this).children("textarea").addClass("present")
        } else {
            $(this).children("textarea").addClass("future")
        }
    })
}
//This is my JQuery onclick function for my button that saves it to local storage
$(".saveBtn").on("click", function () {

    var myValue = $(this).parent().attr('id').val();
    var myKey = $(this).siblings('textarea').val();

    localStorage.setItem(myKey, myValue)
})
hoursUpdater();
