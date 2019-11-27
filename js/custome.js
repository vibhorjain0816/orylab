  // welcome model box start
$(document).ready(function(){
		$("#myModal1").modal('show');
});
// welcome model box end

// sticky navbar start
$(document).ready(function(){
	window.onscroll = function() {myFunction()};

	var header = document.getElementById("myHeader");
	var sticky = header.offsetTop;

	function myFunction() {
	  if (window.pageYOffset > sticky) {
	    header.classList.add("sticky");
	  } else {
	    header.classList.remove("sticky");
	  }
	}
});
// sticky navbar end


// signup model start
function checkotp(){
	var otptext = document.getElementById('otp').value;
	var hide_show_section = document.getElementById('hide-show-section');
	if (otptext.length == 4) {
		hide_show_section.style.display = "block";
		document.getElementById('otp_error').innerHTML = "";
	}
	else{
		hide_show_section.style.display = "none";
		document.getElementById('otp_error').innerHTML = "Wrong OTP";
	}

}
// signup model end

// about sidebar start
$(document).ready(function(){
			window.onscroll = function() {myFunction()};

			var header = document.getElementById("myHeader");
			var sticky = header.offsetTop;

			function myFunction() {
			  if (window.pageYOffset > sticky) {
			    header.classList.add("sticky");
			  } else {
			    header.classList.remove("sticky");
			  }
			}
		});

		$( document ).ready(function() {
		  $(function() {

    var $window = $(window);
    var lastScrollTop = $window.scrollTop();
    var wasScrollingDown = true;

    var $sidebar = $("#sidebar");
    if ($sidebar.length > 0) {

        var initialSidebarTop = $sidebar.position().top;

        $window.scroll(function(event) {

            var windowHeight = $window.height();
            var sidebarHeight = $sidebar.outerHeight();

            var scrollTop = $window.scrollTop();
            var scrollBottom = scrollTop + windowHeight;

            var sidebarTop = $sidebar.position().top;
            var sidebarBottom = sidebarTop + sidebarHeight;

            var heightDelta = Math.abs(windowHeight - sidebarHeight);
            var scrollDelta = lastScrollTop - scrollTop;

            var isScrollingDown = (scrollTop > lastScrollTop);
            var isWindowLarger = (windowHeight > sidebarHeight);

            if ((isWindowLarger && scrollTop > initialSidebarTop) || (!isWindowLarger && scrollTop > initialSidebarTop + heightDelta)) {
                $sidebar.addClass('fixed');
            } else if (!isScrollingDown && scrollTop <= initialSidebarTop) {
                $sidebar.removeClass('fixed');
            }

            var dragBottomDown = (sidebarBottom <= scrollBottom && isScrollingDown);
            var dragTopUp = (sidebarTop >= scrollTop && !isScrollingDown);

            if (dragBottomDown) {
                if (isWindowLarger) {
                    $sidebar.css('top', 0);
                } else {
                    $sidebar.css('top', -heightDelta);
                }
            } else if (dragTopUp) {
                $sidebar.css('top', 0);
            } else if ($sidebar.hasClass('fixed')) {
                var currentTop = parseInt($sidebar.css('top'), 100);
                
                var minTop = -heightDelta;
                var scrolledTop = currentTop + scrollDelta;
                
                var isPageAtBottom = (scrollTop + windowHeight >= $(document).height());
                var newTop = (isPageAtBottom) ? minTop : scrolledTop;
                
                $sidebar.css('top', newTop);
            }

            lastScrollTop = scrollTop;
            wasScrollingDown = isScrollingDown;
        });
    }
});
		});
// about sidebar end

// hide show password start
$(document).ready(function(){

    $(".toggle-password").click(function() {

  $(this).toggleClass("fa-eye-slash fa-eye");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
});
// hide show password end

// debug source code start
//   document.onkeydown = function(e) {
//     if(e.keyCode == 123) {
//      return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
//      return false;
//     }
//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
//      return false;
//     }
//     if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
//      return false;
//     }

//     if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
//      return false;
//     }      
//  }

// document.addEventListener('keydown', function() {
//   if (event.keyCode == 123) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   } else if (event.ctrlKey && event.keyCode == 85) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     return false;
//   }
// }, false);

// if (document.addEventListener) {
//   document.addEventListener('contextmenu', function(e) {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     e.preventDefault();
//   }, false);
// } else {
//   document.attachEvent('oncontextmenu', function() {
//     alert("This function has been disabled to prevent you from stealing my code!");
//     window.event.returnValue = false;
//   });
// }

// debug source code end

$('input').on('focusin', function() {
  $(this).parent().find('label').addClass('active');
});

$('input').on('focusout', function() {
  if (!this.value) {
    $(this).parent().find('label').removeClass('active');
  }
});


