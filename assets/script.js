var totalH = document.body.scrollHeight || document.documentElement.scrollHeight
var clientH = window.innerHeight || document.documentElement.clientHeight
window.addEventListener('scroll', function(e){
    var validH = totalH - clientH
    var scrollH = document.body.scrollTop || document.documentElement.scrollTop
    var result = (scrollH/validH*100).toFixed(2)
    if (40 < result) {
		document.getElementById("beijing").classList.add("fixed");
		document.getElementById("fengmian").classList.add("blur");
	}else{
	    document.getElementById("beijing").classList.remove("fixed");
		document.getElementById("fengmian").classList.remove("blur");
	}
})