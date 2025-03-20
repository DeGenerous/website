function observeElement(element: Element, toggleClass: string) {
  const observer: IntersectionObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(toggleClass);
      } else {
        entry.target.classList.remove(toggleClass);
      }
    });
  });

  observer.observe(element);
}

export default observeElement;
