$(document).ready(function()
{
    $('#water').ripples({
        dropRadius: 20,
        resolution: 512,
    });
});


function calc(){
    var height = document.getElementById("h").value;
    var weight = document.getElementById("w").value;
    var res = Math.round(weight / height**2 * 10000);
    if(height <= 0 || weight <= 0 ){
        return("Impossible to calculate")
    }
    else if (res < 18.5) {
        return("Your BMI is " + res + ", compare results with table below.");
    }
    else if (res > 18.5 && res < 24.9){
        return("Your BMI is " + res + ", compare results with table below.");
    }
    else 
        return("Your BMI is " + res + ", compare results with table below.") ;
}








      
      
