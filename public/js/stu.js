// Js for the stu page
$(function() {

  $("#viewBtn").click(function(){
      $("#view").removeClass("d-none");
    });
    $("#closeBtn").click(function(){
      $("#view").removeClass("d-none");
     
    });

    $(function() {     
    $("#closeViewBtn").click(function(){
      $("#view").addClass("d-none");
    });
  });
  
  function diff_hours() {
      var timeStart = $("#startTime").val();  // time start
      var splitStart = timeStart.split(':'); // split it at the colons

      // Hours are worth 60 minutes.
      var minutesStart = (+splitStart[0]) * 60 + (+splitStart[1]) ; 

      var timeStop = $("#endTime").val();  // time stop
      var split = timeStop.split(':'); // split it at the colons

      //  Hours are worth 60 minutes.
      var minutesStop = (+split[0]) * 60 + (+split[1]) ; 

      // the difference bettwen the times

      var timeDifMin = minutesStop - minutesStart;

      var hours = (timeDifMin / 60);
      var cHours = Math.floor(hours);
      var minutes = (hours - cHours) * 60;
      var cMinutes = Math.round(minutes);
      var timeChange  = cHours.toString() + " hours and " + cMinutes.toString()+" minutes";

      console.log(timeChange);
      return timeChange;

  }

  $("#calc").click(() => {
      //console.log(timeStart);
      //console.log(timeStop);
      var html = diff_hours();
      console.log(html);
      $("#timeT").html(html);
  });
})
$(function(){
$('#wsessionForm').submit((event) => {
  console.log("form submission entered");
  // keep the form from submitting
  event.preventDefault();

  // get the data from the form
  let data = { 
      work= $('#work').val(),
      owner= $('#owner').val(),
      project: $('#project').val(),
      date: $('#date').val(),
      startTime: $('#startTime').val(),
      finishTime: $('#endTime').val(),
      code: $('#code').val()
  }
  console.log(data);

  // make the ajax call
  $.ajax({
      url: "api/session",
      method: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
      dataType: "json"
  })
  .done((data) => {
      // process the message returned
      // for now log it
      console.log(`Returned: ${data.msg}`);
      if (data.msg === 'Session saved'){
        console.log("session saved ok");
        $("#myalertok").removeClass("d-none");
      }
      else {
        console.log("session not saved");
        $("#myalertfail").removeClass("d-none");}
  
  });
}); 
});




