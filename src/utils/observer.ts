function observeElement(
  element: Element,
  toggleClass: Nullable<string> = null,
  customFunction: () => void = () => {},
  resetFunction: () => void = () => {},
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "-40% 0px -40% 0px", // middle band
    threshold: [0, 0.25, 0.5, 0.75, 1],
  }
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (toggleClass) entry.target.classList.add(toggleClass);
        customFunction();
      } else {
        if (toggleClass) entry.target.classList.remove(toggleClass);
        resetFunction();
        console.log('unsobserve')
        console.log(entry)
      }
    });
  }, options);

  observer.observe(element);
  return () => observer.unobserve(element); // disposer
}

export default observeElement;
