/*****   Exercice XP Week2 Day4  Exercise 4 : Shopping List
 * 
 * @author : Magara Etchien N'gouan
 * 
 * Description :  
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

//1. Add the stock and prices objects to your js file.

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

//2. Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList =["banana", "orange","apple"]


//3. Create a function called myBill() that takes no parameters.
let Totalprice = 0;
function miyBll(){
    for (let index = 0; index < shoppingList.length; index++) {
        for (const property in stock) {

            //4.The function should return the total price of your shoppingList. In order to do this you must follow these rules:
                //4.1 The item must be in stock. (Hint : check out if .. in)
               //4.2 If the item is in stock find out the price in the prices object.
            //6.Bonus: If the item is in stock, decrease the item’s stock by 1
            if (property==shoppingList[ index]) {
                if(stock[property] > 0){
                    stock[property]--
                    console.log(stock[property])
                    for (const price in prices) {
                        if(price==shoppingList[index]){
                            Totalprice += prices[price]
                            break
                        }  
                    }
                }

                break
            }
        }
        console.log(Totalprice)
    }//

    }
//5.Call the myBill() function.
    miyBll()


