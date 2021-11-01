// Name generator:
// Randomly pick X words from an array of words and display it.
// Useful for creating project names.

const numberOfWords = 2,
  staticWord = "samsara",
  nameDisplay = document.querySelector("#nameDisplay");

fetch("words.json")
  .then((data) => data.json())
  .then((data) => mixWords(data.words, numberOfWords))
  .catch((error) => console.log(error));

function mixWords(words, numberOfWords, staticWord = undefined) {
  const chosenWords = [],
    numberOfWordsToChoose =
      staticWord == undefined ? numberOfWords : numberOfWords - 1;

  for (let i = 0; i < numberOfWordsToChoose; i++) {
    const random = Math.floor(Math.random() * (words.length + 1)),
      chosenWord = words[random];

    chosenWords.push(chosenWord);
  }

  const name = staticWord
    ? staticWord + " " + chosenWords.join(" ")
    : chosenWords.join(" ");

  nameDisplay.textContent = name;
}
