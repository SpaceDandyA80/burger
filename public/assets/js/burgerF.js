// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
      $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    
        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted cat with cat id:", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
  });
  