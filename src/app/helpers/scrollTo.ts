export const scrollTo = (htmlElementId: string) => {
  const element = document.getElementById(htmlElementId);

  if (!element) {
    return;
  }
  element.scrollIntoView({
    behavior: "smooth",
  });
};
