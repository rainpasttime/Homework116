"use strict";
function CountSum(student){
    let sum = 0;
    sum +=change(student.语文);
    sum +=change(student.数学);
    sum +=change(student.英语);
    sum +=change(student.编程);
    return sum;
}
function change(score){
    let i =0;
    let j =0;
    let result = 0;
    while(i<score.length){
        j = 0;
        while(j!=score[i]){
            j++;
        }
        result = result*10+j;
        i++;
    }
    return result;
}
module.exports = CountSum;