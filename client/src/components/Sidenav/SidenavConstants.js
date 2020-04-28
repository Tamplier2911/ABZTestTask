import jump from "jump.js";

const jumper = (target, offset) => {
  return target
    ? (e) => {
        e.preventDefault();
        jump(target, { offset: offset || 0 });
      }
    : (e) => e.preventDefault();
};

const sidenavConstants = {
  b1: [
    {
      id: "side01",
      path: "/",
      text: "About me",
      action: jumper("#about"),
    },
    {
      id: "side02",
      path: "/",
      text: "Relationships",
      action: jumper(),
    },
    {
      id: "side03",
      path: "/",
      text: "Users",
      action: jumper("#users", 100),
    },
    {
      id: "side04",
      path: "/",
      text: "Sign Up",
      action: jumper("#register", 100),
    },
    {
      id: "side05",
      path: "/",
      text: "Terms and Conditions",
      action: jumper(),
    },
  ],
  b2: [
    {
      id: "side06",
      path: "/",
      text: "How it works",
      action: jumper(),
    },
    {
      id: "side07",
      path: "/",
      text: "Partnership",
      action: jumper(),
    },
    {
      id: "side08",
      path: "/",
      text: "Help",
      action: jumper(),
    },
    {
      id: "side09",
      path: "/",
      text: "Leave testimonial",
      action: jumper(),
    },
    {
      id: "side10",
      path: "/",
      text: "Contact us",
      action: jumper(),
    },
  ],
  b3: [
    {
      id: "side11",
      path: "/",
      text: "Articles",
      action: jumper(),
    },
    {
      id: "side12",
      path: "/",
      text: "Our news",
      action: jumper(),
    },
    {
      id: "side13",
      path: "/",
      text: "Testimonials",
      action: jumper(),
    },
    {
      id: "side14",
      path: "/",
      text: "Licences",
      action: jumper(),
    },
    {
      id: "side15",
      path: "/",
      text: "Privacy Policy",
      action: jumper(),
    },
  ],
};

export default sidenavConstants;
