(function(){
    "use strict";
    var Assert = YUITest.Assert;

    YUITest.TestRunner.add(new YUITest.TestCase({

        name: "Bootstrap Float Errors",

        "Using floats with bootsrap should result in a warning": function(){
            var result = CSSLint.verify(".foo { text-align: left; text-align: center; text-align: right; text-align: justify; text-align: nowrap;}", { "bs-text-align": 1 });
            
						Assert.areEqual(5, result.messages.length);
            
						Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Use .text-left with bootstrap.", result.messages[0].message);
            
						Assert.areEqual("warning", result.messages[1].type);
            Assert.areEqual("Use .text-center with bootstrap.", result.messages[1].message);
            
						Assert.areEqual("warning", result.messages[2].type);
            Assert.areEqual("Use .text-right with bootstrap.", result.messages[2].message);
            
						Assert.areEqual("warning", result.messages[3].type);
            Assert.areEqual("Use .text-justify with bootstrap.", result.messages[3].message);
            
						Assert.areEqual("warning", result.messages[4].type);
            Assert.areEqual("Use .text-nowrap with bootstrap.", result.messages[4].message);
        }
    }));
})();
