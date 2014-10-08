(function(){
    "use strict";
    var Assert = YUITest.Assert;

    YUITest.TestRunner.add(new YUITest.TestCase({

        name: "Bootstrap Visibility Errors",

        "Using display: node/block, or visibility with bootsrap should result in a warning": function(){
            var result = CSSLint.verify(".foo { display: block; display: none; visibility: hidden; visibility: visible; }", { "bs-visibility": 1 });
            Assert.areEqual(4, result.messages.length);
            
						Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Consider using .show with bootstrap.", result.messages[0].message);
            
						Assert.areEqual("warning", result.messages[1].type);
            Assert.areEqual("Use .hide (2.x) or .hidden (3.x) with bootstrap.", result.messages[1].message);
            
						Assert.areEqual("warning", result.messages[2].type);
            Assert.areEqual("Use .hide (2.x) or .hidden (3.x) or .invisible (3.x) with bootstrap.", result.messages[2].message);
            
						Assert.areEqual("warning", result.messages[3].type);
            Assert.areEqual("Consider using .show with bootstrap.", result.messages[3].message);
        }
    }));
})();
