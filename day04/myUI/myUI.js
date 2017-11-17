if(typeof jQuery!="function")
  throw new Error("myUI插件库依赖于jQuery，必须先引入jquery.js");
else{
 /*
  $.fn.dropdown=function(){
    //this->$("#my-dropdown")
    //自动侵入class
    this.addClass("dropdown")
        .children().first()
          .addClass("dropdown-btn")
          .attr("data-trigger","dropdown")
        .next()
          .addClass("dropdown-menu fade")
        .children().addClass("item");
    //为元素添加行为
    this.hover(()=>{
      this.children("[data-trigger=dropdown]+*")
          .toggleClass("in")
    });
  }
 */
  /***dropdown***/
  $("[data-trigger=dropdown]").parent().hover(
    function(){
      //this->父元素div->DOM
      var $parent=$(this);
      $parent.children("[data-trigger=dropdown]+*")
        .toggleClass("in")
    } 
  );
	/***accordion***/
	$("[data-trigger=accordion]").parent().on("click","[data-trigger=accordion]",e=>
      $(e.target).next().toggleClass("in")
        .siblings("[data-trigger=accordion]+*").removeClass("in")
    );
}