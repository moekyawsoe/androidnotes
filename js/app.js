
 $(document).ready(function () { 
   $("#container").load("views/main.html");

   $("#sidebar").toggleClass("a active");

   $("#darkswitch").change(function () {
     // this will contain a reference to the checkbox
     if (this.checked) {
       // the checkbox is now checked
       $("#css").attr("href", "css/darkcss.css");
     } else {
       // the checkbox is now no longer checked
       $("#css").attr("href", "css/style.css");
     }
   });

    $("li.navitem").on("click", function () {
      $("#sidebar").toggleClass("active");
    });

    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
    });

 });

 
 function switchView(view) {
   $.get({
     url: view,
     cache: false,
   }).then(function (data) {
     $("#container").html(data);
   });
 }

//  function myFunction() {
//    var element = document.body;
//    element.classList.toggle("dark-mode");
//  }