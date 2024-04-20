function getSchedule() {
  var day = document.getElementById("day").value.toLowerCase();
  var schedule = {
    "monday": ["Technical Drawing [Room: NT6(07:30 - 09:20am]", "Light Vehicle Technology [Room: T5 Mechanical (12:00 - 14:00pm]"],
    "tuesday": ["Technical Drawing [Room: NT6(07:30 - 09:20am]", "IMT [Room: MLT(09:30 - 11:20am)"],
    "wednesday": ["Teaching Methods [Room: MLT(07:30 - 09:30)", "Testing Measurement and Evaluation [Room: MLT(09:30 - 11:20)"],
    "thursday": ["Testing Measurement and Evaluation [Room: MLT(07:30 - 09:20)", "Light Vehicle Technology [Room: T5 Mechanical (12:00 - 14:00pm", "Teaching Methods [Room: MLT(03:30 - 05:20)"],
    "friday": [ "Testing Measurement and Evaluation [Room: MLT(07:30 - 09:20)"],
    "saturday": ["No classes Its week end!!!!"],
    "sunday": ["No classes its week end!!!!"]
  };

  var scheduleDiv = document.getElementById("schedule");
  scheduleDiv.innerHTML = "";

  if (day in schedule) {
    var scheduleList = document.createElement("ol");
    scheduleDiv.appendChild(scheduleList);

    var subjects = schedule[day];
    for (var i = 0; i < subjects.length; i++) {
      var listItem = document.createElement("li");
      listItem.textContent = subjects[i];
      scheduleList.appendChild(listItem);
    }
  } else {
    alert ('Invalid date, please enter the correct spelling of the day!')
    // scheduleDiv.textContent = "Invalid day entered, please make sure you have used correct spelling!!.";
  }
}
function refresh() {
  location.reload();}


