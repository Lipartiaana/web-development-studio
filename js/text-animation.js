const texts = ["Create Website", "Web Studio"];
const animationDuration = 2000;
const textElement = document.querySelector(".animated-text");

function animateText() {
  let currentIndex = 0;

  function typeText() {
    const currentText = texts[currentIndex];
    let currentTextIndex = 0;

    function typeCharacter() {
      if (currentTextIndex < currentText.length) {
        textElement.textContent += currentText[currentTextIndex];
        currentTextIndex++;
        setTimeout(typeCharacter, animationDuration / currentText.length);
      } else {
        setTimeout(clearText, animationDuration);
      }
    }

    typeCharacter();
  }

  function clearText() {
    const currentText = texts[currentIndex];
    let currentTextIndex = currentText.length - 1;

    function clearCharacter() {
      if (currentTextIndex >= 0) {
        textElement.textContent = currentText.substring(0, currentTextIndex);
        currentTextIndex--;
        setTimeout(clearCharacter, animationDuration / currentText.length);
      } else {
        currentIndex = (currentIndex + 1) % texts.length;
        setTimeout(typeText, animationDuration / texts.length);
      }
    }

    clearCharacter();
  }

  typeText();
}

animateText();
