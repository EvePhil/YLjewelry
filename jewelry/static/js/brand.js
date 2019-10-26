var pressId = 0;

$(function () {
    $.get('/getAllMedia/', function (presses) {
        // var intro = introduction;
        // //alert(len)
        // $("#intro").append('<pre>' + intro.intro + '</pre>');
        // $("#exper").append('<pre>' + intro.exper + '</pre>');

        for (var i = 0, len = presses.length; i < len; i++) {
            $(".pressImg").append('<img id="press' + presses[i].sid + '" src="/static/images/press/' + presses[i].simg +
                '" style="height: 100px; width: 200px; margin-bottom: 10px; margin-right: 5px; object-fit: cover;" />');
        }
        console.log(presses);

        $(".pressImg img").smartMenu(pressMenu, {
            name: "pressMenu"
        });
    })
});

var pressMenu = [
	[{
		text: "删除图片",
		func: function() {
			now = $(this);
			pressId = $(this).attr("id").substring(5);
			$('#delPress').modal('open');
		}
	}]
]

// confirmDelPress

function brandAjax()
{   
    var Data = new FormData();
    Data.append("story_cn", $(".story").val());
    Data.append("story_eng", $(".story_eng").val());

    $.ajax({  
         url: '/setBrand/' ,
         type: 'post',  
         data: Data,  
         cache: false,
         processData: false,
         contentType: false,
         async: false
    }).done(function(res) {
    	if(res == 1) {
            alert("修改成功");
    	location.reload();
        } else {
            alert("修改失败，请重试");
            return;
        }
    }).fail(function(res) {
        alert("修改失败，请重试");
        return;
    });
} 
$(".confirmBrand").click(function(){
	brandAjax();
});

function addPressAjax()
{
    var Data = new FormData();
    Data.append("file", $('#photo')[0].files[0]);
    $.ajax({
         url: '/addMedia/' ,
         type: 'post',
         data: Data,
         cache: false,
         processData: false,
         contentType: false,
         async: false
    }).done(function(res) {
        if(res == 1) {
            alert("添加成功");
    	    location.reload();
        } else {
            alert("添加失败，请重试");
            return;
        }
    }).fail(function(res) {
        alert("添加失败，请重试");
        return;
    });
}

$(".addPress").click(function(){
	addPressAjax();
});

function deletePressAjax()
{
    var Data = new FormData();
    Data.append("id", pressId);
    $.ajax({
         url: '/deleteMedia/' ,
         type: 'post',
         data: Data,
         cache: false,
         processData: false,
         contentType: false,
         async: false
    }).done(function(res) {
        if(res == 1) {
            alert("删除成功");
    	    location.reload();
        } else {
            alert("删除失败，请重试");
            return;
        }
    }).fail(function(res) {
        alert("删除失败，请重试");
        return;
    });
}

$(".confirmDelPress").click(function(){
	deletePressAjax();
});