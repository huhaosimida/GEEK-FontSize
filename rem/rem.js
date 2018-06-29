
(function(pwidth,prem){

	var pwidth = pwidth || 640;		//设计图默认为640px
	var prem = prem || 100;			//换算比例默认为100 1rem = 100px


	//获取视口的大小
	function getWindowSize(){
		var pageWidth =documentument.documentElement.clientWidth||document.body.clientWidth;
		var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
		//根据不同设计图大小换算单位,pwidth:设计图大小，prem 换算比例即：1rem = prem px
	    document.documentElement.style.fontSize = pageWidth/pwidth*prem + "px";

	    if(!dpr || !scale){
	    	var isIPhone = window.navigator.appVersion.match(/iPhone/ig);
	    	var isAndorid = window.navigator.appVersion.match(/Android/gi);
	    	var devicePixelRatio = window.devicePixelRatio;
	    	var scale;
	    	if(isIPhone){
	  		//ios,对于2,3屏幕用2倍，其余用1倍
		  		if(devicePixelRatio >= 3 &&(!dpr || dpr >=3)){
		  			dpr = 3;
		  		}else if(devicePixelRatio >= 2 && (!dpr || dpr >=3)){
		  			dpr = 2;
		  		}else{
		  			dpr = 1;
		  		}
		  	}else{
		  		//其他设备
		  		dpr = 1;
		  	}
		  	scale = 1/dpr;
	    }

	    //动态改写meta标签，viewport的scale根据devicePixelRatio动态设置 保证页面的大小与设计稿保持一致
		  var metaEl =document.querySelector('meta[name="viewport"]');
		  if (!metaEl) {
		    metaEl =document.createElement('meta');
		    metaEl.setAttribute('name', 'viewport');
		   document.head.appendChild(metaEl);
		  }
		  metaEl.setAttribute('content', `width=device-width,user-scalable=no,initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale}`);
	}

	//当窗口大小发生变化的时,手机横竖屏切换
	window.addEventListener('resizeEvt',getWindowSize,false);

})(640,100);









