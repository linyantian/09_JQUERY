(()=>{
	ajax("get","footer_2.html")
	.then(html=>{
		$("#footer")[0].innerHTML=html;
		document.head.innerHTML=
			document.head.innerHTML+
				'<link rel="stylesheet" href="css/footer_2.css">';
	})
})();