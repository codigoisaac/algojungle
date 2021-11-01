// Name generator:
// Randomly pick X words from an array of words and display it.
// Useful for creating project names.

const numberOfWords = 2,
  nameDisplay = document.querySelector("#nameDisplay");

fetch("words.json")
  .then((data) => data.json())
  .then((data) => mixWords(data.words, numberOfWords))
  .catch((error) => console.log(error));

function mixWords(words, numberOfWords) {
  const chosenWords = [];
  // if chosen arr dont yet have all the words,
  // loop through words arr and pick one and add to it

  for (let i = 0; i < numberOfWords; i++) {
    const random = Math.floor(Math.random() * (words.length + 1)),
      chosenWord = words[random];

    chosenWords.push(chosenWord);
  }

  const name = chosenWords.join(" ");

  nameDisplay.textContent = name;
}
