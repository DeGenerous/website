const activeTypewriters = new WeakMap<HTMLElement, TypewriterInstance>();

export default function typeWrite(
  el: HTMLElement,
  text: string,
  delay = 50,
): TypewriterInstance & Promise<void> {
  if (!el) return Promise.resolve() as TypewriterInstance & Promise<void>;
  // Abort any active typewriter on this element
  activeTypewriters.get(el)?.abort();

  let aborted = false;
  let timeoutId: ReturnType<typeof setTimeout>;

  const promise = new Promise<void>((resolve) => {
    let i = 0;

    function type() {
      el.style.opacity = "1"; // Ensure element is visible

      // Respect reduced motion globally
      if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
        el.textContent = text;
        return resolve();
      }

      if (aborted) return resolve();

      if (i < text.length) {
        el.textContent = text.slice(0, ++i);
        timeoutId = setTimeout(type, delay);
      } else {
        resolve();
      }
    }

    el.textContent = "";
    type();
  });

  const instance: TypewriterInstance & Promise<void> = Object.assign(promise, {
    promise,
    abort() {
      aborted = true;
      clearTimeout(timeoutId);
    },
  });

  // Save as active for this element
  activeTypewriters.set(el, instance);

  return instance;
}
