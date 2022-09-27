// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

//creating a pointer to all like icon nodes
const likeIcon = document.querySelectorAll(".like-glyph")
const errorModal = document.querySelector("#modal")
//use the foreach iterator to add event listeners to each icon:

likeIcon.forEach((element) => console.log(element))

likeIcon.forEach(element => element.addEventListener('click', (e) => {
  mimicServerCall()
  .then(() =>{
    console.log(e.target.textContent)
    if(e.target.textContent == '♡'){
      e.target.textContent = FULL_HEART;
      e.target.className = "activated-heart";
      console.log(e.target.textContent)
    }
    else{
      e.target.textContent = EMPTY_HEART;
      e.target.className = ""
    }
  })
  .catch((res) =>{
    errorModal.className = "";
    console.log(errorModal.querySelector('p'))
    errorModal.querySelector('p').textContent = res;
    setTimeout(() => errorModal.className = "hidden", 3000)
    })
}))


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
