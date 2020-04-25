const getClient = (width) =>
  width <= 425
    ? "mobile"
    : width <= 768
    ? "tablet"
    : width > 768
    ? "desktop"
    : "desktop";

export default getClient;
