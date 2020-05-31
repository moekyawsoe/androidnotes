
 $(document).ready(function () {
   $("#sidebarCollapse").on("click", function () {
     
     $("#sidebar").toggleClass("active");
   });
 });
 $(document).ready(function () {
   $("#sidebar").toggleClass("a active");
 });

 $(document).ready(function () {
   $("#container").load("views/main.html");
 });

 function switchView(view) {
   $.get({
     url: view,
     cache: false,
   }).then(function (data) {
     $("#container").html(data);
   });
 }