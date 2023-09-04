
let quotes=[

   "We were both young when I first saw you",
   "I knew you were trouble when you walked in",
   "So casually cruel in the name of being honest",
"We're dancing 'round the kitchen in the refrigerator light",
"I knew you were trouble when you walked in", 
"But you keep me coming for you",
"I'm a crumpled up piece of paper lying here" ,
"I'm dancing on broken glass in heels too high" ,
"I'm shining like fireworks over your sad, empty town" ,
"And I'm sitting here thinking about all the things that could've been" ,
"And you call me up again just to break me like a promise",
"And you're tossing me the car keys",
"But I keep cruising" ,
"I'm a mirrorball" ,
"And I'm dancing like I've never danced before",
"I'm a mess, but I'm the mess that you wanted" ,
"We're dancing on a fault line" ,
"And I'm spilling wine in the bathtub" ,
"But I can't help thinking about you" ,
"And you call me up again just to break me like a promise",
"My love had been frozen deep inside" ,
"I'm not a princess, this ain't a fairy tale" ,
"And I never saw you coming" ,
"We're dancing with our hands tied" ,
"I knew you were trouble when you walked in" ,
"All the king's horses and all the king's men" ,
"And I got tired of waiting" ,
"But I keep dancing like I'm somebody else" ,
"I'm a red rose growing in a concrete jungle" ,
"I'm a mirrorball, I'm turning like you want me to",
"But I'm not standing in your way"

];


function displayQuote(){

let index=Math.floor(Math.random()*quotes.length);

let div=document.querySelector('#quote');
let quote=`<div class="card">
<img src="favicon.png">
<p>${quotes[index]}</p>
<img src="favicon.png">
</div>

`;
div.innerHTML=quote;

}