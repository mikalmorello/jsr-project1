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


let randomResponse = [
  'Well, good morning, everybody, and welcome to day 255,642 aboard the Axiom.',
  'M-O?',
  'Waaaaaaaall-E',
  '[stares]',
  'Directive?',
  'I didnt know we had a pool!',
  'Ohh...',
  'Leave the flying to us.',
  '[Shrinks back in surprise]'
];

// FUNCTIONS

// Wall-e Initial Response
(function walleInitialResponse (){
  chatOutput.innerText= 'Eva, is that you?';
})();

// Wall-e Response
function walleResponse (){
  // Check keyphrases
  if(keyPhrase){
    switch(keyPhrase) {
        case 'eva':
            chatOutput.innerText= 'Ee-Vah?';
            break;
        case 'wall-e':
            chatOutput.innerText= 'Dirrrrr-ect-tivvve?';
            break;
        case 'garbage':
            chatOutput.innerText= 'Where?';
            break;
        case 'cockroach':
            chatOutput.innerText= 'Yes, my best friend is a cockroach.';
            break;
        case 'plant':
            chatOutput.innerText= 'Give me the plant!';
            break;
        case 'space':
            chatOutput.innerText= 'There is lots of space in space';
            break;
        case 'alone':
            chatOutput.innerText= 'Yes, I am alone, but at least no one is making more trash';
            break;
        case 'name':
            chatOutput.innerText= '[looks at his torso, which has his name on it] W--Wall-E';
            break;
        default:
            chatOutput.innerText= 'I do not compute';
    }
  } else {
    let randomNumber = Math.ceil(Math.random() * randomResponse.length);
    chatOutput.innerText= randomResponse[randomNumber];
  }
}

// User Input
function userInput (){
  chatInputMessage = chatInput.value;
  //console.log(chatInputMessage);
  chatResponse.innerText = chatInputMessage;
  checkForKeyPhrases(chatInputMessage);
}

// Check user input for key terms
function checkForKeyPhrases(message) {
  for (let i = 0; i < keyPhrases.length; i++) {
    //console.log(message);
    //console.log([i]);
    if(message.includes(keyPhrases[i])){
      //console.log(keyPhrases[i]);
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


// Submit message if user clicks submit button
chatButton.addEventListener('click', function() {
  console.log('button clicked');
  userInput();
  clearUserInput();
  checkUserChat();
  walleResponse(keyPhrase);
});


// Submit message if user hits enter on input
chatInput.addEventListener('keyup', function(event) {
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    event.preventDefault();
    chatButton.click();
    console.log('enter hit');
  }
});

// create a function for HAL to respond to Dave's messages with variable logic based upon




