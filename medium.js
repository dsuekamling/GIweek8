var num = prompt("Enter number between 1 & 12");

var months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
              "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
if(num >=1 && num<=12){ 
console.log(months[num-1]);
}else {
    console.log("Invalid. Please enter a number between 1 and 12.");
}

