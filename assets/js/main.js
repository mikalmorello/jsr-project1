// VARIABLES
const chatButton = document.getElementById('chatButton');
const chatInput = document.getElementById('chatInput');
const chatOutput = document.getElementsByClassName('wall-e-chat__text')[0];
const chatResponse = document.getElementsByClassName('user-chat__text')[0];
const chatResponseContainer = document.getElementsByClassName('user-chat__container')[0];
const chatForm = document.getElementById('chatForm');

let chatInputMessage = '';
let keyPhrase = '';

let keyPhrases = [
  'eva',
  'wall-e',
  'garbage',
  'cockroach',
  'plant',
  'space',
  'alone',
  'name',
];

// FUNCTIONS

// Wall-e Initial Response
(function walleInitialResponse (){
  chatOutput.innerText= 'Eva, is that you?';
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
  checkForKeyPhrases(chatInputMessage);
}

// Check user input for key terms
function checkForKeyPhrases(message) {
  for (let i = 0; i < keyPhrases.length; i++) {
    console.log(message);
    console.log([i]);
    if(message.includes(keyPhrases[i])){
      console.log(keyPhrases[i]);
      return keyPhrase = keyPhrases[i];
    }
  }
}

// Clear User Input
function clearUserInput (){
  chatForm.reset();
  chatInput.focus();
}

// Check if user chat is empty, if not show parent container
function checkUserChat (){
  if(chatResponse.innerHTML != ''){
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
  console.log('key phrase is: ' + keyPhrase); 
});


// create a function for HAL to respond to Dave's messages with variable logic based upon




