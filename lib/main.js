"use strict";
let readlineSync = require('readline-sync');
let DisplayOne = require("../lib/DisplayOne");
let DisplayTwo = require("../lib/DisplayTwo");
let CountSum = require("../lib/CountSum");

let student = [];

function main(){
    let choose;
    do{
        choose =readlineSync.question("1. 添加学生\n2. 生成成绩单\n3. 退出\n请输入你的选择（1～3）：\n");
        if(choose==="1") {
            let result = DisplayOne();
            if(result instanceof Array){
                let oneStudent = {};
                oneStudent.name = result[0];
                oneStudent.ID = result[1];
                oneStudent.classNumber = result[2];
                let i = 3;
                while(i<result.length){
                    let one = [];
                    one = result[i].split(":");
                    if(one[0]==="语文"){
                        oneStudent.语文 = one[1];
                    }
                    else if(one[0]==="数学"){
                        oneStudent.数学 =  one[1];
                    }
                    else if(one[0]==="英语"){
                        oneStudent.英语 =  one[1];
                    }
                    else if(one[0]==="编程"){
                        oneStudent.编程 = one[1];
                    }
                    i++;
                }
                student.push(oneStudent);
                console.log("学生"+oneStudent.name+"的成绩被添加");
            }
        }
        else if(choose==="2"){
            let i =0;
            let j = 0;
            let studentNumber = DisplayTwo(student);
            if(studentNumber instanceof Array){
                console.log("\n\n成绩单\n" +"姓名|数学|语文|英语|编程|平均分|总分 ");
                while(i<studentNumber.length){
                    j = 0;
                    while(true){
                        if(j===student.length)
                            break;
                        if(studentNumber[i]===student[j].ID){
                            let sum = CountSum(student[j]);
                            let ave = sum/4;
                            console.log(student[j].name+"|"+student[j].语文+"|"+student[j].数学+"|"+student[j].英语+"|"+student[j].编程+"|"+sum+"|"+ave);
                            break;
                        }
                        j++;
                    }
                    i++;
                }
            }
        }
    }while(choose!=="3");
}

module.exports = main;