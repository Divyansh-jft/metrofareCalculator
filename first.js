function hello(){
   var a= document.getElementById("fare").value;
   if(a)
   {

    var x = document.getElementById("hello");
    x.style.display = "block";

    
   }
    

}


function drop(){
     let Arr= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i=0;i<=Arr.length-1;i++)
    {
    document.getElementById('des').innerHTML+=` <option value="${i+1}">${Arr[i]}</option>`;
 
    document.getElementById('selc').innerHTML+=`<option value="${i+1}">${Arr[i]}</option>`;
    }
 }
drop();

function calculatefare()
 {
    let first=document.getElementById('des').value;
    let second=document.getElementById('selc').value;
    let mode=document.getElementById('mode').value;
    console.log(mode);
     if(mode=='none'){
       alert("Select payment mode");
     }
     else{
         if (selc=="none"||des=="none"){
             return;
         }
    console.log(first)
    console.log(second)
   
    let stnCvd=Math.abs(second-first);
    let price=0;
    if(stnCvd>=0 && stnCvd<=4){
        price=10; 
    }
    else if(stnCvd>=5 && stnCvd<=8){
        price=20; 
    }
    else if(stnCvd>=9 && stnCvd<=12){  
        price=30; 
    }
    else if(stnCvd>=13 && stnCvd<=16){
        price=40; 
    }
    else if(stnCvd>=17 && stnCvd<=20){
        price=50; 

    }
    else if(stnCvd>=21 && stnCvd<=24){
        price=60; 
    }
    else if(stnCvd > 24) {
        price=70; 
    }
    if(price>60)
    {
    price=60;
    }
    if(mode=='mc'&& stnCvd>=5)
    {
        price-=(price*0.1);
    }
    console.log(price);
    document.getElementById('fare').value=price;
    hello();
 }
}





