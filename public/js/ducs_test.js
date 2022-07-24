
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu in case the user clicks out of it
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // $(document).ready(function() {
  //  // fix the submit ***
  //   // SUBMIT FORM
  //     $("#userForm").submit(function(event) {
  //     // Prevent the form from submitting via the browser.
  //     event.preventDefault();
  //     let formData = new FormData($(`#userForm`));
  //     // use ajax to call the auth route from the server
  //     $.ajax({
  //       url: "auth",
  //       method: 'POST',
  //       data: formData,
  //       type: "json",
  //     })
  //     .done((data) => {
  //       console.log(data.msg);
  //       window.location.replace("stu.html");
  //     })
  //     return false;

  //   });
      
    
       
      
//})
$(function(){
// window.onclick = function(event) {
//     if (!event.target.matches('.dropbtn')) {
//       var dropdowns = document.getElementsByClassName("dropdown-content");
//       var i;
//       for (i = 0; i < dropdowns.length; i++) {
//         var openDropdown = dropdowns[i];
        
//       }
//     }
//   }
$('#userForm').submit((event) => {
  console.log("form submission entered");
  // keep the form from submitting
  event.preventDefault();

  // get the data from the form
  let user = { 
      username: $('#modalLRInput10').val(),
      password: $('#modalLRInput11').val()
  }

  // make the ajax call
  $.ajax({
      url: "api/auth",
      method: "POST",
      data: JSON.stringify(user),
      contentType: "application/json",
      dataType: "json"
  })
  .done((user) => {
      // process the message returned
      // for now log it
      console.log(`Returned: ${user.msg}`);
      console.log(`Returned: ${user.status}`);
      if (user.msg === 'login ok')
        window.location.replace("stu.html");
      else if (user.msg =='login instructor ok')
        window.location.replace("instructor.html");
      else 
        $("#myalert").removeClass("d-none");
  
  });
}); 
});
