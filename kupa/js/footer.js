(()=>{
	ajax("get","footer.html")
	.then(html=>{
		$("#footer")[0].innerHTML=html;
		document.head.innerHTML=
			document.head.innerHTML+
				'<link rel="stylesheet" href="css/footer.css"><script src="js/ewm.js"></script>';
	})
})();

