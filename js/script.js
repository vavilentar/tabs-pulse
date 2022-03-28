$(document).ready(function(){

$('ul.catalog__tabs').on('click', 'li:not(.active)', function () {
	$(this)
		.addClass('active').siblings().removeClass('active')
		.closest('div.container').find('div.catalog__content').removeClass('active').eq($(this).index()).addClass('active');
});

/* $('.catalog-item__link').each(function (i) {
	$(this).on('click', function (e) {
		e.preventDefault();
		$('.catalog-item__content').eq(i).toggleClass('active');
		$('.catalog-item__list').eq(i).toggleClass('active');
	})
});

$('.catalog-item__back').each(function (i) {
	$(this).on('click', function (e) {
		e.preventDefault();
		$('.catalog-item__content').eq(i).toggleClass('active');
		$('.catalog-item__list').eq(i).toggleClass('active');
	})
}); */

function toggleSlide(item) {

	$(item).each(function (i) {
		$(this).on('click', function (e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('active');
			$('.catalog-item__list').eq(i).toggleClass('active');
		})
	});
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');

//Modal 

$('.modal__close').on('click', function() {
	$('.overlay, #buy').fadeOut('fast');
});

$('.catalog-item__btn').each(function(i) {
	$(this).on('click', function() {
		$('#buy .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
		$('.overlay, #buy').fadeIn('fast');
	});
});

function validateForms(form){
	$(form).validate({
	    rules: {
		   name: {
			  required: true,
			  minlength: 2
		   },
		   phone: "required",
		   email: {
			  required: true,
			  email: true
		   }
	    },
	    messages: {
		   name: {
			  required: "Пожалуйста, введите свое имя",
			  minlength: jQuery.validator.format("Введите {0} символа!")
			},
		   phone: "Пожалуйста, введите свой номер телефона",
		   email: {
			required: "Пожалуйста, введите свою почту",
			email: "Неправильно введен адрес почты"
		   }
	    }
	});
 };

 validateForms('#buy form');


// $('input[name=phone]').mask("+7 (999) 999-99-99");
$('input[name=phone]').mask("+7 (999) 999-99-99");

})