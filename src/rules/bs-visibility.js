CSSLint.addRule({

    //rule information
    id: "bs-visibility",
    name: "Use .hide and .show",
    desc: "Bootstrap already provides show/hide classes.",
    browsers: "All",
    tags: ["Bootstrap"],

    //initialization
    init: function(parser, reporter){
        "use strict";
        var rule = this;

        parser.addListener("property", function(event){
            var name = event.property.text.toLowerCase();
            var value = event.value.text.toLowerCase();
						
            if (name === "display"){
								if(value === "block"){
								    reporter.report("Consider using .show with bootstrap.", event.line, event.col, rule);
                }
								else if(value === "none"){
								    reporter.report("Use .hide (2.x) or .hidden (3.x) with bootstrap.", event.line, event.col, rule);
                }
						}
          	else if (name === "visibility"){
								if(value === "visible"){
								    reporter.report("Consider using .show with bootstrap.", event.line, event.col, rule);
                }
								else if(value === "hidden"){
								    reporter.report("Use .hide (2.x) or .hidden (3.x) or .invisible (3.x) with bootstrap.", event.line, event.col, rule);
                }
						}
        });
    }

});
