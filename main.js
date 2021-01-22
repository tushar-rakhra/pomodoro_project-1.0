var minutes = parseInt(prompt("Enter minutes"))
var seconds = parseInt(prompt("Enter seconds"))

function template(){
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
}

function start(){
    if(seconds<=0){
    minutes--;
    }
    seconds--;

    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;

    var minutes_interval = setInterval(function(){
        minutes = minutes-1;
       
        document.getElementById("min").innerHTML = minutes;
    }, 60000);

    var seconds_interval = setInterval(function(){
        seconds = seconds -1;
        document.getElementById("sec").innerHTML = seconds;
        if(seconds<=0){
            seconds = 60;
            if(minutes<=0){
                clearInterval(minutes_interval);
                clearInterval(seconds_interval);
            }
        }  
    }, 1000);

}