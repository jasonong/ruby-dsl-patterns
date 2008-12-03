CodeHighlighter.addStyle("css", {
	comment : {
		exp  : /\/\*[^*]*\*+([^\/][^*]*\*+)*\//
	},
	keyword : {
		exp  : /@\w[\w\s]*/
	},
	selector : {
		exp  : "([\\w-:\\[.#][^{};>]*)(?={)"
	},
	propertie : {
		exp  : "([\\w-]+)(?=\\s*:)"
	},
	unit : {
		exp  : /([0-9])(em|en|px|%|pt)\b/,
		replacement : "$1<span class=\"$0\">$2</span>"
	},
	url : {
		exp  : /url\([^\)]*\)/
	}
 });
