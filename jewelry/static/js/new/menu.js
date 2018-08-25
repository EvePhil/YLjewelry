$(function () {
	var flag = 1;
	$(".openMenu").rotate({
	   bind:
	     {
	        click: function(){
				if(flag == 1) {
					$(this).rotate({ animateTo:90, duration:800});
					flag = 0;
					$(".menu").fadeToggle(800);
				}
				else {
					$(this).rotate({ animateTo:0, duration:800});
					flag = 1;
					$(".menu").fadeToggle(800);
				}
	        }
	     }
	});
	var sea = 0;
	$(".search").click(function(){
	    if(sea == 1) {
            $('.searchText').css('display', 'none');
            sea = 0;
        }
        else {
	        $('.searchText').css('display', 'inline-block');;
            sea = 1;
        }
    });

	function CheckChinese(obj,val){
　　var reg = new RegExp("[\\u4E00-\\u9FFF]+","g");
　　if(reg.test(val)){
       alert("不能输入汉字！");
       var strObj = document.getElementById(obj);
       strObj.value = "";
       strObj.focus();
　　}
  }

	$(".searchText").keydown(function(){
        //alert(123);
    });
})

