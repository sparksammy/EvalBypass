# EvalBypass
Bypass those annoying eval warnings in Firefox! (Requires JQuery.)

## How do I load this without breaking the License?
With JQuery:
`$.ajax({ url: 'https://raw.githubusercontent.com/sparksammy/EvalBypass/master/index.js', success: function(data) { setTimeout(data, 0); } });`
With HTML:
` <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script> <script src="https://raw.githubusercontent.com/sparksammy/EvalBypass/master/index.js"></script> `
