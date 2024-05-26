Shery.mouseFollower();
Shery.makeMagnet(".magnet");
// Shery.hoverWithMediaCricle(".hovr", { videos: ["./0.mp4", "./2.mp4", "./3.mp4"],});
Shery.hoverWithMediaCircle(".hovr", {
    videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
  });

  // gsap.to(".leftFelem", {
  //   scrollTrigger: {
  //       trigger: "#featuredImages",
  //       pin: true,
  //       start: "top top",
  //       end: "bottom bottom",
  //       endTrigger: ".last",
  //       scrub: 1,
  //   },
  //   y: "-300",
  //   ease: power1
  // });

  gsap.to(".leftFelem", {
    scrollTrigger: {
      trigger: "#featuredImages",
      pin: true,
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: Power1,
  });

  let sections = document.querySelectorAll(".leftFelem");
Shery.imageEffect(".images", {
  style: 2,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});