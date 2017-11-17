//首页轮播
(()=>{
	var $bannerImgs=$("[data-load=bannerImgs]"),
	$bannerInds=$("[data-load=bannerInds]"),n=0,LIWIDTH=1904,TRANS=300,INTERVAL=3000,timer=null;

	function moveOnce(){
		n++;
		var left=LIWIDTH*n;
		$bannerImgs.css("left",-left);
		$bannerInds.find("li").eq(n-1).removeClass("hover");
		if(n==3){
			$bannerInds.find("li").eq(0).addClass("hover");//获得bannerInds下第一个子元素li,并增加class:hover

			setTimeout(()=>{
				$bannerImgs.css({"transition":"","left":0});//去除动画,并将n重置为0
				n=0;
				console.log($bannerImgs);
				console.log($bannerImgs.css("transition"));
				setTimeout(()=>{
					$bannerImgs.css("transition", "all ."+TRANS/100+"s linear");//n重置后再增加切换动画
				},100);
			},TRANS);

		}else{
			$bannerInds.find("li").eq(n).addClass("hover");
		}
	}
	timer=setInterval(moveOnce,TRANS+INTERVAL)
	return new Promise(resolve=>resolve(moveOnce))
	.then((moveOnce)=>{
		$bannerImgs.parent().mouseover(()=>{
			clearInterval(timer);
			timer=null;
		})
		$bannerImgs.parent().mouseout(()=>{
			timer=setInterval(moveOnce,INTERVAL+TRANS);
		})
		for(let i=0;i<$bannerInds.children().length;i++){
			$bannerInds.find("li").eq(i).click(function(){
				n=i;
				var left=-n*LIWIDTH;
				$bannerImgs.css("left",left);
				console.log(left);
				$bannerInds.find(".hover").removeClass("hover");
				$bannerInds.find("li").eq(n).addClass("hover");
			})
		}

	})
})();
//首页视频设备部分
(()=>{
  ajax("get","data/index/floor.php")
	.then(data=>{
	  for(var i=0,html="";i<data.length;i++){
		  html+=`
				<div data-load="img">
				<img src="${data[i].pic}">
				<div>
				  <p>${data[i].title}</p>
					<a href="${data[i].href}">前往购买</a>
				</div>
			</div>`
		}
		$('.video')[0].innerHTML=html;
		//div的透明度变化
		$("[data-load=img]").mouseover(function(){
			$(this).children().last().css("opacity",0.8)
		}).mouseout(function(){
			$(this).children().last().css("opacity",0)
		})
	});
})();
//首页新闻
(()=>{
  ajax("get","data/index/news.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			html+=`
				<div>
					<a href="${data[i].href}"><img src="${data[i].pic}"></a>
					<h3><a href="${data[i].href}">${data[i].title}</a></h3>
				</div>`
		}
		$('.news-content')[0].innerHTML=html;
	});
})();
//首页品质保证
(()=>{
  ajax("get","data/index/quality.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			html+=`
				<div>
				<img src="${data[i].pic}">
				<span>${data[i].title}</span>
			</div>`
		}
		$('.quality')[0].innerHTML=html;
	})
})();



//二维码的显示隐藏
$("[data-load=ewm]").parent().mouseover(function(){
	$(this).children().last().css("display","block");
}).mouseout(function(){
	$(this).children().last().css("display","none");
})
