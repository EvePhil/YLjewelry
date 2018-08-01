function sendEmail(email) {
	$.ajax({
		type:'post',
		data: email,
		url :'/sendEmail/',
        cache: false,
        processData: false,
        contentType: false,
        async: false
    }).done(function(res) {
        if(res == 1)
    	    alert("发送成功");
    }).fail(function(res) {

    });
}

$(".send").click(function(){
	var title = $('.title').val();
	var content = $('.content').val();
	var Data = new FormData();
	Data.append("title", content);
    Data.append("content", content);
	sendEmail(Data);
	console.log("haha")
});