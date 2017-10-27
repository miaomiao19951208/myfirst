$(document).ready(function() {
	var allnum=0;
  function arrayToJson(o) {
    var r = [];
    if (typeof o == "string") return "\"" + o.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + "\"";
    if (typeof o == "object") {
      if (!o.sort) {
        for (var i in o)
          r.push(i + ":" + arrayToJson(o[i]));
        if (!!document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)) {
          r.push("toString:" + o.toString.toString());
        }
        r = "{" + r.join() + "}";
      } else {
        for (var i = 0; i < o.length; i++) {
          r.push(arrayToJson(o[i]));
        }
        r = "[" + r.join() + "]";
      }
      return r;
    }
    return o.toString();
  }

	$('#add-shop').click(function() {
		var oo = {
				store: $(".cookie-store").attr("title"),
				gInfo:$(".cookie-ginfo").text(),
				gSplic:$(".cookie-splic").text(),
				gOpirc: $(".cookie-oprice").text(),
				gNpirc: $(".cookie-nprice").text(),
				gNum: $(".cookie-gnum").text()
		};
//      var ss = new getTolleryInfo('cookie-store', 'cookie-ginfo', 'cookie-oprice', 'cookie-nprice', 'cookie-splic', 'cookie-gnum');
		var str = JSON.stringify(oo);
		$.cookie("o", str, {　　
				path: "/",
				expires: 7
		});
		
		var arr = [];
		var str1 = $.cookie("o");
		var o1 = JSON.parse(str1);
        arr.push(o1);
        
      var oCCC = arrayToJson(arr);
	
		$.cookie("tollery", oCCC, {　　
			path: "/",
			expiress: 7
		})
		

	allnum+=parseInt(oo.gNum);
    
    $.cookie('allnum',allnum,{
				expires: 7,
				path: "/",});
	})
	console.log($.cookie("allnum"))
	
})