/*****   Exercice XP Week2 Day4 Exercise 3 : Find The Numbers Divisible By 23
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

//1. Create a function call isDivisible() that takes no parameter.
let outcome ="" //affichage de tous les diviseurs de 23
let sum =0; //la variable qui va prendre la somme de tous les nombres divisible par 23

function isDivisible(){

    for(let i=0; i<500;i++){
        if ((i%23) ==0) {
            outcome += i + " ";
            sum += i;
        }
    }

    console.log(outcome);

    console.log(sum);
}

isDivisible()

