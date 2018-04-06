var numFormat = wNumb({
  thousand: ' ',
  mark: '.',
  decimals: 2
});

$(window).scroll(function () {

  var scrollPos = $(window).scrollTop();

  if (scrollPos > 20) {
    $("header").addClass("header-fixed");
  } else {
    $("header").removeClass("header-fixed");
  }

});

$(document).ready(function () {


  calcCart();

  changeCalc();

  // Header cart

  $(".header-cart-link").on("click",function () {
    $(".cart-popup").fadeIn(250,function () {
      $(".cart-popup").addClass("open");
      $(".header-cart-link").addClass("active");
    });
  });

  $("body").on("click", function (e) {
    if ($(".cart-popup").hasClass("open") && !$(e.target).hasClass("header-cart-link") && !$(e.target).parents().hasClass("header-cart-link")) {
      $(".cart-popup").fadeOut(250,function () {
        $(".cart-popup").removeClass("open");
      $(".header-cart-link").removeClass("active");
      });
    }
  });

  // Cart calc

  $("body").on("change", "#cartTotalSelect, .cart-item .count-input input", function () {
    calcCart();
  });

  // Change calc

  $("#change-calc-in-input, #change-calc-out-input").on("keyup", function () {
    changeCalc();
  });

  $("#change-calc-in, #change-calc-out").on("change", function () {
    changeCalc();
  });
  
  // Catalog count
  
  $("body").on("click", ".count-minus, .count-plus", function () {


    var countBtn = $(this);
    var countInput = $(this).closest(".count").find(".count-input input");
    var countInputVal = countInput.val();


    if (countBtn.hasClass("count-minus") && countInput.val() > 1) {
      countInput.val(countInputVal - 1).change();
    }

    if (countBtn.hasClass("count-plus")) {
      countInput.val(+countInputVal + 1).change();
    }

  });

  // Faq slider

  $(".faq-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    adaptiveHeight: true
  });

  // Catalog

  $(".catalog-slider").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // Mobile menu

  $(".navbar-trigger").click(function () {
    $(this).toggleClass("active");
    $("div.nav").slideToggle(300);
  });

  if ($(".service-pros").length) {

    $(".service-pros").slick({
      slidesToShow:5,
      slidesToScroll:4,
      dots: false,
      responsive: [
        {
          breakpoint: 910,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

  }

  // Expandable

  $(".expandable-trigger").click(function () {
    var exTrigger = $(this);
    if (!exTrigger.hasClass("active")) {
      exTrigger.prev(".expandable").slideDown(500,function () {
        exTrigger.addClass("active");
      });
    } else {
      exTrigger.prev(".expandable").slideUp(500,function () {
        exTrigger.removeClass("active");
      });
    }
  });

  $(".cases-slider").slick({
    slidesToShow:1,
    slidesToScroll:1,
    fade:true,
    dots:false,
    adaptiveHeight: true
  });

  var scrollPos = $(window).scrollTop();

  if (scrollPos > 50) {
    $("header").addClass("header-fixed");
  } else {
    $("header").removeClass("header-fixed");
  }



  // Anchors

  $("a").click(function () {

    if ($("a[name='" + $(this).attr("href").replace("#","") + "']").length) {
      var aTarget = $("a[name='" + $(this).attr("href").replace("#","") + "']");
      $("html,body").animate({
        scrollTop: aTarget.offset().top - 70
      },1000)
    }
  });

  // FAQ

  $(".faq-item-q").click(function () {

    var faqItem = $(this).closest(".faq-item");
    var faqAnswer = faqItem.find(".faq-item-a");

    faqAnswer.slideToggle("500",function () {
      faqItem.toggleClass("active")
    })

  });

  $(".banks-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 4,
    infinite: false,
    responsive: [
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },{
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });

  // More button

  $("body").on("click", ".more-link", function () {

    $(this).addClass("loading");

    link = $(this);

    $.get( $(this).attr("href"), function( data ) {
      link.after( data );
      link.nextAll().hide().fadeIn(500);
      link.remove();
    });

    return false;

  })

  // Anchors

  $(".header-buttons a").click(function () {

    $("html,body").animate({
      scrollTop: $("a[name='" + $(this).attr("href").replace("#","") + "']").offset().top
    },1000)

    return false;
  })

  // Range sliders

  if ($("#calcSliderSum").length) {

    var sumArr = [500000,
      550000,
      600000,
      650000,
      700000,
      750000,
      800000,
      850000,
      900000,
      1000000,
      2000000,
      3000000,
      4000000,
      5000000,
      6000000,
      7000000,
      8000000,
      9000000,
      10000000,
      15000000,
      20000000,
      25000000,
      30000000,
      40000000,
      50000000,
      75000000,
      100000000,
      125000000,
      150000000,
      175000000,
      200000000];

    var calcSumSlider = document.getElementById('calcSliderSum');

    var calcTermSlider = document.getElementById('calcSliderTerm');

    var creditRate = 10.9;

    noUiSlider.create(calcSumSlider, {
      start: 1,
      step: 1,
      tooltips: true,
      connect: [true, false],
      range: {
        'min': 1,
        'max': 31
      }
    });

    noUiSlider.create(calcTermSlider, {
      start: 1,
      step: 1,
      tooltips: true,
      connect: [true, false],
      range: {
        'min': 1,
        'max': 30
      }
    });

    var fz = "40px"

    if ($("#sm-indicator").css("display") == "block") {
      var fz = "36px"
    }

    if ($("#mobile-indicator").css("display") == "block") {
      var fz = "36px"
    }

    calcSumSlider.noUiSlider.on('update', function (values, handle) {
      var sumVal;

      $("#calcSliderSum .noUi-tooltip").html(numFormat.to(sumArr[values[handle] - 1]))

      $("#calcResultRate").html(creditRate);

      var resultPayment = calcCredit(sumArr[calcSumSlider.noUiSlider.get() - 1], creditRate, calcTermSlider.noUiSlider.get());

      if (+resultPayment > 999000) {
        $("#calcResultPayment").css({
          fontSize: "30px"
        });
      } else {
        $("#calcResultPayment").css({
          fontSize: fz
        });
      }

      $("#calcResultPayment").html(numFormat.to(resultPayment));


    });

    calcTermSlider.noUiSlider.on('update', function (values, handle) {

      $("#calcSliderTerm .noUi-tooltip").html(Math.floor(+values[handle]))

      $("#calcResultRate").html(creditRate);

      var resultPayment = calcCredit(sumArr[calcSumSlider.noUiSlider.get() - 1], creditRate, calcTermSlider.noUiSlider.get());

      if (+resultPayment > 999000) {
        $("#calcResultPayment").css({
          fontSize: "30px"
        });
      } else {
        $("#calcResultPayment").css({
          fontSize: fz
        });
      }

      $("#calcResultPayment").html(numFormat.to(resultPayment));

    });

  }

  // Fancybox

  $("a.fancybox").fancybox();

  $(".fancybox-video").fancybox({
    helpers : {
      media : {}
    },
    type: "iframe"
  });

  // Forms

  $('select').selectpicker();


  $('.numeric').bind('keyup paste', function(){
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return $(this).val().match(rgx);
  });

  if ($("input:text").length) {
    $("input:text").each(function() {
      if ($(this).val()) {
        $(this).prev(".placeholder").hide();
      }
    });
  }

  if ($("textarea").length) {
    $("textarea").each(function() {
      if ($(this).val()) {
        $(this).prev(".placeholder").hide();
      }
    });
  }

  $("body").on("focus","input, textarea",function() {
    var el = $(this);

    if (el.parent().find(".placeholder").length) {
      var placeholder = el.parent().find(".placeholder");

      placeholder.hide();

    }

  });

  $("body").on("blur","input, textarea",function() {
    var el = $(this);

    if (el.parent().find(".placeholder").length) {
      var placeholder = el.parent().find(".placeholder");

      if (!el.val() || (el.hasClass("input-phone") && ! /^(?=.*[0-9])[- +()0-9]+$/.test(el.val()))) {
        placeholder.show();
      }

    }

  });

  $("body").on("click",".placeholder",function(e) {
    if ($(this).parent().find("input").length) {
      $(this).parent().find("input").trigger("focus");
    }
    if ($(this).parent().find("textarea").length) {
      $(this).parent().find("textarea").trigger("focus");
    }
  })

  $("input.input-phone").mask("+7 (999) 999-99-99");

  validateForms();

});

// Contacts map

function initMap() {
  if ($("#contactsMap").length) {
    var myLatLng = {lat: 55.767698, lng: 37.602371};
    var myCenter = {lat: 55.767698, lng: 37.602371};

    var map = new google.maps.Map(document.getElementById('contactsMap'), {
      zoom: 16,
      center: myCenter

    });

    var contactsMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'images/map-pin.png'
    });


  }



}

function yearsName(age) {
  var txt;
  count = age % 100;
  if (count >= 5 && count <= 20) {
    txt = 'лет';
  } else {
    count = count % 10;
    if (count == 1) {
      txt = 'год';
    } else if (count >= 2 && count <= 4) {
      txt = 'года';
    } else {
      txt = 'лет';
    }
  }
  return txt;
}

function calcCredit(S,p,n){

  p = +p / 1200;
  n = +n * 12;

  return Math.round(+S * p / (1 - Math.pow(1 + p, -n)));

}

function validateForms() {



  jQuery.validator.addClassRules('phone-email-group', {
    require_from_group: [1, ".phone-email-group"]
  });

  $("form").each(function() {

    form = $(this);

    $(this).validate({
      focusInvalid: false,
      sendForm : false,
      errorPlacement: function(error, element) {
        element.closest(".form-group").addClass("form-group-error");
        if (element[0].tagName == "SELECT") {
          element.parents(".btn-group").addClass("btn-group-error");
          error.insertAfter(element.parents(".btn-group"));
        } else {
          if (element.attr("type") == "checkbox") {
            element.siblings("label").addClass("checkbox-label-error")
          } else {
            error.insertAfter(element);
          }
        }

      },
      unhighlight: function(element, errorClass, validClass) {
        $(element).removeClass(errorClass);
        $(element).closest(".form-group").removeClass("form-group-error");
        if ($(element)[0].tagName == "SELECT") {
          $(element).parents(".btn-group").removeClass("btn-group-error");
          $(element).parents(".btn-group").next("label.error").remove();
        } else {
          $(element).next(".error").remove();
          if ($(element).attr("type") == "checkbox") {
            $(element).siblings("label").removeClass("checkbox-label-error")
          }
        }
      },
      invalidHandler: function(form, validatorcalc) {
        var errors = validatorcalc.numberOfInvalids();
        if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
          //validatorcalc.errorList[0].element.focus();
        }
      }
    });

    if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
      $(this).find("input.password-repeat").rules('add', {
        equalTo: "#"+form.find("input.password").attr("id")
      });
    }

  });

}



jQuery.extend(jQuery.validator.messages, {
  required: "Заполните поле.",
  remote: "Please fix this field.",
  email: "Введите правильный e-mail.",
  url: "Please enter a valid URL.",
  date: "Please enter a valid date.",
  dateISO: "Please enter a valid date (ISO).",
  number: "Please enter a valid number.",
  digits: "Please enter only digits.",
  creditcard: "Please enter a valid credit card number.",
  equalTo: "Пароли не совпадают.",

  accept: "Please enter a value with a valid extension.",
  maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  minlength: jQuery.validator.format("Please enter at least {0} characters."),
  rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});

function formSuccess(form) {
  form[0].reset();
  form.find(".placeholder").show();
  $("#successModal").modal("show");
}

function changeCalc () {

  var changeRateIn = $("#change-calc-in option:selected").data("rate");
  var changeRateOut = $("#change-calc-out option:selected").data("rate");

  var changeRate = changeRateIn / changeRateOut;

  //var inVal = numFormat.to($("#change-calc-in-input").val().replace(/ /g,''));

  //console.log($("#change-calc-in-input").val())

  //$("#change-calc-in-input").val(inVal);

  $("#change-calc-out-input").val(parseFloat($("#change-calc-in-input").val().replace(/ /g,'') * changeRate).toFixed(3))

}

function calcCart() {

  var totalPrice = 0;

  $(".cart-item").each(function () {

    var itemPrice = $(this).data("rate") * $(this).find(".count-input input").val();

    totalPrice += itemPrice;

  });

  var totalCurPrice = totalPrice * $("#cartTotalSelect option:selected").data("rate");

  $("#cartTotalVal").html(numFormat.to(totalCurPrice));

}