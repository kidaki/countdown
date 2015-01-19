//change the text below to reflect your own,
var before = "Groundhog's Day!";
var current = "Today is Groundhog's Day!";
var montharray = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function countdown(yr, m, d) {
    setInterval(function(){
        document.getElementById('countdown').innerHTML = ( "Only " + 
                Math.floor(((Date.parse(new Date(yr,m-1,d))) - Date.now())/(1000*60*60*24))    + 
                " days, " + 
                Math.floor(((((Date.parse(new Date(yr,m-1,d))) - Date.now())/(1000*60*60*24))%1)*24)   + 
                " hours, " + 
                Math.floor(((((((Date.parse(new Date(yr,m-1,d))) - Date.now())/(1000*60*60*24))%1)*24)%1)*60) + 
                " minutes, " + 
                Math.floor(((((((((Date.parse(new Date(yr,m-1,d))) - Date.now())/(1000*60*60*24))%1)*24)%1)*60)%1)*60) + 
                " seconds left until Groundhog Day!"
        );
    },1000)
}

//enter the count down date using the format year/month/day
countdown(2015, 2, 2);
