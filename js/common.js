function getTextTotalElementById(elementId) {
  const getTextTotalElement = document.getElementById(elementId);
  const textTotalElementString = getTextTotalElement.innerText;
  const textTotalElementById = parseInt(textTotalElementString);
  return textTotalElementById;
}
//set sub total element innertext
function setTextElementById(elementId, value) {
  const getSubTotal = document.getElementById(elementId);
  getSubTotal.innerText = value;
}

//calculate sub total
function calculateSubTotal() {
  const newPhoneTotal = getTextTotalElementById("phone-price");
  const newCaseTotal = getTextTotalElementById("case-price");
  const currenSubtotal = newCaseTotal + newPhoneTotal;
  setTextElementById("sub-total", currenSubtotal);
  //   const getSubTotal = document.getElementById("sub-total");
  //   getSubTotal.innerText = subtotal;

  //tex amount
  const texAmountString = (currenSubtotal * 0.1).toFixed(2);
  const texAmount = parseFloat(texAmountString);
  setTextElementById("tex", texAmount);
  const finalAmount = currenSubtotal + texAmount;
  setTextElementById("final-total", finalAmount);
}
