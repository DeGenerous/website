export default function typeWrite(el: HTMLElement, text: string, delay = 50) {
  let aborted = false;
  let timeoutId: ReturnType<typeof setTimeout>;

  const promise = new Promise<void>((resolve) => {
    let i = 0;

    function type() {
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

  return {
    promise,
    abort() {
      aborted = true;
      clearTimeout(timeoutId);
    },
  };
}
