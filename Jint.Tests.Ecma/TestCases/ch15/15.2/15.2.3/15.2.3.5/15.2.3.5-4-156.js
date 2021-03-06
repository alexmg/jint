/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.5/15.2.3.5-4-156.js
 * @description Object.create - 'value' property of one property in 'Properties' is own data property that overrides an inherited data property (8.10.5 step 5.a)
 */


function testcase() {

        var proto = {
            value: "inheritedDataProperty"
        };

        var ConstructFun = function () { };
        ConstructFun.prototype = proto;

        var descObj = new ConstructFun();

        descObj.value = "ownDataProperty";

        var newObj = Object.create({}, {
            prop: descObj
        });

        return newObj.prop === "ownDataProperty";
    }
runTestCase(testcase);
