// //1. 

//     Install Node.js, TypeScript and VS Code on your computer

// console.log("Hello World!");
// console.log("Hello Name, would you like to learn some pyhton today")



// // 2.Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// let firstName = "Buddy";
// console.log(`Hello ${firstName} would you like to learn some TyoeScript today?`);



//3.Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.    
// let secondName = "Bro bhai"
// console.log(secondName.toLowerCase());
// console.log(secondName.toUpperCase());
// let thirdName = 'champ man';
// console.log(thirdName.charAt(0).toUpperCase()+thirdName.slice(1));// the charAt funtion turns the specific point of the string into a capitals and in our example it turns C from Champ into capital; whilst it doesnt print the remaining portion of the name for which we used the slice function which creates the slice from an start point in our case we have created the slice from the second letter.
// console.log(thirdName.charAt(0).toUpperCase())//only conerts the specific letter


//4. Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// // Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// console.log(`Albert Einstein once said,“A person who never made a mistake never tried anything new.”`);


// // 5.Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// let famous_Person = "Albert Einstein"
// let message = ('“A person who never made a mistake never tried anything new.”')
// console.log(`${famous_Person} once said ${message}`);



// //6.Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
// console.log("Hello\tWorld");//\t creates scpace
// console.log("Hell\noWorld");//\n creates new line



// //7.Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
// let numA=16
// let b=4
// console.log(b+4);//addition
// console.log(b*2);//multiplication
// console.log(numA/2);//Division
// console.log(numA-8);//substraction


//8. You should create four lines that look like this:
// // console.log(5 + 3)

// console.log(4+4);//additon
// console.log(4*2);//multiplication
// console.log(10-2);//substraction
// console.log(16/2);//division
// //question fulfills question 8


//9.Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
// let favoriteNumber = 7;
// let message1 = "My favorite number is ";
// console.log(`${message1}${favoriteNumber}`);


//10.Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// console.log(2+2)// I am commenting here for the sake of commenting that this an addition/ arithmetic operation being done


// 11.Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
// let names=["Ahmed","Ali","Hamid","Mahmood"];
// console.log(names [0]);
// console.log(names [1]);
// console.log(names [2]);
// console.log(names [3]); 
// // console.log(names,"message")
// // console.log(names[0], names[1], names[2], names[3]);
// // console.log(`Dear ${names} you are welcome at dinner tonight`);
// //tried printing names in seprate lines but through a single command/console line, didnt succeed, but will eventually.


// 12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
// let names1=["Ahmed","Ali","Hamid","Mahmood"];
// let personalMessage = "Greetings to you, ";
// console.log(personalMessage+names1[0]);
// console.log(personalMessage+names1[1]);
// console.log(personalMessage+names1[2]);
// console.log(personalMessage+names1[3]);


// 13.Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle".
// let favoriteVehicle=["Ducatii", "Jaguar", "BMW X5","Honda Accord","Dodge Viper"];
// console.log(`I would love to ride my ${favoriteVehicle[0]}`);
// console.log(`I would love to ride my ${favoriteVehicle[1]}`);
// console.log(`I would love to ride my ${favoriteVehicle[2]}`);
// console.log(`I would love to ride my ${favoriteVehicle[3]}`);
// console.log(`I would love to ride my ${favoriteVehicle[4]}`);
// console.log( "Now let me try the map command that works with the arrow function");// map funtion maps the array items on a line by line basis, and 

// favoriteVehicle.map((item) =>(console.log(`I would love to ride my, ${item}`)));
// favoriteVehicle.map((item) =>((console.log(item))));// look this command writes each of the aray items seprately this can be used for personalized messaging to the list without having to select each and message entire list a similar msg to their particular name.




// //14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// let guestList=["Ahmed","Ali","Ahsan","Sabir","Babar"]
//  guestList.map((item) => (console.log((item),`you are coordially invited for dinner yesternight at 7:30 PM`)));
//  done

// //  15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// // let guestList=["Ahmed","Ali","Ahsan","Sabir","Babar"];
// // let poppedGuestList = guestList.pop();
// console.log(`our guest ${poppedGuestList} wont be able to make it to dinner yesternight`);
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// let firstUnshift=guestList.unshift("HAJJI"); 
// console.log(`Instead of ${poppedGuestList} we will be joined by ${guestList[0]} for yesternight Dinner `);
// console.log(guestList);

// • Print a second set of invitation messages, one for each person who is still
// in your list.
// guestList.map((item)=>console.log((item),  `You are coordially invited for the yesternight's dinner`));

//shifted up// let guestList=["Ahmed","Ali","Ahsan","Sabir","Babar"];
// let poppedGuestList = guestList.pop();
// console.log(`our guest ${poppedGuestList} wont be able to make it to dinner yesternight`); console.log(guestList)//shifted till here

// let guestList=["Ahmed","Ali","Ahsan","Sabir","Babar"];

// let pushedGuestList = guestList.push();
// console.log(`The guest who will be able to make it instead of ${poppedGuestList} will be ${pushedGuestList} `);
// console.log(pushedGuestList);// push command is returning the no of array data
// let shiftedGuestList=guestList.shift() // shift removes the first name
// console.log(shiftedGuestList);
// guestList.map((item) => (console.log((item),`you are coordially invited for dinner yesternight at 7:30 PM`))); // omittied printing of the first guest which was ahmed


////// let firstUnshift=guestList.unshift("HAJJI");
// console.log(firstUnshift);
// console.log("Lets call it a day");





// 16. More Guests: You just found a bigger dinner table, so now more space is
// available. Think of three more guests to invite to dinner.
//let guestList=["Ahmed","Ali","Ahsan","Sabir","Babar"];
// let poppedGuestList = guestList.pop();
// console.log(`our guest ${poppedGuestList} wont be able to make it to dinner Tommorrow night`);
//let firstUnshift=guestList.unshift("HAJJI"); 
// console.log(`Instead of ${poppedGuestList} we will be joined by ${guestList[0]} for Tommorrow Dinner `);
// console.log(guestList);
// guestList.map((item)=>console.log((item),  `You are coordially invited for the Tommorrow's dinner`));

// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
// bigger dinner table.
// console.log(`${guestList}, we have space for three more people as we found a bigger dinner table `);

// • Add one new guest to the beginning of your array.
//let secondUnshift = guestList.unshift("Kabeerah"); 
// console.log(guestList);

// • Add one new guest to the middle of your array.
// let middleOfList = (guestList.length)/2
// let middleUnshift = guestList.unshift("Kamran");// these didnt work probably i was doing some mistake
//guestList.splice(3,0, "Kamran")

// console.log(guestList);
// console.log(`${guestList}, We welcome you for dinner`);

// guestList.map((item)=>console.log((item),  `You are coordially invited for the Tommorrow's dinner`));


// • Use append() to add one new guest to the end of your list.

//guestList.push("Khalil Jibran");
// console .log(guestList);


// • Print a new set of invitation messages, one for each person in your list.
// guestList.map((item)=>console.log((item),  `You are coordially invited for the Tommorrow's dinner`));

// 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner. DONe
// console.log(guestList.slice(2,7),`Unfortunately only two guest can come, space has been cut short`);

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print :DONE
// console.log(guestList);
// do{
// let count : number = guestList.length
// let poppedList =guestList.pop();
// console.log(poppedList );
// console.log(guestList)
// count--;
// } while(guestList.length>= 3);

// console.log("loop end");

// a message to that person letting them know you’re sorry you can’t invite them to dinner.

// console.log(guestList);
// do{
// let count : number = guestList.length
// let poppedList =guestList.pop();
// console.log(poppedList + " "+ "Sorry the seats are limited, we will catch up later"  );
// console.log(guestList )
// count--;
// } while(guestList.length>= 3);
// console.log("loop end");

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// if (guestList.length = 2){console.log(`${guestList[0]} we are glad to have ou still with us, you are invited on dinner &  ${guestList[1]} we are glad to have you still with us, you are invited on dinner`)}

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
// of your program.

// console.log(guestList);
// do{
// let count : number = guestList.length
// let poppedList =guestList.pop();
// console.log(poppedList + " "+ "Sorry the seats are limited, we will catch up later"  );
// console.log(guestList )
// count--;
// } while(guestList.length>= 1);
// console.log(guestList);
// console.log("empty list printed")


// console.log("Done till here calling it a day");




// // 18. Seeing the World: Think of at least five places in the world you’d like to visit.

//  let myVisit =[`Makkah`, `Madinah`,`Andulas`,`Mangolia`,"Anatolia"]

// // • Store the locations in a array. Make sure the array is not in alphabetical order.
// myVisit
// // • Print your array in its original order.
// console.log(myVisit);

// // • Print your array in alphabetical order without modifying the actual list.
// // console.log(myVisit.sort());
// // • Show that your array is still in its original order by printing it.
// console.log(myVisit)

// // • Print your array in reverse alphabetical order without changing the order of the original list.
// // console.log(myVisit.reverse())
// // • Show that your array is still in its original order by printing it again.
// console.log(myVisit)
// // • Reverse the order of your list. Print the array to show that its
// // order has changed.
// myVisit.reverse();
// console.log(myVisit)
// // • Reverse the order of your list again. Print the list to show it’s back to its original order.
// myVisit.reverse();
// console.log(myVisit)


// // • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// myVisit.sort()
// console.log(myVisit)

// // • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// myVisit.reverse();
// console.log(myVisit)



// 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number
// of people you are inviting to dinner. doing 19 before 18.

// console.log(guestList.length + ` guests are invited to dinner` );


// 20. Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything
// else you’d like. Write a program that creates a list containing these items.

// let cities:string[] = [`Karachi`,`Lahore`,`Islamabad`,`Larkana`,`Quetta`,`Dubai`,`Sukkur`,`Khairpur Miras`,`ChichaWatni`];

// cities.map((item)=>(console.log(item)));



// 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// let candidate : {name:string, fName:string, caste:string, age:number, dateOfBirth?:string} = {name:"Ali", fName:"Ahmad", caste:"Syed", age:25, dateOfBirth:"mm/dd/year"}

// console.log(candidate);

// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
// to produce an index error. Make sure you correct the error before closing the program.
// let cities:string[] = [`Karachi`,`Lahore`,`Islamabad`,`Larkana`,`Quetta`,`Dubai`,`Sukkur`,`Khairpur Miras`,`ChichaWatni`];
// console.log(cities[9])
// console.log(cities[5])

// 23. Conditional Tests: Write a series of conditional tests. Print a statement
// describing each test and your prediction for the results of each test. Your code
// should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// let sports = "footbal";
// console.log(sports == `foootbal`)
// console.log(`${sports === `footbal`}, footbal is true sport`)


// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// let sports = "foOotbal"; ////sets the variable
// console.log(sports == `foootbal`); ////sets the condition and this would return a boolean, whethter its true or not
// console.log(`${sports === `footbal`}, footbal is true sport`); ///prints irrespective of the condition being true is free of it since the statement being printed is within the backticks, so it checks the boolean, return boolean and prints the statement witin.
// console.log(`${sports === `footbal`}, footbal is ${sports === `footbal`}  sport`); ///prints if the answer is true as there are three = sign it checks not only the form but also type, it is to check if its an exact match.

// // • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
// let fruit = "Apple";
// let vege = "Tommato";
// console.log(vege == "Tommato");//true
// console.log(vege == "Tommato");//true
// console.log(vege== "Tommato", `${vege === "Tommato"} is Tommatto`) //true
// console.log(fruit === "Apple");//true
// console.log(fruit =="Apple"); //it should give true 

// console.log(fruit =="apple"); //it should give false
// console.log(fruit ==="Apple."); //it should give false   
// console.log(fruit ==="apple"); //it should give false
// console.log(fruit =="banana"); //it should give false
// console.log(fruit =="mango"); //it should give false
// console.log(fruit =="berry"); //it should give false
// console.log(fruit =="avacado"); //it should give false





// 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

// // • Tests for equality and inequality with strings
// let candidate  = "Champ";
// console.log(candidate ==="Cham")
// console.log(candidate == "Champ")
// // • Tests using the lower case function
//  let sports = "CRICKET";
//  console.log(sports)
//  console.log(sports.toLowerCase())


// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// let num:number = 100;
// console.log(num)
// console.log(num == 100);//equality
// console.log(500 == num);//inequal
// console.log(num <= 95);//lessthanequal-false
// console.log(num <= 105);//lessthanequal-true
// console.log(num <= 200)//lessthanequal-true
// console.log(num >= 200);//greaterthanequal-false
// console.log(num >= 20);//greaterthanequal-true
// console.log(num<101);//lessthan-true
// console.log(num>91);//greatertha-true

// • Tests using "and" and "or" operators
// let num =200
// let num2 = 150
// console.log(num<95 && num2 ==500)//false
// console.log(num<95|| num2 ==500)//false
// console.log(num<95|| num2 !==500)//true

// • Test whether an item is in a array

// const fruitts :string[] = ["apple", "mango", "pineapple", "bannana", "orange"]
// console.log(fruitts.includes("Chakotra"));//false
// console.log(fruitts.includes("orange"));
// console.log(!fruitts.includes("orange"));//false
// console.log(fruitts.includes("apple"));

// // • Test whether an item is not in a array
// console.log(fruitts.includes("Chakotra"));//false


// 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
// // variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//  let alien_color:string[] =[`green`, `yellow`, 'red'];
 

// // • Write an if statement to test whether the alien’s color is green. If it is, print
// // a message that the player just earned 5 points.
// if (alien_color[0]= "green") console.log("player you just earned 5 points")
// // • Write one version of this program that passes the if test and another that
// // fails. (The version that fails will have no output.)
// if (alien_color[0]= "green"){ console.log("player you just earned 5 points")};
// if (alien_color[1]= "green") {console.log("")};
// if (alien_color[2]= "green") {console.log("")};


// 26. Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
// // write an if-else chain.
// let alien_color2 : string = "Burgandy";

// console.log(alien_color2) //tested color

// // • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

// alien_color2 = "Green";
// if(alien_color2 === "Green"){console.log("You earned 5 Points, Congrats! Condition 1 done")};//if true printed

// // • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// alien_color2 = "red";
// if(alien_color2 !== "Green"){console.log("you earned 10 points Condition 2 done")}// if printed since this is a negative condition

// // • Write one version of this program that runs the if block and another that runs the else block.
// alien_color2="Green"
// if(alien_color2 === "Green"){console.log("You earned 5 Points, Congrats! Condition 3 done")}
// else{console.log("you earned 10 points , Condition 3 done")} //if printed

// alien_color2 = "Green";
// if(alien_color2 !== "Green"){console.log("you earned 10 points, condition 4 done")} else{console.log("You have earned 5 points, condition 4 done")}// else

// 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// let alien_color3 = "jumbo"
// //for green
// alien_color3 = "Green"
// if(alien_color3==="Green"){console.log("You earned 5 points")} 
// else if(alien_color3 === "Yellow"){console.log("you've earned 10 points")}
// else if (alien_color3 ==="Red"){console.log("You earned 15 points")}
// else{console.log("You haven't selected a valid colour")};
// //for yellow
// alien_color3 = "Yellow"
// if(alien_color3==="Green"){console.log("You earned 5 points")} 
// else if(alien_color3 === "Yellow"){console.log("you've earned 10 points")}
// else if (alien_color3 ==="Red"){console.log("You earned 15 points")}
// else{console.log("You haven't selected a valid colour")};
// //for red
// alien_color3 = "Red"
// if(alien_color3==="Green"){console.log("You earned 5 points")} 
// else if(alien_color3 === "Yellow"){console.log("you've earned 10 points")}
// else if (alien_color3 ==="Red"){console.log("You earned 15 points")}
// else{console.log("You haven't selected a valid colour")};


// 28. Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
// // • If the person is age 65 or older, print a message that the person is an elder.
//  let personAge : number = 400;
//  if(personAge <2)(console.log(`Its just a baby`));
//  else if(personAge>=2 && personAge<4){console.log("Its a Toddler")}
//  else if(personAge>=4 && personAge<13){console.log("Its a Kid")}
//  else if(personAge>=13 && personAge<20){console.log("Its a teenager")}
//  else if(personAge>=20 && personAge<65){console.log("Its an adult")}
//  else if(personAge>=65){console.log("Its an elder")}
//  else{console.log("Not a choice")}
    
// 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
// such as You really like bananas!
//  let favorite_fruits: string[] =["Orange","Pear","Papaya"]
 
//  if (favorite_fruits.includes("Bannana")){console.log("you like to eat Bannana")}
//  else if (favorite_fruits.includes("Mango")){console.log("you like to eat Mango")}
// //  else if (favorite_fruits.includes("Papaya")){console.log("you like to eat Papaya")}
// //  else if (favorite_fruits.includes("Orange")){console.log("you like to eat Orange")}
//  else if (favorite_fruits.includes("Pear")){console.log("you like to eat Pear")}
//  else{console.log(`The Favorite fruits are ${favorite_fruits} you didnt chose either`)}


// 30. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
// after they log in to a website. Loop through the array, and print a greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// let userNames : string[] = ["admin", "manager", "director","executive","publicUser"];

// for(let i=0; i<userNames.length; i++){
//     // console.log(userNames[i]);
//     if(userNames[i]=="admin"){console.log("Hello admin, would you like to see a status report?")}
//     else {console.log(`Hello! ${userNames[i]}, Thanks for logging in again`)}
    
// }


// 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


// let userNames : string[] = ["admin", "manager", "director","executive","publicUser"];
// for (let i=0;i<userNames.length;i++){
//     console.log(userNames[i])
// }
// //empty string username
// let userName : string[] = [];
// if (userName.length === 0){console.log("We need to Find some Users")}
// for (let i=0;i<userName.length;i++){
//     console.log(userName[i])
// }

// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
// new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.

// let current_users : string[]=["Ahmad","Ali","Nadeem","Khalid","Raja"];

// let new_users : string[]=["ALI","NadEEm", "Asif","Saim","Akbar"];

// // Function to check if username exists (case insensitive)
// function isUsernameTaken(username: string): boolean { // a function is being defined here which will convert the usernames current and new to lowercase and check
//     return current_users.some(user => user.toLowerCase() === username.toLowerCase());// the some method/function checks the whole array for each element moreover since each element has been converted to the lowercase comparing each of them is easy.
// }

// // Check each new username
// new_users.forEach(newUsername => {
//     if (isUsernameTaken(newUsername)) {
//         console.log(`Username '${newUsername}' is not available. Please enter a new username.`);
//     } else {
//         console.log(`Username '${newUsername}' is available.`)}
//     })

//     //Alternatively:

    // / Function to check if username exists (case insensitive)
    // const isUsernameTaken = (username: string): boolean => {
    //     const lowerCaseUsername = username.toLowerCase(); // This line converts the parameter username to lowercase
    //     return current_users.some(user => user.toLowerCase() === lowerCaseUsername); // Here, currentUsers is compared in a case-insensitive manner
    // };

    // // Check each new username
    // new_users.forEach(new_users => {
    //     const isTaken = isUsernameTaken(new_users); // Check if the newUsername is taken
    //     const message = isTaken ? `Username '${new_users}' is not available. Please enter a new username.` : `Username '${new_users}' is available.`;
    //     console.log(message); // Output the appropriate message
    // });

    
// 33. Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th
// 7th 8th 9th", and each result should be on a separate line.

// const basic:number[] = [1,2,3,4,5,6,7,8,9];


// function getOrdinalSuffix(num: number): string {
//     if(num === 1){
//         return"1st";
//     }else if(num === 2){
//         return"2nd";
//     }else if (num === 3){
//         return "3rd";
//     }
//     else{
//         return num+"th"
//     }
// }
// //for looping each of the number through the above function
// basic.forEach(num=>{// forEach does a specfic action for each element in our case this is adding ordinals
//     const ordinal = getOrdinalSuffix(num) //the function is defined above, created with an if else chain
//     console.log(ordinal)
// })

// 34. Pizzas: Think of at least three kinds of your favorite pizza. Store these
// // pizza names in a array, and then use a for loop to print the name of each pizza.
// let myPizza : string[] =["Barbecue ","Fajit ","All Cheese "];
// // for (let i=0; i<myPizza.length; i++){
// // console.log(myPizza[i])
// // }

// // • Modify your for loop to print a sentence using the name of the pizza
// // instead of printing just the name of the pizza. For each pizza you should
// // have one line of output containing a simple statement like I like pepperoni
// // pizza.
// // for (let i=0; i<myPizza.length; i++){
// //     console.log(`I like ${myPizza[i]} Pizza `)
// //     }
    
// // • Add a line at the end of your program, outside the for loop, that states
// // how much you like pizza. The output should consist of three or more lines
// // about the kinds of pizza you like and then an additional sentence, such as
// // I really love pizza!

// for (let i=0; i<myPizza.length; i++){
//     console.log(`I like ${myPizza[i]} Pizza `)
//     }
//     console.log(`Pizzas are my first love at meal
//          and i can eat pizza at each meal except
//          breakfast i preffer a fruits based breakfast
//         i really love pizza`);

// 35. Animals: Think of at least three different animals that have a common characteristic.
// Store the names of these animals in a list, and then use a for loop to
// print out the name of each animal.
// • Modify your program to print a statement about each animal, such as
// A dog would make a great pet.
// • Add a line at the end of your program stating what these animals have in
// common. You could print a sentence such as Any of these animals would
// make a great pet!

// let petAnimals:string[]=["Husky ","Goat ","Lamb "];
// for (let i=0; i<petAnimals.length; i++){
//     console.log(petAnimals[i]);
//     console.log(`A ${petAnimals[i]}, would make a great pet`);
    
//     }
// console.log(`A ${petAnimals} either of these animals are human friendly and capable of domestication `);


// 36. T-Shirt: Write a function called make_shirt() that accepts a size and the
// text of a message that should be printed on the shirt. The function should print
// a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
// function make_shirt(size:string, message:string):void {
//     console.log(`You have ordered ${size} sized T-shirt, with the message: ${message} `)
//     }
    
//     make_shirt("Small","I Love my Pakistan")
//     make_shirt("Medium","We Bleed Green")
//     make_shirt("Extra-Large","Six Pack coming soon!")
//     make_shirt("Double ExL","I Love my Pakistan")
    

// let shirtSize:string[] = ["Extra-Small","Small","Medium","Large","Extra-Large"] 
// function makeTshirt(shirtSize:string, message:string) :void {
//     console.log(`You ordered ${shirtSize} sized T-shirt, with the message: ${message} `)
//     }
// make_shirt(shirtSize[0],"I Love my Pakistan") // this can further be modified with different messages, like saving a number of messages in an array and calling them the same way as shirtSize is called.


// 37. Large Shirts: Modify the make_shirt() function so that shirts are large
// by default with a message that reads I love TypeScript. Make a large shirt and a
// medium shirt with the default message, and a shirt of any size with a different
// message.


// let shirtSize:string[] = ["Extra-Small","Small","Medium","Large","Extra-Large"];
// let shirtMessage:string[]= ["I am the Best","Growing up with Inflation","Let me Love You", "I Love TypeScript"]
// function makeTshirt(shirtSize:string, message:string):void {
//     console.log(`You ordered ${shirtSize} sized T-shirt, with the message: ${message} `)
//     }
// makeTshirt(shirtSize[3],"I Love TypeScript")
// makeTshirt(shirtSize[2],"I Love TypeScript")
// makeTshirt(shirtSize[0],shirtMessage[0])
// makeTshirt(shirtSize[1],shirtMessage[1])
// makeTshirt(shirtSize[3],shirtMessage[2])
    
    // 38. Cities: Write a function called describe_city() that accepts the name of
    // a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
// function describe_city(city:string, country:string = "Pakistan"):void {
//     console.log(`${city} is in ${country}`)
// }
// describe_city("Karachi")
// describe_city("Lahore")
// describe_city("Khair pur")
// describe_city("Jakarta","Indonesia")



// 39. City Names: Write a function called city_country() that takes in the name
// of a city and its country. The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value
// that’s returned.
// function city_country(city:string, country:string ="France"):string{
//     return `${city},${country}`

// }

// console.log(city_country("Karachi","Pakistan"))
// let cityA=city_country("Paris")
// let cityT=city_country("Niece")
// let cityG=city_country("Karachi","Pakistan")
// console.log(cityA)
// console.log(cityG)
// console.log(cityT)

// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.

// function make_album(artistName:string, albumTitle:string):{artistName:string, albumTitle:string}
//     {return {
//         artistName:artistName,
//         albumTitle:albumTitle
//     }
// }
//  let album1 = make_album("Strings","Durr")
//  let album2 = make_album("Junnon","Kahani")
//  let album3 = make_album("RodStewart","StoryTeller")

// //  console.log(...[album1, album2, album3])
// //  console.log(album1);
//  console.log(album1);
//  console.log(album2);
//  console.log(album3);



// function make_album(artistName:string, albumTitle:string, track?: number):{artistName:string, albumTitle:string, track?: number}
//     {return {
//         artistName:artistName,
//         albumTitle:albumTitle,
//          track:track
//     }
// }
    
//  let album1 = make_album("Strings","Durr")
//  let album2 = make_album("Junnon","Kahani")
//  let album3 = make_album("RodStewart","StoryTeller",15)

// //  console.log(...[album1, album2, album3])
//  console.log(album1);
//  console.log(album2);
//  console.log(album3);


// 41. Magicians: Make a array of magician’s names. Pass the array to a function
// called show_magicians(), which prints the name of each magician in the array.

// let magicianName : string[] = ["Houdini","Haro","Maro","Jharo"];
// function show_magicians(magicianName:string[]):void {
//     magicianName.forEach(magicianName => {
//         console.log(magicianName)
        
//     });
      
//     }

//     show_magicians(magicianName)
    


// 42. Great Magicians: Start with a copy of your program from Exercise 39.
// Write a function called make_great() that modifies the array of magicians by adding
// the phrase the Great to each magician’s name. Call show_magicians() to
// see that the list has actually been modified.

// let magicianName : string[] = ["Houdini","Haro","Maro","Jharo"];
// function show_magicians(magicianName:string[]):void {
//     magicianName.forEach(magicianName => {
//         console.log(magicianName)
        
//     });
      
//     }
// function make_great(magicianName:string[]){
//     for (let i=0;i<magicianName.length; i++){
//         magicianName[i]= `The great ${magicianName[i]}`
//     }

// }
//     make_great(magicianName)
//     show_magicians(magicianName)
 

// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.

// let magicianName : string[] = ["Houdini","Haro","Maro","Jharo"];

// function show_magicians(magicianName:string[]):void {
//     magicianName.forEach(magicianName => {
//         console.log(magicianName)
        
//     });
      
//     }
// function make_great(magicianName:string[]): string[] {
//     let modifiedMagician :string[] = []

//     for (let i=0;i<magicianName.length; i++){
//         modifiedMagician.push (`The great ${magicianName[i]}`)
//     }

//     return modifiedMagician
// }
// //original:
// let magicianName : string[] = ["Houdini","Haro","Maro","Jharo"];

// //creating copy of the array to work with
// let originalMagician :string[] = [...magicianName];

// //Call Make great with the copy of the array:
// let greatMagicians:string[] =make_great([...magicianName])

// //Display Original
// console.log("Original Magicians:")
// show_magicians(originalMagician)

// //display Modified magician:
// console.log("\nModified Magicians:")
// show_magicians(greatMagicians)

// 44. Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.


// function makeSandwich(items: string[]) {
//     console.log("Your Sandwich has following items:");
//     items.forEach(item => {
//         console.log("- " + item);
//     });
//     console.log("Sandwich complete!\n");
// }

// // Call the function three times with different numbers of arguments
// makeSandwich(['Turkey', 'Lettuce', 'Tomato']);
// makeSandwich(['Ham', 'Cheese']);
// makeSandwich(['Peanut Butter', 'Jelly', 'Banana', 'Honey']);
// makeSandwich(["HunterBeef","Capsicum","Olive","Cheese"])


// 45. Cars: Write a function that stores information about a car in a Object.
// The function should always receive a manufacturer and a model name. It
// should then accept an arbitrary number of keyword arguments. Call the function
// with the required information and two other name-value pairs, such as a
// color or an optional feature. 
// Print the Object that’s returned to make sure all the information was
// stored correctly.
// // 
// FUNCTION CREATION
// function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): Record<string, any> { //record is atype alias its syntax is in backtags, and it works with "Key"& "Value", in our solution it is sting and any, string is the key and the value it holds is of type any.
//     //car here is a variable and its key is string whilst its value is any
//     let car: Record<string, any> = {
//         manufacturer,
//         modelName
//     };

//     options.forEach(([key, value]) => {
//         car[key] = value;
//     });

//     return car;
// }
// // for each does run the option for each key and stores the value whilst return is to give the return.

// // Call the function with required information and additional key-value pairs
// let myCar = createCar('Toyota', 'Camry', ['color', 'blue'], ['year', 2023]);// here in my caris the variable name & function is being called for that variable which is createcar as created above , where in the manufacturer is given as toyota, model is camry than a sring as key and any as value which are, key being colour and blue being the value and , year being the key and 2023 being vlaue



// // Print the object returned to verify information stored correctly
// console.log(myCar);
// // im calling the function without a variable to see the impact
// console.log(createCar("Honda","Accord",["Colour","Metalic Black"],["Year",2025])) //since the value has its type any it allows to use string number etc
//  // Merely calling wont do unless you console/ print it
