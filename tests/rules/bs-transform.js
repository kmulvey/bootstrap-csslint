(function(){
    "use strict";
    var Assert = YUITest.Assert;

    YUITest.TestRunner.add(new YUITest.TestCase({

        name: "Bootstrap Text Transform Errors",

        "Using text-transform with bootsrap should result in a warning": function(){
            var result = CSSLint.verify(".foo { text-transform: capitalize; text-transform: uppercase; text-transform: lowercase; }", { "bs-transform": 1 });
            Assert.areEqual(3, result.messages.length);
            
						Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Use .text-capitalize with bootstrap.", result.messages[0].message);
            
						Assert.areEqual("warning", result.messages[1].type);
            Assert.areEqual("Use .text-uppercase with bootstrap.", result.messages[1].message);
            
						Assert.areEqual("warning", result.messages[2].type);
            Assert.areEqual("Use .text-lowercase with bootstrap.", result.messages[2].message);
        }
    }));
})();
