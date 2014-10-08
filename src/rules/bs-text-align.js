/*
 * Rule: box-sizing doesn't work in IE6 and IE7.
 */

CSSLint.addRule({

    //rule information
    id: "bs-text-align",
    name: "Use .text-left, .text-center, .text-right with bootstrap",
    desc: "Bootstrap already provides text alignment util classes.",
    browsers: "All",
    tags: ["Bootstrap"],

    //initialization
    init: function(parser, reporter){
        "use strict";
        var rule = this;

        parser.addListener("property", function(event){
            var name = event.property.text.toLowerCase();
						
            if (name === "float"){
                var value = event.value.text.toLowerCase();
								if(value === "left"){
								    reporter.report("Use .pull-left with bootstrap.", event.line, event.col, rule);
                }
								else if(value === "right"){
								    reporter.report("Use .pull-right with bootstrap.", event.line, event.col, rule);
                }
						}
        });
    }

});
