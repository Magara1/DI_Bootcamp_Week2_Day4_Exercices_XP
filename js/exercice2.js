/*****   Exercice XP Week2 Day4 Exercise 2 : Tips
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

//1. Create a function named calculateTip() that takes no parameter.

let bill;
let tip;
let billFinal;

function calculateTip(){
    
    //2.Inside the function, use prompt to ask John for the amount of the bill.
    bill = prompt("Enter the amount of the bill");

    //3.Here are the rules

    //If the bill is less than $50, tip 20%.
   if( bill < 50){

    tip = (50*20)/100
    billFinal = tip + bill 

    //If the bill is between $50 and $200, tip 15%.
   } else if (50 < bill < 200) {

    tip = (50*15)/100
    billFinal = tip + bill
    // // If the bill is more than $200, tip 10%.
   } else if (bill>200){

    tip = (50*10)/100
    billFinal = tip + bill
   }
//4.Console.log the tip amount and the final bill (bill + tip).
   console.log(" the tip is " + tip + " and you bill is "+ billFinal + ".")
}

//5. Call the calculateTip() function.
calculateTip()





