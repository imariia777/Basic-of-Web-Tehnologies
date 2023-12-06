// Пример с использованием jQuery
$(document).ready(function() {
    var url = window.location.pathname;
    $('nav a[href="' + url + '"]').addClass('active');
});

document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  var data = {
    name: name,
    email: email
  };

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://www.google.com/?client=safari&channel=iphone_bm"); // Replace with your server URL
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhr.send(JSON.stringify(data));

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      console.log("Data sent successfully");
      // Add your desired actions after successful data submission
    }
  };
});
