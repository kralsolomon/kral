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
        alert("Impossible to calculate")
    }
    else if (res < 18.5) {
        alert("Your BMI is " + res + ", compare results with table below.");
    }
    else if (res > 18.5 && res < 24.9){
        alert("Your BMI is " + res + ", compare results with table below.");
    }
    else 
        alert("Your BMI is " + res + ", compare results with table below.") ;
}








      
      
