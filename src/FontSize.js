window.onload = function(){
	var pageWidth;
	var pageHeight;
	//获取视口的大小
	function getWindowSize(){
		pageWidth = window.innerWidth;
		pageHeight = window.innerHeight;
		if(typeof pageWidth!="number"){
		//兼容 (标准模式)
			if(document.compatMode == "CSS1Compat"){
				pageWidth = document.documentElement.clientWidth;
				pageHeight = document.documentElement.clientHeight;
		//混杂模式；
			}else{
				pageWidth = document.body.clientWidth;
				pageHeight = document.body.clientHeight;
			}
		}
	}
	getWindowSize();
	document.documentElement.style.fontSize = pageWidth/100+"px";
	//当窗口大小发生变化的时
	window.onresize = function(){
		getWindowSize();
		document.documentElement.style.fontSize = pageWidth/100+"px";
	}
}