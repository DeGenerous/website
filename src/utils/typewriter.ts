function typeWrite(element: HTMLElement, text: string, delay: number = 50): void {
  element.innerHTML = ""; // Clear any existing content
  element.classList.add('blink-caret'); // Add typewriter class for styling

  let index = 0;
  let content = '';

  function type() {
    if (index < text.length) {
      content = text.slice(0, index + 1);
      element.textContent = content;
      index++;
      setTimeout(type, delay);
    } else {
      element.classList.remove('blink-caret'); // Remove typewriter class after typing is done
    }
  }

  type();
}

export default typeWrite;