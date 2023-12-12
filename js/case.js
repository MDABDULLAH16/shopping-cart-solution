// updatecase number
function updateCaseNumber(isIncrease) {
  const getCaseInputField = document.getElementById("case-number-field");
  const caseInputFieldString = getCaseInputField.value;
  const caseInputField = parseInt(caseInputFieldString);
  //   const updateInput = caseInputField + 1;
  let newCaseNumber;
  if (isIncrease === true) {
    newCaseNumber = caseInputField + 1;
  } else {
    newCaseNumber = caseInputField - 1;
  }
  getCaseInputField.value = newCaseNumber;
  return newCaseNumber;
}

document.getElementById("btn-case-plus").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  const totalCasePrice = newCaseNumber * 59;
  const getDefoultCasePrice = document.getElementById("case-price");
  getDefoultCasePrice.innerText = totalCasePrice;
  calculateSubTotal();
});

document
  .getElementById("btn-case-minus")
  .addEventListener("click", function () {
    const newCaseNumber = updateCaseNumber(false);
    const getDefoultCasePrice = document.getElementById("case-price");

    const totalCasePrice = newCaseNumber * 59;
    //you cal also use this code
    // const totalCasePricesSting = getDefoultCasePrice.innerText;
    // const totalCasePrice = parseInt(totalCasePricesSting);
    // const newTotal = totalCasePrice - 59;
    // if (totalCasePrice < 59) {
    //   alert("added product");
    //   return;
    // }
    getDefoultCasePrice.innerText = totalCasePrice;
    calculateSubTotal();
  });
