/* Create one variable for each of the following 
 real-life examples and assign them values*/

// Item Price
var itemPrice = 5;
// Amount of money in wallet
var moneyInWallet = 20;

// Number of friends
var numberOfFriends = 10;
// Age in years
var ageInYears = 35;

// First name
var firstName = 'Brittaini ';
// Last name
var lastName = ' Gibbemeyer';
// Middle name
var middleName = 'Elizabeth';

/*Create the following variables by performing
 operations (addition, subtraction,
  concatenation, etc…) on the variables created
   in the previous step */

// New amount in wallet after buying item
var amountInWalletNow = moneyInWallet - itemPrice;
// Number of friends made per year based on age
var friendsMadePerYear = numberOfFriends / ageInYears;
// Full name (first, middle, last)
var fullName = firstName + middleName + lastName;

/*Use console.log() to print out the values of all 
 the variables you’ve created. Provide some detail
  as to what the value being printed is*/

console.log("I now have " + amountInWalletNow +
 " dollars in my wallet.");

console.log("My average friends made per year is "
 + friendsMadePerYear + ".");

console.log("My name is: " + fullName + ".");

