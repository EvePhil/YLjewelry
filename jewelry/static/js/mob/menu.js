$(function () {
    //$('body').height($('body')[0].clientHeight);
    var h1 = $('body').height();
    var h2 = $('#upMenu').height();
    var h3 = $('#main').height();
    $(window).resize(function() {
        $('body').height(h1);
        $('#upMenu').height(h2);
        $('#main').height(h3);
        $('#main').css('top', h2);
    }); //防止安卓手机弹输入法缩放
    $(".searchText").val('');
	var flag = 1;
	$(".openMenu").rotate({
	   bind:
	     {
	        click: function(){
				if(flag == 1) {
					$(this).rotate({ animateTo:90, duration:800});
					flag = 0;
					$(".menu").fadeToggle(800);
					if(sea == 1) {
                        // $('.rightIcon').css('width', '5rem');
                        $('.searchBox').fadeToggle(800);
                        setTimeout(function(){$('.rightIcon').css('width', '5rem');}, 900);
                        sea = 0;
                    }
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
	        //$('.rightIcon').css('width', '5rem');
            $('.searchBox').fadeToggle(800);
            setTimeout(function(){$('.rightIcon').css('width', '5rem');}, 900);
            sea = 0;
        }
        else {
	        $('.rightIcon').css('width', '22rem');
	        $('.searchBox').fadeToggle(800);
            sea = 1;
            if (flag == 0) {
                $(".openMenu").rotate({ animateTo:0, duration:800});
                flag = 1;
                $(".menu").fadeToggle(800);
            }
        }
    });

  	var searchList = [];
    var inputVal;

	$.get('/getSearchSeries/',function (seriesJson) {
        searchList = seriesJson;
    });

	$(".searchText").keyup(function(){

		//alert(123)
        var flag = 0;
        var flagChar = 1;
        inputVal = $(".searchText").val().toUpperCase();
        //console.log(inputVal);
        $(".results").html('');

        var reg= /^[A-Za-z]+$/;

        if(reg.test(inputVal)&&(inputVal.length <= 2)) {
            flagChar = 0;
        }

        for (var i=0; i<searchList.length; i++) {
            //console.log(searchList[i].seriesname_cn.indexOf(inputVal));
            var cn = searchList[i].seriesname_cn.indexOf(inputVal)!=0;
	        var eng = searchList[i].seriesname_eng.indexOf(inputVal)!=0;
            flag += cn;
            flag += eng;
        }
        if(flag&&flagChar) {
            for (var i=0; i<searchList.length; i++) {
                //console.log(searchList[i].seriesname_cn.indexOf(inputVal));
                if((searchList[i].seriesname_cn.indexOf(inputVal)>=0) || (searchList[i].seriesname_eng.indexOf(inputVal)>=0)) {
                    //console.log(searchList[i].seriesname_cn + ' ' + searchList[i].seriesname_eng);
                   $(".results").append('<a href="/index_mob/jewel_mob/?' + searchList[i].id + '">' +
                   searchList[i].seriesname_cn + '</a>');
                }
            }
        }
	});

    // function judge() {
	 //    if (window.orientation == 90 || window.orientation == -90) {
	 //        //alert(1)
	 //        window.location.reload();
    //         // console.log('heng')
    //         // var bigHeight = $("#upMenu").height();
    //         // var titleHeight = $(".title").outerHeight(true);
    //         // var space = bigHeight - titleHeight;
    //         // space = (space - 20.6) / 2;
    //         // $(".openMenu").css("display", "inline-block");
    //         // $(".openMenu").css("margin-top", space);
    //         // $(".rightIcon").css("display", "block");
    //         // $(".rightIcon").css("top", titleHeight + space);
    //     } else if (window.orientation == 0) {
	 //        //alert(2)
	 //        window.location.reload();
    //         // console.log('shu')
    //         // var bigHeight = $("#upMenu").height();
    //         // var titleHeight = $(".title").outerHeight(true);
    //         // var space = bigHeight - titleHeight;
    //         // space = (space - 20.6) / 2;
    //         // $(".openMenu").css("display", "inline-block");
    //         // $(".openMenu").css("margin-top", space);
    //         // $(".rightIcon").css("display", "block");
    //         // $(".rightIcon").css("top", titleHeight + space);
    //     }
    // }
    // window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", judge, false);
    function orient() {
        if (window.orientation == 90 || window.orientation == -90) {
            //ipad、iphone竖屏；Andriod横屏
            $("body").attr("class", "landscape");
            orientation = 'landscape';
        } else if (window.orientation == 0 || window.orientation == 180) {
            //ipad、iphone横屏；Andriod竖屏
            $("body").attr("class", "portrait");
            orientation = 'portrait';
        }
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "static/css/index.css";
        document.getElementsByTagName("head")[0].appendChild(link);

        // alert('为了您的浏览体验，建议使用竖屏访问~');
    }
    //页面加载时调用
    $(function() {
        orient();
    });
    //用户变化屏幕方向时调用
    $(window).bind('orientationchange', function(e) {
        orient();
        // window.location.reload();
    });

})

