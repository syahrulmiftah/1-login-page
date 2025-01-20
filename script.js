document.addEventListener("DOMContentLoaded", function () {
  // const indicator = gsap.utils.toArray(".progress-bar")

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.25 }).fromTo(
    ".progress-bar",
    {
      width: "0rem",
    },
    {
      duration: 3.75,
      width: "3rem",
      ease: "linear",
      stagger: 5,
    }
  );
});
