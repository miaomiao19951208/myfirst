$(document).ready(function() {
	$("#obottom").load("obottom.html");

	$("#register-form").Validform({
		btnSubmit:"#register-submit",
		tiptype: function(msg, o, cssctl) {
			
			if(!o.obj.is("form")) { //验证表单元素时o.obj为该表单元素，全部验证通过提交表单时        
				o.obj为该表单对象;
				var objtip = o.obj.siblings(".mss-tip");
				cssctl(objtip, o.type);
				objtip.text(msg);
			} else {
				var objtip = o.obj.siblings(".mss-tip");
				cssctl(objtip, o.type);
				objtip.text(msg);
			}
		},
		ignoreHidden: false,
		dragonfly: false,
		tipSweep: false,
		label: ".label",
		showAllError: false,
		postonce: true,
		ajaxPost: true,
		datatype: {
			"*6-20": /^[^\s]{6,20}$/,
			"z2-4": /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,4}$/,
			"username": function(gets, obj, curform, regxp) {
				//参数gets是获取到的表单元素值，obj为当前表单元素，curform为当前验证的表单，regxp为内置的一些正则表达式的引用;
				var reg1 = /^[\w\.]{4,16}$/,
					reg2 = /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,8}$/;

				if(reg1.test(gets)) {
					return true;
				}
				if(reg2.test(gets)) {
					return true;
				}
				return false;

				//注意return可以返回true 或 false 或 字符串文字，true表示验证通过，返回字符串表示验证失败，字符串作为错误提示显示，返回false则用errmsg或默认的错误提示;
			},
			"phone": function() {
				// 5.0 版本之后，要实现二选一的验证效果，datatype 的名称 不 需要以 "option_" 开头;	
			}
		},
		usePlugin: {
			swfupload: {},
			datepicker: {},
			passwordstrength: {},
			jqtransform: {
				selector: "select,input"
			}
		},

	});
   $("#serive-ifo").click(function () {
			var flag= !$(this).prop("checked");
			$("#register-submit").prop("disabled",flag);
		})
})