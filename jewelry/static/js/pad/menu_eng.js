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
    });
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
                   $(".results").append('<a href="/index_mob_eng/jewel_mob_eng/?' + searchList[i].id + '">' +
                       searchList[i].seriesname_eng + '</a>');
                }
            }
        }
	});
	function judge() {
	    if (window.orientation == 90 || window.orientation == -90) {
	        window.location.reload();
        } else if (window.orientation == 0) {
	        window.location.reload();
        }
    }
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", judge, false);
})

