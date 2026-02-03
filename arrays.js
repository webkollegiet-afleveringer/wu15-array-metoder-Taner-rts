let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// opgave 1
// --- Løs opgaverne herunder --- 
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

numre = numbersArray.map((x) => x * 3);
console.log(numre);


