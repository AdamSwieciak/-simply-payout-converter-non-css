const time =document.getElementsByClassName('czas');
const price=document.getElementsByClassName('stawka');
const payment=document.getElementsByClassName('wyplata');
const worker=document.getElementsByClassName('pracownik');


let funct = () =>{
    const hourarr=[]
    for (let i=0; i<time.length; i++){
        let timeel=time[i].value;
        let priceel=price[i].value

        if (timeel<100) {worker[i].style="color: red;"}

        if (time[i].value > 160) {
            let over=timeel-160;
            payment[i].innerHTML=(160*priceel)+(over*(2*priceel))
        } else {
            payment[i].innerHTML=timeel*priceel
        } 
        hourarr.push({name:worker[i].innerText, value:timeel})    
    }  
          console.log(hourarr)  
}


document.getElementById('oblicz').addEventListener('click', funct)