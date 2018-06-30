window.onload = function () {
	var pageWidth;
	var pageHeight;
	//获取视口的大小
	function getWindowSize() {
		pageWidth = window.innerWidth;
		pageHeight = window.innerHeight;
		if (typeof pageWidth != "number") {
			//兼容 (标准模式)
			if (document.compatMode == "CSS1Compat") {
				pageWidth = document.documentElement.clientWidth;
				pageHeight = document.documentElement.clientHeight;
				//混杂模式；
			} else {
				pageWidth = document.body.clientWidth;
				pageHeight = document.body.clientHeight;
			}
		}
	}
	getWindowSize();
	document.documentElement.style.fontSize = pageWidth / 100 + "px";
	//当窗口大小发生变化的时
	window.onresize = function () {
		getWindowSize();
		document.documentElement.style.fontSize = pageWidth / 100 + "px";
	}
}
//黄瑞琪：可以考虑进去dpr,有的手机dpr是2有的是3不统一直接根据dpr在此基础上改fontSize
	// (function (doc, win) {
	// 	var dpr = window.devicePixelRatio || 1;
	// 	if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {  //判断iPhone|iPad|iPod|iOS
	// 		var dpr = window.devicePixelRatio * 1.2 || 1;
	// 	} else if (/(Android)/i.test(navigator.userAgent)) {   //判断Android,安卓默认浏览器都为1
	// 		var dpr = 1;
	// 	} else {  //pc
	// 		var dpr = 1;
	// 	};
	// 	var docEl = document.getElementsByTagName('html')[0],
	// 		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	// 		recalc = function () {
	// 			var clientWidth = docEl.clientWidth
	// 			if (!clientWidth) return
	// 			docEl.style.fontSize = dpr * 16 * (clientWidth / 1920) + 'px'//根据PC的1920的分辨率来改16px的根fontsize更为准确，并且再次加上dpr的动态改变使得其更加精准
	// 		}
	// 	if (!doc.addEventListener) return
	// 	win.addEventListener(resizeEvt, recalc, false)
	// 	doc.addEventListener('DOMContentLoaded', recalc, false)
	// })(document, window)


	//胡浩    事件监听的兼容性写法
    // var addEvent=function(elements,type,callback){
 	//   if(elements.addEventListener){
 	//        elements.addEventListener(elements,type,false)
 	//    }else if(elements.attachEvent){
 	//        elements.attachEvent("on"+type,callback)
 	//    };
 	// };


	// win.addEventListener("resizeEvt", function() {
	// 	clearTimeout(tid); //防止执行两次
	// 	tid = setTimeout(recalc, 200);
	// }, false);

	// 防止有些未知bug。load之后再调用一次。
	// window.addEventListener( 'load' , recalc , false ); 
	

	// 	防止某些机型怪异现象，异步再调用一次
	// setTimeout(function(){
	// 	recalc(); 
	// },200)
	


	//赵骏华
	//该如何考虑到达一定宽度时，是否改变进行访问页面方式，是pc端还是手机端？
	//在pc端中谷歌浏览器的最小字体是12px,而其他浏览器却不是，该如何解决？
	// window.onresize = function () {
	// 		getWindowSize();
	// 		//当页面宽度到达一定值是，是否考虑已经不是手机端，而是pc端，是否计算方法也就不同？
	// 				if(pageWidth > 640) {
	// 						pageWidth = 640;
	// 						document.documentElement.style.fontSize = pageWidth / 6.4 + "px";
	// 						}		
	// 				else{		
	// 					document.documentElement.style.fontSize = pageWidth / 100 + "px";
	// 				}
	// 	}




