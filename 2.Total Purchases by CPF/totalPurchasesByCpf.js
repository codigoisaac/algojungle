// JavaScript - usando JSON local como exemplo

/* OBS:
  Alguns dos CPF's providos pelo JSON de exemplo no exercício estão sem formatação correta de CPF (sem pontos e traço), então antes de trabalhar com os dados foi preciso formatá-los.
  Aqui eu realizei a formatação dos CPF's usando um plugin (citado mais abaixo).
*/

fetch("purchases.json")
  .then((response) => response.json())
  .then((responseJson) => setPurchaseTotals(responseJson))
  .catch((response) => console.log(response));

function setPurchaseTotals(purchases) {
  //* formatar cpfs
  // usando o plugin jSuites JavaScript Mask ( https://jsuites.net/v4/javascript-mask )
  purchases.map((purchase) => {
    purchase.cpf = jSuites.mask.run(purchase.cpf, "000.000.000-00");
  });

  //* calcular total das compras de cada cpf
  let totals = {}; // objeto no formato ' cpf: totalDasCompras '

  purchases.forEach((i) => {
    if (i.cpf in totals) {
      totals[i.cpf] += i.amount;
    } else {
      totals[i.cpf] = i.amount;
    }
  });

  console.log(totals);

  /* RESULTADO:

  143.824.350-21: 80.9
  797.853.370-06: 53.31999999999999
  888.354.140-59: 226.1

  */
}
