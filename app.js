// THIS IS CALCULATOR
// let c="huzaifa"
// let d=Array.from(c)
// console.log(d) 
// let val1=+prompt("enter your first value")
// let operator=prompt("enter your operator")
// let val2=+prompt("enter your value2")
// if (operator === "+") {
//     alert(val1+val2)
// }
// else if(operator === "x"){
// alert(val1*val1)

// }
// else if(operator === "/"){
//     alert(val1/val2)
// } 
// else if (operator === "-"){
//     alert(val1-val2)
// }
// else if (operator ==="%")
//     {
//         alert(val1%val2)
//     }
// else {
//     alert("enter your value ifyou want to calculate")
// }

function sub(array) {
        let greaterthan5=[]
        let equalto5=[]
        let lessthan5=[]
    for (let i = 0; i < array.length; i++) {
        const inde = array[i];
        console.log(inde)
        if (inde.length === 5) {
            equalto5.push(inde)    
        } 
        else if(inde.length < 5){
            lessthan5.push(inde)
            
        }
        else {
            greaterthan5.push(inde)           
        }
    }   
    console.log(equalto5)
    console.log(lessthan5)
    console.log(greaterthan5)
        
    }
    const  x1=["huzaifa","ali", "ahmed","subhan","haris","kakoo"]   
    sub(x1)
let hur ="Huzaifa"
let c= Array.from(hur)
alert(c)