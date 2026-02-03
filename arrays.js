let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// opgave 1
let newNumbers = numbersArray.filter(num => num > 20)
console.log("Problem 1", newNumbers)


// opgave 2 

catsArray.push("Sniffles")
console.log("Opgave 2", catsArray)


// opgave 3a

console.log("opgave 3a", dogsArray.includes("Trixie"))
false

// opg 3b 


console.log("opgave 3b", dogsArray.includes("Baxter"))
true

// opg 4a 


console.log("opgave 4a", catsArray.includes("Bagheera"))
undefined

// opg 4b

console.log("opgave 4b", catsArray.includes("Salem"))
true

// opg 5 

let numre = numbersArray.map((x) => x * 3);
console.log(numre);

// opg 6

let streg = dogsArray.join("");

console.log("Opgave 6", streg);

// opg 7a

let mango = fruitsArray.indexOf("Mango");

console.log("Opgave 7a", mango);


// opg 7b

let blåbær = fruitsArray.indexOf("blåbær");

console.log("Opgave 7b", blåbær);


// opg 8 

let polly = dogsArray.indexOf("Polly");
if (polly !== -1) {
  dogsArray.splice(polly, 1);
}
console.log("opgave 8", dogsArray);


