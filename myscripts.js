
//JAVASCRIPT to clear search text when the field is clicked 

window.onload = function(){ 
        //Get submit button
        var submitbutton = document.getElementById("tfq");
        //Add listener to submit button
        if(submitbutton.addEventListener){
                submitbutton.addEventListener("click", function() {
                        if (submitbutton.value == 'Type to search + Enter ...'){
                                submitbutton.value = '';
                        }
                });
        }
}
