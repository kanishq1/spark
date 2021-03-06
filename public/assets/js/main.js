/**
 * Template Name: Ninestars - v2.2.0
 * Template URL: https://bootstrapmade.com/ninestars-free-bootstrap-3-theme-for-creative/
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */
!(function ($) {
	"use strict";

	// Smooth scroll for the navigation menu and links with .scrollto classes
	var scrolltoOffset = $("#header").outerHeight() - 1;
	$(document).on("click", ".nav-menu a, .mobile-nav a, .scrollto", function (e) {
		if (
			location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
			location.hostname == this.hostname
		) {
			e.preventDefault();
			var target = $(this.hash);
			if (target.length) {
				// var scrollto = target.offset().top - scrolltoOffset;

				// if ($(this).attr("href") == "#header") {
				// 	scrollto = 0;
				// }

				// $("html, body").animate(
				// 	{
				// 		scrollTop: scrollto,
				// 	},
				// 	1500,
				// 	"easeInOutExpo"
				// );

				if ($(this).parents(".nav-menu, .mobile-nav").length) {
					$(".nav-menu .active, .mobile-nav .active").removeClass("active");
					$(this).closest("li").addClass("active");
				}

				if ($("body").hasClass("mobile-nav-active")) {
					$("body").removeClass("mobile-nav-active");
					$(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
					$(".mobile-nav-overly").fadeOut();
				}
				return false;
			}
		}
	});

	// Activate smooth scroll on page load with hash links in the url
	$(document).ready(function () {
		var textWrapper = document.querySelector(".ml2");
		textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime
			.timeline({ loop: false })
			.add({
				targets: ".ml2 .letter",
				scale: [4, 1],
				opacity: [0, 1],
				translateZ: 0,
				easing: "easeOutExpo",
				duration: 950,
				delay: (el, i) => 70 * i,
			})
			.add({
				targets: ".ml2",
				opacity: 1,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
		var textWrapper1 = document.querySelector(".ml11 .letters");
		textWrapper1.innerHTML = textWrapper1.textContent.replace(
			/([^\x00-\x80]|\w)/g,
			"<span class='letter'>$&</span>"
		);

		anime
			.timeline({ loop: false })
			.add({
				targets: ".ml11 .line",
				scaleY: [0, 1],
				opacity: [0.5, 1],
				easing: "easeOutExpo",
				duration: 700,
				delay: 1000,
			})
			.add({
				targets: ".ml11 .line",
				translateX: [0, document.querySelector(".ml11 .letters").getBoundingClientRect().width + 10],
				easing: "easeOutExpo",
				duration: 700,
				delay: 100,
			})
			.add({
				targets: ".ml11 .letter",
				opacity: [0, 1],
				easing: "easeOutExpo",
				duration: 600,
				offset: "-=775",
				delay: (el, i) => 34 * (i + 1),
			})
			.add({
				targets: ".ml11",
				opacity: 1,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
		anime
			.timeline({ loop: false })
			.add({
				targets: ".ml15 .word",
				scale: [14, 1],
				opacity: [0, 1],
				easing: "easeOutCirc",
				duration: 800,
				delay: 2400,
				// delay: (el, i) => 800 * i,
			})
			.add({
				targets: ".ml15",
				opacity: 1,
				duration: 1000,
				easing: "easeOutExpo",
				delay: 1000,
			});
		// Mobile Navigation

		$(".smoothscroll").on("click", function (e) {
			console.log(e.target.hash);
			if (e.target.hash) {
				var initial_nav = e.target.hash;
				console.log(initial_nav);
				if (initial_nav) {
					var scrollto = $(initial_nav).offset().top - $("#header").outerHeight() - 1;
					console.log(scrollto);
					$("html, body").animate(
						{
							scrollTop: scrollto,
						},
						1500,
						"easeInOutExpo"
					);
				}
			}
		});
	});

	// Navigation active state on scroll
	var nav_sections = $("section");
	var main_nav = $(".nav-menu, .mobile-nav");

	$(window).on("scroll", function () {
		var cur_pos = $(this).scrollTop() + 200;

		nav_sections.each(function () {
			var top = $(this).offset().top,
				bottom = top + $(this).outerHeight();

			if (cur_pos >= top && cur_pos <= bottom) {
				if (cur_pos <= bottom) {
					main_nav.find("li").removeClass("active");
				}
				main_nav
					.find('a[href="/' + $(this).attr("id") + '"]')
					.parent("li")
					.addClass("active");
			}
			if (cur_pos < 300) {
				$(".nav-menu ul:first li:first").addClass("active");
			}
		});
	});

	// Back to top button
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$(".back-to-top").fadeIn("slow");
			$("#header").addClass("header-shadow");
			$(".mobile-nav-toggle").addClass("mobile-nav-shadow");
		} else {
			$(".back-to-top").fadeOut("slow");
			$("#header").removeClass("header-shadow");
			$(".mobile-nav-toggle").removeClass("mobile-nav-shadow");
		}
	});

	$(".back-to-top").click(function () {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			1500,
			"easeInOutExpo"
		);
		return false;
	});

	// Porfolio isotope and filter
	$(window).on("load", function () {
		if (document.getElementsByClassName("nav-menu")[0]) {
			console.log("hey");
			// Mobile Navigation
			if ($(".nav-menu").length === 1) {
				var $mobile_nav = $(".nav-menu").clone().prop({
					class: "mobile-nav d-lg-none",
				});
				$("#root").append($mobile_nav);
				$("#root").prepend(
					'<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>'
				);
				$("#root").append('<div class="mobile-nav-overly"></div>');

				$(document).on("click", ".mobile-nav-toggle", function (e) {
					$("#root").toggleClass("mobile-nav-active");
					$(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
					$(".mobile-nav-overly").toggle();
				});

				$(document).on("click", ".mobile-nav .drop-down > a", function (e) {
					e.preventDefault();
					$(this).next().slideToggle(300);
					$(this).parent().toggleClass("active");
				});

				$(document).click(function (e) {
					var container = $(".mobile-nav, .mobile-nav-toggle");
					if (!container.is(e.target) && container.has(e.target).length === 0) {
						if ($("#root").hasClass("mobile-nav-active")) {
							$("#root").removeClass("mobile-nav-active");
							$(".mobile-nav-toggle i").toggleClass("icofont-navigation-menu icofont-close");
							$(".mobile-nav-overly").fadeOut();
						}
					}
				});
			} else if ($(".mobile-nav, .mobile-nav-toggle").length) {
				$(".mobile-nav, .mobile-nav-toggle").hide();
			}
		}

		var portfolioIsotope = $(".portfolio-container").isotope({
			itemSelector: ".portfolio-item",
			layoutMode: "fitRows",
		});

		$("#portfolio-flters li").on("click", function () {
			$("#portfolio-flters li").removeClass("filter-active");
			$(this).addClass("filter-active");

			portfolioIsotope.isotope({
				filter: $(this).data("filter"),
			});
			aos_init();
		});

		// Initiate venobox (lightbox feature used in portofilo)
		$(document).ready(function () {
			$(".venobox").venobox();
		});
	});

	// Clients carousel (uses the Owl Carousel library)
	$(".clients-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		responsive: {
			0: {
				items: 2,
			},
			768: {
				items: 4,
			},
			900: {
				items: 6,
			},
		},
	});

	// Portfolio details carousel
	$(".portfolio-details-carousel").owlCarousel({
		autoplay: true,
		dots: true,
		loop: true,
		items: 1,
	});

	// Init AOS
	function aos_init() {
		AOS.init({
			duration: 800,
			easing: "ease-in-out",
			once: true,
		});
	}
	$(window).on("load", function () {
		aos_init();
	});
})(jQuery);
