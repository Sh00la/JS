console.log ( "testing" )

var a = 4
var b = 3
var c = 5
console.log (a+b)
console.log (a-b+c)
console.log (b+c/a)

alert("Hello to the Page")
confirm("Do you want to proceed?")
var startNumber = prompt("Enter the number for tables");
var endNumber = 20;

startNumber = parseInt(startNumber);

for (var i = startNumber; i <= endNumber; i++) {
    document.write(`<h3>Multiples of ${i}:</h3>`);
    
    for (var j = 1; j <= 10; j++) {
        document.write(`${i} x ${j} = ${i * j}<br>`);
    }

    document.write("<br>");
}


const ptr = prompt("Tell me Your Percentage")

if (ptr<= 50) {
    console.log("Work hard for better result")
} else if(ptr<= 60){
    console.log("Grade C")
    console.log("Mehnat ki zarurat hy bachy")
}else if(ptr<= 70){
    console.log("Grade B")
    console.log("Boht khoob. Ap is sy behter perform kr skty ho")
}else if(ptr<= 80){
    console.log("Grade A")
    console.log("Ary wah. Tum ny to kamaal kr dia. wese thori si mehnat sy boht uper ja skty ho")
}else if(ptr<= 100){
    console.log("Grade A-1")
    console.log("O teri ki. Saary number tum ny hi ly liye kya? boht khoob")
}else{
    console.log("Please Input the correct data")
}
