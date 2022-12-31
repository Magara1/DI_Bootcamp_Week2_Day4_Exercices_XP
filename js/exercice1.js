/*****   Exercice XP Week2 Day4  Exercice1
 * 
 * @author : Magara Etychien N'gouan
 * 
 * Description :  creation de fonction qui va afficher les informations sur l'utilisateur
 *            
 * Date : 30 Decembre 2022
 * 
 * ***/

// Part I : function with no parameters

// 1.Create a function called infoAboutMe() that takes no parameter.

//declaration de la fonction
function infoAboutMe(){
    //2.The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
    console.log("My name is Magara Etchien N'gouan, j'ai 28 ans. I love danse, read and listen Music.") 
}
//2.Call the function.
infoAboutMe()  //appel de la fonction pour execution


//Part II : function with three parameters

//1.Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.

function infoAboutPerson(personName, personAge, personFavoriteColor){

//2.The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
    console.log("You name is " +personName+ " you are " +personAge+ " years old, your favorite color is " +personFavoriteColor+ ".")
}

//3. Call the function twice with the following arguments:
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")




