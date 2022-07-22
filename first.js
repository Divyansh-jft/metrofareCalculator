let fare1=document.getElementById("fare");




function drop(){
     let Arr= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    for(let i=0;i<=Arr.length-1;i++)
    {
    document.getElementById('des').innerHTML+=` <option value="${i+1}">
    ${Arr[i]}</option>`;
 
    document.getElementById('selc').innerHTML+=`<option value="${i+1}">
    ${Arr[i]}</option>`;
    }
 }
 drop();



 function calculatefare()
 {

    let first=des.options[des.selectedIndex].value;
    let second=selc.options[selc.selectedIndex].value;
    let stationCovered=Math.abs(second-first);
    let price=0;
    if(0>=stationCovered && stationCovered<=4){
        price=10; 
    }
    else if(5>=stationCovered && stationCovered<=8){
        price=20; 
    }
    else if(9>=stationCovered && stationCovered<=12){
        price=30; 
    }
    else if(13>=stationCovered && stationCovered<=16){
        price=40; 
    }
    else if(17>=stationCovered && stationCovered<=20){
        price=50; 

    }
    else if(21>=stationCovered && stationCovered<=24){
        price=60; 
    }
    else{
        
            price=70; 
    }
    
    console.log(stationCovered)
    return price;
 }

 document.getElementById("btn").addEventListener('click', function(){
    console.log("button is clicked")
    // calculatefare();
    console.log(calculatefare());
    fare1.value=calculatefare();
 })




 