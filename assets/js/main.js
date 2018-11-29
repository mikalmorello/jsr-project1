// VARIABLES
const chatButton = document.getElementById('chatButton');
const chatInput = document.getElementById('chatInput');
const chatOutput = document.getElementsByClassName('wall-e-chat__text')[0];
const chatResponse = document.getElementsByClassName('user-chat__text')[0];
const chatResponseContainer = document.getElementsByClassName('user-chat__container')[0];
const chatForm = document.getElementById('chatForm');

let chatInputMessage = '';


// FUNCTIONS

// Wall-e Initial Response
(function walleInitialResponse (){
  chatOutput.innerText= 'Good morning, Eva';
})();

// Wall-e Response
function walleResponse (){
  chatOutput.innerText= 'testing';
}

// User Input
function userInput (){
  chatInputMessage = chatInput.value;
  console.log(chatInputMessage);
  chatResponse.innerText = chatInputMessage;
}

// Clear User Input
function clearUserInput (){
  chatForm.reset();
  chatInput.focus();
}

// Check if user chat is empty, if not show parent container
function checkUserChat (){
  if(chatResponse.innerHTML != ''){
    console.log('not empty');
    chatResponseContainer.classList.remove('hide');
    chatResponseContainer.classList.add('show');
  }
}

/*// Submit message if user hits enter on input
chatInput.addEventListener('keyup', function(event) {
  console.log(event.keyCode);
  event.preventDefault();
  if (event.keyCode === 13) {
    chatButton.click();
  }
});*/


// Submit message if user clicks submit button
chatButton.addEventListener('click', function() {
  console.log('button clicked');
  userInput();
  clearUserInput();
  walleResponse();
  checkUserChat();
});


// create a function for HAL to respond to Dave's messages with variable logic based upon




