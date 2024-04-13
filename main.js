// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code is here below:
document.addEventListener('DOMContentLoaded', () => {
  const errorModal = document.getElementById('error-modal');
  const errorMessage = document.getElementById('error-message');
  const hearts = document.querySelectorAll('.like-glyph');

  errorModal.classList.add('hidden');

  hearts.forEach(heart => {
     heart.addEventListener('click', () => {
       if (heart.classList.contains('activated-heart')) {
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
       }
       else {
        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART;
            heart.classList.add('activated-heart');
          })
          .catch(error => {
             errorMessage.textContent = error;
             errorModal.classList.add('hidden');
              setTimeout(() => {
                errorModal.classList.add('hidden');
              },3000);
          });
       }
     });
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
