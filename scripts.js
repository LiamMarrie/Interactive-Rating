'use strict';

const ratingButtons = document.querySelectorAll('.rating');

ratingButtons.forEach(button => {
  button.addEventListener('click', function() {
    const ratingValue = this.value;
    console.log(`Rating value: ${ratingValue}/5`);

    const url = `thankyou.html?rating=${ratingValue}`;
    window.location.href = url;
  });
});