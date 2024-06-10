

const tooltips = document.querySelectorAll('.tt')
    tooltips.forEach(t => {
      new bootstrap.Tooltip(t)
    })















// ----------------------------------------------------------------------


// Enable hidden nav bar
// {
//     const nav = document.querySelector("#navbar");
//     let lastScrollY = window.scrollY;
  
//     window.addEventListener("scroll", () => {
//       if (lastScrollY < window.scrollY) {
//         // nav.classList.add("nav--hidden");
//         console.log("we are going down");
//       } else {
//         // nav.classList.remove("nav--hidden");
//         console.log("we are going up");
//       }
  
//       lastScrollY = window.scrollY;
//     });
//   }
  

// ---------------------------------------------------------------------------------


// var hideScroll = window.pageYOffset;

//   window.onscroll = function() {
//     var currentScrollPos = window.pageYOffset;
      
//       if (hideScroll > window.pageYOffset) {
//         document.getElementById("navbar").style.top = "0";
//       } else {
//         document.getElementById("navbar").style.top = "-50px";
//       }

//     hideScroll = currentScrollPos;
//   }

