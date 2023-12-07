$(document).ready(function(event){
    $("#formOne").submit(function(event) {
    event.preventDefault();
    let anythingInput = $("input#anything").val();
    $("#resultContainer").text(anythingInput.toUpperCase());
    $("#resultContainer").show();
   });

 
});
