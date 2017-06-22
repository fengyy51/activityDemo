urlList="../json/listActivity.json";
$(document).ready(function(){
	ajaxContact();
});
function ajaxContact(){
	$.ajax({
		url:urlList,
		type:"GET",
		dataType:"json",
		success:function(data){
			var topPicture=data.data.topPicture;			
			var item=data.data.item;
			makeTopPicture(topPicture);
			// makeListItem(item);
			
		},
		error:function(error){
			console.log(error);
			alert("活动列表页报错");
		}
	});
}
function makeTopPicture(topPicture){
	var ul=$('#topPicture');
	var strHtml='';
	for(var i=0;i<topPicture.length;i++){
		strHtml=strHtml+'<li><a href="#" target="_blank"><img src='+topPicture[i]
		+' alt="请等待片刻"></a></li>';
	}
	ul.append(strHtml);	
	var slider=$("div.slider");  
	console.log(slider);
   slider.yxMobileSlider({width:360,height:150,during:3000})

}
// function makeListItem(item){
	
// }
