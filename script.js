$("#currentDay").text(moment());
setInterval(function () {
    $("#currentDay").text(moment());
}, 1000);

var date = moment().format("MMMM / DD / YYYY")
console.log(date)

function hoursUpdater() {
    var currentHour = moment().hours();
    console.log(currentHour);

    $(".time-Block").each(function () {
        var blockValue = $(this).attr("id")
        var blockHour = parseInt($(this).attr('id').split("-")[1])
        var blockResult = localStorage.getItem(blockValue)
        $(this).children('textarea').text(blockResult)

        if (blockHour < currentHour) {
            $(this).children("textarea").addClass("past")
            console.log("Block Hour is before current hour");
        } else if (blockHour === currentHour) {
            $(this).children("textarea").addClass("present")
        } else {
            $(this).children("textarea").addClass("future")
        }
    })
}

$(".saveBtn").on("click", function () {

    var myValue = $(this).parent().attr('id').val();
    var myKey = $(this).siblings('textarea').val();

    localStorage.setItem(myKey, myValue)
})
hoursUpdater()