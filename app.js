console.log ( "testing" )

var a = 4
var b = 3
var c = 5
console.log (a+b)
console.log (a-b+c)
console.log (b+c/a)

alert("Hello to the Page")
confirm("Do you want to proceed?")
var inp = prompt("Enter the Number")
console.log(inp)
document.write(inp + "<br>")
document.write(`${inp} x 1 = `, inp*1 + "<br>")
document.write(`${inp} x 2 = `, inp*2 + "<br>")
document.write(`${inp} x 3 = `, inp*3 + "<br>")
document.write(`${inp} x 4 = `, inp*4 + "<br>")
document.write(`${inp} x 5 = `, inp*5 + "<br>")
document.write(`${inp} x 6 = `, inp*6 + "<br>")
document.write(`${inp} x 7 = `, inp*7 + "<br>")
document.write(`${inp} x 8 = `, inp*8 + "<br>")
document.write(`${inp} x 9 = `, inp*9 + "<br>")
document.write(`${inp} x 10 = `, inp*10 + "<br>")

const ptr = prompt("Tell me Your Percentage")

if (ptr<= 50) {
    console.log("Work hard for better result")
} else if(ptr<= 60){
    console.log("Grade C")
}else if(ptr<= 70){
    console.log("Grade B")
}else if(ptr<= 80){
    console.log("Grade A")
}else if(ptr<= 100){
    console.log("Grade A-1")
}else{
    console.log("Please Input the correct data")
}