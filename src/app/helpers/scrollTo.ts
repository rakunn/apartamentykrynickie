export const scrollTo = (htmlElementId) => {
  const element = document.getElementById(htmlElementId);

  if (!element) {
    return;
  }
  element.scrollIntoView({
    behavior: "smooth",
  });
};
