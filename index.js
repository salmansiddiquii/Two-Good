function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);


  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },

    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });


  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();

}

locomotiveAnimation();


gsap.to("#nav-part1 svg", {
  transform: 'translateY(-100%)',
  scrollTrigger: {
    trigger: ".page1",
    scroller: "#main",
    markers: true,
    start: "top 0",
    end: "top -5%",
    scrub: true,
  }
});


gsap.to("#navPart2 #links", {
  transform: 'translateY(-100%)',
  opacity: 0,
  scrollTrigger: {
    trigger: ".page1",
    scroller: "#main",
    markers: true,
    start: "top 0",
    end: "top -5%",
    scrub: true,
  }
});



function videoConAnimation() {


  const videoCon = document.querySelector("#video-container");
  const playBtn = document.querySelector("#play");
  videoCon.addEventListener("mouseenter", function () {

    gsap.to(playBtn, {
      transform: 'translate(-50%, -50%) scale(1)',
      scale: 1,
      opacity: 1
    })
  })

  videoCon.addEventListener("mouseleave", function () {

    gsap.to(playBtn, {
      scale: 0,
      opacity: 0
    })
  })


  videoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    })
  })


}

videoConAnimation();




/*
function AnimateButton() {
  const btn = document.querySelector("#play");

  btn.addEventListener("click", function () {
    btn.classList.add(".animatebtn");

    setTimeout(() => {
      btn.classList.remove(".animatebtn");
    }, 100);
  })

}

AnimateButton();
*/


/*
function newspaperSpinning() {
  const newspaperSpinning = [
    { transform: "rotate(0) scale(1)" },
    { transform: "rotate(360deg) scale(0)" },
  ];

  const newspaperTiming = {
    duration: 2000,
    iterations: 1,
  };

  const newspaper = document.querySelector(".newspaper");

  newspaper.addEventListener("click", () => {
    newspaper.animate(newspaperSpinning, newspaperTiming);
  });
}

newspaperSpinning();
*/


function animateDets() {
  const dets = document.querySelectorAll(".dets");

  dets.forEach((det) => {
    det.addEventListener("mouseover", function () {
      det.animate(
        [
          { padding: "0px", backgroundColor: "rgb(254, 213, 255)" },
          { padding: "100px", backgroundColor: "white" },
        ],
        {
          duration: 500, // Animation duration in milliseconds
          fill: "forwards", // Keeps the final animation state
        }
      );
    });

    det.addEventListener("mouseout", function () {
      det.animate(
        [
          { padding: "100px", backgroundColor: "white" },
          { padding: "0px", backgroundColor: "rgb(254, 213, 255)" },
        ],
        {
          duration: 500, // Animation duration in milliseconds
          fill: "forwards", // Keeps the final animation state
        }
      );
    });
  });
}

animateDets();







gsap.from(".page1 h1", {
  y: 100,
  opacity: 0,
  delay: 0.5,
  duration: 0.9,
  stagger: 0.3,
});

gsap.from(".page1 #video-container", {
  scale: 0.9,
  opacity: 0,
  delay: 1.3,
  duration: 0.5,
})


function cursorAnimation() {

  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y
    })
  })


  const childElements = document.querySelectorAll(".child");


  childElements.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(1)'
      });
    });

    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: 'translate(-50%, -50%) scale(0)'
      });
    });
  });

}
cursorAnimation();






