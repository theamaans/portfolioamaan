var tl = gsap.timeline();
tl
.to("#fs",{
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})

.to("#elem",{
    height: "100%",
    duration: 1,
    delay: -2,
    ease: Expo.easeInOut
})

.to("#elem",{
    height: 0,
    duration: 1,
    ease: Circ.easeInOut
})
.to("#loader-text",{
    height: 0,
    duration: 2,
    ease: Circ.easeInOut
})

// .from(".nlink",{
//     stagger: .1,
//     y: 10,
//     duration: 2,
//     ease: Power1,
//     opacity: 0
// })







