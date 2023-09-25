document.getElementById('date').innerHTML=Date();

let start = document.getElementById('start');
let stopp=document.getElementById('stop');
let reset =document.getElementById('reset');

let hour =0;
let minute =0;
let seconds =0;
let count = 0;

start.addEventListener('click',function(){clock=true;swatch();});
stopp.addEventListener('click',function(){clock=false;});
reset.addEventListener('click',function(){clock=false;

    document.getElementById('hour').innerHTML='00';
    document.getElementById('minutes').innerHTML='00';
    document.getElementById('seconds').innerHTML='00';
    document.getElementById('counts').innerHTML='00';

});

function swatch() {

    if (clock){
        count++;
        if(count==100){
            seconds++;
            count=0;
        }
        if(seconds==60){
            minute++;
            seconds=0;
        }
        if(minute==60){
            hour++;
            minute=0;
            seconds=0;
        }
        let hstr=hour;
        let mstr=minute;
        let sstr=seconds;
        let cstr=count;

        if (hour<10){
            hstr='0'+hstr;
        }
        if (minute<10){
            mstr='0'+mstr;
        }
        if (seconds<10){
            sstr='0'+sstr;
        }
        if (count<10){
            cstr='0'+cstr;
        }

        document.getElementById('hour').innerHTML=hstr;
        document.getElementById('minutes').innerHTML=mstr;
        document.getElementById('seconds').innerHTML=sstr;
        document.getElementById('counts').innerHTML=cstr;
        setTimeout(swatch,10)

    }

}
