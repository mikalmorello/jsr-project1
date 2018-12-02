// VARIABLES
const chatButton = document.getElementById('chatButton');
const chatInput = document.getElementById('chatInput');
const chatOutput = document.getElementsByClassName('wall-e-chat__text')[0];
const chatResponse = document.getElementsByClassName('user-chat__text')[0];
const chatResponseContainer = document.getElementsByClassName('user-chat__container')[0];
const chatForm = document.getElementById('chatForm');
const walle = document.getElementsByClassName('wall-e')[0];

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
  'hi',
  'maia'
  
];
let randomResponse = [
  'Well, good morning, and welcome to day 255,642 aboard the Axiom.',
  'M-O?',
  'Waaaaaaaall-E',
  '[stares]',
  'Directive?',
  'umm ok. hey look! I didnt know we had a pool!',
  'Ohh...',
  'Leave the flying to us.',
  '[Shrinks back in surprise]'
];
let eyeLeftContainer = document.getElementById('eye-container-left');
let eyeLeft = document.getElementById('eye-left');
let eyeRightContainer = document.getElementById('eye-container-right');
let eyeRight = document.getElementById('eye-right');

var responseCount = 0;



// FUNCTIONS

// Wall-e Initial Response
(function walleInitialResponse (){
  chatOutput.innerText= 'Eva, is that you?';
})();

// Wall-e Response
function walleResponse (){
  
  responseCount ++ 
  console.log(responseCount);
  
  // Check chat count, keyphrases, 
  if(responseCount === 5){
    chatOutput.innerText= 'I am just a trash collecting robot, leave me alone!';
  } else if(responseCount === 10){
    chatOutput.innerText= 'My processer was not built for this type of stress testing...'; 
  } else if(responseCount > 20){
    chatOutput.innerText= 'Sorry you have exceeded your input limit. I need to recharge my solar battery, try again tomorrow';  
  } else if(keyPhrase) {
    switch(keyPhrase) {
        case 'eva':
            chatOutput.innerText= 'Ee-Vah?';
            walle.classList.remove('slideInUp');
            walle.classList.add('bounce');
            break;
        case 'wall-e':
            chatOutput.innerText= 'Dirrrrr-ect-tivvve?';
            break;
        case 'garbage':
            chatOutput.innerText= 'Where? I love garbage.';
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
        case 'hi':
            chatOutput.innerText= 'Hi, how are you?';
            break;
        case 'maia':
            chatOutput.innerText= 'I love my mai mai';
            break;
        default:
            chatOutput.innerText= 'I do not compute';
    }
  } else {
    let randomNumber = Math.ceil(Math.random() * randomResponse.length);
    chatOutput.innerText= randomResponse[randomNumber];
    console.log('rando is ' + randomNumber);
  }
}

// User Input
function userInput (){
  chatInputMessage = chatInput.value;
  if(chatInputMessage === ''){
    console.log('empty');
    chatResponse.innerText = `I'm speechless`;
  } else {
    chatResponse.innerText = chatInputMessage;
    checkForQuestionMark(chatInputMessage);
  }
  checkForKeyPhrases(chatInputMessage);
}

// Check user input for key terms
function checkForKeyPhrases(message) {
  for (let i = 0; i < keyPhrases.length; i++) {
    if(message.includes(keyPhrases[i])){
      return keyPhrase = keyPhrases[i];
    } else {
      keyPhrase = '';
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

// Check if user message has a question mark
function checkForQuestionMark(message) {
  if(message.includes('?')){
      console.log('has question');
  } 
}

// Get bounding box of SVG element
function svgBoundries (container, element){
  var rect = container.getBoundingClientRect();
  element.style.height = rect.height;
  element.style.width = rect.width;
}

// Rotate eyes a random degree
function rotateEyes(degreeRange){
  let rotation = Math.ceil(Math.random() * degreeRange);
  eyeRight.style.transform = 'rotate(' + rotation + 'deg)';
  eyeLeft.style.transform = 'rotate(-' + rotation + 'deg)';
  console.log(rotation);
}

// EVENTS

// Submit message if user clicks submit button
chatButton.addEventListener('click', function() {
  userInput();
  clearUserInput();
  checkUserChat();
  walleResponse(keyPhrase);
  rotateEyes(20);
});


// Submit message if user hits enter on input
chatInput.addEventListener('keyup', function(event) {
  console.log(event.keyCode);
  if (event.keyCode === 13) {
    event.preventDefault();
    chatButton.click();
  }
});


// Get dynamic boundries of SVG content, apply to parent
svgBoundries(eyeLeftContainer, eyeLeft);
svgBoundries(eyeRightContainer, eyeRight);