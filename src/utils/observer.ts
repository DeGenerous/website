function observeElement(
  element: Element,
  toggleClass: Nullable<string> = null,
  customFunction: Function = () => {},
  resetFunction: Function = () => {},
) {
  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (toggleClass) entry.target.classList.add(toggleClass);
          customFunction();
        } else {
          if (toggleClass) entry.target.classList.remove(toggleClass);
          resetFunction();
        }
      });
    },
  );

  observer.observe(element);
}

export default observeElement;
