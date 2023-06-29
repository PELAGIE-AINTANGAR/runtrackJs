window.addEventListener("scroll", function() {
    var bodyHeight = document.body.clientHeight;
    var windowHeight = window.innerHeight;
    var scrollTop = window.scrollY;
    var scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;
  
    var footer = document.querySelector("footer");
    footer.style.backgroundColor = `hsl(${scrollPercentage}, 50%, 50%)`;
  });
  
  