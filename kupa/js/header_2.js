(()=>{
	ajax("get","header_2.html")
	.then(html=>{
		$("#header")[0].innerHTML=html;
		document.head.innerHTML=
			document.head.innerHTML+
				'<link rel="stylesheet" href="css/header_2.css">';
	})
})();