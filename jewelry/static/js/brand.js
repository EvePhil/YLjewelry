var self={"intro":"个人简历","exper":"获奖经济"};

// function getFileUrl(sourceId) {
//     var url;
//     if (navigator.userAgent.indexOf("MSIE")>=1) { // IE
//         url = document.getElementById(sourceId).value;
//     } else if(navigator.userAgent.indexOf("Firefox")>0) { // Firefox
//         url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
//     } else if(navigator.userAgent.indexOf("Chrome")>0) { // Chrome
//         url = window.URL.createObjectURL(document.getElementById(sourceId).files.item(0));
//     }
//     return url;
// }
// function preImg(sourceId, targetId) {
//     var url = getFileUrl(sourceId);
//     var imgPre = document.getElementById(targetId);
//     imgPre.src = url;
// }
// $(".photo").change(function(){
// 	preImg('photo', 'previewImg');
// });
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
    	if(res === 1) {
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
        if(res === 1) {
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