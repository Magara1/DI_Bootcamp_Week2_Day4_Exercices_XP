/*****   Exercice XP Week2 Day4  Exercise 6 : Vacations Costs
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  Let’s create functions that calculate your vacation’s costs:
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

//1. Define a function called hotelCost().
//It should ask the user for the number of nights they would like to stay in the hotel.
//If the user doesn’t answer or if the answer is not a number, ask again.
//The hotel costs $140 per night. The function should return the total price of the hotel.

let pricienight = 140;

let nbrenight = 0;

function hotelCost() {

    do {
        nbrenight = prompt("enter the numbre of night");
    } while (isNaN(nbrenight));

    return nbrenight * pricienight
}

//console.log(hotelCost());


/*2 Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$ */


let LondonPrice = "183$";
let Paris = "1220$";
let another = "300$";
let destination;

function planeRideCost() {


    do {
        destination = prompt("enter your destination please");
    } while (!isNaN(destination));

    if (destination == "London") {

        return LondonPrice

    } else if (destination == "Paris") {

        return Paris;

    } else {

        return another;
    }


}

// planeRideCost();

/*3 Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.
*/


let nbreday;
let TotalPrice;
let TotalSolde;
let TotalPay;

function rentalCarCost() {

    do {

        nbreday = prompt("enter the number of days they would like to rent the car.");

    } while (isNaN(nbreday));

    if (nbreday > 10) {

        TotalPrice = 40 * nbreday

        TotalSolde = TotalPrice * 0, 05

        TotalPay = TotalPrice - TotalSolde

        return TotalPay


    } else {

        return TotalPrice = 40 * nbreday

    }
}

//console.log(rentalCarCost())


/**4 Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost(). */

function totalVacationCost() {

   let hotel= hotelCost()
   let plane = planeRideCost();
  let rent=  rentalCarCost();

  console.log("La voiture coûte : " + rent +" $ " + "l'hôtel coûte : " + hotel + " $ "+ "les billets d'avion coûtent " + plane + " $ " );
}

//5.

totalVacationCost()