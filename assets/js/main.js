!function(e){"use strict";var i,o,n,t,a,s,r,c,l,d,f=800,u=e(window);u.on("load",function(){e("#loader").fadeOut("slow",function(){e("#preloader").delay(300).fadeOut("slow")})}),e("pre").addClass("prettyprint"),e(document).ready(function(){prettyPrint()}),e(".alert-box").on("click",".close",function(){e(this).parent().fadeOut(500)}),e("ul.sf-menu").superfish({animation:{height:"show"},animationOut:{height:"hide"},cssArrows:!1,delay:600}),i=e(".menu-toggle"),o=e(".main-navigation"),i.on("click",function(e){e.preventDefault(),i.toggleClass("is-clicked"),o.slideToggle()}),i.is(":visible")&&o.addClass("mobile"),u.resize(function(){i.is(":visible")?o.addClass("mobile"):o.removeClass("mobile")}),e("#main-nav-wrap li a").on("click",function(){o.hasClass("mobile")&&(i.toggleClass("is-clicked"),o.fadeOut())}),n=e(".search-wrap"),t=n.find(".search-field"),a=e("#close-search"),s=e(".search-trigger"),r=e("body"),s.on("click",function(i){i.preventDefault(),i.stopPropagation(),e(this),r.addClass("search-visible"),setTimeout(function(){e(".search-wrap").find(".search-field").focus()},100)}),a.on("click",function(){e(this),r.hasClass("search-visible")&&(r.removeClass("search-visible"),setTimeout(function(){e(".search-wrap").find(".search-field").blur()},100))}),n.on("click",function(i){e(i.target).is(".search-field")||a.trigger("click")}),t.on("click",function(e){e.stopPropagation()}),t.attr({placeholder:"Type Your Keywords",autocomplete:"off"}),(c=e(".bricks-wrapper")).imagesLoaded(function(){c.masonry({itemSelector:".entry",columnWidth:".grid-sizer",percentPosition:!0,resize:!0})}),l=e(".animate-this"),u.on("load",function(){setTimeout(function(){l.each(function(i){var o=e(this);setTimeout(function(){o.addClass("animated fadeInUp")},200*i)})},200)}),u.on("resize",function(){l.removeClass("animate-this animated fadeInUp")}),u.on("load",function(){e("#featured-post-slider").flexslider({namespace:"flex-",controlsContainer:"",animation:"fade",controlNav:!1,directionNav:!0,smoothHeight:!1,slideshowSpeed:7e3,animationSpeed:600,randomize:!1,touch:!0}),e(".post-slider").flexslider({namespace:"flex-",controlsContainer:"",animation:"fade",controlNav:!0,directionNav:!1,smoothHeight:!1,slideshowSpeed:7e3,animationSpeed:600,randomize:!1,touch:!0,start:function(i){"object"==typeof i.container&&i.container.on("click",function(e){i.animating||i.flexAnimate(i.getTarget("next"))}),e(".bricks-wrapper").masonry("layout")}})}),e(".smoothscroll").on("click",function(i){var o=this.hash,n=e(o);i.preventDefault(),i.stopPropagation(),e("html, body").stop().animate({scrollTop:n.offset().top},f,"swing").promise().done(function(){e("body").hasClass("menu-is-open")&&e("#header-menu-trigger").trigger("click"),window.location.hash=o})}),d=e("#go-top"),e(window).on("scroll",function(){e(window).scrollTop()>=500?d.fadeIn(400):d.fadeOut(400)})}(jQuery);