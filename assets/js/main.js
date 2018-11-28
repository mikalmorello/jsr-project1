// VARIABLES
const chatButton = document.getElementById('chatButton');
const chatInput = document.getElementById('chatInput');
const chatOutput = document.getElementsByClassName('wall-e-chat__text')[0];
const chatResponse = document.getElementsByClassName('user-chat__text')[0];
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



// add an event listener to the form to submit message
chatButton.addEventListener('click', function() {
  console.log('button clicked');
  userInput();
  clearUserInput();
  walleResponse();
});


// create a function for HAL to respond to Dave's messages with variable logic based upon
// Dave's inputs

// create a function for HAL to open the chat with "Good morning, Dave"

// invoke the opening message

// Add 



