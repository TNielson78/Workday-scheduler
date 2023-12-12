var currentTime = dayjs()
var currentHour = dayjs().hour()
$(document).ready(function(){
  //Updates current block based on past, present or future based on dayjs..
for (var i = 9; i < 18; i++) {
  if (i < currentHour) {
    document.getElementById("hour-" + i).classList.add("past")
  }
  else if (i === currentHour) {
    document.getElementById("hour-" + i).classList.add("present")
}
else {
  document.getElementById("hour-"+i).classList.add("future")
}
}
var saveBtn = $(".saveBtn");
saveBtn.on("click", function (event) {
  var clickedBtn = $(this)
  var hourKey = clickedBtn.parent().attr("id");
  var activity = clickedBtn.siblings(".description").val()
  localStorage.setItem(hourKey, activity)
})

$(".time-block").each(function () {

  var rowHour = $(this).attr("id")

  $(this).children(".description").val(localStorage.getItem(rowHour))
})
// Updates time and date format..
setInterval(function(){
  var time=dayjs()
  $("#time").text(time.format("MMMM D, YYYY| hh:mm:ss"))
 }, 1000);
})










