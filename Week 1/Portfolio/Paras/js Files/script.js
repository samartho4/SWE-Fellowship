document.addEventListener('DOMContentLoaded', () => {
    const letters = document.querySelectorAll('.letter');
  
    if (letters.length > 0) { // Check if there are letters
      function fadeLettersIn() {
        for (const letter of letters) {
          letter.style.opacity = 0; // Set opacity to 0 for each letter
        }
  
        setTimeout(() => {
          let i = 0;
          for (const letter of letters) {
            setTimeout(() => {
              letter.style.opacity = 1;
            }, 80 * i);
            i++;
          }
        }, 600); // the whole above code will take 2seconds to get executed.....
      }
  
      fadeLettersIn(); // Initial animation
  
      // Call fadeLettersIn again after a delay for continuous loop
      setInterval(fadeLettersIn, 3000); // Adjust delay as needed (in milliseconds)
    } else {
      console.error("No elements with class '.letter' found!");
    }
  });
  
  
document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.querySelector('.h1');

    h1.addEventListener('mouseover', () => {
        h1.style.color = 'red';
    });

    h1.addEventListener('mouseout', () => {
        h1.style.color = 'black';
    });
});



