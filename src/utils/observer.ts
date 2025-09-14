function observeElement(
  element: Element,
  toggleClass: Nullable<string> = null,
  customFunction: () => void = () => {},
  resetFunction: () => void = () => {},
  options: IntersectionObserverInit = {
    root: null,
    rootMargin: "-15% 0px -15% 0px", // middle band
    threshold: [0, 0.25, 0.5, 0.75, 1],
  },
  once: boolean = false
) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (toggleClass) entry.target.classList.add(toggleClass);
        customFunction();
        if (once) observer.unobserve(entry.target);
      } else {
        // Only toggle off and call reset when not in "once" mode
        if (!once) {
          if (toggleClass) entry.target.classList.remove(toggleClass);
          resetFunction();
        }
      }
    });
  }, options);

  observer.observe(element);
  return () => observer.unobserve(element); // disposer
}

export default observeElement;
