// character.js

// 1. Welcome message (template literal – allows easy multi-line if you want to expand it later)
alert(`Welcome to the Adventure Realm! 
Let's create your hero!`);

// 2. Get character name
const characterName = prompt(`What is your character's name?`,"Enter a name here");

// 3. Get pet – template literal with natural line break
const pet = prompt(`What kind of pet does ${characterName} have?
(dragon, wolf, robot, unicorn, phoenix, etc.)`);

// 4. Get superpower – template literal with natural line break
const superpower = prompt(`What is ${characterName}'s special superpower?

(Examples: fire breathing, invisibility, super speed, time travel, healing, etc.)`,"Enter a superpower here");

// 5. Likes fighting monsters – confirm with template literal and natural line breaks
const likesFighting = confirm(`Does ${characterName} like fighting monsters? 

Click OK for yes
Click Cancel for no`);

// 6. Fun loading message – template literal
alert(`Gathering magic for ${characterName}...
One moment please... `);

// 7. Final character story – multi-line template literal
alert(`====================================
      Your Adventure Hero
====================================

Name:          ${characterName}
Pet:           ${pet}
Superpower:    ${superpower}
Monster fighter? ${likesFighting ? "Yes" : "No"}

In a faraway land, ${characterName} rides a mighty ${pet},
wielding the incredible power of ${superpower}!
The realm awaits your legend...

====================================`);