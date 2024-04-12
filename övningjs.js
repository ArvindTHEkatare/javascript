// uppgift 1
var name = "Alice"
console.log(name)

// uppgift 2
var num1 = Number(prompt("Skriv en tal"))
var num2 = Number(prompt("Skriv en annan tal"))
matte = num1 * num2
console.log(matte)

// uppgift 3
var number = Number(prompt("Skriv ett tal, för att ta reda på om det är udda eller jämnt: "));
if (number % 2 === 0) {
    console.log(number + " är ett jämnt tal.");
} else {
    console.log(number + " är ett udda tal.");
}

// uppgift 4
var a = typeof(1);           
var b = typeof("omid");      
var c = typeof(true);        
var d = typeof([]);          
var e = typeof({});          
var f = typeof(function(){})
var g = typeof(undefined);   
var h = typeof(null);        

console.log("a är av typen Number:", a);
console.log("b är av typen String:", b);
console.log("c är av typen Boolean:", c);
console.log("d är av typen Array (är en Objekt i JavaScript):", d);
console.log("e är av typen Object:", e);
console.log("f är av typen Function:", f);
console.log("g är av typen Undefined:", g); 
console.log("h är av typen Object (null är mer av en specialtyp av Objekt i JavaScript):", h);


// uppgift 5
{
    var a = "var";
    let b = "let";
    const c = "const";
}

console.log(a); 
console.log(b); 
console.log(c); 
