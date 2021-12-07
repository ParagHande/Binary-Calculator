function zero(){
     document.getElementById("res").value += "0";  
 } 
function one(){
     document.getElementById("res").value += "1";
 }
function plus(){
     document.getElementById("res").value += "+";
 }         
function minus(){
     document.getElementById("res").value += "-";
 } 
function multiplication(){
     document.getElementById("res").value += "*";
 }   
function division(){
     document.getElementById("res").value += "/";
}   
function equal(){
    const myArray  = document.getElementById("res").value
    var pattern = /[-,+,*,/]/g;
    var result = myArray.match(pattern);
    const myArray0 = myArray.split(result);
    const myArray1 = myArray0[0].split("");
    const myArray2 = myArray0[1].split("");
    
    myArray1.reverse()
    myArray2.reverse()
    var value = 0;
    var value2 = 0;
    var newValue = 0;
    var newValue2 = 0;
    
    var x = 1;
    var x2 = 1;
    
    for (var i=0; i<myArray1.length; i++){
        value = myArray1[i] * x;
        newValue =  newValue + value;
        x = x * 2;
    }
     for (var i=0; i<myArray2.length; i++){
        value2 = myArray2[i] * x2;
        newValue2 =  newValue2 + value2;
        x2 = x2 * 2;
    }
    var operators = {'-': function(a, b) { return a - b },
                     '+': function(a, b) { return a + b },
                     '*': function(a, b) { return a * b },
                     '/': function(a, b) { return a / b },};
    var op = result;
    var add = operators[op](newValue, newValue2);
    
    const des = [];
    while(add>0.5){
            add =  add/2;
            add = add.toFixed(1);
            des.push(add);
            add = Math.trunc(add);
    }
    const ans = [];
    for (var i=0; i<des.length; i++){
        var abc = des[i].split('.')[1];
        if(abc>0){
            ans.push(1);
        }
        else{
            ans.push(0);
        }
    }
    ans.reverse();
    var ans2 = ans.toString();
    var ans2 =  ans2.replace(/,/g,'')
    document.getElementById("res").value = ans2;
}   

