function showTime(){
    let date=new Date();

    let h=date.getHours();
    let m=date.getMinutes();
    let s=date.getSeconds();

    let session=h>=12? "PM":"AM";

    h=h>12? h-12:h;
    
    document.getElementById('hours').innerHTML= h<10? "0"+h: h;
    document.getElementById('minutes').innerHTML=m<10? "0"+m:m;
    document.getElementById('secs').innerHTML=s<10? "0"+s:s; 
    document.getElementById('session').innerHTML=session;

}

setInterval(showTime,1000)
