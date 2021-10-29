// order by age ascending
// if age is equal, order by name ascending

// JavaScript - usando JSON local como exemplo

fetch("peopleAge.json")
  .then((response) => response.json())
  .then((responseJson) => orderPeople(responseJson))
  .catch((response) => console.log(response));

function orderPeople(peopleArray) {
  let ordered = peopleArray;
  return ordered.sort((a, b) =>
    a.idade == b.idade ? (a.nome < b.nome ? -1 : 1) : a.idade - b.idade
  );
}
