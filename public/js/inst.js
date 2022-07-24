$(function() {

    $("#viewstuBtn").click(function(){
        $("#viewstu").removeClass("d-none");
      });
      $("#closeBtn").click(function(){
        $("#viewstu").removeClass("d-none");
       
      });

      $("#submitStu").click(function(){
        $("#showproBtn").removeClass("d-none");
      });
      $("#closeBtn").click(function(){
        $("#showproBtn").removeClass("d-none");
       
      });

      $("#submitInfo").click(function(){
        $("#showsesBtn").removeClass("d-none");
      });
      $("#closeBtn").click(function(){
        $("#showsesBtn").removeClass("d-none");
       
      });



      $("#viewproBtn").click(function(){
        $("#viewpro").removeClass("d-none");
      });
      $("#closeBtn").click(function(){
        $("#viewpro").removeClass("d-none");
       
      });
      $("#viewsesBtn").click(function(){
        $("#closeViewBtn").removeClass("d-none");
      $("#showCodes").removeClass("d-none");
      });
      
      
      $("#closeViewBtn").click(function(){
        $("#sessionList").empty();

      });
    
});

$(function() {
  $('#viewstuBtn').click(() => {
    console.log("viewstu button clicked");
  $.get("/api/stuFind", function(stuFind) {
    var $select = $("#stuview");
    $select.html("");
    stuFind.forEach(function(student) {
        console.log(student.username);
        $select.append("<option value=" + student.username + ">" + 
        student.fname +" " + student.lname +"</option>")
    });


});
});
});





// let projectowner= $('#stuview').val();


$(function(){
  $('#selectStu').submit((event) => {
    console.log("form submission entered");

    // get the data from the form
    let owner= $('#stuview').val();
    console.log(owner);
    event.preventDefault();

    $(function() {
      $('#viewproBtn').click(() => {
      console.log("viewpro button clicked");

      
      $.get("/api/projectFind", function(projectFind) {
        var $select = $("#proview");
        $select.html("");
        projectFind.forEach(function(project) {
          if(project.owner == owner){
            $select.append("<option value='" + project.name + "'>" + 
            project.name + "</option>")}
        });
    });
    });
  });
});
});

$(function(){
  $('#selectInfo').submit((event) => {
    console.log("form submission entered");

    // get the data from the form
    // get the data from the form
      var owner= $('#stuview').val();
      console.log(owner);
      var project = $('#proview').val();
      var input = $('#date').val();
      var dateStartTemp = new Date(input);
      var dateStart =dateStartTemp.toISOString();
      //var endDay = { $dayOfMonth: dateStart}; 
      var dateEndTemp = new Date(input);
      dateEndTemp.setDate(dateEndTemp.getDate() + 7);
      var dateEnd =dateEndTemp.toISOString();
      // var dateEnd = new Date(input);
      // endDay= endDay+7;
      // dateEnd.setDate(endDay);
      console.log(dateStart);
      console.log(dateEnd);


      
      
      

      //prevent the form from sending
      event.preventDefault();

      //let dateStart = dateStart;
      //let dateEnd = dateEnd;
      


    $(function() {
      $('#viewsesBtn').click(() => {
          $("#title").removeClass("d-none");
      console.log("viewses button clicked");
        $.get("/api/test", function(sessionFind) {
          var $list = $("#sessionList")
          $list.empty();
          sessionFind.forEach(function(session) {
              if((session.owner == owner) && (session.project == project)){
                var difMin = session.finishMin - session.startMin;
                var difHour = session.finishHr - session.startHr;
                if(difMin<0){
                  difHour= difHour-1;
                  difMin= 60+difMin;
                }
                console.log(difHour);
                console.log(difMin);
                console.log("mydate" + dateStart);
                console.log("date from session:"+session.date);
                var PrintDate = new Date(session.date);

                
                if(session.date>=dateStart && session.date<=dateEnd){
                $list.append("<li>"+ "Date:   "+ PrintDate.getMonth()+ ":" + PrintDate.getDay()+":"+ PrintDate.getFullYear() + " --- " + "   Code:"+
                session.code + "---   Start time:" + +session.startHr +":"+session.startMin+"---  Finish time:" +session.finishHr+":"+session.finishMin+ "---" +"Description: " +session.work + "---" + "Time: " + difHour+" hours and "+difMin +" min"+ "</li>");
                }
              }
          });
        //   var $table = $("#table");
        //   sessionFind.forEach(function(session) {
        //     if((session.owner == owner) && (session.project == project)){
        //       console.log("mydate" + dateStart);
        //       console.log("date from session:"+session.date);
        //       if(session.date>=dateStart && session.date<=dateEnd){
        //       var row = table.insertRow(0);
        //       var cellCode = row.insertCell(0);
        //       var cellDate = row.insertCell(1);
        //       $table.append("<td>" + session.code + session.date + "</td>");
        //       }
        //     }
        // });
      });
      
      });
    
    });
    
});
});





// $(function(){
//   $('#selectInfo').submit((event) => {
//     console.log("form submission entered");

//     // get the data from the form
//     // get the data from the form
//       let owner= $('#stuview').val();
//       console.log(owner);
//       let project = $('#proview').val();
//       let input = $('#date').val();
//       var dateStart = new Date(input);
//       //var endDay = { $dayOfMonth: dateStart}; 
//       var dateEnd = new Date(input);
//       dateEnd.setDate(dateEnd.getDate() + 7);
//       // var dateEnd = new Date(input);
//       // endDay= endDay+7;
//       // dateEnd.setDate(endDay);
//       console.log(dateStart);
//       console.log(dateEnd);


//       let date = {
//         dateStart : dateStart,
//         dateEnd: dateEnd
//       }

//       //prevent the form from sending
//       event.preventDefault();
      

//   // make the ajax call
//   $.ajax({
//       url: "api/test",
//       method: "GET",
//       data: JSON.stringify(date),
//       contentType: "application/json",
//       dataType: "json"
//   })
  
//   .done((date) => {
//       // process the message returned
//       // for now log it
//       console.log(`Returned: ${date.msg}`);
//       if (date.msg === 'ok'){
//         var $list = $("#sessionList")
//         sessionFind.forEach(function(session) {
//           if((session.owner == owner) && (session.project == project))
//               $list.append("<li>" + session.date + " - " + 
//               session.code + "</li>");
//         });
//     }
//       else {
//         $("#myalert").removeClass("d-none");}
  
//   });
// }); 
// });







// function createList() {
//   var $list = $("ul");
//   $.get("/api/session", function(session) {
//     session.forEach(function(session) {
//         $list.append("<li>" + session.date + " - " + 
//         session.code + "</li>");
//      });
//   });
// }

    
   
    
  


// getAllStudents();
// getAllProjects();
//createList();

// Load all students into the drop-down list
// function getAllStudents() {
//     $.get("/api/stuFind", function(stuFind) {
//         var $select = $("#stuview");
//         $select.html("");
//         stuFind.forEach(function(student) {
//             $select.append("<option value='" + student.username + "'>" + 
//             student.fname +" " + student.lname +"</option>")
//         });
//     });
// }


// Load all students projects i the dropdown
// function getAllProjects() {
//   $('#selectStu').submit((event) => {
//     console.log(owner);
//   $.get("/api/projectFind", function(projectFind) {
//       var $select = $("#proview");
//       $select.html("");
//       projectFind.forEach(function(project) {
//           $select.append("<option value='" + project.name + "'>" + 
//           project.name + "</option>")
//       });
//   });
// })};

 
    
  
  
  



//getAllUsers();

// Load all songs into the drop-down list
// function getAllUsers() {
//     $.get("/api/session", function(session) {
//         var $select = $("select");
//         $select.html("#dropdownView");
//         session.forEach(function(session ) {
//             $select.append("<option value='" + lname + "'>" + 
//                 session.username + "</option>")
//         });
//     });
// }

//getReports();



// $(function() {
//   var $list = $("ul");
//   $.get("/api/session", function(session) {
//     session.forEach(function(session) {
//         $list.append("<li>" + session.date + " - " + 
//         session.code + "</li>");
//      });
//   });
// });

