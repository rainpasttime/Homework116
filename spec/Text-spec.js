"use strict";
let judge = require("../lib/Text");

describe('judge', () => {
    let result = judge("Alice,2014,Y,03,Math:90,Chinese:90,English:90,Programming:90");
    let i =0;
    let expectResult = ["Alice","2014","Y","03","Math:90","Chinese:90","English:90","Programming:90"];
    while(i<result.length){
        it('should display split imformation', () => {
            expect(result[i]).toBe(expectResult[i]);
        });
        i++;
    }
    it('should be a array',()=>{
        expect(result instanceof Array).toBe(true);
    })

});