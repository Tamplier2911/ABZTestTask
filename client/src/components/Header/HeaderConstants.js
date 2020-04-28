import jump from "jump.js";

const jumper = (target, offset) => {
  return target
    ? (e) => {
        e.preventDefault();
        jump(target, { offset: offset || 0 });
      }
    : (e) => e.preventDefault();
};

const headerConstants = [
  {
    path: "/",
    text: "About me",
    action: jumper("#about"),
  },
  { path: "/", text: "Relationships", action: jumper() },
  { path: "/", text: "Requirements", action: jumper() },
  {
    path: "/",
    text: "Users",
    action: jumper("#users", 100),
  },
  {
    path: "/",
    text: "Sign Up",
    action: jumper("#register", 100),
  },
];

export default headerConstants;
