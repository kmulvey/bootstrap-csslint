(function(){
    "use strict";
    var Assert = YUITest.Assert;

    YUITest.TestRunner.add(new YUITest.TestCase({

        name: "Bootstrap Float Errors",

        "Using floats with bootsrap should result in a warning": function(){
            var result = CSSLint.verify(".foo { float: right; float: left; }", { "bs-floats": 1 });
            Assert.areEqual(2, result.messages.length);
            Assert.areEqual("warning", result.messages[0].type);
            Assert.areEqual("Use .pull-right with bootstrap.", result.messages[0].message);
            Assert.areEqual("warning", result.messages[1].type);
            Assert.areEqual("Use .pull-left with bootstrap.", result.messages[1].message);
        }
    }));
})();
