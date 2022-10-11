import { gsap, Expo, Linear, Power0 } from "gsap"

const windowGlobal = typeof window !== "undefined" && window

export const initialAnimation = () => {
  const tl = gsap.timeline()

  tl.fromTo(
    [".circle-one"],
    4,
    { y: 500, opacity: 0, ease: Expo.easeInOut },
    { y: 0, opacity: 1, ease: Expo.easeInOut }
  )

  tl.fromTo(
    [".circle-two", ".circle-three"],
    4,
    { y: 500, opacity: 0, ease: Expo.easeInOut },
    { y: 0, opacity: 0.3, ease: Expo.easeInOut },
    "-=3.9"
  )

  if (windowGlobal.innerWidth > 600) {
    tl.to([".circle-one"], 6, { x: 300, ease: Expo.easeInOut }, "-=2")
    tl.to(
      [".circle-two", ".circle-three"],
      6,
      { x: 300, ease: Expo.easeInOut },
      "-=5.9"
    )
  } else {
    tl.to([".circle-one"], 6, { y: -150, ease: Expo.easeInOut }, "-=2")
    tl.to(
      [".circle-two", ".circle-three"],
      6,
      { y: -150, ease: Expo.easeInOut },
      "-=5.9"
    )
  }

  gsap.fromTo(
    [".triangle-one"],
    7,
    {
      rotation: -10,
    },
    {
      rotation: 10,
      repeat: -1,
      yoyo: true,
      ease: Power0.easeNone,
    }
  )

  gsap.fromTo(
    [".square-one"],
    7,
    {
      rotation: 35,
    },
    {
      rotation: 55,
      repeat: -1,
      yoyo: true,
      ease: Power0.easeNone,
    }
  )
  gsap.fromTo(
    [".triangle-two"],
    7,
    {
      rotation: -15,
    },
    { rotation: 15, repeat: -1, yoyo: true, ease: Power0.easeNone }
  )

  gsap.fromTo(
    [".triangle-three"],
    7,
    {
      rotation: -20,
    },
    { rotation: 20, repeat: -1, yoyo: true, ease: Power0.easeNone }
  )

  gsap.fromTo(
    [".square-two"],
    7,
    {
      rotation: 30,
    },
    { rotation: 60, repeat: -1, yoyo: true, ease: Power0.easeNone }
  )

  gsap.fromTo(
    [".square-three"],
    7,
    {
      rotation: 25,
    },
    { rotation: 65, repeat: -1, yoyo: true, ease: Power0.easeNone }
  )

  tl.fromTo(
    [".overlay", ".blobs"],
    2,
    { y: 900, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=2"
  )

  tl.fromTo(
    [".menu-btn", "#fp-nav", ".theme-toggler"],
    1,
    { y: 20, opacity: 0 },
    { y: 0, opacity: 1 },
    "-=0.5"
  )

  gsap.to(".circle-one", 55, {
    rotation: 2160,
    ease: Linear.easeNone,
    repeat: -1,
    paused: false,
  })

  gsap.to(".circle-two", 44, {
    rotation: 2160,
    ease: Linear.easeNone,
    repeat: -1,
    paused: false,
  })

  gsap.to(".circle-three", 40, {
    rotation: 2160,
    ease: Linear.easeNone,
    repeat: -1,
    paused: false,
  })
}

export const afterLoaded = () => {
  const tl = gsap.timeline()

  tl.fromTo(".title", 0.6, { x: -30, opacity: 0 }, { x: 0, opacity: 1 })
  tl.fromTo(
    ".byline",
    0.6,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 },
    "-=0.4"
  )
  tl.fromTo(
    ".ingress",
    0.6,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 },
    "-=0.4"
  )
}

export const whenLeaving = () => {
  gsap.fromTo(
    [".title", ".byline", ".ingress"],
    0.3,
    { x: 0, opacity: 1 },
    { x: -30, opacity: 0 }
  )
}

export const afterRendering = () => {
  const tl = gsap.timeline()

  tl.fromTo(".title", 0.6, { x: -30, opacity: 0 }, { x: 0, opacity: 1 }, "8.5")
  tl.fromTo(
    ".byline",
    0.6,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 },
    "-=0.4"
  )
  tl.fromTo(
    ".ingress",
    0.6,
    { x: -30, opacity: 0 },
    { x: 0, opacity: 1 },
    "-=0.4"
  )
}

export const introduceBurgerMenu = () => {
  const tl = gsap.timeline()

  tl.fromTo(".menu-btn", 1, { y: 20, opacity: 0 }, { y: 0, opacity: 1 })
}
