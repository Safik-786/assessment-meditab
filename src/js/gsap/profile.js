// 1️⃣ Animate profile card on load
gsap.to(".profile-card", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "bounce.out",
});

// 2️⃣ Hover effect on card
const card = document.querySelector(".profile-card");
card.addEventListener("mouseenter", () => {
    gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
});
card.addEventListener("mouseleave", () => {
    gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.inOut" });
});

// 3️⃣ Interactive SVG String Animation
const svg = document.querySelector("svg");
const string = document.getElementById("string");

let baseY = 50; // Original Y of the curve
let mouseActive = false;

svg.addEventListener("mousemove", (e) => {
    mouseActive = true;

    // Get mouse position relative to SVG
    const rect = svg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Limit the wave movement
    const clampedY = Math.max(20, Math.min(80, y));

    // Animate the middle control point to follow mouse Y
    gsap.to(string, {
        attr: { d: `M 20 50 Q 200 ${clampedY} 380 50` },
        duration: 0.3,
        ease: "power2.out",
    });
});

svg.addEventListener("mouseleave", () => {
    mouseActive = false;

    // Snap back with vibration (small oscillation)
    gsap.to(string, {
        attr: { d: `M 20 50 Q 200 50 380 50` },
        duration: 1,
        ease: "elastic.out(1, 0.3)", // gives "vibrate" effect
    });
});