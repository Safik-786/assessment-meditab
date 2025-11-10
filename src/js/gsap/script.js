gsap.registerPlugin(ScrollTrigger);
// Step 1: Split text into individual letters dynamically
const textElement = document.querySelector(".scroll-text");
const text = textElement.childNodes[0].nodeValue.trim(); // "Scroll Down"
textElement.innerHTML = text
  .split("")
  .map(char => {
    if (char === " ") return "<span class='letter'>&nbsp;</span>"; // keep spaces
    return `<span class='letter'>${char}</span>`;
  })
  .join("") + ' <span class="arrow">↓</span>';

// Step 2: Animate each letter (fade + slide)
gsap.from(".letter", {
  opacity: 0,
  y: 30,
  delay: 1,
  duration: 0.6,
  ease: "power2.out",
  stagger: 0.15, // Delay between each letter
});

// Step 3: Arrow bounce after text appears
gsap.to(".arrow", {
  opacity: 1,
  y: 10,
  duration: 1,
  delay: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut"
});
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".card-wrapper",
    start: "top top",
    end: "+=400%",  // Enough scroll range
    scrub: 1,
    pin: true,
    markers: false
  }
});

// Card 1: Slight left → move up → fade out
tl.to(".card-1", {

  duration: 0.3,
  ease: "power1.out"
})
  .to(".card-1", {
    x: 0,
    y: -800,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  })

  // 🔹 Card 2: Grow to full width + scale → then slide up
  .to(".card-2", {
    scale: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "<0.3") // overlaps slightly with previous card's exit
  .to(".card-2", {

    duration: 0.3,
    ease: "power1.out"
  })
  .to(".card-2", {
    x: 0,
    y: -800,
    opacity: 0,
    scale: 0.95, // shrink slightly as it leaves
    duration: 1,
    ease: "power2.inOut"
  })

  // 🔹 Card 3: Grow to full width + scale → then slide up
  .to(".card-3", {
    scale: 1,
    y: 0,
    duration: 0.6,
    ease: "power2.out"
  }, "<0.3")
  .to(".card-3", {

    duration: 0.3,
    ease: "power1.out"
  })
  .to(".card-3", {
    x: 0,
    y: -800,
    opacity: 0,
    duration: 1,
    ease: "power2.inOut"
  });

