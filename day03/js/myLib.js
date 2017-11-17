if(typeof jQuery!="function")
  throw new Error("myLib依赖于jQuery,必须提前引入jQuery.js");
else
  $.fn.sum=function(){
	  //this->$("ul>li")
		var sum=0;
		this.each((i,elem)=>{
		  sum+=parseFloat($(elem).text().match(/[0-9.]+/)[0]);
		});
		return sum;
	}