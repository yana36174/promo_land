$(document).ready(function() {
	
	// $('input[type=text], textarea').placeholder();
	
	// $(document).on('click', '.enter', function(e){
	// 	e.preventDefault();
	// 	if(!$('.head-auth-form').hasClass('active')){
	// 		$('.head-auth-form').addClass('active');
	// 		$('.head-registration-form').removeClass('active');
	// 	}
	// });

    $(document).on('click', '.enter', function(e){
        e.preventDefault();
        if(!$('.head-registration-form').hasClass('active')){
            $('.head-registration-form').addClass('active');
            $('body').css('overflow', 'hidden')
            $('.head-auth-form').removeClass('active');
        }
	});

	$(document).on('click', 'body', function(e){
		var $this = $( e.target );
		console.log($this.parents('menu_button'))

		if($('header nav').hasClass('opened') && $this.parents('.menu_button').length <= 0){
			// e.preventDefault();
			$('header nav').removeClass('opened');
		}
		
	});

	
	$(document).on('click', '.menu_button', function(e){
        e.preventDefault();
        $('header nav').addClass('opened');
    });
	
	// $(document).on('click', 'body', function(e){

	// 	var $this = $( e.target );
	// 	if(($('.head-auth-form').hasClass('active') || $('.head-registration-form').hasClass('active')) && $this.parents('.header-top-line').length <= 0 && $this.parents('.top-personal').length <= 0 && !$this.hasClass('head-auth-form') && !$this.hasClass('personal-cuponAdd-link') && !$this.hasClass('participate-head-link') && $this.parents('.bot-menu').length <= 0){
	// 		e.preventDefault();
	// 		$('.head-auth-form, .head-registration-form').removeClass('active');
	// 	}
		
	// });
	
	$('input[name=PHONE]').mask('+7(999) 999 99-99');

	
	$(document).on('click', '.hf-close', function(e){
		e.preventDefault();
		
		if($('.head-auth-form').hasClass('active')){
			$('.head-auth-form').removeClass('active');
		}

		if($('.head-registration-form').hasClass('active')){
			$('.head-registration-form').removeClass('active');
        }
        $('body').css('overflow', 'auto')
		
	});
	
	// function fullMainPage(){
	// 	var windowWidth = $(window).width();
	// 	if(windowWidth > 1365){
	// 		$('.header, .content').css('background-size', '100% auto');
	// 	}else{
	// 		$('.header, .content').css('background-size', 'inherit');
	// 	}
	// }
	// $(window).resize(function(){
	// 	fullMainPage();
	// });
	// fullMainPage();
	
	// $(document).on('click', '.personal-tab-link', function(e){
	// 	e.preventDefault();
	// 	$('.personal-tab-link, .personal-tab').removeClass('active');
	// 	var tabRel = $(this).attr('tab-rel');
	// 	console.log(tabRel);
	// 	$(this).addClass('active');
	// 	$('.personal-tab-' + tabRel).addClass('active');
		
	// });
	
	// $(document).on('click', '.head-registration-btn', function(e){
	// 	// e.preventDefault();
		
	// 	var formData = $(this).closest('form').serialize();
		
	// 	$.ajax({
	// 		url: '',
	// 		method: 'post',
	// 		data: formData,
	// 		dataType: 'json',
	// 		success: function(response){
				
	// 			$('.add-cupoin-messaga').removeClass('messaga-error');
	// 			$('.add-cupoin-messaga').removeClass('messaga-success');
	// 			if(response.error){
					
	// 				$('.add-cupoin-messaga').addClass('messaga-error');
	// 				$('.add-cupoin-messaga').html("");
					
	// 				$.each(response.error, function(k, v){
	// 					$('.add-cupoin-messaga').append(v + "<br />");
	// 				})
					
	// 			}
				
	// 			if(response.msgOk){
					
	// 				$('.add-cupoin-messaga').addClass('messaga-success');
	// 				$('.add-cupoin-messaga').html("");
					
	// 				$.each(response.msgOk, function(k, v){
	// 					$('.add-cupoin-messaga').append(v + "<br />");
	// 				});

    //                 dataLayer.push({'event' : 'event-to-counter', 'eventCategory' : 'event', 'eventAction' : 'mm_registration', 'YMeventID' : 'mm_registration'});

    //                 setTimeout(function() {
	// 					//window.location.href = "/personal/";
	// 				}, 2000);
					
	// 			}
				
	// 		}
			
	// 	});
		
	// });
	

  
});
