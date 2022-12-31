/*****   Exercice XP Week2 Day4  Exercise 5 : What’s In My Wallet ?
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

/*1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
    an item price and an array representing the amount of change in your pocket. */

   let montantcompar=0;
    let tabquarters = [0.25,0.10,0.05,0];

    //traitement par la fonction
    function changeEnough(itemPrice, amountOfChange){ 
        
          // console.log(amountOfChange);
        for (let i = 0; i < amountOfChange.length; i++) {
          
            montantcompar += amountOfChange[i]*tabquarters[i]
        }  
       // console.log(montantcompar);

        return montantcompar>itemPrice
    }

 console.log(changeEnough(14.11, [2,100,0,0]));   
 console.log(changeEnough(0.75, [0,0,20,5]));   

