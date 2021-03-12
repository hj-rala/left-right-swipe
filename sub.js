$(window).load(function(){
	//masonry
	if ($('.gallMasonry').length > 0 ){
		$('.gallMasonry ul').masonry({
			itemSelector: 'li',
			//columnWidth: 150,
		});
	}
});


$(function(){

	$('#gnb ul li:eq(3)').click(function(){
		//alert(1);
	});


	//blenWrap
	var blendVisual = function(){
		var $blendDiv = $('.blenWrap .inBlen > div .box1');
		$blendDiv.each(function(){
			$(this).click(function(){

				if ($(this).parent().is('.open')){
					$(this).parent().removeClass('open');
					$(this).parent().siblings().removeClass('close');
					$(this).children('.icons').removeClass('show');
					$(this).children('.icons').children().children().css('opacity','0');
				} else {
					//icons
					$(this).children('.icons').addClass('show');
					var $icon = $(this).children('.icons').children().children('li').size();
					for (i=0; i<$icon; i++ ){
						$('.show ul li:eq(' + i + ')').delay(400).delay(i*300).animate({'opacity':'1'});
					}
					$blendDiv.parent().addClass('close');
					$(this).parent().addClass('open');
					$(this).parent().removeClass('close');
					if ($(this).parent().siblings().is('.hover')){
						$(this).parent().siblings().removeClass('hover')
					}
				}
				$(this).siblings('.arrow').each(function(){
					$(this).bind('click', function(){
						$blendDiv.parent().removeClass('open close');
						$(this).siblings().children('.icons').removeClass('show');
						$(this).siblings().children('.icons').children().children().css('opacity','0');
					});
				});

			});
			$(this).bind('hover', function(){
				$blendDiv.parent().removeClass('hover');
				$(this).parent().addClass('hover');
			});
			
		});
	}
	blendVisual();

	


	

	
	


	//character show
	var moveicon = function(a){
		var target = a;
		a.animate({'margin-bottom' : '-10px'},"slow").animate({'margin-bottom' : '0'},"slow", function() { moveicon(target); });
	}
	var totalNum = $('.schShow ul').children().size();
	for (i=0;i< totalNum;i++ ){
		$('.schShow ul li:eq('+ i +')').delay(i*240).animate({'opacity':'1'},1600,'easeInOutQuint');
		moveicon($('.schShow ul li:eq('+ i +')'));
	}
	$('.simbol').delay(300).animate({'opacity':'1'},1600,'easeInOutQuint');


	//circle
	$('.studyWrap .circle').waypoint(function() {
			$('.circle').addClass('on');
	}, { offset: '60%' });



	// select box
	$.fn.extend({
		searchStyle : function(options) {
			this.each(function() {
				var currentSelected = $(this).find(':selected');
				$(this).after('<span class="searchStyleSelectBox"><span class="searchStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
				var selectBoxSpan = $(this).next();
				var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left'));   
				var selectBoxSpanInner = selectBoxSpan.find(':first-child');
				selectBoxSpan.css({display:'inline-block'});
				selectBoxSpanInner.css({width:selectBoxWidth, display:'inline'});
				var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
				var selectWidth = $(this).siblings(".searchStyleSelectBox").width();
				$(this).css('width',selectWidth+'px');
				$(this).height(selectBoxHeight).change(function(){
					selectBoxSpanInner.text($(this).find(':selected').text()).parent().addClass('changed');
				});
			});
		}
	}); $('.select').searchStyle();

});