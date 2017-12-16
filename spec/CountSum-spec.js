"use strict";
let CountSum = require("../lib/CountSum");

describe("Sum should be",()=>{

    it("student",()=>{
        let result = CountSum({"语文":"90","数学":"90","英语":"90","编程":"90"});
        expect(result).toBe(360);
    })
});