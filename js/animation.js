

const sections = document.querySelectorAll(".animateTarget");

const options = {
      root: null,
      threshold: 0,
      rootMargin: "-90px"
};

const observer = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
            if(!entry.isIntersecting){
                  return
            }
            entry.target.classList.add('showAnimation');
            observer.unobserve(entry.target);
      });
}, options);

sections.forEach(section => {
      observer.observe(section);
});

// ------------------------------------------------------------ //

const sectionsText = document.querySelectorAll(".textHighlight");

const observerText = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
            if(!entry.isIntersecting){
                  return
            }
            entry.target.classList.add('textHighlightAnimation');
            observer.unobserve(entry.target);
      });
}, options);

sectionsText.forEach(section => {
      observerText.observe(section);
});

// ------------------------------------------------------------ //

const sectionsY = document.querySelectorAll(".animateTargetY");

const observerY = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
            if(!entry.isIntersecting){
                  return
            }
            entry.target.classList.add('showAnimation');
            observer.unobserve(entry.target);
      });
}, options);

sectionsY.forEach(section => {
      observer.observe(section);
});

// ------------------------------------------------------------ //


const b2bImg = document.querySelectorAll(".b2bImage");

const b2bOptions = {
      root: null,
      threshold: 0.5,
      rootMargin: "0px"
};

const b2bObserver = new IntersectionObserver(function(entries, observer){
      entries.forEach(entry => {
            if(!entry.isIntersecting){
                  return
            }
            entry.target.classList.add('showAnimation');
            observer.unobserve(entry.target);
      });
}, b2bOptions);

b2bImg.forEach(section => {
      b2bObserver.observe(section);
});

// ------------------------------------------------------------ //

anime({
      targets: 'img.mainImage',
      translateX: [50, 0],
      backgroundColor: '#FFF',
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 3000
  });

  anime({
      targets: 'img.decoration1',
      translateX: [-20, 0],
      translateY: [20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
      delay: 500
  });
  anime({
      targets: 'span.decoration2',
      translateX: [-20, 0],
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: 300
  });
// anime({
//       targets: 'img.logo',
//       translateX: [-20, 0],
//       opacity: [0, 1],
//       easing: 'easeOutExpo',
//       duration: 1000,
//       delay: anime.stagger(100)
//   });

// ------------------------------------------------------------ //



$('div.impactSection').on('inview', function(event, isInView) {
      if (isInView) {
            console.log('run');

            $('.counter').each(function() {
                  var $this = $(this),
                      countTo = $this.attr('data-count');
                  
                  $({ countNum: $this.text()}).animate({
                    countNum: countTo
                  },
                  {
                    duration: 1000,
                    easing:'linear',
                    step: function() {
                      $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                      $this.text(this.countNum);
                    }
                
                  });  
            });


      }
});




