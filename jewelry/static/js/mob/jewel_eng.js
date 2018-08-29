var job = {"intro":"这个作品牛逼","image":"jewel1.jpg"};
$(function () {
	//get
	var id = window.location.search;
	var seriesId = id.substring(1);

	$('.changeLanguage').attr('href', '/index_mob/jewel_mob/?' + seriesId);

	var seriesPost = {id:seriesId};

		$.get('/getJewels_eng/', seriesPost, function (jeweljson) {//获取作品
				//series =  JSON.parse(json)
		var jewel = jeweljson;
		for(var i=0; i<jewel.image.length; i++) {
			if(i == 0) {
				$('#main').append('<img src="/static/images/' + jewel.image[i] + '" />');
				$('#main').append('<div id="text"></div>');
				$('#text').html('<h3>' + jewel.seriesname + '</h3>' +
                    // '<h4>' +  jewel.seriesname + '-' + cls[1] + '</h4>' +
                    '<pre>' + jewel.seriesintro + '</pre>');
                //name = jewel.seriesname;
			}
			else {
			    $('#main').append('<img src="/static/images/' + jewel.image[i] + '" />');
			}
		}
		$('#main').append('<div id="footer">\n' +
        '             <div class="contact">\n' +
        '                <a class="ins con" href="https://www.instagram.com/yilanliu_lyl/" target="_blank"><i class="fa fa-instagram fa-lg"></i></a>\n' +
        '                <a class="wechat con" href="javascript:void(0);"><i class="fa fa-wechat fa-lg"></i></a>\n' +
        '                <a class="weibo con" href="https://weibo.com/u/5627347173" target="_blank"><i class="fa fa-weibo fa-lg"></i></a>\n' +
        '                <a class="email con" href="javascript:void(0);"><i class="fa fa-envelope-o fa-lg"></i></a>\n' +
        '            </div>\n' +
        '            <p>© YILAN JEWELRY</p>\n' +
        '        </div>');

        $(".wechat").click(function(){
            $('#wechatModal').modal('show');
        });
        $(".email").click(function(){
            $('#emailModal').modal('show');
        });

   })
})