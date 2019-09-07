$(function () {
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
    function isEmail(str) {
        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
        return reg.test(str);
    }

    $(".send").click(function(){
        var email = $('.yourEmail').val();
        var title = $('.yourTitle').val();
        var content = $('.content').val();
        if(!isEmail(email)) {
            alert("Wrong Email！");
            return false;
        }
        else if(title == "") {
            alert("Title is null！")
            return false;
        }
        else if(content == "") {
            alert("Content is null！")
            return false;
        }
        else {
            var Data = new FormData();
            Data.append("email", email);
            Data.append("title", title);
            Data.append("content", content);
            sendEmail(Data);
        }
        //console.log("haha")
    });
})
