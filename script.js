var cross = document.querySelector("#full i");
var menu = document.querySelector("#nav i");

tl = gsap.timeline();
tl.pause();
menu.addEventListener("click", () => {
  tl.to("#box", {
    right: "0%",
    duration: 1,
    stagger: 1,
    yoyo: true,
  });
  tl.from("h4", {
    x: 400,
    duration: 0.4,
    stagger: 1,
    opacity: 0,
    yoyo: true,
  });
  tl.resume();
});

cross.addEventListener("click", () => {
  tl.to("h4", {
    x: "600",
    duration: 0.5,
    stagger: 1,
    opacity: 0,
    yoyo: true,
  });
  tl.to("#box", {
    x: "600",
    duration: 0.1,
    stagger: 1,
    yoyo: true,
  });
  tl.reverse();
});
