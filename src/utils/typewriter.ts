function typeWrite(element: HTMLElement, text: string, delay: number = 100): void {
  let index = 0;

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else {
      element.style.animation = 'none'; // Stop animation after typing
      element.style.border = 'none'; // Remove the blinking cursor effect
    }
  }

  type();
}

export default typeWrite;