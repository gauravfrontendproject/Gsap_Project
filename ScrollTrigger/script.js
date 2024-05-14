gsap.from("#page1 #box", {
    scale: 0,
    opacity: 0,
    duration: 1,
    rotate: 720,
    scrollTrigger: {
        trigger: "#page1 #box",
        scroller: "body",
        start: "top 60%",
        scrub: 2,
    }
})

gsap.to("#page2 h1", {
    transform: "translateX(-168%)",
    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true
    }
})

gsap.from("#page3 #box", {
    scale: 0,
    duration: 1,
    rotate: 360,
    scrollTrigger: {
        trigger: "#page3 #box",
        scroller: "body",
        scrub: 2,
        top: "top 50%"
    }
})