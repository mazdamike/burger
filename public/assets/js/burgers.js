// Change burger to devoured
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newEaten = $(this).data("devoured");
  
      var newEatenState = {
        devoured: 1
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatenState
      }).then(
        function() {
          console.log("changed devoured to", newEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    // Create new burger
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burg").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });