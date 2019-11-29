$(function(){
	$('#dowebok').fullpage({
		afterLoad: function(anchorLink, index) {
			if(index==0){
				$(".circle-chart__circle").css('animation','')
			}
			if(index==1){
				$(".circle-chart__circle").css('animation','circle-chart-fill 2s reverse')
			}
			if(index==2){
				$(".circle-chart__circle").css('animation','')
			}
		}
	})
})