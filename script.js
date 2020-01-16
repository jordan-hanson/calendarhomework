let date = moment().format("MMMM / DD / YYYY")
console.log(date)

// function hoursUpdater() {
//     var currentHour = moment().hours();
//     console.log(currentHour);

//     $("timeBlock").each(function () {

//         var blockHour = parseInt($(this).attr("id"))
//     }
// }}

$(".saveButton").on("click", function (e) {


    let myValue = $(this).siblings('section').children('input').val()
    let myKey = $(this).siblings('span').attr('id')

    localStorage.setItem(myKey, myValue)
})