$(function () {
	//get
	var id = window.location.search;
	var seriesId = id.substring(1);

	$('.changeLanguage').attr('href', '/jewel/?' + seriesId);

	var seriesPost = {id:seriesId};
	var name;

		$.get('/getJewels_eng/', seriesPost, function (jeweljson) {//获取作品
				//series =  JSON.parse(json)
		var jewel = jeweljson;
		for(var i=0; i<jewel.image.length; i++) {
			//alert(job.image)
			if(i == 0) {
				$('.jqueryzoom').append('<img id="img" class="cloudzoom" src="/static/images/' +
				jewel.image[i] + '"data-cloudzoom="zoomSizeMode:\'lens\', animationTime:0, zoomPosition: \'inside\', startMagnification:1.5, zoomImage: \'/static/images/'+
				jewel.image[i] + '\', autoInside: 30"/>');
				$('#imgList').append('<li><img class="cloudzoom-gallery ' + jewel.seq[i] + ' cloudzoom-gallery-active" src="/static/images/thumbnail/' +
				jewel.image[i] + '" data-cloudzoom="useZoom:\'.cloudzoom\',image:\'/static/images/' +
				jewel.image[i] + '\',zoomImage:\'/static/images/' +
				jewel.image[i] + '\'"/></li>');
			}
			else {
				$('#imgList').append('<li><img class="cloudzoom-gallery ' + jewel.seq[i] + '" src="/static/images/thumbnail/' +
				jewel.image[i] + '" data-cloudzoom="useZoom:\'.cloudzoom\',image:\'/static/images/' +
				jewel.image[i] + '\',zoomImage:\'/static/images/' +
				jewel.image[i] + '\'"/></li>');
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
		CloudZoom.quickStart();
		var classes = $(".cloudzoom-gallery-active").attr("class");
		var cls = classes.split(' ');
		$('#text').html('<h3>' + jewel.seriesname + '</h3>' +
			// '<h4>' +  jewel.seriesname + '-' + cls[1] + '</h4>' +
			'<pre>' + jewel.seriesintro + '</pre>');
		name = jewel.seriesname;

   })

	$("#imgList").click(function(){
		var classes = $(".cloudzoom-gallery-active").attr("class");
		var cls = classes.split(' ');
		$('#text h4').html(name + '-' + cls[1]);
	});

	//alert(jobId)
	//alert(jobPost)
	//jobAjax(name)
	//alert(window.location.search);
	// $.get('/getWork/', jobPost, function (jobjson) {//获取作品
	// 			//series =  JSON.parse(json)
	// 	var job = jobjson;
	// 	for(var i=0; i<job.image.length; i++) {
	// 		//alert(job.image)
	// 		if(i == 0) {
	// 			$('.jqueryzoom').append('<img id="img" class="cloudzoom" src="/static/images/' +
	// 			job.image[i] + '"data-cloudzoom="zoomSizeMode:\'lens\', startMagnification:1.2, lensWidth:250, lensHeight:250, zoomImage: \'/static/images/'+
	// 			job.image[i] + '\', autoInside: 30"/>');
	// 			$('#imgList').append('<li><img class="cloudzoom-gallery cloudzoom-gallery-active" src="/static/images/' +
	// 			job.image[i] + '" data-cloudzoom="useZoom:\'.cloudzoom\',image:\'/static/images/' +
	// 			job.image[i] + '\',zoomImage:\'/static/images/' +
	// 			job.image[i] + '\'"/></li>');
	// 		}
	// 		else {
	// 			$('#imgList').append('<li><img class="cloudzoom-gallery" src="/static/images/' +
	// 			job.image[i] + '" data-cloudzoom="useZoom:\'.cloudzoom\',image:\'/static/images/' +
	// 			job.image[i] + '\',zoomImage:\'/static/images/' +
	// 			job.image[i] + '\'"/></li>');
	// 		}
	// 	}
	// 	CloudZoom.quickStart();
	// 	$('#text').html('<h3>' + job.workname + '</h3>' + job.workintro);
   //
   // })
//	$('#photo1').attr('src', 'img/jewel/' + job.image);
//	$('#photo2').attr('src', 'img/jewel/' + job.image);
//	$('#text').html('<h3>' + name + '</h3>' + job.intro);		

	
})