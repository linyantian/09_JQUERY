(()=>{
	var $bannerImgs=$("[data-load=bannerImgs]"),
	n=0,LIWIDTH=1020;TRANS=300,INTERVAL=2000,timer=null;

	function moveOnce(){
		n++;
		var left=LIWIDTH*n;
		$bannerImgs.css("left",-left);
		if(n==2){
			setTimeout(()=>{
				$bannerImgs.css({"transition":"","left":0});//去除动画,并将n重置为0
				n=0;
				console.log($bannerImgs);
				console.log($bannerImgs.css("transition"));
				setTimeout(()=>{
					$bannerImgs.css("transition", "all ."+TRANS/100+"s linear");//n重置后再增加切换动画
				},100);
			},TRANS);
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
//		for(let i=0;i<$bannerInds.children().length;i++){
//			$bannerInds.find("li").eq(i).click(function(){
//				n=i;
//				var left=-n*LIWIDTH;
//				$bannerImgs.css("left",left);
//				console.log(left);
//				$bannerInds.find(".hover").removeClass("hover");
//				$bannerInds.find("li").eq(n).addClass("hover");
//			})
//		}

	})
  
})();
//热卖商品
(()=>{
	ajax("get","data/products/hotsale.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			html+=`
				<div class="product-p1">
					<img src="${data[i].pic}">
					<h4>${data[i].title}</h4>
					<h5>${data[i].subtitle}</h5>
					<h6>${data[i].price}</h6>
				</div>`
		}
		$('.hotsale>div')[0].innerHTML=html;
	});
})();
//产品系列
(()=>{
	ajax("get","data/products/series.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			if(i<3){
				html+=`
					<div>
				  <img src="${data[i].pic}">
					<h1>${data[i].title}</h1>
					<h3>${data[i].price}</h3>
					<a href="#" id="atop">${data[i].gobuy}</a>
				</div>`
			}
		}
		$('.p1')[0].innerHTML=`<h1>超短焦投触一体机</h1>
				<img src="img/products/product-p1-title.jpg">`+html;
	});
})();
(()=>{
	ajax("get","data/products/series.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			if(i>2 && i<7){
				html+=`
					<div>
				  <img src="${data[i].pic}">
					<h1>${data[i].title}</h1>
					<h3>${data[i].price}</h3>
					<a href="#" id="atop">${data[i].gobuy}</a>
				</div>`
			}
		}
		$('.w10')[0].innerHTML=`<h1>便携式移动投影</h1>
				<img src="img/products/product-w10-title.jpg">`+html;
	});
})();
(()=>{
	ajax("get","data/products/series.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			if(i>=7 && i<11){
				html+=`
					<div>
				  <img src="${data[i].pic}">
					<h1>${data[i].title}</h1>
					<h3>${data[i].price}</h3>
					<a href="#" id="atop">${data[i].gobuy}</a>
				</div>`
			}
		}
		$('.v10')[0].innerHTML=` <h1>平板笔记本电脑</h1>
				<img src="img/products/product-v10-title.jpg">`+html;
	});
})();
(()=>{
	ajax("get","data/products/series.php")
	.then(data=>{
		for(var i=0,html="";i<data.length;i++){
			if(i>=11){
				html+=`
					<div>
				  <img src="${data[i].pic}">
					<h1>${data[i].title}</h1>
					<h3>${data[i].price}</h3>
					<a href="#" id="atop">${data[i].gobuy}</a>
				</div>`
			}
		}
		$('.a1')[0].innerHTML=` <h1>激光高清投影机</h1>
				<img src="img/products/product-laser-title.jpg">`+html;
	});
})();


//二维码的显示隐藏
$("[data-load=ewm]").parent().mouseover(function(){
	$(this).children().last().css("display","block");
}).mouseout(function(){
	$(this).children().last().css("display","none");
})