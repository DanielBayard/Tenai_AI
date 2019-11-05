

//  headerscroll förminskning
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header_scroll").addClass("scrolled");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header_scroll").removeClass("scrolled");
        }
    });
});


// deopdownMeny
function dropDown() {
    var x = document.getElementById("myLinks");
    
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    } 
  }
  
//   göm när klicka utanför menyn
  $(document).click(function(event) { 
    $target = $(event.target);
    if(!$target.closest('.topnav').length && 
    $('#myLinks').is(":visible")) {
      $('#myLinks').hide();
    }        
  });



 
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];
window.onload = function(){
btn.onclick = function() {
 modal.style.display = "block";
}

span.onclick = function() {
 modal.style.display = "none";
}

window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}
}


document.addEventListener("DOMContentLoaded", function() {
  var lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.srcset = lazyImage.dataset.srcset;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(function(lazyImage) {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    // Possibly fall back to a more compatible method here
  }
});