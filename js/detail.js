urlDetail="../json/detail.json";
urlItem="../json/detailItem.html";
urlSignedNumber="../json/signedNumber.json";
$(document).ready(function(){
	ajaxContact();
	htmlContact();
	signedNumberContact();
});
function ajaxContact(){
	$.ajax({
		url:urlDetail ,
		type: "GET",
		dataType: "json",
		// data:{id:11},
		success:function(data){
			//console.log(data);
			var topImg=data.data.topImg;
			var title=data.data.title;
			var startActivityTime=data.data.startActivityTime;
			var endActivityTime=data.data.endActivityTime;
			var endSignTime=data.data.endSignTime;
			var limitNumber=data.data.limitNumber;
			var address=data.data.address;
			makeTopImg(topImg);
			makeTitle(title);
			makeSign(limitNumber);
			makeActivityTime(startActivityTime,endActivityTime);
			makeEndSign(endSignTime);
			makeAddress(address);

		},
		error:function(error){
			console.log(error);
			alert("获取活动基本信息false");
		}
	
	});	
}
function makeTopImg(topImg){
	var TopPicture=document.getElementById("topPicture");
	var strHtml='<img src='+topImg+' alt="稍等片刻">';
	TopPicture.innerHTML=strHtml;
}
function makeTitle(title){
	var Title=document.getElementById("title");
	var strHtml=title;
	Title.innerHTML=strHtml;
}
function makeSign(limitNumber){
	var LimitNumber=document.getElementById("limitNumber");
	var strHtml=limitNumber;
	LimitNumber.innerHTML=strHtml;
}
function makeActivityTime(startActivityTime,endActivityTime){
	var StartTime=document.getElementById("startTime");
	var strHtml=startActivityTime+' - '+endActivityTime;
	StartTime.innerHTML=strHtml;
}
// 报名截止日期
function makeEndSign(endSignTime){
	var EndSignTime=document.getElementById("endSignTime");
	var strHtml=endSignTime;
	EndSignTime.innerHTML=strHtml;
}
function makeAddress(address){
	var Address=document.getElementById("address");
	var strHtml=address;
	Address.append(strHtml);
}
function htmlContact(){
	$.ajax({
		url: urlItem,
		type: "GET",
		dataType: "html",
		success:function(data){
			makeDetailItem(data);
		},
		error:function(error){
			console.log(error);
			alert("获取活动详细信息出错");
		}
	});
}
// 活动详情
function makeDetailItem(data){
	var DetailItem=document.getElementById("detailItem");
	DetailItem.innerHTML=data;
}
function signedNumberContact(){
	$.ajax({
		url:urlSignedNumber,
		type:"GET",
		dataType:"json",
		success:function(data){
			var signedNumber=data.data.signedNumber;
			makeSignedNumber(signedNumber);
		},
		error:function(error) {
			console.log("报名人数出错");
			console.log(error);
			alert("报名人数出错");

		}
	});
}
function makeSignedNumber(signedNumber){
	var SignedNumber=document.getElementById("signedNumber");
	SignedNumber.innerHTML=signedNumber;
}