
var topics = ["HTML", "CSS", "Git", "JavaScript", "Web API's"];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
    for (let i = 0; i < topics.length; i++) {
    console.log(topics[i]);
 }
};

function selectTopic(){
if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
} else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
} else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
} else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
} else if (randomTopic === "Web API's") {
    console.log("Let's study Web API's!");
} else {
  console.log('Please try again!');
} 
};

console.log(`Here are the opics we learned through Prework:`);
listTopics();
console.log(`Which topic should we study first?`)
selectTopic();