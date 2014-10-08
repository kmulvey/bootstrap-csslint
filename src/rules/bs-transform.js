CSSLint.addRule({

    //rule information
    id: "bs-transform",
    name: "Use .text-lowercase, .text-uppercase and .text-capitalize",
    desc: "Bootstrap already provides text transform util classes.",
    browsers: "All",
    tags: ["Bootstrap"],

    //initialization
    init: function(parser, reporter){
        "use strict";
        var rule = this;

        parser.addListener("property", function(event){
            var name = event.property.text.toLowerCase();
						
            if (name === "text-transform"){
                var value = event.value.text.toLowerCase();
								if(value === "lowercase"){
								    reporter.report("Use .text-lowercase with bootstrap.", event.line, event.col, rule);
                }
								else if(value === "uppercase"){
								    reporter.report("Use .text-uppercase with bootstrap.", event.line, event.col, rule);
                }
								else if(value === "capitalize"){
								    reporter.report("Use .text-capitalize with bootstrap.", event.line, event.col, rule);
                }
						}
        });
    }

});
