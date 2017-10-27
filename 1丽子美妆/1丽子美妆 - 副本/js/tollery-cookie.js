$(document).ready(function () {
	//cookie
	 var str= $.cookie("tollery");
	 var $tollery =  eval(str);
	   console.log($tollery);
	 var num=0,sum=0;
	 //自营对象
	 var obj1 ={};
	 //其他店铺
	 var obj2={};
	 var store1,store2;
	for (var i = 0; i < $tollery.length; i++) {
		if($tollery[i].store==0){
			obj1[num]=$tollery[i];
			num++;
			store1="我们自营";
		}
		else if($tollery[i].store==1)
		{
			
			obj2[sum]=$tollery[i];
			sum++;
			store2="哒哒美妆";
		}
	}
    if(num>0&&sum>0){
	arr=[{oj:obj1,sName:store1},{oj:obj2,sName:store2}];
    	
    }
    else if(num==0&&sum>0){
	arr=[{oj:obj2,sName:store2}];
    }
     else if(num>0&&sum==0){
	arr=[{oj:obj1,sName:store1}];
    }
//	$.each(arr, function(i) {
//		if(arr.eq(i).oj==undefined){
//			$(this).sName=undefined;
//		}
//	});
   console.log(arr);
	//使用JSON
	var html=template("tpl-list",arr);
	$(".tollery-store-list").html(html);
})
