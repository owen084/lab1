console.log("Enter number");
let stdin3 = process.openStdin();
stdin3.addListener("data",function(str3){
    let number = parseInt(str3);
if(number % 2 == 0) {
    console.log("The number is even.");
}
if(number % 2 !=0) {
    console.log("The number is odd.");
}
if(number == ""){
    console.log("Input Number");
}
stdin3.destroy();
});